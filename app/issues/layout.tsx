import React from "react";
import RightBar from "./rightbar/page";

const layout = ({ children }:{children: React.ReactNode}) => {
  return (
    <div className="flex flex-row justify-between">
      {children}
      <div className="w-1/6 h-screen p-2 text-center RightBar">
        <RightBar />
      </div>
    </div>
  );
};

export default layout;
