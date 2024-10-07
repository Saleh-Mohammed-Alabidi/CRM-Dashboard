import React from "react";

const Loading = () => {
  return (
    
      <div
        id="preloader"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>

  );
};

export default Loading;
