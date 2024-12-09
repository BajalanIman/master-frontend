import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopupLogout from "./PopupLogout";

const Dashboard = () => {
  const [defineValues, setDefineValues] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);

  const handleChange = (event) => {
    setDefineValues(event.target.value);
    setSelectOpen(false); // Ensure the Select box closes on change
  };

  const [usernameChecker, setUsernameChecker] = useState("");
  const [passwordChecker, setPasswordChecker] = useState("");
  const [nameChecker, setNameChecker] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setNameChecker(localStorage.getItem("name"));
    setUsernameChecker(localStorage.getItem("username"));
    setPasswordChecker(localStorage.getItem("password"));
    setRole(localStorage.getItem("role"));
    console.log(role);
  }, [usernameChecker, role]);

  const [open, setOpen] = useState(false);
  const logoutHandler = () => {
    console.log(123);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ Width: { xs: "100px", md: "200px" } }}>
        <Link className="w-18" to={"/"} />
        <FormControl sx={{ width: "200px" }} fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
            Dashboard
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={defineValues}
            label="Stations"
            onChange={handleChange}
            open={selectOpen}
            onClose={() => setSelectOpen(false)}
            onOpen={() => setSelectOpen(true)}
          >
            {usernameChecker && passwordChecker && (
              <MenuItem value={"Username"}>Hi {nameChecker}</MenuItem>
            )}

            {usernameChecker && passwordChecker && (
              <MenuItem
                onClick={() => {
                  logoutHandler();
                  setSelectOpen(false);
                }}
                value={"logout"}
              >
                Log out
              </MenuItem>
            )}
            {!usernameChecker && !passwordChecker && (
              <MenuItem
                component={Link}
                to="/login"
                onClick={() => setSelectOpen(false)}
                value={"login"}
              >
                Log in
              </MenuItem>
            )}
            {!usernameChecker && !passwordChecker && (
              <MenuItem
                component={Link}
                to="/newuser"
                onClick={() => setSelectOpen(false)}
                value={"create_account"}
              >
                Create account
              </MenuItem>
            )}
            {usernameChecker &&
              passwordChecker &&
              role &&
              role.length === 5 && (
                <MenuItem
                  component={Link}
                  to="/admin-data-sender"
                  onClick={() => setSelectOpen(false)}
                  value={"send_data"}
                >
                  Send data
                </MenuItem>
              )}
            {usernameChecker &&
              passwordChecker &&
              role &&
              role.length === 5 && (
                <MenuItem
                  component={Link}
                  to="/usermanagement"
                  onClick={() => setSelectOpen(false)}
                  value={"user_management"}
                >
                  User management
                </MenuItem>
              )}
          </Select>
        </FormControl>
      </Box>
      <PopupLogout
        open={open}
        setOpen={setOpen}
        onClose={handleClose}
      ></PopupLogout>
    </>
  );
};

export default Dashboard;
