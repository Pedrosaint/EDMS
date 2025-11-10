import { Outlet } from 'react-router-dom';
import AppNavbar from '../app/app-navbar';

const DashboardLayout = () => {
  return (
    <>
     <AppNavbar 
      title="Dashboard" 
      subtitle="Overview documents related to 4core" 
    />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
