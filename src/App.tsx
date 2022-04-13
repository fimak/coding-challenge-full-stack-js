import React, { ChangeEvent, useEffect, useState } from 'react';
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
  const imageList: FeedsItem[] | undefined = useAppSelector(galleryImageSelector)
  const status = useAppSelector(statusSelector)
  const [page, setPage] = useState(1)
  const [pageLimit, setPageLimit] = useState(10)
  const isFetching = status === 'pending'

  const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    dispatch(getImages({ limit: pageLimit, page }))
  }, [dispatch, page, pageLimit])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ textAlign: 'center' }}>Hello world</Typography>
        <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Images"
              inputProps={{ 'aria-label': 'search images' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <ImageGallery images={imageList} loading={isFetching} />

          <Stack spacing={2}>
            <Pagination
              color="primary"
              page={page}
              count={pageLimit}
              onChange={handlePageChange}
            />
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default App;
