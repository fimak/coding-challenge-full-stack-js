import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Photo {
  title: string;
  link: string;
  media: { m: string };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

const url = `https://api.flickr.com/services/feeds/photos_public.gne`;

export const getPublicPhotos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const format = 'json';
    const tags = req.query.tags;

    const response: AxiosResponse = await axios.get(url, { params: { nojsoncallback: 1, format, tags }});
    const body: Array<Photo> = response.data;

    return res.status(200).json(body);
  } catch (error) {
    console.log(error);
  }
};

export default getPublicPhotos;
