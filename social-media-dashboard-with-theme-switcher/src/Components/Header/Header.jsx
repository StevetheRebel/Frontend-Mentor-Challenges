import React from "react";

function Header({ toggleTheme, darkMode }) {
  return (
    <div className="w-full h-auto flex justify-between items-center ">
      <div>
        <h1 className="font-bold lg:text-2xl md:text-xl text-base text-darkDesaturatedBlue dark:text-whiteText">
          Social Media Dashboard
        </h1>
        <p className="md:text-xl sm:text-lg text-sm text-darkGrayishBlueText dark:text-desaturatedBlueText font-bold">
          Total Followers: 23,004
        </p>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p className="md:text-xl sm:text-lg text-sm text-darkDesaturatedBlue dark:text-whiteText font-bold ">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </p>
          <div
            className="h-6 w-12 bg-toggleLightGrayishBlue dark:bg-toggle-gradient rounded-full relative cursor-pointer"
            onClick={() => {
              toggleTheme();
            }}
          >
            <div
              className="absolute h-5 w-5 rounded-full bg-lightGrayishBlueBG dark:bg-darkDesaturatedBlue top-1/2 right-0.5 transform -translate-y-1/2 cursor-pointer"
              style={{
                right: darkMode ? "0.125rem" : "",
                left: darkMode ? "" : "0.125rem",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

