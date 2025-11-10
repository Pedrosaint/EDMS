import type { RecentCardProps } from "@/models/index-models";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoChatboxOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { FiCopy, FiFolder, FiShare, FiTrash2 } from "react-icons/fi";
import { Button } from "../button/button";

const RecentDocCard = ({
  title,
  platform,
  description,
  stats,
  updateText,
}: RecentCardProps) => {

    const [show, setShow] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShow(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
  return (
    <div className="relative rounded-md overflow-hidden shadow-sm bg-[#eaedf4]">
      {/* Header Section */}
      <div className={`h-38  text-white p-4 border-b border-gray-200`}>
       <div className="flex justify-between">
       <div className="">
          <div className="text-black mb-1">
            <p className="text-sm font-medium">{title}</p>
            <h2 className="text-md font-bold">{platform}</h2>
          </div>
          <span className="text-xs bg-gray-400 rounded-full px-2 py-1">
            {updateText}
          </span>
        </div>
      <Button
      onClick={() => setShow((prev) => !prev)}
      size='default'
      variant='default'
      className="cursor-pointer"
      >
      <HiOutlineDotsHorizontal size={20} color="black"/>
      </Button>
       </div>

       {show && (
        <div className="absolute right-2 top-15 w-40 bg-gray-100 px-2 rounded-md shadow-lg z-50">
          <div className="py-2 text-sm text-gray-700">
          <Button variant="default_sm" size="default_sm" className="w-full justify-start gap-2 cursor-pointer">
            <FiShare size={16} /> Share
            </Button>

            <Button variant="default_sm" size="default_sm" className="w-full justify-start gap-2 cursor-pointer">
            <FiFolder size={16} /> Move To Folder
            </Button>

            <Button variant="default_sm" size="default_sm" className="w-full justify-start gap-2 cursor-pointer">
            <FiCopy size={16} /> Duplicate
            </Button>

            <Button variant="destructive" size="default_sm" className="w-full justify-start gap-2 cursor-pointer">
            <FiTrash2 size={16} /> Remove
            </Button>
          </div>
        </div>
      )}
      </div>


      {/* Content Section */}
      <div className="p-4 border-t border-gray-300">
        <div className="space-y-2 mb-4">
          {description.map((line, index) => (
            <p key={index} className="text-sm text-gray-600">
              {line}
            </p>
          ))}
        </div>

        <footer className="flex justify-between items-center text-sm">
       <div className="flex items-center gap-1">
       <IoChatboxOutline size={20}/>
       <div className="text-gray-500">{stats.comments}</div>
       </div>
       <div 
        className={`font-medium ${
            stats.status.toLowerCase() === 'in progress' 
            ? 'text-yellow-500' 
            : 'text-green-500'
        }`}
        >
        {stats.status}
        </div>
        </footer>
      </div>
    </div>
  );
};

export default RecentDocCard;