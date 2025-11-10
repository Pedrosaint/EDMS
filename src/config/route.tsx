import DashboardView from "@/domain/admin/dashboard/view/dashboard-view";
import FolderList from "@/domain/admin/documents/components/folder-list";
import FolderPage from "@/domain/admin/documents/components/folder-page";
import DocumentView from "@/domain/admin/documents/view/document-view";
import SharedView from "@/domain/admin/shared-with-me/view/shared-view";
import ForgotPassword from "@/general/auth/components/forgot-password";
import Login from "@/general/auth/components/login";
import AppLayout from "@/general/layout/app/app-layout";
import DashboardLayout from "@/general/layout/dashboard/dashboard-layout";
import DocumentLayout from "@/general/layout/document/document-layout";
import SharedWithMeLayout from "@/general/layout/shared-with-me/shared-with-me-layout";
import { createBrowserRouter, Navigate } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "admin",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardView />,
          },
        ],
      },
      {
        path: "mydocuments",
        element: <DocumentLayout />,
        children: [
          {
            index: true,
            element: <DocumentView />,
          },
          {
            path: "folder-page",
            element: <FolderPage />,
          },
          {
            path: "folder-list/:id",
            element: <FolderList />,
          },
        ],
      },
      {
        path: "shared-with-me",
        element: <SharedWithMeLayout />,
        children: [
          {
            index: true,
            element: <SharedView />,
          },
        ],
      },
    ],
  },
]);


export default route
