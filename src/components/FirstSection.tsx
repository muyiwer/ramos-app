import { ImPower, ImStumbleupon, ImPlay3 } from "react-icons/im";
import { FaAlignCenter } from "react-icons/fa";
import laptop from "../assets/laptop.png";
import { Wavy, Zoom } from "./OnScroll";

export const FirstSection = () => {
  return (
    <>
      <div className="flex flex-col px-[90px]">
        <div className="flex items-center justify-end gap-7">
          <div className="flex flex-col">
            <div className="flex items-center gap-7 justify-end">
              <div className="flex items-center gap-3">
                {" "}
                <Zoom
                  children={<ImPower className="text-[#fe4a23] text-[25px]" />}
                  className="flex justify-center items-center rounded-[100%] bg-[#f9f9f9] text-white h-[90px] w-[90px] text-[30px]"
                />
                <Zoom
                  children={<ImStumbleupon />}
                  className="-ml-7 flex justify-center items-center rounded-[100%] bg-[#fe4a23] text-white h-[90px] w-[90px] text-[30px]"
                />
              </div>
              <Wavy text="Analytics" className="text-[6rem] font-semibold" />
            </div>
            <div className="flex font-semibold -mt-8 gap-4 justify-start">
              <Wavy text="that" className="text-[6em]" />{" "}
              <Wavy text="helps" className="text-[6em] text-gray-300" />{" "}
              <Wavy text="you" className="text-[6em]" />
            </div>
          </div>
          <Zoom
            children={
              <>
                <div className="rounded-full bg-[#fe4a23] w-[65px] h-[65px] flex justify-center items-center absolute -left-7 -top-5">
                  <ImPlay3 className="text-white text-[1.5rem]" />
                </div>
                <img src={laptop} className="w-[30vw]" alt="" />
              </>
            }
            className="flex items-start relative ml-8"
          />
        </div>

        <div className="flex gap-7  items-center justify-end font-semibold">
          <Wavy text="shape" className="text-[6em]" />
          <Zoom
            children={<FaAlignCenter />}
            className="bg-[#ffd027] rounded-full h-[80px] w-[80px] text-[20px] text-black flex justify-center items-center"
          />
          <Wavy text="the" className="text-[6em]" />
          <Wavy text="future" className="text-[6em]" />
        </div>
      </div>
    </>
  );
};
