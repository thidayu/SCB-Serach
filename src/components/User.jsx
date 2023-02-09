import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, Button, Link, ButtonGroup } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 1,
    first_name: "Linette",
    last_name: "Gillbe",
    Tel_Phone: "266-560-0351",
  },
  {
    id: 2,
    first_name: "Kienan",
    last_name: "Scammonden",
    Tel_Phone: "506-294-8084",
  },
  {
    id: 3,
    first_name: "Thorin",
    last_name: "Reihm",
    Tel_Phone: "596-135-3845",
  },
  {
    id: 4,
    first_name: "Izzy",
    last_name: "Insworth",
    Tel_Phone: "700-711-6175",
  },
  { id: 5, first_name: "Ira", last_name: "Muir", Tel_Phone: "283-946-5159" },
  {
    id: 6,
    first_name: "Meredithe",
    last_name: "Endicott",
    Tel_Phone: "347-364-4565",
  },
  {
    id: 7,
    first_name: "Winnifred",
    last_name: "McWhan",
    Tel_Phone: "654-673-9965",
  },
  {
    id: 8,
    first_name: "Cris",
    last_name: "Haggard",
    Tel_Phone: "302-132-3868",
  },
  {
    id: 9,
    first_name: "Waverley",
    last_name: "Skilton",
    Tel_Phone: "490-155-1124",
  },
  {
    id: 10,
    first_name: "Jodee",
    last_name: "Halpen",
    Tel_Phone: "408-220-0614",
  },
];

export default function User() {
  const [items, setItems] = useState([]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 3 }}>
        <Paper sx={{ p: 1 }}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Users
              </Typography>
            </Box>
            <Box>
              <Link href="ลงชื่อเข้า">
                <Button variant="contained">ลงชื่อเข้า</Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">ชื่อ</TableCell>
                  <TableCell align="center">นามสกุล</TableCell>
                  <TableCell align="center">เบอร์โทร</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.first_name}</TableCell>
                    <TableCell align="center">{row.last_name}</TableCell>
                    <TableCell align="center">{row.Tel_Phone}</TableCell>
                    <TableCell align="center">
                    <ButtonGroup
                        variant="outlined"
                        aria-label="outlined primary button group"
                      >
                        <Button>Edit</Button>
                        <Button>Del</Button>
                        
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
