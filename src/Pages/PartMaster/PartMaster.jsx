import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grids from "../../Components/Grids/Grids";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import usePartMaster from "./usePartMaster";
import ReactTable from "../../Components/ReactTable/ReactTable";
import ReactModal from "../../Components/ReactModal/ReactModal";

const textFieldStyle = {
  border: "1px solid white", // Set the border color to white
  color: "white",
  PointerEvent: "none",
};
const labelStyle = {
  // backgroundColor: "#1d2634",
  padding: "2px",
  color: "white",
  zIndex: "-01",
};
const inputProps = {
  style: {
    color: "white", // Set the text color to white
    PointerEvent: "none",
    // Add any other text styles you want
  },
};

const PartForm = () => {
  const { time, formData, fieldsData, handleChanges, handleFormSubmit } =
    usePartMaster();

  return (
    <div>
      <Grid container spacing={2}>
        {fieldsData.map(({ label, name, type }) => (
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id={name}
                type={type}
                name={name}
                label={label}
                value={
                  name !== "image" ? formData[name] : formData[name]?.filename
                }
                onChange={handleChanges}
                variant="filled"
                InputLabelProps={{
                  style: labelStyle,
                }}
                InputProps={inputProps}
                sx={{ color: "white" }}
                style={textFieldStyle}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          padding: "20px 23px 0px 30px",
        }}
        className=""
      >
        <Button variant="contained" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

const PartMaster = () => {
  const {
    columns,
    partsData,
    pending,
    fieldsData,
    setPartsUpdates,
    partUpdates,
    handleFormUpdate,
  } = usePartMaster();

  const [reqOpenModal, setReqOpenModal] = useState(false);
  const handleRowClick = (e) => {
    setReqOpenModal(true);
    setPartsUpdates({
      ...partUpdates,
      partName: e.partName,
      partCode: e.partCode,
      dateAndTime: e.dateAndTime,
      image: e.image,
      id: e._id,
    });
  };
  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.id;
    value = name === "image" ? e.target.files[0] : e.target.value;
    setPartsUpdates({ ...partUpdates, [name]: value });
  };
  return (
    <div>
      <ReactModal
        handleFormSubmit={handleFormUpdate}
        reqOpenModal={reqOpenModal}
        setReqOpenModal={setReqOpenModal}
        Comp={fieldsData.map(({ label, name, type }) => (
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id={name}
                type={type}
                name={name}
                // disabled={name === "dateAndTime"}
                label={label}
                value={
                  name !== "image"
                    ? partUpdates[name]
                    : partUpdates[name]?.filename
                }
                onChange={handleChanges}
                variant="filled"
                InputLabelProps={{
                  style: labelStyle,
                }}
                InputProps={inputProps}
                sx={{ color: "white" }}
                style={textFieldStyle}
              />
            </Box>
          </Grid>
        ))}
      />

      <div className="main-title">
        <h3>PART MASTER</h3>
      </div>
      <div>
        <Grids gridlist={1} comp={[<PartForm />, ""]} gridof={12} />
      </div>
      <Box
        sx={{
          marginTop: "3rem",
          width: "98.5%",
        }}
        className=""
      >
        <ReactTable
          columns={columns}
          data={partsData ? partsData : []}
          pending={pending}
          handleRowClick={handleRowClick}
        />
      </Box>
    </div>
  );
};

export default PartMaster;
