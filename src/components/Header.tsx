import { Button } from "./Button";
import { Menu } from "./Menu";
import { motion } from "framer-motion";
import logo from "@/assets/black_logo.png";

export const Header = () => {
  return (
    <header className="h-[60px] overflow-hidden w-screen">
      <div className="flex justify-between mx-2 my-1 p-1 rounded-xl bg-[#0d0d0d] text-white items-center">
        <motion.div
          initial={{ y: "150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="flex gap-1 items-center ml-3 relative"
        >
          <img src={logo} alt="" className="w-[70px]" />
        </motion.div>
        <Menu />
        <motion.div
          initial={{ y: "150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <Button
            title={<span className="text-[11px]">SignUp</span>}
            className={
              "bg-white text-black h-[35px] flex justify-center items-center px-4"
            }
          />
        </motion.div>
      </div>
      <div className="h-[50px] z-0 bg-white absolute top-[47.2px] left-0 w-full"></div>
    </header>
  );
};
