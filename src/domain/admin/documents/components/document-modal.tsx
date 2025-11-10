import { useState } from "react";
import { Button } from "@/general/components/button/button";
import { IoIosClose } from "react-icons/io";
import { PiArrowFatLineUp } from "react-icons/pi";

const DocumetModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => setSelectedFile(null);

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
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
        >
          <IoIosClose size={20} />
        </button>

        {/* Modal Content */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 p-2">
            Add Documents
          </h2>

          <div>
            <p>Name</p>
            <input
              type="text"
              className="w-full mt-2 border border-gray-300 rounded-md p-2 outline-none"
              placeholder="Enter Name"
            />
          </div>

          <div className="mt-3">
            <p>Title</p>
            <input
              type="text"
              className="w-full mt-2 border border-gray-300 rounded-md p-2 outline-none"
              placeholder="Enter title"
            />
          </div>

          <div className="mt-4">
            <p className="mb-2 font-medium">Attach Documents</p>

            <div className="w-full border-2 border-dashed border-gray-300 rounded-md p-10 text-center text-gray-600 relative min-h-[150px]">
              <input
                type="file"
                id="fileUpload"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              {/* Conditionally render */}
              {!selectedFile ? (
                <div>
                  <PiArrowFatLineUp
                    size={70}
                    className="mx-auto text-gray-400"
                  />
                  <p className="text-base mt-2">Drag and Drop here</p>
                  <p className="text-sm my-1">or</p>
                  <label
                    htmlFor="fileUpload"
                    className="text-blue-600 font-medium cursor-pointer"
                  >
                    Browse files
                  </label>
                </div>
              ) : (
                <div className="text-left text-sm text-gray-700">
                  <p>
                    <strong>File:</strong> {selectedFile.name}
                  </p>
                  <p>
                    <strong>Size:</strong>{" "}
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                  <button
                    onClick={removeFile}
                    className="mt-2 text-red-500 text-xs underline"
                  >
                    Remove file
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-3">
            <p>Description</p>
            <textarea
              className="w-full mt-1 border border-gray-300 rounded-md p-2 h-30 outline-none"
              placeholder="Enter description"
            ></textarea>
            <p className="text-sm text-gray-400">
              Accepted File Types: .doc, .pdf, .xlcs, .docx files.
            </p>
          </div>

          <Button
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
};

export default DocumetModal;
