import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { people } from "@/utilis/data-arrays";
import { IoMdPerson } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";

const access = ["View", "Comment", "Edit"];
const ShareModal = ({ onClose }: { onClose: () => void }) => {
  const [accessOpen, setAccessOpen] = useState(false);
  const [accessLevel, setAccessLevel] = useState("View"); 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50 backdrop-blur-sm">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-full max-w-md rounded-md bg-[#eaedf4] p-6 shadow-xl"
      >
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Share Document</h2>
            <button onClick={onClose}>
              <IoClose className="text-2xl cursor-pointer" />
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-4 border-b border-gray-400 pb-3">
            Invite person to collaborate to this document
          </p>
        </div>

        <h3 className="text-sm font-medium mb-2">Invite person</h3>
        <div className="flex items-center gap-2 mb-6">
          <input
            type="email"
            placeholder="Type person by email.."
            className="w-2/3 border border-gray-400 rounded-md px-3 py-2 text-sm outline-none"
          />
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm w-1/3">
            Share
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Person list</h3>
          <ul className="space-y-2">
            {people.map((person, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <IoMdPerson size={20} className="text-gray-500" />
                  <p className="font-medium text-sm">
                    {person.name} {person.you && "(you)"}
                  </p>
                </div>
                <div className="text-sm text-gray-500">{person.role}</div>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-2">
            and 15 others person.{" "}
            <button className="text-black cursor-pointer font-medium hover:underline">
              View all persons
            </button>
          </p>
        </div>


        <div className="border-t border-gray-400 pt-4 relative">
          <h3 className="text-sm font-medium mb-2">Access settings</h3>
          <div
            className="flex items-center justify-between gap-2 text-sm cursor-pointer"
            onClick={() => setAccessOpen(!accessOpen)}
          >
            <div className="flex items-center gap-2">
              <TfiWorld size={25} className="text-lg text-gray-600" />
              <div>
                <p className="font-medium">Access</p>
                <p className="text-gray-500 text-xs">
                  Anyone can {accessLevel.toLowerCase()} this document
                </p>
              </div>
            </div>

            <SlArrowDown
              className={`transition-transform duration-300 ${
                accessOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {accessOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 rounded-md border border-gray-300 bg-[#eaedfa] shadow-md z-10">
              {access.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setAccessLevel(option);
                    setAccessOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-300 ${
                    accessLevel === option ? "font-semibold text-blue-600" : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ShareModal;
