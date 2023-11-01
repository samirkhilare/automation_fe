import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grids from "../../Components/Grids/Grids";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import useModalMaster from "./useModalMaster";
import ReactTable from "../../Components/ReactTable/ReactTable";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector } from "react-redux";

const ModalForm = () => {
  const {
    fieldsData,
    columns,
    data,
    handleSelectChanges,
    reqToSetQuantity,
    handleModalMasterSubmit,
    modalMasterForm,
    handleModalMasterChanges,
    partData,
    part1,
    part2,
    part3,
    part4,
    part5,
    part6,
    part7,
    part8,
    part9,
    part10,
    part11,
    part12,
    part13,
    part14,
    part15,
  } = useModalMaster();

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
  const [age, setAge] = React.useState("");

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="fgCode"
              type="text"
              name="fgCode"
              label="FG Code"
              value={modalMasterForm.fgCode}
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
              onChange={handleModalMasterChanges}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="description"
              type="text"
              name="description"
              label="Description"
              value={modalMasterForm.description}
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
              onChange={handleModalMasterChanges}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid mt={4} container spacing={2}>
        {/* part 1 grid */}
        <Grid position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 1
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part1"
              value={part1?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part1"
              id="part1"
              value={part1.quantity}
              type="text"
              label="Quantity"
              variant="outlined"
              onChange={reqToSetQuantity}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 2 grid */}
        <Grid position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 2
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part2"
              value={part2?.partCode}
              label="Part Codes"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map((item) => (
                <MenuItem
                  disabled={item.color}
                  value={item?.partCode}
                  style={{ backgroundColor: item?.color ? "red" : "" }}
                >
                  {item?.partCode + ", " + item?.partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part2"
              id="part2"
              value={part2?.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 3 grid */}
        <Grid position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 3
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part3"
              value={part3?.partCode}
              label="Part Codes"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part3"
              id="part3"
              value={part3.quantity}
              type="text"
              label="Quantity"
              variant="outlined"
              onChange={reqToSetQuantity}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 4 grid */}
        <Grid position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 4
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part4"
              value={part4?.partCode}
              label="Part Codes"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part4"
              id="part4"
              value={part4.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 5 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 5
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              id="part5"
              labelId="demo-simple-select-label"
              name="part5"
              value={part5?.partCode}
              label="Code Parts"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part5"
              id="part5"
              value={part5.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 6 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 6
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part6"
              value={part6?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part6"
              id="part6"
              value={part6.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 7 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 7
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part7"
              value={part7?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part7"
              id="part7"
              value={part7.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 8 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 8
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part8"
              value={part8?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part8"
              id="part8"
              value={part8.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 9 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 9
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part9"
              value={part9?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part9"
              id="part9"
              value={part9.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 10 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 10
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part10"
              value={part10?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part10"
              id="part10"
              value={part10.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 11 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 11
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part11"
              value={part11?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part11"
              id="part11"
              value={part11.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 12 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 12
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part12"
              value={part12?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part12"
              id="part12"
              value={part12.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 13 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 13
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part13"
              value={part13?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part13"
              id="part13"
              value={part13.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 14 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 14
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part14"
              value={part14?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part14"
              id="part14"
              value={part14.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        {/* part 15 grid */}
        <Grid mt={5} position="relative" item xs={2}>
          <Box position="absolute" top="-13px">
            Part 15
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              name="part15"
              value={part15?.partCode}
              label="Age"
              onChange={handleSelectChanges}
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            >
              {partData?.map(({ partCode, partName, color }) => (
                <MenuItem
                  disabled={color}
                  value={partCode}
                  style={{ backgroundColor: color ? "red" : "" }}
                >
                  {partCode + ", " + partName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid mt={5} item xs={1}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              name="part15"
              id="part15"
              value={part15.quantity}
              onChange={reqToSetQuantity}
              type="text"
              label="Quantity"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>

        <Grid position="relative" mt={5} item xs={3}>
          <Box position="absolute" top="-13px">
            Video file
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="video"
              type="file"
              name="video"
              variant="outlined"
              InputLabelProps={{
                style: labelStyle,
              }}
              onChange={handleModalMasterChanges}
              InputProps={inputProps}
              sx={{ color: "white" }}
              style={textFieldStyle}
            />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          padding: "20px 23px 0px 30px",
        }}
        className=""
      >
        <Button onClick={handleModalMasterSubmit} variant="contained">
          Submit
        </Button>
      </Box>
    </>
  );
};

const ModalMaster = () => {
  const modalState = useSelector((state) => state.modalsReducer);
  const [modals, setModals] = useState();
  console.log("modals  : ", modals);
  const { columns, data } = useModalMaster();
  const textFieldStyle = {
    border: "1px solid white",
    color: "white",
  };
  const labelStyle = {
    backgroundColor: "#1d2634",
    padding: "2px",
    color: "white",
  };
  const inputProps = {
    style: {
      color: "white",
    },
  };

  useEffect(() => {
    setModals(modalState.modals);
  }, [modalState]);

  return (
    <div>
      <div className="main-title">
        <h3>MODAL MASTER</h3>
      </div>
      <ModalForm />
      <Box
        sx={{
          marginTop: "3rem",
          width: "98.5%",
        }}
        className=""
      >
        <ReactTable columns={columns} data={modals ? modals : []} />
      </Box>
    </div>
  );
};

export default ModalMaster;
