import { motion } from "framer-motion";
import type { Card } from "@/models/index-models";

export default function CardTwo({
  icon,
  title,
  description,
  documentCount,
}: Card) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="rounded-md overflow-hidden shadow-sm bg-[#eaedf4] px-2 cursor-pointer"
    >
      {/* Header Section */}
      <div className={`h-38 text-black p-3 pt-4`}>
        <div className="flex items-center justify-between">
          {icon}
          <h1 className="bg-gray-400 text-white rounded-2xl py-1 px-3 text-[12px]">
            {documentCount}
          </h1>
        </div>
        <h2 className="text-xl font-semibold pt-2">{title}</h2>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>

      {/* Content Section */}
      <div className="p-4 border-t border-gray-300">
        <div className="text-sm text-gray-700 flex justify-between items-center">
        </div>
      </div>
    </motion.div>
  );
}
