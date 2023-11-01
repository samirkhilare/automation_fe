import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Login = ({ setIsAuthenticated }) => {
  const [loginForm, setLoginForm] = React.useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    const { email, password } = loginForm;
    if (email === "root" && password === "1234") {
      setIsAuthenticated(true);
    }
  };

  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const loginStyle = {
    backgroundColor: "#1d2634",
    // marginTop: "130px",
    border: "1px solid black",
    borderRadius: "15px",
    boxShadow: "10px 10p 10px 10px",
  };

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
    // boxShadow:
    //   "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#5a6185",
            height: "100vh",
          }}
        >
          <Container
            className="box-box-box"
            sx={loginStyle}
            component="main"
            maxWidth="xs"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>
              <Typography component="h1" variant="h5" color={"white"}>
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChanges}
                  sx={{ color: "white" }}
                  style={textFieldStyle}
                  InputProps={inputProps}
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChanges}
                  sx={{ color: "white" }}
                  style={textFieldStyle}
                  InputProps={inputProps}
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  color="white"
                  style={{ color: "white" }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright style={{ color: "white" }} sx={{ mt: 8, mb: 4 }} />
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Login;
