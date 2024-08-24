import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  return (
    <div className="bg-neutralWhite my-4 md:mt-0 md:w-2/4 w-[90%] rounded-xl p-4">
      <h1 className="text-lg md:text-2xl font-bold text-neutralDarkerGrey">
        Contact Us
      </h1>
      <form className="flex flex-col gap-2">
        <fieldset className="flex flex-col md:flex-row gap-2 md:gap-4 ">
          <div className="flex flex-col w-full">
            <label htmlFor="fname" className="textStyle md:text-md">
              First Name <span className="text-priMediumGreen">*</span>
            </label>
            <input type="text" name="fname" className="input w-full" />
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="lname" className="md:text-md textStyle">
              Last Name <span className="text-priMediumGreen">*</span>
            </label>
            <input type="text" name="lname" className="input w-full" />
          </div>
        </fieldset>
        <fieldset className="">
          <div className="flex flex-col">
            <label htmlFor="email" className="textStyle md:text-md">
              Email Address
            </label>
            <input type="email" name="email" className="input w-full" />
          </div>
        </fieldset>
        <fieldset className=" flex flex-col gap-2">
          <label htmlFor="queryType" className="textStyle md:text-md">
            Query Type
          </label>
          <div className="flex md:flex-row flex-col justify-between md:gap-4 gap-2">
            <div className="input w-full flex gap-1">
              <input type="radio" name="queryType" className="accent-priMediumGreen" />
              <span className="textStyle">General Equiry</span>
            </div>
            <div className="input w-full flex gap-1">
              <input type="radio" name="queryType" className="accent-priMediumGreen" />
              <span className="textStyle">Support Request</span>
            </div>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
            <label htmlFor="textmessage">Message</label>
            <textarea name="textmessage" className="input w-full"></textarea>
        </fieldset>
        <fieldset className=" flex">
            <input type="checkbox" name="check" className="accent-priMediumGreen" />
            <label htmlFor="checkbox" className="ps-1 text-xs sm:text-base">I consent to being contacted by the team</label>
        </fieldset>
        <fieldset>
            <input type="submit" className="input w-full bg-priMediumGreen font-bold tracking-wide text-sm md:text-base lg:text-md" />
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
