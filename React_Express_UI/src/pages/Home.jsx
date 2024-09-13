import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import BannerImage from "../assets/download.jpeg";
import Product from "../components/Product";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      {" "}
      <NavBar />
      <img src={BannerImage} width="100%" alt="Banner" />
      <Typography variant="h4" textAlign={"center"} my={5}>
        {" "}
        Featured Products
      </Typography>
      <Grid container spacing={4}justifyContent="space-around">
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
      </Grid>
      <Typography variant="h4" textAlign={"center"} my={5}>
        {" "}
        Latest Products
      </Typography>
      <Grid container spacing={4}>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
      </Grid>
    </>
  );
}
export default Home;
