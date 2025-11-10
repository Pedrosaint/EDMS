import { IoIosClose } from "react-icons/io";


const EditModal = ({ onClose }: { onClose: () => void }) => {

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-[#e7e6e6]  rounded-lg p-6 w-full max-w-2xl shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-800 hover:text-gray-500 text-xl cursor-pointer"
        >
          <IoIosClose size={20} />
        </button>

        {/* Modal Content */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 p-2">
            Document
          </h2>

          <div>
            <p>Name</p>
            <input
              type="text"
              className="w-full mt-2 border border-gray-400 rounded-md p-2 outline-none"
              placeholder="Enter Name"
            />
          </div>

          <div className="mt-3">
            <p>Uploaded By</p>
            <input
              type="text"
              className="w-full mt-2 border border-gray-400 rounded-md p-2 outline-none"
              placeholder="Enter Owner"
            />
          </div>

          <div className="mt-3">
            <p>Description</p>
            <textarea
              className="w-full mt-1 border border-gray-400 rounded-md p-2 h-30 outline-none"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div className="flex items-center gap-2 pt-4">
            <button
              className="text-gray-900 bg-gray-300 px-2 py-2 rounded-md text-sm cursor-pointer w-full
             transition-all duration-200 ease-in-out hover:bg-gray-400 active:scale-95"
            >
              Cancel
            </button>

            <button
              className="text-white bg-orange-500/80 px-2 py-2 rounded-md text-sm cursor-pointer w-full
             transition-all duration-200 ease-in-out hover:bg-orange-600 active:scale-95"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
