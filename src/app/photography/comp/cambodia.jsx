import React from "react";
import Link from "next/link";

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
    <div className="flex flex-col gap-4 items-center py-24">
      <div className="carousel w-96 h-96">
        {images.map((photo, index) => (
          <div
            key={index}
            id={`carousel-${index}`}
            className="carousel-item relative w-full h-full z-1"
          >
            <img src={photo} alt={`Photo ${index + 1}`} className="w-full " />
            <div className="absolute top-1/2 flex -translate-y-1/2 transform justify-between w-full">
              {index === 0 ? (
                <div></div>
              ) : (
                <Link
                  href={`#carousel-${previousIndex(index - 1)}`}
                  className="btn btn-circle z-10 border border-gray-500 hover:border-white hover:text-white"
                >
                  ❮
                </Link>
              )}
              {index === lastArray ? (
                <div></div>
              ) : (
                <Link
                  href={`#carousel-${nextIndex(index)}`}
                  className="btn btn-circle z-10 border border-gray-500 hover:border-white hover:text-white"
                >
                  ❯
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 w-96 md:w-[500px] flex-wrap justify-center">
        {images.map((photo, index) => (
          <div key={index} id={`carousel-${index}`} className="flex-shrink-0 ">
            <Link href={`photography/#carousel-${index}`}>
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-12 h-12 cursor-pointer border border-gray-500 hover:border-white"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cambodia;
