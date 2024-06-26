import { RiseOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PartialZoom, Wavy } from "./OnScroll";

export const ThirdSection = () => {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);
  return (
    <div className="grid grid-cols-1 px-[90px] py-[40px] gap-5">
      <span className="text-[7.8rem] font-bold leading-[130px]">
        <Wavy text="Maximize" className="" />{" "}
        <Wavy text="efficiency" className="text-gray-300" />{" "}
        <Wavy text="with" className="" /> <Wavy text="our" className="" />{" "}
        <Wavy text="intuitive" className="" />
      </span>
      <div className="grid grid-cols-[220px_2fr_1fr_1fr] z-50 relative">
        <div className="flex z-20">
          <PartialZoom
            children={
              <div className="flex justify-center items-center bg-[#f9f9f9] z-50 h-[120px] w-[120px] rounded-full">
                <div className="bg-[#fe4a23] text-white text-[20px] h-[40px] w-[40px] rounded-xl font-bold flex justify-center items-center">
                  <RiseOutlined />
                </div>
              </div>
            }
          />
          <PartialZoom
            children={
              <div className="flex flex-col justify-center items-center -ml-5 z-10 bg-[#ffd027] h-[120px] w-[120px] rounded-full">
                <span className="font-bold text-[20px]">45%</span>
                <span className="text-[8px] w-[70px] text-center">
                  System grow faster
                </span>
              </div>
            }
          />
        </div>
        <div className="h-[100px]  z-50 p-3 bg-white"></div>
        <PartialZoom
          children={
            <div className=" bg-yellow-400 rounded-[30%] h-[130px] w-[300px]">
              <motion.div
              ref={ref}
               animate={isVisible ? { x: 0, opacity: 1 } : "initial"}
                initial={{ x: "-100%", opacity: 0 }} // Initial position and opacity
                transition={{ duration: 2, ease: "easeInOut" }} // Animation duration and easing
                className="whitespace-nowrap break-words"
              >
                <span className="z-10 flex text-[5rem] font-bold -ml-11">
                  Analytics server
                </span>
              </motion.div>
            </div>
          }
        />
        <div className="h-[100px] -mr-[90px]  z-50 p-3 bg-white"></div>
      </div>
      <Divider className=" z-50" />
      <div className="flex justify-between items-center">
        <span className="w-[600px]">
          Explore traffic sources, page behavior, conversions and more to gain
          deep insight into your audience. With us your business doesn't just
          adopt - it envolves
        </span>
        <div className=" flex gap-2">
          <Button className="bg-[#f9f9f9] rounded-xl w-[150px] text-[11px] h-[40px]">
            Request a demo
          </Button>
          <Button className="bg-[#fe4a23] rounded-xl w-[150px] text-[11px] h-[40px] text-white">
            Start for free
          </Button>
        </div>
      </div>
    </div>
  );
};
