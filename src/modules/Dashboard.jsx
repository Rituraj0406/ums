import React, {useState} from 'react';
import Button from '../components/Button';
import AddIcon from '@mui/icons-material/Add';
import UserList from './Users/UserList';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import AddUser from './Users/AddUser';

const Dashboard = () => {
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false); 
  const handleOpenAddUserForm = () => {
    setOpenAddUserDialog(true);
  }
  const handleClose = () => {
    setOpenAddUserDialog(false);
  }
  return (
    <div className=''>
      <div className='flex justify-end items-center p-4'>
        <Button label="Add User" icon={<AddIcon />} color='primary' onClick={handleOpenAddUserForm} />
      </div>
      <div>
        <UserList/>
      </div>
      <Dialog open={openAddUserDialog} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <AddUser onClose={handleClose}/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Dashboard
