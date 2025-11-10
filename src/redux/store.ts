import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "@/domain/admin/documents/slice/folder-slice"; 
import layoutReducer from "@/redux/slice/layout.slice";

export const store = configureStore({
  reducer: {
    folder: folderReducer,
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
