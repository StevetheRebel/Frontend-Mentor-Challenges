import React from "react";
import {
  Facebook,
  IconDown,
  IconUp,
  Instagram,
  Twitter,
  Youtube,
} from "../../assets/icons";

function Statscards() {
  return (
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2 pt-2">
      <Statcard
        logo={<Facebook />}
        user={"@nathanf"}
        followers={"1987"}
        change={12}
        gauge={true}
        topBorder={"border-t-facebook"}
      />
      <Statcard
        logo={<Twitter />}
        user={"@nathanf"}
        followers={"1044"}
        change={89}
        gauge={true}
        topBorder={"border-t-twitter"}
      />
      <Statcard
        logo={<Instagram />}
        user={"@realnathanf"}
        followers={"11k"}
        change={1099}
        gauge={true}
        topBorder={"border-t-instagram "}
      />
      <Statcard
        logo={<Youtube />}
        user={"Nathan F."}
        followers={"8239"}
        change={144}
        gauge={false}
        topBorder={"border-t-youtube"}
      />
    </div>
  );
}

export default Statscards;

function Statcard({ logo, user, followers, gauge, change, topBorder }) {
  return (
    <div className="flex justify-center pt-4 px-4">
      <div
        className={`max-w-[300px] w-full h-fit flex flex-col gap-4  ${topBorder} py-8 bg-lightGrayishBlueBG dark:bg-darkDesaturatedBlue border-t-8 rounded-t-lg cursor-pointer `}
      >
        <div className="flex justify-center gap-2 text-darkGrayishBlueText dark:text-desaturatedBlueText font-bold ">
          {logo}
          {user}
        </div>
        <div className="flex flex-col justify-center items-center px-8 gap-1 ">
          <p className="text-6xl font-bold text-darkDesaturatedBlue dark:text-whiteText">
            {followers}
          </p>
          <p className="text-darkGrayishBlueText dark:text-desaturatedBlueText tracking-widest ">
            FOLLOWERS
          </p>
        </div>
        <div
          className={`${
            gauge ? "text-limeGreen" : "text-red-600"
          } font-bold flex items-center justify-center gap-1`}
        >
          {gauge ? <IconUp /> : <IconDown />}
          {change}
          <p>Today</p>
        </div>
      </div>
    </div>
  );
}
