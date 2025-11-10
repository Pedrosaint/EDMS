import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/logo/Logo.svg';
import { navControl } from '@/utilis/sidebar-links';
import { useAppDispatch, useAppSelector } from '@/redux/slice/redux.hooks';
import { AiOutlineClose } from 'react-icons/ai';
import { handleSideBarOpen } from '@/redux/slice/layout.slice';

export default function AppSidebar() {  
  const dispatch = useAppDispatch();
  const sideBarOpen = useAppSelector((state) => state.layout.sideBarOpen);
  
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location, currentPath]);

  function handleSidebar() {
    dispatch(handleSideBarOpen(false));
  }

  return (
    <>
      <section
        className={cn(
          "fixed  z-20 h-screen w-full bg-[#181a22] px-1 transition-all duration-300 ease-in-out md:w-auto lg:block",
          sideBarOpen ? "left-0" : "left-[-100%] lg:left-0"
        )}
      >
        <div className="flex h-full w-full flex-col gap-y-16 p-4 lg:w-[240px]">
          <div className="mt-6  flex items-center justify-between gap-6   ">
            <img src={Logo} alt="4core logo" className=" bg-cover h-10." />
            <AiOutlineClose
              className="h-5 w-5  text-slate-500  hover:text-[#EF7F1A] lg:hidden"
              onClick={handleSidebar}
            />
          </div>
          <ul className="flex flex-col gap-y-3 ">
            {navControl.map((data) => {
              return (
                <div key={data.id}>
                  <Link
                    to={data.path}
                    className={cn(
                      "flex items-center gap-2 rounded-md p-2 text-xs text-white",
                      currentPath == data.path
                        ? " bg-orange-500 shadow-inner backdrop-blur-md"
                        : ""
                    )}
                  >
                    {data.icon}
                    <span className="text-xs">{data.name}</span>
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
