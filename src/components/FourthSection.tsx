import { PlusOutlined } from "@ant-design/icons";
import mobile from "@/assets/mobile.png";
import desktop from "@/assets/desktop.png";
import { PartialZoom, TypeAnimination } from "./OnScroll";

export const FourthSection = () => {
  return (
    <div className=" bg-[#f9f9f9] flex-col rounded-[50px] py-[60px] px-[50px] mx-0 flex ">
      <div className="flex">
        <div className="flex flex-col gap-[100px]">
          {" "}
          <div className="flex flex-col">
            <span className="text-[2.5rem] font-bold w-[500px]">
              Turning data into real actions and ideas.
            </span>
          </div>
          <div className="flex flex-col gap-5 w-[300px]">
            <div className="flex justify-between p-4 bg-white shadow-xl rounded-3xl items-center">
              <span className="font-semibold">Instant Insights</span>
              <div className="bg-[#f9f9f9] h-[45px] w-[45px] rounded-full flex justify-center items-center">
                <PlusOutlined />
              </div>
            </div>
            <div className="flex justify-between p-4 bg-white shadow-xl rounded-3xl items-center">
              <span className="font-semibold">AI technology</span>
              <div className="bg-[#f9f9f9] h-[45px] w-[45px] rounded-full flex justify-center items-center">
                <PlusOutlined />
              </div>
            </div>
            <div className="flex justify-between p-4 bg-white shadow-xl rounded-3xl items-center">
              <span className="font-semibold">Esay integration</span>
              <div className="bg-[#f9f9f9] h-[45px] w-[45px] rounded-full flex justify-center items-center">
                <PlusOutlined />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="z-50">
            <PartialZoom
              children={
                <img
                  src={mobile}
                  alt=""
                  className="z-50 w-[350px] h-[600px] mt-[200px] -ml-[65px]"
                />
              }
            />
          </div>

          <img
            src={desktop}
            alt=""
            className="h-[700px] w-[1400px] -ml-[250px]  z-10"
          />
        </div>
      </div>
      <div className="-mt-[350px] -mb-[100px]">
        {" "}
        <TypeAnimination
          text="Ramos"
          className="text-[24rem] font-bold text-[#fe4a23]"
        />
      </div>
    </div>
  );
};
