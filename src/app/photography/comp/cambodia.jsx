import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

const Cambodia = () => {
  const lastArray = 4;
  const images = [
    "/photos/cambodia/8.jpg",
    "/photos/cambodia/10.jpg",
    "/photos/cambodia/11.jpg",
    "/photos/cambodia/12.jpg",
    "/photos/cambodia/13.jpg",
  ];
  const previousIndex = (index) => (index === 0 ? images.length : index);
  const nextIndex = (index) => (index === images.length - 1 ? 1 : index + 1);

  return (
    <div className="flex flex-col gap-6 items-center">
      {/* Main Carousel */}
      <div className="w-full max-w-2xl">
        <div className="carousel w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
          {images.map((photo, index) => (
            <div
              key={index}
              id={`carousel-${index}`}
              className="carousel-item relative w-full h-full"
            >
              <img
                src={photo}
                alt={`Cambodia Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation Overlay */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {index === 0 ? (
                  <div></div>
                ) : (
                  <Link
                    href={`#carousel-${previousIndex(index - 1)}`}
                    className="btn btn-circle btn-primary btn-sm shadow-lg hover:scale-110 transition-transform"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                )}
                {index === lastArray ? (
                  <div></div>
                ) : (
                  <Link
                    href={`#carousel-${nextIndex(index)}`}
                    className="btn btn-circle btn-primary btn-sm shadow-lg hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {index + 1} / {images.length}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="w-full max-w-4xl">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Photo Gallery
          </h3>
          <p className="text-sm text-base-content/70">
            Click thumbnails to navigate
          </p>
        </div>

        <div className="flex gap-3 w-full overflow-x-auto pb-4 justify-center">
          {images.map((photo, index) => (
            <div key={index} className="flex-shrink-0">
              <Link href={`photography/#carousel-${index}`}>
                <img
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg cursor-pointer border-2 border-base-300 hover:border-primary transition-colors duration-200 hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Location Info */}
      <div className="card bg-base-200 shadow-lg border border-base-300">
        <div className="card-body text-center">
          <h3 className="card-title justify-center text-lg">Cambodia</h3>
          <p className="text-sm text-base-content/70">
            Discovering the ancient wonders of Angkor Wat and the rich cultural
            heritage of Cambodia
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <div className="badge badge-primary">Ancient</div>
            <div className="badge badge-secondary">Temples</div>
            <div className="badge badge-accent">Heritage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cambodia;
