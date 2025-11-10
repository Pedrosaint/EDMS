
import type { CardProps } from "@/models/index-models";
import { motion } from "framer-motion";

export default function Card({ title, value, icon, change }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
      className="h-full w-full rounded-md bg-[#eaedf4] px-4 py-3 shadow-md cursor-pointer"
    >
      <div className="flex items-center justify-between border-b border-gray-300 space-y-4">
        <div className="space-y-1 font-medium">
          <div className="text-xl font-bold text-gray-900">
            {typeof value === "number" ? value.toLocaleString() : value}
          </div>
          <div className="text-sm text-gray-600">{title}</div>
        </div>
        <div className="rounded-md bg-gray-700 shadow-2xl drop-shadow-sm p-2 text-white">
          {icon}
        </div>
      </div>

      {change && (
        <div
          className={`mt-3 flex items-center gap-1 text-xs font-medium ${
            change.positive ? "text-green-600" : "text-red-500"
          }`}
        >
          <span>{change.value}</span>
          <span className="text-[11px] text-gray-500">{change.note}</span>
        </div>
      )}
    </motion.div>
  );
}

