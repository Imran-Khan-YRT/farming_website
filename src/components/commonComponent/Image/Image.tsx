import React, { CSSProperties, FC, HTMLAttributes } from "react";

interface ImageComponentProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const Image: FC<ImageComponentProps> = ({ src, alt, width, height, className, ...restProps }) => {
  return (
    <div style={{ width: width, height: height }}>
      <img src={src} alt={alt} style={{ objectFit: "contain" }} />
    </div>
  );
};

export default Image;
