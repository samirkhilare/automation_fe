import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Grids = ({ gridlist, gridof, comp }) => {
  const gridListOf = Array.from({ length: gridlist }, (_, index) => index + 1);
  console.log("gridListOf : ", gridListOf);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid container spacing={2}>
      {gridListOf.map((item, index) => {
        return (
          <Grid item xs={gridof}>
            {comp[index]}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Grids;
