import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";

export default function UserCreate() {
const handleSubmit = event => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");

    var raw =JSON.stringify({
        "fname":first_name,
        "last_name":last_name,
        "tel_phone":tel_phone
    });

    var requestOptions ={
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redireact: 'follow'
    };

    fetch("https://www.mecallapi.com/api/users/create", requestOptions)
    .then(response => response.json())
    .then(result => {
        alert(result['message'])
        if (result['status'] === 'OK') {
            window.location.href ='/'
        }
    })
    .catch(err => console.log('error', err));

}
const [first_name, setFirst_name] = useState ('');
const [last_name, setLast_name] = useState ('');
const [tel_phone, setTel_phone] = useState ('');

  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom component="div">
          โปรดใส่ข้อมูลงทะเบียน
        </Typography>
        <form onSubmit={handleSubmit}>
    
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="first_name"
                label="First Name"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="last_name"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setLast_name(e.target.value)}

              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="tel_phone"
                label="Phone"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setTel_phone(e.target.value)}

              />
            </Grid>
            <Grid item xs={12}>
            <Button type="submit" variant="contained">ลงทะเบียน</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
