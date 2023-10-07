import React from "react";
import { Card, Avatar, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Custom = ({ img, name, role, content, style }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 280,
          backgroundColor: "hsl(300, 43%, 22%)",
          marginTop: "4rem",
          ...style,
          height: "100%",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              marginLeft: "1rem",
            }}
          >
            <Avatar alt="Remy Sharp" src={img} />
            <Box>
              <Typography
                color="hsl(300, 24%, 96%)"
                sx={{
                  fontSize: ".8rem",
                  fontWeight: "700",
                  fontFamily: "unset",
                }}
              >
                {name}
              </Typography>
              <Typography
                color="hsl(333, 80%, 67%)"
                sx={{
                  fontSize: ".8rem",
                  fontWeight: "400",
                  fontFamily: "unset",
                }}
              >
                {role}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            color="hsl(300, 24%, 96%)"
            sx={{
              padding: "1rem",
              paddingBottom: ".6rem",

              fontSize: ".8rem",
              fontWeight: "500",
              fontFamily: "unset",
            }}
          >
            "{content}"
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Custom;
