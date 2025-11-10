import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { TbDownload } from "react-icons/tb";
import { documents } from "@/utilis/data-arrays";
import { BsDot } from "react-icons/bs";
import { FaFileExcel, FaFilePdf, FaFileWord } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import DocumentPreview from "@/general/components/common/document-preview";

interface ViewModalProps {
  open: boolean;
  onClose: () => void;
  document: (typeof documents)[0] | null;
}

const ViewModal = ({ open, onClose, document }: ViewModalProps) => {
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

  if (!document) return null;

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
                  <h1 className="text-xl font-bold">{document.name}</h1>
                  <p className="flex items-center text-sm text-gray-500 pt-2">
                    <span className="font-bold flex items-center gap-2">
                      {document.type === "Word Document" ? (
                        <FaFileWord size={20} className="text-blue-700" />
                      ) : document.type === "PDF" ? (
                        <FaFilePdf size={20} className="text-red-600" />
                      ) : document.type === "Excel Spreadsheet" ? (
                        <FaFileExcel size={20} className="text-green-700" />
                      ) : (
                        <GrDocument size={20} />
                      )}
                      {document.type}
                    </span>
                    <BsDot size={20} />
                    {document.createdAt}
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
              <p className="text-sm flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <span
                  className={`text-xs font-medium ${
                    document.status === "Uploaded"
                      ? "text-green-600"
                      : document.status === "Processing"
                      ? "text-yellow-700"
                      : "text-red-600"
                  }`}
                >
                  {document.status}
                </span>
              </p>
              <p className="text-sm">
                <span className="font-medium">Uploaded By:</span>{" "}
                {document.owner}
              </p>
              {document.lastModified && (
                <p className="text-sm">
                  <span className="font-medium">Last Modified:</span>{" "}
                  {document.lastModified}
                </p>
              )}
            </div>

            {/* Preview */}
            <DocumentPreview document={document} />

            {/* Actions */}
            <div className="p-4 border-t-2 border-[#d5d7dc] flex justify-end gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer">
                <TbDownload className="w-4 h-4" /> Download
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ViewModal;
