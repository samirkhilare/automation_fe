import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useModalScreen from "./useModalScreen";

// Card imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NotSelected from "../../Assets/notSelected.png";
import ReactPlayer from "react-player/youtube";
import { GoDotFill } from "react-icons/go";
import { BASE_URL } from "../../services/httpRequest";

const textFieldStyle = {
  border: "1px solid white", // Set the border color to white
  color: "white",
  width: "100%",
};
const labelStyle = {
  backgroundColor: "#1d2634",
  padding: "2px",
  color: "white",
};
const inputProps = {
  style: {
    color: "white", // Set the text color to white
    // Add any other text styles you want
  },
};

const PartCard = (props) => {
  console.log(props);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={props.image ? `${BASE_URL}/uploads/${props.image}` : NotSelected}
        title="green iguana"
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            <Typography variant="body2" color="text.secondary">
              Part code
            </Typography>
            {props.partCode ? props.partCode : "0"}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <Typography
              sx={{ textAlign: "right" }}
              variant="body2"
              color="text.secondary"
            >
              Quantity
            </Typography>
            {props.quantity ? props.quantity : "0"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Part {props.index}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <GoDotFill style={{ fontSize: "30px", marginTop: "3px" }} />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const ModalScreen = () => {
  const {
    handleModalMasterChanges,
    modals,
    filteredModals,
    togglePlay,
    isPlaying,
    videoRef,
    reqToSendDataToModbus,
  } = useModalScreen();
  return (
    <div>
      <Grid container item>
        <Grid item xs={12}>
          <Box component="form" noValidate autoComplete="off">
            <Box mb="10px">Scan Code</Box>
            <Box display="flex">
              <TextField
                id="description"
                type="text"
                name="fgCode"
                label="FG Code"
                value={modals?.fgCode}
                variant="outlined"
                InputLabelProps={{
                  style: labelStyle,
                }}
                InputProps={inputProps}
                sx={{ color: "white" }}
                style={textFieldStyle}
                onChange={handleModalMasterChanges}
              />
              <Button
                onClick={reqToSendDataToModbus}
                sx={{ marginLeft: "20px" }}
                variant="contained"
              >
                Send
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* {filteredModals ? ( */}
      <Grid container spacing={2} mt={5}>
        <Grid xs={6}>
          <Grid container p={2}>
            {filteredModals ? (
              filteredModals?.partsSelection?.map((item, index) => (
                <Grid xs={4}>
                  <Box sx={{ padding: 1 }}>
                    <PartCard {...item} index={index + 1} />
                  </Box>
                </Grid>
              ))
            ) : (
              <h1>No Data Preview! Select FG Code</h1>
            )}
          </Grid>
        </Grid>

        <Grid
          p={2}
          mt={1}
          item
          xs={6}
          display="flex"
          justifyContent="center"
          alignItems="top"
        >
          {filteredModals ? (
            <div
              style={{
                border: "2px solid white",
                height: "fit-content",
                borderRadius: "5px",
              }}
            >
              <video
                ref={filteredModals ? videoRef : ""}
                src={`${BASE_URL}/uploads/${filteredModals?.video}`}
                controls // This adds the default video controls (play, pause, volume, etc.)
                autoPlay={true}
                width={750}
              />
            </div>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      {/* ) : (
        <h1>Select FG Code</h1>
      )} */}
    </div>
  );
};

export default ModalScreen;
