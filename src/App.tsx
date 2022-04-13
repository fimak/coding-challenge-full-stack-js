import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  Box,
  Container,
  CssBaseline, Divider,
  IconButton,
  InputBase, Pagination,
  Paper, Stack,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ImageGallery from './components/ImageGallery';
import { useAppDispatch, useAppSelector } from './hooks';
import { getImages } from './state/feeds/feeds.actions';
import { galleryImageSelector, statusSelector } from './state/feeds/feeds.selector';
import { FeedsItem } from './state/feeds/feeds.types';

function App() {
  const dispatch = useAppDispatch()
  const [tags, setTags] = useState('');
  const imageList: FeedsItem[] | undefined = useAppSelector(galleryImageSelector);
  const status = useAppSelector(statusSelector);
  const [page, setPage] = useState(1);
  const isFetching = status === 'pending';
  const isError = status === 'error';

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  }
  const handleSubmit = (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getImages(tags));
  }
  const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  useEffect(() => {
    dispatch(getImages(''))
  }, [dispatch])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ textAlign: 'center' }}>Hello world</Typography>
        <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={handleSubmit}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Images"
              inputProps={{ 'aria-label': 'search images' }}
              value={tags}
              onChange={handleInputChange}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onSubmit={handleSubmit}>
              <SearchIcon />
            </IconButton>
          </Paper>

          {isError ? 'Some Error' : <ImageGallery images={imageList} loading={isFetching} />}

          <Stack spacing={2}>
            <Pagination
              color="primary"
              page={page}
              count={10}
              onChange={handlePageChange}
            />
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default App;
