import { Button } from "@/general/components/button/button";
import { IoIosClose } from "react-icons/io"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFolder } from "@/domain/admin/documents/slice/folder-slice";
import { useState } from "react";
import { folderColors } from "@/utilis/data-arrays";



const FolderModal = ({ onClose }: { onClose: () => void }) => {
  const randomColor =
    folderColors[Math.floor(Math.random() * folderColors.length)];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFolderUpload = () => {
    dispatch(
      addFolder({
        id: 0,
        title,
        description,
        documentCount: "0 documents",
        iconColor: randomColor, 
      })
    );
    onClose();
    navigate("/admin/mydocuments/folder-page");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-[#e7e6e6] rounded-lg p-6 w-full max-w-2xl shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
        >
          <IoIosClose size={20} />
        </button>

        {/* Modal Content */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 p-2">
            Add Folder
          </h2>

          <div className="mt-3">
            <p>Title</p>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-full mt-2 border border-gray-300 rounded-md p-2 outline-none"
              placeholder="Enter title"
            />
          </div>

          <div className="mt-3">
            <p>Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md p-2 h-40 outline-none"
              placeholder="Enter description"
            ></textarea>
          </div>

          <Button
          onClick={handleFolderUpload}
            size="default"
            variant="outline"
            className="w-full mt-4 py-5 cursor-pointer"
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FolderModal