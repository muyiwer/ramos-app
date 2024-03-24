import { motion } from "framer-motion";

export const Menu = () => {
  return (
    <motion.aside
      initial={{ y: "150%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }} 
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
      className="bg-[#282626] text-[12px] flex py-3 px-6 gap-5 items-center rounded-lg h-[35px]"
    >
      <span className="cursor-pointer hover:text-[#fe4a23]">Dashboard</span>
      <span className="cursor-pointer hover:text-[#fe4a23]">Reports</span>
      <span className="cursor-pointer hover:text-[#fe4a23]">Documents</span>
      <span className="cursor-pointer hover:text-[#fe4a23]">History</span>
      <span className="cursor-pointer hover:text-[#fe4a23]">Settings</span>
    </motion.aside>
  );
};
