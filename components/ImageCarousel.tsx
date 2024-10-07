"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1721332153289-0c46dc38981b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjIxNjZ8MXwxfGFsbHwxfHx8fHx8fHwxNzI4MzMyOTczfA&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjIxNjZ8MHwxfGFsbHwyfHx8fHx8fHwxNzI4MzMyOTczfA&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1726491703674-018f676fa96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjIxNjZ8MHwxfGFsbHwzfHx8fHx8fHwxNzI4MzMyOTczfA&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1726513937523-79df530a1542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjIxNjZ8MHwxfGFsbHw0fHx8fHx8fHwxNzI4MzMyOTczfA&ixlib=rb-4.0.3&q=80&w=400',
  'https://images.unsplash.com/photo-1727053850611-8351da50cff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjIxNjZ8MHwxfGFsbHw2fHx8fHx8fHwxNzI4MzMyOTczfA&ixlib=rb-4.0.3&q=80&w=400',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={400}
          height={225}
          layout="responsive"
          onClick={openLightbox}
          className="cursor-pointer object-cover"
        />
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={900}
              height={506}
              layout="responsive"
              objectFit="contain"
            />
            <button
              className="absolute top-4 right-4 text-white"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;