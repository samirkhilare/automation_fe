import React, { useState } from "react";
import { Grid, Box, TextField, FormLabel } from "@mui/material";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { FaCalendar } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const textFieldStyle = {
  border: "1px solid white", // Set the border color to white
  color: "white",
  width: "100%",
  textAlign: "right !important",
};

const inputProps = {
  style: {
    color: "white",
  },
};

const labelStyle = {
  backgroundColor: "#1d2634",
  padding: "2px",
  color: "white",
  textAlign: "center !important",
};

const Settings = () => {
  const [dateFrom, changeDateFrom] = useState(new Date());
  const [dateTo, changeDateTo] = useState(new Date());
  const handleModalMasterChanges = () => {};

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box component="form" noValidate autoComplete="off">
            <FormLabel sx={{ color: "white", fontSize: 18 }}>From</FormLabel>
            <DateTimePicker
              className="date-and-time-picker"
              calendarIcon={
                <FaCalendar className="date-and-time-picker-calender" />
              }
              clearIcon={
                <AiOutlineClose className="date-and-time-picker-calender" />
              }
              onChange={changeDateFrom}
              value={dateFrom}
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box component="form" noValidate autoComplete="off">
            <Box component="form" noValidate autoComplete="off">
              <FormLabel sx={{ color: "white", fontSize: 18 }}>To</FormLabel>
              <DateTimePicker
                className="date-and-time-picker"
                calendarIcon={
                  <FaCalendar className="date-and-time-picker-calender" />
                }
                clearIcon={
                  <AiOutlineClose className="date-and-time-picker-calender" />
                }
                onChange={changeDateTo}
                value={dateTo}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Settings;
