import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

import PaginationComponent from "./PaginationComponent";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#fafeff',
    color: "#999ea3",
    fontWeight: "bold",
    fontSize: '18px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#fff"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#f4f4f4",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: "#000000",  // Light blue background color on hover
  },
}));

const CommonTable = ({
  columns,
  rows,
  page,
  rowsPerPage,
  totalItems,
  onPageChange,
  onRowsPerPageChange,
  renderActions,
  onRowClick
}) => {
  const handleRowClick = (row) => {
    if (onRowClick) {
      onRowClick(row);  // Trigger the passed onRowClick function with the row data
    }
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", boxShadow: "none", backgroundColor: "transparent" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align || "left"}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <StyledTableRow hover key={rowIndex} onClick={() => handleRowClick(row)}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <StyledTableCell key={column.id} align={column.align || "left"}>
                      {column.format ? column.format(value) : value}
                    </StyledTableCell>
                  );
                })}
                {/* Render delete icon in the action column */}
                <StyledTableCell align="center">
                  {renderActions(row)} {/* Render the actions (delete button) */}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationComponent
         page={page}
         rowsPerPage={rowsPerPage}
         totalItems={totalItems}
         onPageChange={onPageChange}
         onRowsPerPageChange={onRowsPerPageChange}
      />
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => onPageChange(newPage)}
        onRowsPerPageChange={(e) => onRowsPerPageChange(parseInt(e.target.value, 10))}
      /> */}
    </Paper>
  );
};

export default CommonTable;
