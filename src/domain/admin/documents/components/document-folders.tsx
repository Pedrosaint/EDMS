import { Button } from "@/general/components/button/button";
import CardTwo from "@/general/components/common/card-two";
import type { Card } from "@/models/index-models";
import { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import FolderModal from "./folder-modal";
import { PiFoldersFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const DocumentFolders = () => {
  const navigate = useNavigate();
  const [folderModal, setFolderModal] = useState<boolean>(false);

  const cards: Card[] = [
    {
      id: 1,
      icon: <AiOutlineFolder size={33} className="rounded-full bg-[#3f1ad3] p-2 text-gray-50" />,
      title: "Kefoto Shot",
      description: "Visual representation of ongoing design projects.",
      documentCount: "45 documents",
    },
    {
      id: 2,
      icon: <AiOutlineFolder size={33} className="rounded-full bg-[#e11313] p-2 text-gray-50" />,
      title: "Design Projects",
      description: "Collection of design initiatives.",
      documentCount: "28 documents",
    },
    {
      id: 3,
      icon: <AiOutlineFolder size={33} className="rounded-full bg-[#14ec14] p-2 text-gray-50" />,
      title: "Design Projects",
      description: "Collection of design initiatives.",
      documentCount: "28 documents",
      },
    {
      id: 4,
      icon: <AiOutlineFolder size={33} className="rounded-full bg-[#ac0e87] p-2 text-gray-50" />,
      title: "Design Projects",
      description: "Collection of design initiatives.",
      documentCount: "28 documents",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="mt-6 font-semibold">
          <h1>Folders</h1>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => navigate("/admin/mydocuments/folder-page")}
            className="flex items-center gap-2 rounded-md border border-gray-100 bg-white px-3 py-4 cursor-pointer"
          >
            <PiFoldersFill size={15} className="text-green-600" />
            <p className="text-[12px]">All Folders</p>
          </Button>
          <Button
            onClick={() => setFolderModal(true)}
            className="flex items-center gap-2 rounded-md border border-gray-100 bg-white px-3 py-4 cursor-pointer"
          >
            <FiPlus size={12} />
            <p className="text-[12px]">Add Folder</p>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-2"
      >
        {cards.map((card, index) => (
          <div key={index} onClick={() => navigate(`/admin/mydocuments/folder-list/${card.id}`)}>
            <CardTwo {...card} />
          </div>
        ))}
      </div>

      {folderModal && <FolderModal onClose={() => setFolderModal(false)} />}
    </>
  );
};

export default DocumentFolders;