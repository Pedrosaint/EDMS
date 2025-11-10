import CardTwo from "@/general/components/common/card-two";
import { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type{ RootState } from "@/redux/store";


const FolderPage = () => {
    const folders = useSelector((state: RootState) => state.folder.folders);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

  return (
    <>
      <button
        onClick={() => navigate("/admin/mydocuments")}
        className="flex items-center gap-2 text-md font-semibold mt-4 cursor-pointer"
      >
        <IoArrowBackOutline size={18} />
        <h1> Back </h1>
      </button>
      <div className="flex justify-between items-center mt-6 mb-2">
        <div className="font-semibold text-2xl">
          <h1>Folders</h1>
        </div>

        <div className="flex items-center relative">
          <GoSearch size={25} className="text-gray-500 absolute pl-2" />
          <input
            type="text"
            placeholder="Search folders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-md w-120 indent-4 outline-none bg-white border-gray-300"
          />
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-2"
      >
        {folders.map((folder) => (
          <div
            key={folder.id}
            onClick={() => navigate(`/admin/mydocuments/folder-list/${folder.id}`)}
            className="cursor-pointer"
          >
            <CardTwo
              icon={
                <AiOutlineFolder
                  size={33}
                  style={{ backgroundColor: folder.iconColor }}
                  className={`rounded-full p-2 text-gray-50`}
                />
              }
              id={folder.id}
              title={folder.title}
              description={folder.description}
              documentCount={folder.documentCount}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FolderPage;



