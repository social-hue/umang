import React from "react";
import { PacmanLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <PacmanLoader color="#069183" />
    </div>
  );
};

export default loading;
