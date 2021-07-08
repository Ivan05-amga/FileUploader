import { createContext, useState } from "react";

export const ImageContext = createContext("");

export function ImageProvider({ children }) {
  const [image, setImage] = useState("");

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
}
