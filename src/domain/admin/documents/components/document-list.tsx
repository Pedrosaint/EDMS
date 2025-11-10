import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/general/components/common/table"
import { HiEye } from "react-icons/hi"
import { dummyDocuments } from "@/utilis/data-arrays";
import { FaFileExcel, FaFilePdf, FaFileWord } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import ViewDoc from "./view-doc";
import EditDoc from "./edit-doc";


const DocumentList = () => {
  const [editDoc, setEditDoc] = useState(false);
  const [viewDoc, setViewDoc] = useState<{ open: boolean; document: (typeof dummyDocuments)[0] }>({ open: false, document: dummyDocuments[0] });
  return (
    <div className="overflow-x-auto mt-4 border border-gray-100 rounded-md shadow-sm bg-[#eaedf4]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Uploaded by</TableHead>
            <TableHead>Date Uploaded</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyDocuments.map((doc) => (
            <>
              <TableRow key={doc.id}>
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
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.uploadedBy}</TableCell>
                <TableCell>{doc.dateUploaded}</TableCell>
                <TableCell
                  className={`text-xs font-medium ${
                    doc.status === "Approved"
                      ? "text-green-600"
                      : doc.status === "Pending"
                      ? "text-yellow-700"
                      : "text-gray-600"
                  }`}
                >
                  {doc.status}
                </TableCell>
                <TableCell className="relative flex items-center gap-3">
                  <AiFillEdit
                    className="cursor-pointer text-orange-400"
                    onClick={() => setEditDoc(true)}
                  />
                  <HiEye 
                  onClick={() => setViewDoc({ open: true, document: doc })}
                  className="cursor-pointer text-green-600" />
                  <MdDelete className="cursor-pointer text-red-600" />
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>


      {/* {editDoc && <EditDoc onClose={() => setEditDoc(false)} />} */}
      {viewDoc.open && viewDoc.document && (
        <ViewDoc
          key={viewDoc.document.name}
          open={viewDoc.open}
          onClose={() => setViewDoc({ open: false, document: dummyDocuments[0] })}
          dummyDocument={viewDoc.document}
        />
      )}
    </div>
  );
}
export default DocumentList