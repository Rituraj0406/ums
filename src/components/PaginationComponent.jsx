import React from "react";
import { Box, Typography, Select, MenuItem, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

const PaginationComponent = ({
  page,
  rowsPerPage,
  totalItems,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const handleFirstPage = () => {
    if (page > 0) onPageChange(0);
  };

  const handleLastPage = () => {
    if (page < totalPages - 1) onPageChange(totalPages - 1);
  };

  const handlePrev = () => {
    if (page > 0) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) onPageChange(page + 1);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={1}
      sx={{ background: "transparent", borderTop: "1px solid #ddd" }}
    >
      {/* Left Section: Rows Per Page */}
      <Box display="flex" alignItems="center">
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          Rows per page:
        </Typography>
        <Select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(parseInt(e.target.value, 10))}
          size="small"
          sx={{ marginRight: 2 }}
        >
          {[5, 10, 25].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="body2">{`of ${totalItems} items`}</Typography>
      </Box>

      {/* Right Section: Pagination Controls */}
      <Box display="flex" alignItems="center">
        {/* First Page Button */}
        <IconButton
          onClick={handleFirstPage}
          disabled={page === 0}
          size="small"
          sx={{ marginRight: 1 }}
        >
          <FirstPageIcon fontSize="small" />
        </IconButton>

        {/* Previous Page Button */}
        <IconButton
          onClick={handlePrev}
          disabled={page === 0}
          size="small"
          sx={{ marginRight: 1 }}
        >
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>

        {/* Page Information */}
        <Typography variant="body2" sx={{ margin: "0 8px" }}>
          {page + 1} / {totalPages}
        </Typography>

        {/* Next Page Button */}
        <IconButton
          onClick={handleNext}
          disabled={page >= totalPages - 1}
          size="small"
          sx={{ marginLeft: 1 }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>

        {/* Last Page Button */}
        <IconButton
          onClick={handleLastPage}
          disabled={page >= totalPages - 1}
          size="small"
          sx={{ marginLeft: 1 }}
        >
          <LastPageIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PaginationComponent;
