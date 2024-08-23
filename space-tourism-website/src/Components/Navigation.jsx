import React from "react";

function Navigation() {
  return (
    <div className="h-12 flex justify-end absolute right-0 top-6">
      <ul className="flex gap-4 h-20 items-center justify-end w-fit backdrop-blur-2xl bg-navWhite text-white ps-16 pe-24">
        <li className="uppercase h-full w-fit flex items-center ">00 Home</li>
        <li className="uppercase h-full w-fit flex items-center ">
          01 Destination
        </li>
        <li className="uppercase h-full w-fit flex items-center ">02 Crew</li>
        <li className="uppercase h-full w-fit flex items-center ">
          03 Technology
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
