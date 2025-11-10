import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Folder {
  id: number;
  title: string;
  description: string;
  documentCount: string;
  iconColor: string;
}

interface FolderState {
  folders: Folder[];
}

const initialState: FolderState = {
  folders: [],
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    addFolder: (state, action: PayloadAction<Folder>) => {
      if (state.folders.length < 4) {
        state.folders.push(action.payload);
      }
    },
  },
});

export const { addFolder } = folderSlice.actions;
export default folderSlice.reducer;
