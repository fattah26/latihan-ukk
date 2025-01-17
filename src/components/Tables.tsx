import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface Column {
  key: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
}

interface TableProps {
  data: any[];
  header: Column[];
  onDelete: (id: number) => void; 
  onView: (id: number) => void; 
}

export default function DynamicTable({
  data,
  header,
  onDelete,
  onView,
}: TableProps) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {header.map((column) => (
                <TableCell
                  key={column.key}
                  align={column.align || "left"}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell key="action" align="center" style={{ minWidth: 150 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                {header.map((column) => {
                  const value = row[column.key];
                  return (
                    <TableCell key={column.key} align={column.align || "left"}>
                      {value}
                    </TableCell>
                  );
                })}
                <TableCell align="center">
                  <Button
                    color="primary"
                    size="small"
                    onClick={() => onView(row.id)}
                  >
                    <VisibilityIcon/>
                  </Button>
                  <Button
                    variant="text"
                    color="error"
                    size="small"
                    onClick={() => onDelete(row.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
