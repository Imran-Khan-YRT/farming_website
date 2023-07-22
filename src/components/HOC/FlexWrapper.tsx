import React, { ComponentType } from "react";

const FlexWrapper = (Component: ComponentType) => {
  return function FlexWrapperComponent() {
    return (
      <div>
        <Component />
      </div>
    );
  };
};

export default FlexWrapper;
