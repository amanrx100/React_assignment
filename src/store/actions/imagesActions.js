
export const REMOVE_IMAGE = 'REMOVE_IMAGE';


export const addImage = (image) => ({
    type: 'ADD_IMAGE',
    payload: image,
  });
  
  export const toggleBookmark = (imageId) => ({
    type: 'TOGGLE_BOOKMARK',
    payload: imageId,
  });
  export const removeImage = (id) => {
    return {
      type: REMOVE_IMAGE,
      payload: id
    };
  };