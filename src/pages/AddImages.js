import React from 'react';
import { useDispatch } from 'react-redux';
import { addImage } from '../store/actions/imagesActions';

const AddImages = () => {
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(addImage({ id: Date.now(), url: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-bgm bg-no-repeat bg-cover min-h-screen flex items-center justify-center bg-gray-100">
      <div className="shadow-2xl bg-white pr-32 pl-32 pt-12 pb-12  rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">Select Image</h2>
        <div className="w-full flex flex-col md:flex-row gap-4">
          
          
        
          <div className="shadow-xl flex-1 bg-gray-200 p-6 rounded-lg flex items-center justify-center">
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-lg py-6 px-4 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7h18M3 11h18M5 15h14M3 19h18"
                />
              </svg>
              <span className="text-gray-600 text-lg font-medium">Select File</span>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AddImages;
