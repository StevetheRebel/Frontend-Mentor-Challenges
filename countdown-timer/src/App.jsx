import {
  faInstagram,
  faPinterest,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import DigitContainer from "./components/DigitContainer";
import Countdown from "react-countdown";

function App() {
  const launchDate = new Date("2025-07-15T00:00:00");
  const now = new Date()
  const totalDays = useRef(Math.floor((launchDate - now) / (1000*60*60*24)))


  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div className="text-8xl text-center">We've Launched</div>
    } else {
      return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-2 mobile:grid-cols-4 mobile:gap-x-4 md:gap-x-8">
          <DigitContainer title='days' duration={days} />
          <DigitContainer title='hours' duration={hours} />
          <DigitContainer title='minutes' duration={minutes} />
          <DigitContainer title='seconds' duration={seconds} />
        </div>
      )
    }
  }

  return (
    <>
      {/* Background stars */}
      <div
        className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[var(--color-dark-blue)] absolute -z-10 "
        style={{ backgroundImage: "url(/bg-stars.svg" }}
      ></div>
      {/* Background hills */}
      <div
        className="w-full h-[35vh] mobile:h-[25vh] bg-[85%] bottom-0 right-0 bg-no-repeat absolute bg-cover -z-10 "
        style={{ backgroundImage: "url(/pattern-hills.svg" }}
      ></div>

      {/* Content */}
      <section className="h-[70vh] mobile:h-[80vh] flex flex-col items-center justify-center mobile:gap-12 lg:gap-16 ">
        <h1 className="text-2xl tracking-widest text-[var(--color-neutral-white)] uppercase text-center mobile:text-3xl xl:text-5xl ">
          we're launching soon
        </h1>
        <Countdown date={launchDate} renderer={renderer} />
      </section>

      <footer className="w-full h-[30vh] mobile:h-[20vh] flex flex-col justify-end gap-4 ">
        {/* facebook, pinterest, instagram */}
        <div className="flex items-center justify-center gap-8 ">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-2xl text-[var(--color-grayish-blue)] cursor-pointer hover:text-[var(--color-soft-red)]"
          />
          <FontAwesomeIcon
            icon={faPinterest}
            className="text-2xl text-[var(--color-grayish-blue)] cursor-pointer hover:text-[var(--color-soft-red)]"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl text-[var(--color-grayish-blue)] cursor-pointer hover:text-[var(--color-soft-red)] "
          />
        </div>
        <p className="text-center font-sans py-1 text-white text-xs">
          <a href="https://github.com/StevetheRebel">By Steve Mogan</a> &copy;{" "}
          {new Date().getFullYear()} Fontend Mentor
        </p>
      </footer>
    </>
  );
}

export default App;
