import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import star from "../images/star.svg";
const StarCom = ({ content, style }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "hsl(300, 24%, 96%)",
          padding: "1rem",
          textAlign: "center",
          marginTop: "1rem",
          display: "flex",
          gap: 5,
          alignItems: "center",
          borderRadius: "10px",
          "@media (max-width:780px)": {
            flexDirection: "column",
            gap: 1,
            padding: ".5rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ ...style }}>
            <img src={star} alt="star" />
          </div>
          <div>
            <img src={star} alt="star" />
          </div>
          <div>
            <img src={star} alt="star" />
          </div>
          <div>
            <img src={star} alt="star" />
          </div>
          <div>
            <img src={star} alt="star" />
          </div>
        </Box>
        <Typography
          sx={{
            color: " hsl(300, 43%, 22%)",
            fontWeight: "700",
            fontFamily: "unset",
            letterSpacing: "0px",
            fontSize: "15px",
          }}
        >
          {content}
        </Typography>
      </Box>
    </>
  );
};

export default StarCom;
