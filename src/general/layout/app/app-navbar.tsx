// // import { AiFillBell } from "react-icons/ai";
// // import type { HeaderProps } from '@/models/index-models';
// // import { HiOutlineMenuAlt1 } from "react-icons/hi";
// // import { useAppDispatch } from '@/redux/slice/redux.hooks';
// // import { handleSideBarOpen } from '@/redux/slice/layout.slice';
// // import { useState } from "react";
// // import NotificationModal from "./modal/notification-modal";

// // export default function AppNavbar({ title, subtitle }: HeaderProps) {

// // const dispatch = useAppDispatch();
// //   const handleSidebar =() => {
// //     dispatch(handleSideBarOpen(true));
// //   }
// //   const [notificationModal, setNotificationModal] = useState(false);

// //   return (
// //     <nav className="flex h-fit items-center justify-between border-b border-gray-300 pb-2 pt-4 lg:pt-8">
// //       <div
// //         className="block rounded-md p-1 text-slate-600 hover:bg-slate-600/10 hover:text-[#EF7F1A] lg:hidden lg:p-3"
// //         onClick={handleSidebar}
// //       >
// //         <HiOutlineMenuAlt1 className="h-5 w-5" />
// //       </div>

// //       <div className="inline-flex h-12  flex-col items-start justify-start gap-px">
// //         <div className="flex items-center gap-1">
// //           <span className="font-semibold">{title}</span>
// //         </div>
// //         <div className="font-['Open Sans'] mt-1.5 w-full text-xs font-normal leading-tight text-slate-500">
// //           {subtitle}
// //         </div>
// //       </div>
// //       <div className="flex w-[30%] items-center justify-end gap-1 lg:-mt-6 lg:gap-4">
// //         <div className="flex items-center gap-1">
// //           <AiFillBell 
// //           onClick={() => setNotificationModal(true)}
// //           className="h-4 w-4 text-[#EF7F1A] lg:h-5 lg:w-5" />
// //           <p className="text-slate-700 hidden md:block">Notifications</p>
// //         </div>
// //       </div>

// //       {notificationModal && <NotificationModal onClose={() => setNotificationModal(false)} />}
// //     </nav>
// //   );
// // }



// import { AiFillBell } from "react-icons/ai";
// import type { HeaderProps } from "@/models/index-models";
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import { useAppDispatch } from "@/redux/slice/redux.hooks";
// import { handleSideBarOpen } from "@/redux/slice/layout.slice";
// import { useState } from "react";
// import NotificationModal from "./modal/notification-modal";

// export default function AppNavbar({ title, subtitle }: HeaderProps) {
//   const dispatch = useAppDispatch();
//   const handleSidebar = () => {
//     dispatch(handleSideBarOpen(true));
//   };
//   const [notificationModal, setNotificationModal] = useState(false);

//   return (
//     <nav className="flex h-fit items-center justify-between border-b border-gray-300 pb-2 pt-4 lg:pt-8">
//       <div
//         className="block rounded-md p-1 text-slate-600 hover:bg-slate-600/10 hover:text-[#EF7F1A] lg:hidden lg:p-3"
//         onClick={handleSidebar}
//       >
//         <HiOutlineMenuAlt1 className="h-5 w-5" />
//       </div>

//       <div className="inline-flex h-12  flex-col items-start justify-start gap-px">
//         <div className="flex items-center gap-1">
//           <span className="font-semibold">{title}</span>
//         </div>
//         <div className="font-['Open Sans'] mt-1.5 w-full text-xs font-normal leading-tight text-slate-500">
//           {subtitle}
//         </div>
//       </div>

//       <div className="flex w-[30%] items-center justify-end gap-1 lg:-mt-6 lg:gap-4">
//         <div
//           className="flex items-center gap-1 cursor-pointer"
//           onClick={() => setNotificationModal(true)}
//         >
//           <AiFillBell className="h-4 w-4 text-[#EF7F1A] lg:h-5 lg:w-5" />
//           <p className="text-slate-700 hidden md:block">Notifications</p>
//         </div>
//       </div>

//       <NotificationModal
//         isOpen={notificationModal}
//         onClose={() => setNotificationModal(false)}
//       />
//     </nav>
//   );
// }



import { AiFillBell } from "react-icons/ai";
import type { HeaderProps } from "@/models/index-models";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useAppDispatch } from "@/redux/slice/redux.hooks";
import { handleSideBarOpen } from "@/redux/slice/layout.slice";
import { useState } from "react";
import NotificationModal from "./modal/notification-modal";

// Move mock notifications here
const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "success",
    title: "Payment Successful",
    message: "Your subscription has been renewed successfully.",
    timestamp: "2 minutes ago",
    read: false,
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    message: "Sarah Johnson sent you a message about the project.",
    timestamp: "15 minutes ago",
    read: false,
  },
  {
    id: "3",
    type: "warning",
    title: "Storage Almost Full",
    message: "Your storage is 90% full. Consider upgrading your plan.",
    timestamp: "1 hour ago",
    read: true,
  },
];
export interface Notification {
  id: string;
  type: "success" | "warning" | "info" | "message";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  avatar?: string;
}


export default function AppNavbar({ title, subtitle }: HeaderProps) {
  const dispatch = useAppDispatch();
  const handleSidebar = () => {
    dispatch(handleSideBarOpen(true));
  };

  const [notificationModal, setNotificationModal] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <nav className="flex h-fit items-center justify-between border-b border-gray-300 pb-2 pt-4 lg:pt-8">
      <div
        className="block rounded-md p-1 text-slate-600 hover:bg-slate-600/10 hover:text-[#EF7F1A] lg:hidden lg:p-3"
        onClick={handleSidebar}
      >
        <HiOutlineMenuAlt1 className="h-5 w-5" />
      </div>

      <div className="inline-flex h-12 flex-col items-start justify-start gap-px">
        <div className="flex items-center gap-1">
          <span className="font-semibold">{title}</span>
        </div>
        <div className="font-['Open Sans'] mt-1.5 w-full text-xs font-normal leading-tight text-slate-500">
          {subtitle}
        </div>
      </div>

      <div className="flex w-[30%] items-center justify-end gap-1 lg:-mt-6 lg:gap-4">
        <div
          className="relative flex items-center gap-1 cursor-pointer"
          onClick={() => setNotificationModal(true)}
        >
          {unreadCount > 0 && (
            <span className="absolute -top-1 left-2 bg-red-600 text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
          <AiFillBell className="h-5 w-5 text-[#EF7F1A]" />
          <p className="text-slate-700 hidden md:block ml-1">Notifications</p>
        </div>
      </div>

      <NotificationModal
        isOpen={notificationModal}
        onClose={() => setNotificationModal(false)}
        notifications={notifications}
        setNotifications={setNotifications}
      />
    </nav>
  );
}
