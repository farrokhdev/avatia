import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  id: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (
      state: any,
      action: PayloadAction<any>
    ) => {
      return { ...action.payload };
    },
    update: (
      state: any,
      action: PayloadAction<Partial<any>>
    ) => {
      return { ...state, ...action.payload };
    },
    logout: (state: any) => {
      return { ...state, ...initialState };
    }
  }
});

export const { set, update, logout } = userSlice.actions;

export default userSlice.reducer;
