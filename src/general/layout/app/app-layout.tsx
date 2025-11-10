// import { motion } from 'framer-motion';
// import { Outlet } from 'react-router-dom';
// import dayjs from 'dayjs';

// import AppSidebar from './app-sidebar';

// export default function AppLayout() {
//   return (
//     <div className="md:flex min-h-screen w-screen bg-[#F5F6FA]">
//       {/* Sidebar */}
//       <aside className="w-[250px] hidden lg:block">
//         <AppSidebar />
//       </aside>

//       {/* Main content */}
//       <main className="flex flex-col flex-1 px-2 lg:px-4">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5, type: 'spring' }}
//           className="flex-1"
//         >
//           <Outlet />
//         </motion.div>

//         <footer className="my-4 flex justify-center text-[10px] text-gray-400">
//           &copy; {dayjs().format('YYYY')} 4Core EDMS. All Rights Reserved
//         </footer>
//       </main>
//     </div>
//   );
// }



import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import dayjs from 'dayjs';
import AppSidebar from './app-sidebar';

export default function AppLayout() {
  return (
    <div className="md:flex min-h-screen w-full bg-[#F5F6FA] overflow-x-hidden"> {/* Changed w-screen to w-full + overflow-x-hidden */}
      {/* Sidebar */}
      <aside className="w-[250px] hidden lg:block fixed h-full"> {/* Added fixed positioning */}
        <AppSidebar />
      </aside>

      {/* Main content */}
      <main className="flex flex-col flex-1 px-2 lg:px-4 lg:ml-[250px]"> {/* Added margin for fixed sidebar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="flex-1 w-full overflow-x-auto" 
        >
          <Outlet />
        </motion.div>

        <footer className="my-4 flex justify-center text-[10px] text-gray-400">
          &copy; {dayjs().format('YYYY')} 4Core EDMS. All Rights Reserved
        </footer>
      </main>
    </div>
  );
}