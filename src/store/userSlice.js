import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  _id: "",
  name: "",
  email: "",
}
  
  export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      loginRedux: (state, action) => {
        console.log(action.payload.data);
        // state.users = action.payload.data;
        state._id= action.payload.data._id
        state.name = action.payload.data.name
        state.email = action.payload.data.email
 

       },
       logoutRedux : (state, action) => {
        state._id= ""
        state.name = ""
        state.email = ""

       },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loginRedux, logoutRedux } = userSlice.actions;

  export default userSlice.reducer;