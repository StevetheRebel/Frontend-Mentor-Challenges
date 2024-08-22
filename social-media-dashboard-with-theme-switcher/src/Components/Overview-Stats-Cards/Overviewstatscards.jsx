import React from "react";
import {
  Facebook,
  IconUp,
  IconDown,
  Instagram,
  Twitter,
  Youtube,
} from "../../assets/icons";

function Overviewstatscards() {
  return (
    <div>
      <h2 className="font-bold lg:text-2xl md:text-xl text-base text-darkDesaturatedBlue dark:text-whiteText mt-3">
        Overview - Today
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-1 gap-4 py-2">
        <Overviewstatcard
          type={"Page Views"}
          logo={<Facebook />}
          count={57}
          gauge={true}
          change={"3%"}
        />
        <Overviewstatcard
          type={"Like"}
          logo={<Facebook />}
          count={52}
          gauge={false}
          change={"2%"}
        />
        <Overviewstatcard
          type={"Likes"}
          logo={<Instagram />}
          count={5462}
          gauge={true}
          change={"2257%"}
        />
        <Overviewstatcard
          type={"Profile Views"}
          logo={<Instagram />}
          count={"52k"}
          gauge={true}
          change={"1375%"}
        />
        <Overviewstatcard
          type={"Retweets"}
          logo={<Twitter />}
          count={117}
          gauge={true}
          change={"303%"}
        />
        <Overviewstatcard
          type={"Likes"}
          logo={<Twitter />}
          count={507}
          gauge={true}
          change={"553%"}
        />
        <Overviewstatcard
          type={"Likes"}
          logo={<Youtube />}
          count={107}
          gauge={false}
          change={"19%"}
        />
        <Overviewstatcard
          type={"Total Views"}
          logo={<Youtube />}
          count={1407}
          gauge={false}
          change={"12%"}
        />
      </div>
    </div>
  );
}

export default Overviewstatscards;

function Overviewstatcard({ logo, type, count, change, gauge }) {
  return (
    <div className="rounded-lg p-5 flex flex-col gap-2 cursor-pointer bg-lightGrayishBlueBG dark:bg-darkDesaturatedBlue">
      <div className=" flex justify-between items-center text-darkGrayishBlueText dark:text-desaturatedBlueText font-bold text-xs sm:text-sm md:text-base">
        {type}
        {logo}
      </div>
      <div className=" flex justify-between items-end">
        <p className="text-xl font-bold sm:text-base md:text-2xl text-darkDesaturatedBlue dark:text-whiteText">
          {count}
        </p>
        <p
          className={`${
            gauge ? "text-limeGreen" : "text-red-600"
          } font-bold flex items-center justify-center gap-1 text-xs md:text-sm  `}
        >
          {gauge ? <IconUp /> : <IconDown />}
          {change}
        </p>
      </div>
    </div>
  );
}
