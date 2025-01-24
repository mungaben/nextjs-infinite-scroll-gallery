import Image from "next/image";
import type { Metadata } from 'next';
import { getImages } from "@/actions/GetImages";
import Gallery from "./components/Gallery";

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore our stunning gallery of images.',
  openGraph: {
    title: 'Gallery | Next.js Gallery App',
    description: 'Explore our stunning gallery of images.',
    images: [
      {
        url: 'https://mungatech.vercel.app/og-image.png', // Replace with your gallery Open Graph image
        width: 1200,
        height: 630,
        alt: 'Gallery | Next.js Gallery App',
      },
    ],
  },
};
const INITIAL_IMAGES_COUNT = 10;

export default async function Home() {
  const initialImages = await getImages(1, INITIAL_IMAGES_COUNT);

  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">Infinite Scroll Gallery</h1>
      <Gallery initialImages={initialImages} />
    </main>
  );
}