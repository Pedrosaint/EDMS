import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



// export type pageSliderEnum = 'Closed';

type TInitialState = {
    sideBarOpen: boolean;
}

const initialState: TInitialState = {
    sideBarOpen: false,
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    handleSideBarOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.sideBarOpen = payload;
    },
  },
});

export const { handleSideBarOpen} = layoutSlice.actions;
export default layoutSlice.reducer;