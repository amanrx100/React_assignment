const initialState = {
    images: [],
  };
  
  const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_IMAGE':
        return {
          ...state,
          images: [...state.images, { ...action.payload, bookmarked: false }],
        };
      case 'TOGGLE_BOOKMARK':
        return {
          ...state,
          images: state.images.map(image =>
            image.id === action.payload ? { ...image, bookmarked: !image.bookmarked } : image
          ),
        };
        case 'REMOVE_IMAGE':
      return {
        ...state,
        images: state.images.filter(image => image.id !== action.payload)
      };
      default:
        return state;
    }
  };
  
  export default imagesReducer;
  