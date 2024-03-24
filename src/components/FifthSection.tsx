import { LineChartOutlined, ApartmentOutlined } from "@ant-design/icons";
import logo from "@/assets/red_logo.png";
import { Button, Divider } from "antd";
import { Wavy } from "./OnScroll";

export const FifthSection = () => {
  return (
    <div className="flex flex-col px-[90px] py-[40px] gap-7 mt-[50px]">
      <div>
        <span className="text-[6.6rem] font-bold leading-[120px]">
          <Wavy text="we" className="" /> <Wavy text="give" className="" />{" "}
          <Wavy text="you" className="" /> <Wavy text="full" className="" />{" "}
          <Wavy text="control" className="text-gray-300" />{" "}
          <Wavy text="over" className="" /> <Wavy text="your" className="" />{" "}
          <Wavy text="data" className="" />{" "}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-7 border-[1px] justify-center items-center rounded-2xl shadow-lg bg-[#f9f9f9] py-8">
          <div className="flex">
            <div className="flex flex-col z-10 shadow-2xl gap-5  h-[260px] w-[220px] bg-white rounded-2xl justify-center items-center">
              <span className="font-bold text-[12px]">Conversion rate</span>
              <div className="flex">
                <div className="w-[20px] h-[20px] -mt-2 z-50 bg-white rounded-full p-2 flex justify-center items-center border-[5px] border-gray-300">
                  <LineChartOutlined className="text-[10px] font-bold" />
                </div>{" "}
                <div className="bg-[#ffd027] -ml-3  z-10 p-3 flex justify-center items-center rounded-2xl">
                  <span className="text-[2.5rem] font-bold">2,3%</span>
                </div>
              </div>

              <span className="text-gray-300 w-[70%] text-center text-[12px]">
                Percentage of website visitors
              </span>
            </div>
            <div className="flex flex-col -ml-6 mt-8  w-[220px] p-4 shadow-2xl z-50 gap-3  bg-white rounded-2xl  items-start">
              <span className="font-bold text-[12px] text-gray-400">
                Sales revenue
              </span>
              <span className="text-[1.5rem] font-bold">
                <span className="text-[1rem]">$ </span>131.2k
              </span>
              <div className="flex gap-1">
                <div className="h-[5px] bg-green-600 w-[50px]"></div>
                <div className="h-[5px] bg-[#ffd027] w-[50px]"></div>
                <div className="h-[5px] bg-green-600 w-[50px]"></div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center mt-2">
                  <img
                    className="w-9 rounded-full h-9"
                    src={
                      "https://t3.ftcdn.net/jpg/03/73/52/24/360_F_373522464_UzkM3IvqgqpS0qIy2kpkB5QiV7Bw7NyS.jpg"
                    }
                    alt=""
                  />
                  <span className="font-bold text-[12px] text-gray-400">
                    Min. price
                  </span>
                </div>
                <span className="font-bold text-[12px] mt-2">1,200 $</span>
              </div>
              <div className="flex justify-between items-center w-full -mt-2">
                <div className="flex gap-2 items-center mt-2">
                  <img
                    className="w-9 rounded-full h-9"
                    src={
                      "https://www.shutterstock.com/image-photo/portrait-black-african-woman-no-600nw-504712090.jpg"
                    }
                    alt=""
                  />
                  <span className="font-bold text-[12px] text-gray-400">
                    Max. price
                  </span>
                </div>
                <span className="font-bold text-[12px] mt-2">2,320 $</span>
              </div>
              <Divider className="mt-1" />
              <div className="flex justify-between w-full -mt-5">
                <span className="font-bold text-[10px] text-gray-400">
                  Engagement rate
                </span>
                <span className="font-bold text-[12px]">47.84%</span>
              </div>
            </div>
          </div>
          <span className="text-[1.4rem] font-bold">
            Improved customer service
          </span>
          <span className="text-center -mt-3 w-[60%]">
            Analytics helps optimize service process by providing information on
            interactions with customersand increase their sactisfation
          </span>
        </div>
        <div className="relative flex flex-col gap-7 border-[1px] justify-center items-center rounded-2xl shadow-lg bg-[#f9f9f9] py-6">
          <div className="absolute top-[50px] border-[1px] shadow-2xl w-[270px] h-[200px] bg-white rounded-2xl"></div>
          <div className="flex gap-2  p-2 absolute top-[70px] border-[1px] shadow-2xl w-[300px] h-[200px] bg-white rounded-2xl">
            <div className="bg-gray-200 w-[18px] h-[22px] p-1 rounded-xl flex items-center justify-center">
              <ApartmentOutlined className="text-[8px]" />
            </div>
            <span className="text-[11px] mt-1 font-semibold">
              Finance reports
            </span>
          </div>
          <div className="p-3 absolute top-[105px] border-[1px] shadow-2xl w-[320px] h-[200px] bg-white rounded-2xl">
            <div className="flex flex-col justify-between h-[95%]">
              <div className="flex gap-2">
                <div className="bg-gray-200 w-[18px] h-[22px] p-1 rounded-xl flex items-center justify-center">
                  <LineChartOutlined className="text-[10px] font-bold" />
                </div>
                <span className="text-[12px] mt-1 font-semibold">Insights</span>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-[11px]">
                    Total profit
                  </span>
                  <span className="font-bold">
                    $ <span className="text-[1.5rem]">264.2k</span>
                  </span>
                  <Button className="bg-[#ffd027] text-[9px] font-bold">
                    Data visualization
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="top-[360px] flex flex-col gap-5 justify-center items-center absolute">
            <span className="text-[1.4rem] font-bold">
              Monitorig Key indicators
            </span>
            <span className="text-center -mt-3 w-[60%]">
              Analytics helps optimize service process by providing information
              on interactions with customersand increase their sactisfation
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-between items-center mt-[100px]">
        <div className="flex justify-center items-center rounded-[30%] shadow-[#fe4a23] shadow-lg h-[100px] w-[100px] bg-[#fe4a23]">
          <img src={logo} alt="" className="w-[50px] h-[50px]" />
        </div>
        <div className="flex gap-7">
          {" "}
          <Wavy text="Get" className="text-[6rem] font-semibold" />{" "}
          <Wavy text="Started" className="text-[6rem] font-semibold" />
        </div>

        <span className="text-gray-400 w-[400px] text-center -mt-5">
          Turn information into advantage! Start using Ramos today. Sign up for
          a free trail
        </span>
        <div className="flex gap-4 mt-4">
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
