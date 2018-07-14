import React from "react";
import Load from "svg-react-loader?name=Load!../logo.svg";

const Loading = () => {
  return (
    <div className="loading--overlay">
      <Load />
    </div>
  );
};

export default Loading;
