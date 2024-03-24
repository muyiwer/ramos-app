import { Button } from "./Button";
import { FaClone, FaArrowCircleUp, FaCopy } from "react-icons/fa";
import { PartialZoom } from "./OnScroll";
import { useAnimatedValue } from "@/hooks/useAniminatedValue";
import { useInView } from "react-intersection-observer";

export const SecondSection = () => {
  const { ref, inView } = useInView();
  const value = useAnimatedValue(10,264.2,2000, inView)
  const { ref: ref2, inView:inView2 } = useInView();
  const value2 = useAnimatedValue(0,43,2000, inView2)
  return (
    <div className=" bg-gray-200 rounded-[50px] py-[60px] px-[50px] mx-0 flex flex-col gap-6">
      <div className="grid grid-cols-[1.5fr_1fr] items-center">
        <span className="text-[2rem] font-bold">
          Your key to strategic <br />
          success through analytics
        </span>
        <div className="flex justify-center">
          <span>
            Ready for exciting, instantaneous,
            <br /> all accessible insights in real time?
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] gap-4  mt-[40px]">
        <div className="grid grid-cols-2  py-7 pl-7 h-[310px] rounded-[30px] border-[1px] border-gray-300 bg-white">
          <div className="flex flex-col justify-between">
            <PartialZoom
              children={
                <Button
                  className="bg-yellow-300 text-black py-2 w-[130px]"
                  title={
                    <span className="text-[11px] font-bold">
                      Setting up reports
                    </span>
                  }
                />
              }
            />
            <div className="flex flex-col gap-4">
              <PartialZoom
                children={
                  <span className="font-bold">
                    Fast and easy access <br /> to analytics
                  </span>
                }
              />
              <PartialZoom
              className="w-[80%]"
                children={
                  <span className=" text-gray-500 text-[12px]">
                    One platform is a comprehensive system of solutions that
                    will be the first step towards digitalization of your
                    business
                  </span>
                }
              />
            </div>
          </div>
          <div ref={ref}  className="border-gray-300 rounded-l-[20px] border-[1px] p-3 grid grid-row-2">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-6">
                <span className="text-[13px] font-bold">Sales statistic</span>
                <div className="flex gap-3 items-center">
                  <div className="bg-[#fe4a23] rounded-full p-4">
                    <FaClone className="text-white text-[10px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[10px]">
                      Total profit
                    </span>
                    <span className="font-bold text-[1.2rem]">$ {value.toFixed(2)}k</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl flex gap-2 flex-col h-[120px]">
                <span>Visitors</span>
                <span>_______</span>
                <div className="flex gap-1 items-start">
                  <span className="text-[1.5rem]">56K</span>
                  <div className="flex items-center gap-1">
                    <FaArrowCircleUp className="text-green-500 text-[12px]" />
                    <span className="text-green-600 text-[10px]">+14%</span>
                  </div>
                </div>
              </div>
            </div>
            <div>d</div>
          </div>
        </div>
        <div className="h-[310px] grid grid-rows-2 gap-5 bg-[#0d0d0d] rounded-[30px] w-full py-[40px] px-[60px]">
          <div className="grid grid-cols-2 gap-2">
            <div className="border-[#292929] h-[140px] border-[2px] bg-[#171717] rounded-[25px] flex flex-col gap-6 items-center justify-center">
              <FaCopy className="text-yellow-300 text-[24px]" />
              <div className="flex">
                <img
                  className="w-9 rounded-full h-9"
                  src={
                    "https://t3.ftcdn.net/jpg/03/73/52/24/360_F_373522464_UzkM3IvqgqpS0qIy2kpkB5QiV7Bw7NyS.jpg"
                  }
                  alt=""
                />
                <img
                  className="w-9 rounded-full h-9 -ml-1"
                  src={
                    "https://www.shutterstock.com/image-photo/portrait-black-african-woman-no-600nw-504712090.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
            <div ref={ref2} className="border-[#292929] relative text-white h-[140px] border-[2px] bg-[#171717] rounded-[25px] flex flex-col gap-5 items-center justify-center">
              <span className="text-[11px]">Transactions</span>
              <div className="flex items-center gap-1 absolute left-[125px] top-[45px]">
                <FaArrowCircleUp className="text-green-500 text-[17px]" />
                <span className="text-green-600 text-[10px]">+14%</span>
              </div>
              <span className="text-[2.5rem]">{value2?.toFixed()}K</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center mt-9">
            <span className="font-bold text-white">Widget Control</span>
            <span className="text-white text-[11px] w-[70%] text-center">
              Reports provide a comprehensive overview of important aspects of
              wb analytics
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 gap-6 items-center">
        <div className="flex items-end gap-1">
          <span className="mb-9 text-[20px] font-bold">Up to</span>
          <span className="font-semibold text-[6.5rem]">45%</span>
        </div>
        <span className="w-[400px] text-[13px]">
          Increase your analytics efficiency by up to 45%. Unique algorithm
          provide insights from data, reduce time for analysis and save time for
          making important, informed information
        </span>
      </div>
    </div>
  );
};
