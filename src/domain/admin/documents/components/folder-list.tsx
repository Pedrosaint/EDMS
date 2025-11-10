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
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";


const FolderList = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
  const [editDoc, setEditDoc] = useState(false);
  const [viewDoc, setViewDoc] = useState<{ open: boolean; document: (typeof dummyDocuments)[0] }>({ open: false, document: dummyDocuments[0] });
  return (
    <>
      <button
        onClick={() => navigate("/admin/mydocuments")}
        className="flex items-center gap-2 text-md font-semibold mt-4 cursor-pointer"
      >
        <IoArrowBackOutline size={18} />
        <h1> Back </h1>
      </button>

        <div className="flex items-center relative mt-3">
        <GoSearch size={25} className="text-gray-500 absolute pl-2" />
        <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-md w-120 indent-4 outline-none bg-white border-gray-300"
        />
        </div>
      <div className="overflow-x-auto mt-4 border border-gray-100 rounded-md shadow-sm p-10 bg-[#eaedf4]">
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
                      className="cursor-pointer text-green-600"
                    />
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
            onClose={() =>
              setViewDoc({ open: false, document: dummyDocuments[0] })
            }
            dummyDocument={viewDoc.document}
          />
        )}
      </div>
    </>
  );
}
export default FolderList