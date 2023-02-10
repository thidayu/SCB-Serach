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

const rows = [];

export default function User() {
  const [items, setItems] = useState([]);
  const [serachTitle, setSerachTitle] = useState([]);
  const [loading, setLoading] = useState([]); 



  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setLoading(false);

      });
  }, []);



  return (
   <div className="User">
      <h3 >Serach</h3>
      <input 
      type="text"
      placeholder="Serach..."
      onChange={(e) => setSerachTitle(e.target.value)} />
      

  
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ p: 3 }}>
          <Paper sx={{ p: 1 }}>
            <Box display="flex">
              <Box sx={{ flexGrow: 1 }}></Box>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">ชื่อ</TableCell>
                    <TableCell align="center">นามสกุล</TableCell>
                    <TableCell align="center">E-Mail</TableCell>
                    <TableCell align="center">ชื่อบริษัท</TableCell>
                    <TableCell align="center">เมือง</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((items) => (
                    <TableRow
                      key={items.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {items.id}
                      </TableCell>
                      <TableCell align="center">{items.name}</TableCell>
                      <TableCell align="center">{items.username}</TableCell>
                      <TableCell align="center">{items.email}</TableCell>
                      <TableCell align="center">{items.company.name}</TableCell>
                      <TableCell align="center">{items.address.city}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </React.Fragment>
      </div>
   
  
  );
}
