import React from "react";

const ImageContext = React.createContext({
  results: [],
  searchImage: (name) => {},
});

export default ImageContext;
