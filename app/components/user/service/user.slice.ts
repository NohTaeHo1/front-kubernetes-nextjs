import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import { findAllUsers, findUserById, login } from "./user.service";

const userThunks = [findAllUsers, findUserById, login];

const status = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const handleFulfilled = (state: any, { payload }: any) => {
  console.log("------------------ conclusion ---------------");
  state.array = payload;
  console.log(state.array);
};
const handlePending = (state: any) => {};
const handleRejected = (state: any) => {};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}, //내부 연산
  extraReducers: (builder) => {
    //자바연동
    const { pending, rejected } = status; //진행중, 거부
    builder
      .addCase(findAllUsers.fulfilled, handleFulfilled)
      .addCase(findUserById.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(login.fulfilled, (state: any, { payload }: any) => {
        state.message = payload;
      });
  },
});

export const getAllUsers = (state: any) => state.user.array;
export const getUserById = (state: any) => state.user.array;
export const getUser = (state: any) => state.user.message;

export const {} = userSlice.actions;

export default userSlice.reducer;
