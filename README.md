# Next.js Infinite Scroll Gallery

A modern and responsive gallery app built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. This project demonstrates how to implement **infinite scroll** using **server actions**, **Intersection Observer**, and **animations** for a seamless user experience.

---

## Features

- **Infinite Scroll**: Dynamically load more images as the user scrolls down.
- **Server Actions**: Fetch images from an API using Next.js server actions.
- **Animations**: Smooth animations using **Framer Motion**.
- **Responsive Design**: Built with **Tailwind CSS** for a clean and modern UI.
- **SEO Optimized**: Includes metadata for better search engine visibility.
- **TypeScript**: Fully typed for better developer experience.

---

## Live Demo

Check out the live demo: [Next.js Infinite Scroll Gallery](https://yourwebsite.com)

---

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for React.
- **React Intersection Observer**: Detect when elements come into view.
- **TypeScript**: Static typing for JavaScript.

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-infinite-scroll-gallery.git
   cd nextjs-infinite-scroll-gallery
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
nextjs-infinite-scroll-gallery/
├── app/
│   ├── layout.tsx            # Root layout with metadata and global styles
│   ├── page.tsx              # Home page with the gallery
│   └── globals.css           # Global styles
├── components/
│   ├── Gallery.tsx           # Gallery component with infinite scroll logic
│   └── ImageCard.tsx         # Image card component with animations
├── actions/
│   └── getImages.ts          # Server action to fetch images
├── types/
│   └── Image.ts              # Type definitions for image data
├── public/                   # Static assets (e.g., favicon)
└── package.json              # Project dependencies
```

---

## How It Works

1. **Fetching Images**:
   - The `getImages` server action fetches images from the [Picsum Photos API](https://picsum.photos/).
   - The initial set of images is fetched on the server side and passed to the `Gallery` component.

2. **Infinite Scroll**:
   - The `Gallery` component uses the `useInView` hook from **React Intersection Observer** to detect when the user scrolls to the bottom of the page.
   - When the bottom is reached, more images are fetched and appended to the existing list.

3. **Animations**:
   - The `ImageCard` component uses **Framer Motion** to animate images as they come into view.

4. **SEO Optimization**:
   - The `layout.tsx` file includes metadata for better SEO and social media sharing.

---

## Customization

### Change the API
To use a different API, update the `getImages` function in `actions/getImages.ts`:

```typescript
const url = `https://your-api.com/endpoint?page=${offset}&limit=${limit}`;
```

### Add More Animations
Use **Framer Motion** to add more animations to the `ImageCard` component:

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* Image content */}
</motion.div>
```

### Update Metadata
Edit the `metadata` object in `app/layout.tsx` to include your site's information:

```typescript
export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description.',
  openGraph: {
    title: 'Your Site Title',
    description: 'Your site description.',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Site Title',
      },
    ],
  },
};
```

---

## Deployment

### Vercel
Deploy your Next.js app to Vercel:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the app:
   ```bash
   vercel
   ```

### Netlify
Deploy your Next.js app to Netlify:

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy the app:
   ```bash
   netlify deploy --prod
   ```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Picsum Photos](https://picsum.photos/) for providing free placeholder images.
- [Next.js](https://nextjs.org/) for the awesome framework.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Framer Motion](https://www.framer.com/motion/) for the animation library.

---

## Contact

For questions or feedback, feel free to reach out:

- **Your Name**  
- **Email**: kamaumungai3742@gmail.com 
- **Website**: https://mungatech.vercel.app/

---

Enjoy building with Next.js Infinite Scroll Gallery! 🚀