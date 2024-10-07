import ImageCarousel from '@/components/ImageCarousel';
import AmpStoryPlayer from '@/components/AmpStoryPlayer';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Modern Website</h1>
      <ImageCarousel />
      <div className="mt-12">
        <AmpStoryPlayer />
      </div>
    </div>
  );
}