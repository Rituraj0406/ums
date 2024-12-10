import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../../redux/slice';

// Custom regex for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const AddUser = ({ user, onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: user ? user.id : Date.now(),
    username: user ? user.username : '',
    email: user ? user.email : '',
    role: user ? user.role : 'user',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};

    if (!formData.username) {
      errors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      errors.username = 'Username should be at least 3 characters long';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.role) {
      errors.role = 'Role is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (user) {
        dispatch(updateUser(formData));
      } else {
        dispatch(addUser(formData));
      }
      onClose(); 
    }
  };

  useEffect(() => {
    if (user) {
      setFormData({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      });
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={Boolean(errors.username)}
        helperText={errors.username}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        select
        label="Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={Boolean(errors.role)}
        helperText={errors.role}
      >
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="user">User</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {user ? 'Update User' : 'Add User'}
      </Button>
    </form>
  );
};

export default AddUser;
