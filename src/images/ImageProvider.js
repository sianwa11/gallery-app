import React, { useReducer } from "react";

import ImageContext from "./image-context";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: `${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
});

const defaultImages = [];

const imageReducer = (state, action) => {
  switch (action.type) {
    case "search":
      api.search
        .getPhotos({ query: action.name, page: 1, perPage: 13 })
        .then((response) => {
          state.push(...response.response.results);
        });

      return state;

    default:
      break;
  }
};

const ImageProvider = (props) => {
  const [searchedImages, dispatchImage] = useReducer(
    imageReducer,
    defaultImages
  );

  const searchImageHandler = (name) => {
    dispatchImage({ type: "search", name });
  };

  const imageContext = {
    results: searchedImages,
    searchImage: searchImageHandler,
  };

  return (
    <ImageContext.Provider value={imageContext}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
