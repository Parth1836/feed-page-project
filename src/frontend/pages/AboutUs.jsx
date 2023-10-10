import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Header from "../common-components/Header";

function AboutUs() {
  return (
    <>
      <Header />
      <Container style={{ padding: "80px 25px" }}>
        <Typography style={{ fontWeight: "bold" }} variant="h4" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="body1">
                Welcome to Feeds Company, where you can see latest updates. We are
                passionate about providing current latest feeds.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1">
                Our Company was founded on 1st January, 2022. And our milestone
                is to subscribe our service over 1M+ users and keep on growing in various sectors for latest updates. 
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Our Team
              </Typography>
              <Typography variant="body1">
                Meet the incredible individuals who make up our team. With a
                diverse range of talents and backgrounds, we come together to
                develop and grow together.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AboutUs;
