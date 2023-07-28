import React, { CSSProperties, FC, HTMLAttributes } from "react";

interface ImageComponentProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  style?: CSSProperties;
  width?: CSSProperties;
  height?: CSSProperties;
}

const Image: FC<ImageComponentProps> = ({ src, alt, style = {} }) => {
  return (
    <div style={style}>
      <img src={src} alt={alt} style={{ objectFit: "cover" }} />
    </div>
  );
};

export default Image;
