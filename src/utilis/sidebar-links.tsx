import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import type { TsideBarLinks } from "../models/index-models";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaShareAltSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";


  export const navControl: TsideBarLinks[] = [
    {
        id: 1,
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: <LuLayoutDashboard size={20}/>
    },
    {
        id: 2,
        name: 'My Documents',
        path: '/admin/mydocuments',
        icon: <HiOutlineDocumentArrowDown size={20}/>
    },
    // {
    //     id: 3,
    //     name: 'Upload Document',
    //     path: '/admin/upload-document',
    //     icon: <GrDocumentUpload size={20}/>
    // },
    {
        id: 4,
        name: 'Shared with me',
        path: '/admin/shared-with-me',
        icon: <LiaShareAltSolid size={20}/>
    },
    {
        id: 5,
        name: 'Settings',
        path: '/admin/settings',
        icon: <IoSettingsOutline size={20}/>
    }
  ]