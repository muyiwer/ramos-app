import { Divider } from "antd";
import qr from "@/assets/qr.png";
import { PartialZoom } from "./OnScroll";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-[50px] py-6 bg-[#0d0d0d] text-white">
      <PartialZoom
        children={
          <div className="flex justify-between items-center w-full mt-[50px]">
            <div className="flex gap-7">
              <span className="text-gray-400">About</span>
              <span className="text-gray-400">Why Us</span>
              <span className="text-gray-400">Platform</span>
              <span className="text-gray-400">Pricing</span>
              <span className="text-gray-400">Contacts</span>
            </div>
            <span className="text-[3rem] font-bold">hello@ramos.com</span>
          </div>
        }
      />
      <Divider className="bg-gray-400 mt-9" />
      <PartialZoom
        children={
          <div className="flex justify-between items-start w-full mt-[30px]">
            <div className="flex gap-[100px]">
              <div className="flex flex-col text-[14px]">
                <span>Warensville Heights</span>
                <span className="text-gray-400">14418 Vineyard Drive, NC</span>
                <span className="text-gray-400">44128</span>
              </div>
              <div className="flex flex-col text-[14px]">
                <span>Saint Loius</span>
                <span className="text-gray-400">1366 Penn Street</span>
                <span className="text-gray-400">63101</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="pointer-cursor">Linkedin</span>
              <span className="pointer-cursor">Instagram</span>
              <span className="pointer-cursor">Facebook</span>
            </div>
          </div>
        }
      />
      <PartialZoom
        children={
          <div className="flex justify-between mt-[30px] items-center">
            <div className="flex items-center">
              <span className="text-[8rem] font-bold">Ramos</span>
              <div className="-mt-[70px] flex justify-center text-[1.5rem] font-bold items-center w-[40px] h-[40px] rounded-full border-[4px] border-white">
                <span>R</span>
              </div>
            </div>
            <span className="text-gray-400">Privacy policy</span>
            <span className="text-gray-400">License agreement</span>
            <div className="w-[100px] h-[100px] rounded-2xl bg-white items-center justify-center flex">
              <img src={qr} alt="" className="w-[70px]" />
            </div>
          </div>
        }
      />
    </footer>
  );
};
