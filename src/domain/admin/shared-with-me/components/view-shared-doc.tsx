import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { dummyFiles } from "@/utilis/data-arrays";
import { BsDot } from "react-icons/bs";
import { FaFileExcel, FaFilePdf, FaFileWord } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";

interface ViewDocProps {
  open: boolean;
  onClose: () => void;
  dummyFile: (typeof dummyFiles)[0] | null;
}

const ViewSharedDoc = ({ open, onClose, dummyFile }: ViewDocProps) => {
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    }
  }, [open]);

  const handleExitComplete = () => {
    if (!open) {
      setIsVisible(false);
      onClose(); // this now happens *after* the exit animation
    }
  };

  if (!dummyFile) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key="modal-content"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
            className="w-full max-w-xl h-full bg-[#eaedf4] shadow-sm"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b-2 border-[#d5d7dc]">
              <div className="flex items-center gap-3">
                <div>
                  <h1 className="text-xl font-bold">{dummyFile.name}</h1>
                  <p className="flex items-center text-sm text-gray-500 pt-2">
                    <span className="font-bold flex items-center gap-2">
                      {dummyFile.type === "Word Document" ? (
                        <FaFileWord size={20} className="text-blue-700" />
                      ) : dummyFile.type === "PDF" ? (
                        <FaFilePdf size={20} className="text-red-600" />
                      ) : dummyFile.type === "Excel Spreadsheet" ? (
                        <FaFileExcel size={20} className="text-green-700" />
                      ) : (
                        <GrDocument size={20} />
                      )}
                      {dummyFile.type}
                    </span>
                    <BsDot size={20} />
                    {dummyFile.dateShared}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)} // trigger exit animation
                className="p-1 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metadata */}
            <div className="p-4 border-b-2 border-[#d5d7dc] space-y-2">
              <p className="text-sm">
                <span className="font-medium">Shared By:</span>{" "}
                {dummyFile.owner}
              </p>
            </div>

            {/* Preview */}
            <div className="p-4 h-[60vh] overflow-y-auto">
              <div className="bg-[#a0a4b7] h-full flex flex-col items-center justify-center rounded-lg">
                <p className="text-gray-100 mb-2">
                  {dummyFile.type.toUpperCase()} Preview
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ViewSharedDoc;
