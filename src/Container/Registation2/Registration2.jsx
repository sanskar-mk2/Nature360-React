import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Registration.css";

import axios from "axios";

const Registration2 = () => {
  return (
    <>
      <div className="Registration Login min-h-[80vh] sm:min-h-[85vh] relative">
        <h3 className="text-4xl text-[#1976d2]">Sign Up</h3>
        <div className="flex flex-col ">
          <form className="flex flex-col gap-2">
            <div className="flex flex-col">
              <InputLabel required>Email address</InputLabel>
              <input
                type={"email"}
                name="email"
                required
                size="small"
                className="input"
              />
            </div>
            <div className="flex flex-col">
              <InputLabel required>Password</InputLabel>
              <input
                type={"password"}
                name="password"
                required
                size="small"
                className="input"
              />
            </div>
            <div className="flex flex-col">
              <InputLabel required>Phone Number</InputLabel>
              <div className="flex items-center">
                <input type={"tel"} required size="small" className="input" />
                <Button size="small" className="otp">OTP</Button>
              </div>
            </div>
            <div className="flex flex-col mb-1">
              <InputLabel required>Full Name</InputLabel>
              <input type={"email"} required size="small" className="input" />
            </div>
            <Button>Submit</Button>
          </form>
        </div>

        <InputLabel></InputLabel>
      </div>
    </>
  );
};
export default Registration2;
