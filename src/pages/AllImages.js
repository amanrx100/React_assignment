import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookmark, removeImage } from '../store/actions/imagesActions';

const AllImages = () => {
  const images = useSelector((state) => state.images.images);
  const dispatch = useDispatch();

  return (
    <div className="bg-bgm bg-no-repeat bg-cover p-4 md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative">
          <img src={image.url} alt="uploaded" className="w-full h-auto object-cover" />
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              onClick={() => dispatch(toggleBookmark(image.id))}
              className={`bg-white rounded-full p-2 ${
                image.bookmarked ? "text-yellow-500" : "text-gray-500"
              }`}
            >
              {image.bookmarked ? "★" : "☆"}
            </button>
            <button
              onClick={() => dispatch(removeImage(image.id))}
              className="bg-red-500 text-white rounded-full p-2"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllImages;
