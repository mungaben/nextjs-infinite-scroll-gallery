// actions/getImages.ts
'use server';

import { TImageType } from '../type/image';

export const getImages = async (offset: number, limit: number): Promise< TImageType[]> => {
  try {
    const url = `https://picsum.photos/v2/list?page=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error(`An error happened: ${error}`);
  }
};