import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { Box, Typography, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddUser from './AddUser';

const UserDetails = () => {
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const { userId } = useParams();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  const handleEdit = () => {
    // Open the Edit User dialog
    setOpenEditDialog(true);
    console.log('print open' ,openEditDialog)
  }

  const handleCloseDialog = () => {
    setOpenEditDialog(false);
  }

  return (
    <div>
      <Box sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">User Details</Typography>
        <IconButton onClick={handleEdit}>
          <EditIcon color="primary" />
        </IconButton>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Username: {user.username}</Typography>
        <Typography variant="h6">Email: {user.email}</Typography>
        <Typography variant="h6">Role: {user.role}</Typography>
      </Box>
    </Box>
    {/* Dialog for editing user */}
    <Dialog open={openEditDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <AddUser user={user} onClose={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UserDetails;
