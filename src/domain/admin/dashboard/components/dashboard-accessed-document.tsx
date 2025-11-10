import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/general/components/common/table";
import { HiEye } from "react-icons/hi";
import { documents } from "@/utilis/data-arrays";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import EditModal from "./edit-modal";
import { FaFileExcel, FaFilePdf, FaFileWord } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import ViewModal from "./view-modal";

const DashboardAccessedDocument = () => {
  const [editModal, setEditModal] = useState(false);
  const [viewModal, setViewModal] = useState<{
    open: boolean;
    document: (typeof documents)[0] | null;
  }>({ open: false, document: null });

  return (
    <>
      <div className="overflow-x-auto mt-4 border border-gray-100 rounded-md shadow-sm bg-[#eaedf4]">
        <h2 className="font-semibold mb-4 px-6 py-5">
          Recently Accessed Documents
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Uploaded By</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center gap-2">
                  {doc.type === "Word Document" ? (
                    <FaFileWord size={20} className="text-blue-700" />
                  ) : doc.type === "PDF" ? (
                    <FaFilePdf size={20} className="text-red-600" />
                  ) : doc.type === "Excel Spreadsheet" ? (
                    <FaFileExcel size={20} className="text-green-700" />
                  ) : (
                    <GrDocument size={20} />
                  )}
                  {doc.name}
                </TableCell>
                <TableCell>{doc.createdAt}</TableCell>
                <TableCell
                  className={`text-xs font-medium ${
                    doc.status === "Uploaded"
                      ? "text-green-600"
                      : doc.status === "Processing"
                      ? "text-yellow-700"
                      : "text-red-600"
                  }`}
                >
                  {doc.status}
                </TableCell>
                <TableCell>{doc.owner}</TableCell>
                <TableCell>{doc.lastModified}</TableCell>
                <TableCell className="flex items-center gap-3">
                  <AiFillEdit
                    onClick={() => setEditModal(true)}
                    className="cursor-pointer text-yellow-500 shrink-0"
                  />
                  <HiEye
                    onClick={() => {
                      setViewModal({ open: false, document: null });
                      setTimeout(() => {
                        setViewModal({ open: true, document: doc });
                      }, 50);
                    }}
                    className="cursor-pointer text-green-600"
                  />
                  <MdDelete className="cursor-pointer text-red-600" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {viewModal.open && viewModal.document && (
        <ViewModal
          key={viewModal.document.name}
          open={viewModal.open}
          onClose={() => setViewModal({ open: false, document: null })}
          document={viewModal.document}
        />
      )}

      {editModal && <EditModal onClose={() => setEditModal(false)} />}
    </>
  );
};

export default DashboardAccessedDocument;
