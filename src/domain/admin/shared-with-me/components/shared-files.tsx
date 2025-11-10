import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/general/components/common/table";
import { HiEye } from "react-icons/hi";
import { FaFileExcel, FaFilePdf, FaFileWord } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { dummyFiles } from "@/utilis/data-arrays";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import Select from "react-select";
import { optionsOne, optionsTwo, optionsThree } from "@/utilis/data-arrays";
import ViewSharedDoc from "./view-shared-doc";



const SharedFiles = () => {
  const [search, setSearch] = useState("");
  const [viewFile, setViewFile] = useState({ open: false, document: dummyFiles[0] });


  const filteredFiles = dummyFiles.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-4 border border-gray-100 rounded-md shadow-sm p-6 bg-[#eaedf4]">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center relative">
          <GoSearch size={25} className="text-gray-500 absolute pl-2" />
          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-md w-120 indent-4 outline-none bg-white border-gray-300"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Select
            options={optionsOne}
            defaultValue={optionsOne[0]}
            className="w-35 text-sm"
          />

          <Select
            options={optionsTwo}
            defaultValue={optionsTwo[0]}
            className="w-35 text-sm"
          />

          <Select
            options={optionsThree}
            defaultValue={optionsThree[0]}
            className="w-35 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Date shared</TableHead>
              <TableHead>Access</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFiles.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell></TableCell>
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
                <TableCell>{doc.owner}</TableCell>
                <TableCell>{doc.dateShared}</TableCell>
                <TableCell>{doc.access}</TableCell>
                <TableCell className="flex items-center gap-3">
                  <HiEye
                    onClick={() => {     
                    setViewFile({ open: false, document: dummyFiles[0] });
                    setTimeout(() => {
                    setViewFile({ open: true, document: doc });
                    }, 50);
                  }}
                    className="cursor-pointer text-green-600"
                    title="View"
                  />
                  <FiDownload
                    className="cursor-pointer text-blue-600"
                    title="Download"
                  />
                  <MdDelete
                    className="cursor-pointer text-red-600"
                    title="Delete"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/*===Pagination===*/}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">
          Showing 1 to 6 of {filteredFiles.length} entries
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-[#fbfaff] text-gray-600 border-gray-300 border rounded-sm hover:bg-gray-100 cursor-pointer">
            Previous
          </button>
          <button className="px-3 py-1 text-sm bg-[#fbfaff] border text-gray-600 border-gray-300 rounded-sm hover:bg-gray-100 outline-none cursor-pointer">
            Next
          </button>
        </div>
      </div>

      {viewFile.open && viewFile.document && (
        <ViewSharedDoc
          key={viewFile.document.name}
          open={viewFile.open}
          onClose={() => setViewFile({ open: false, document: dummyFiles[0] })}
          dummyFile={viewFile.document}
        />
      )}
    </div>
  );
};

export default SharedFiles;
