
import React from 'react';

const GalleryPage: React.FC = () => {
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/${i + 1}/600/400`,
    alt: `Random image ${i + 1}`,
  }));

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
        Image Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-lg bg-slate-800 transform hover:scale-105 transition-transform duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 50}ms`}}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover aspect-video" 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
