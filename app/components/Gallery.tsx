'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { getImages } from '@/actions/GetImages';

import ImageCard from './ImageCard';
import { TImageType } from '@/type/image';


const IMAGES_PER_PAGE = 10;

interface GalleryProps {
  initialImages: TImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ initialImages }) => {
  const [images, setImages] = useState<TImageType[]>(initialImages);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();

  const loadMoreImages = async () => {
    setLoading(true);
    try {
      const newImages = await getImages(page, IMAGES_PER_PAGE);
      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error loading more images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inView && !loading) {
      loadMoreImages();
    }
  }, [inView]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      <div ref={ref} className="h-20 flex items-center justify-center">
        {loading && <p className="text-gray-600">Loading...</p>}
      </div>
    </div>
  );
};

export default Gallery;