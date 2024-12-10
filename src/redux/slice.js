import { createSlice } from '@reduxjs/toolkit';

// Fetch initial users from localStorage
const fetchUsersFromLocalStorage = () => {
  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : [];
};

// Update users in localStorage
const updateUsersInLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const initialState = {
  users: fetchUsersFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      updateUsersInLocalStorage(state.users);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      updateUsersInLocalStorage(state.users);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
        updateUsersInLocalStorage(state.users);
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;

