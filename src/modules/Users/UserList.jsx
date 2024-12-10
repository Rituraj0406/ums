import React, { useState } from 'react';
import CommonTable from '../../components/CommonTable';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../redux/slice';
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom'

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null); 



  // Get the users from Redux store
  const users = useSelector((state) => state.users.users);

  const columns = [
    { id: "username", label: "Username", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 150 },
    { id: "role", label: "Role", minWidth: 100 },
  ];

  const paginatedRows = users.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
    setOpenDialog(false); 
  };

  const handleOpenDialog = (userId) => {
    setUserToDelete(userId); 
    setOpenDialog(true); 
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); 
    setUserToDelete(null); 
  };

  const handleRowClick = (userId) => {
    navigate(`/user-details/${userId}`);
  };

  return (
    <>
      <CommonTable
        columns={columns}
        rows={paginatedRows}
        page={page}
        rowsPerPage={rowsPerPage}
        totalItems={users.length}
        onPageChange={(newPage) => setPage(newPage)}
        onRowsPerPageChange={(newRowsPerPage) => {
          setRowsPerPage(newRowsPerPage);
          setPage(0);
        }}
        renderActions={(user) => (
          <IconButton onClick={() => handleOpenDialog(user.id)}><DeleteIcon sx={{ color: 'red' }}/></IconButton>
        )}
        onRowClick={(user) => handleRowClick(user.id)}
      />
      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this user? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button label="Cancel" color='secondary' onClick={handleCloseDialog}/>
          <Button label="Confirm" onClick={() => handleDeleteUser(userToDelete)} color="primary"/>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default UserList
