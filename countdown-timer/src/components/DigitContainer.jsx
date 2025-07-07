import React from "react";

function DigitContainer({ title, duration }) {

  return (
    <div className="flex flex-col items-center gap-2 md:gap-6 ">
      <span className="bg-[var(--color-desaturated-blue)] p-1 md:py-4 md:px-2 lg:p-6 ">
        <p className="text-6xl font-sans font-bold text-[var(--color-soft-red)] mobile:tracking-wider md:text-8xl xl:text-9xl ">
          {duration.toString().padStart(2, '0')}
        </p>
      </span>
      <span className="uppercase text-[var(--color-grayish-blue)] tracking-widest text-xs">
        {title}
      </span>
    </div>
  );
}

export default DigitContainer;
