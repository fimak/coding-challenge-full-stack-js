import React, { FC } from 'react';
import { Box, Grid, ImageList, ImageListItem, Skeleton } from '@mui/material';
import { itemData } from '../constants';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

interface Props {
  images: any;
  loading: boolean;
}

const ImageGallery: FC<Props> = ({ images, loading }) => {
  return (
    <>
      {(loading || !images) ? (
        <Grid container gap="4px" wrap="wrap" sx={{ width: 500 }}>
          {[1, 2, 3, 4, 5, 6].map((index) =>
            <Box key={index} sx={{ width: 248 }}>
              <Skeleton variant="rectangular" width={248} height={246} />
            </Box>
          )}
        </Grid>
      ) : (images && (
        <ImageList
          sx={{ width: 500 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {images.map((item: any, idx: number) => (
            <ImageListItem key={item.media.m} cols={itemData?.[idx]?.cols || 1} rows={itemData?.[idx]?.rows || 1}>
              <img
                {...srcset(item.media.m, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      ))}
    </>
  )
}

export default ImageGallery;
