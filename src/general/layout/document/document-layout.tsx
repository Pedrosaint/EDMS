import { Outlet } from 'react-router-dom';
import { AiFillBell } from 'react-icons/ai';
import { Button } from '@/general/components/button/button';
import { LuUserRoundPlus } from 'react-icons/lu';
import { IoShareSocial } from 'react-icons/io5';
import { FiPlus } from 'react-icons/fi';
import { useState } from 'react';
import DocumentModal from '@/domain/admin/documents/components/document-modal';
import ShareModal from '@/domain/admin/shared-with-me/components/share-modal';

const DocumentLayout = () => {
  const [docModal, setDocModal] = useState<Boolean>(false);
  const [shareModal, setShareModal] = useState<Boolean>(false);
  
  return (
    <>
      <nav className="flex h-fit items-center justify-between border-b border-gray-300 pb-2 pt-4 lg:pt-8">
        <div className="inline-flex h-12  flex-col items-start justify-start gap-px">
          <div className="flex items-center gap-1">
            <span className="font-semibold">My Documents</span>
          </div>
          <div className="font-['Open Sans'] mt-1.5 w-full text-xs font-normal leading-tight text-slate-500"></div>
        </div>
        <div className="flex items-center justify-end gap-1 lg:-mt-6 lg:gap-2">
          {/* <div className="flex items-center">
            <h1 className="z-10 rounded-full bg-[#a31e1e] p-1 text-gray-100 text-[10px] -ml-1">
              KO
            </h1>
            <h1 className="z-20 rounded-full bg-[#1e39a3] p-1 text-gray-100 text-[10px] -ml-1">
              AF
            </h1>
            <h1 className="z-30 rounded-full bg-[#30a31e] p-1 text-gray-100 text-[10px] -ml-1">
              KO
            </h1>
            <h1 className="z-40 rounded-full bg-[#1e8fa3] p-1 w-5 text-center text-gray-100 text-[10px] -ml-1">
              9
            </h1>
          </div>
          <h1>4 members</h1> */}
          <Button
            onClick={() => setShareModal(true)}
            className="flex items-center gap-2 rounded-md shadow-md border border-gray-200 bg-white px-3 py-4 cursor-pointer"
          >
            <IoShareSocial size={12} />
            <p className="text-[12px]">Share</p>
          </Button>

          {/* <Button className="flex items-center gap-2 rounded-md shadow-md border border-gray-200 bg-white px-3 py-4 cursor-pointer">
            <LuUserRoundPlus size={12} />
            <p className="text-[12px]">Invite Member</p>
          </Button> */}

          <Button
            onClick={() => setDocModal(true)}
            className="flex items-center gap-2 rounded-md shadow-md border text-white border-gray-400 bg-blue-800 px-3 py-4 cursor-pointer"
          >
            <FiPlus size={12} />
            <p className="text-[12px]">New Document</p>
          </Button>
          <div className="flex items-center gap-1">
            <AiFillBell className="h-4 w-4 text-[#EF7F1A] lg:h-5 lg:w-5" />
          </div>
        </div>
      </nav>

      {shareModal && <ShareModal onClose={() => setShareModal(false)} />}
      {docModal && <DocumentModal onClose={() => setDocModal(false)} />}
      <Outlet />
    </>
  );
};

export default DocumentLayout;
