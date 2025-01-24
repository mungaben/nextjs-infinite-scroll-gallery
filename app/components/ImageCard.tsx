// components/ImageCard.tsx
import { motion } from 'framer-motion';

import { TImageType } from '../../type/image';

type ImageCardProps = {
  image: TImageType;
};

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img
        src={image.download_url}
        alt={image.author}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <p className="text-sm text-gray-700">{image.author}</p>
      </div>
    </motion.div>
  );
};

export default ImageCard;