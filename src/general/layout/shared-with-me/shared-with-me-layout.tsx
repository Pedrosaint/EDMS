import { AiFillBell } from "react-icons/ai";
import { Outlet } from "react-router-dom";


const SharedWithMeLayout = () => {
  return (
    <>
      <nav className="flex h-fit items-center justify-between border-b border-gray-300 pb-2 pt-4 lg:pt-8">
        <div className="inline-flex h-12  flex-col items-start justify-start gap-px">
          <div className="flex items-center gap-1">
            <span className="font-semibold">Shared with me</span>
          </div>
          <div className="font-['Open Sans'] mt-1.5 w-full text-xs font-normal leading-tight text-slate-500"></div>
        </div>

        <div className="flex items-center gap-1">
          <AiFillBell className="h-4 w-4 text-[#EF7F1A] lg:h-5 lg:w-5" />
          <p className="text-slate-700">Notifications</p>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default SharedWithMeLayout
