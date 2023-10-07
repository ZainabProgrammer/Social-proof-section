import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Custom from "./components/Custom";
import colton from "../src/images/image-colton.jpg";
import irene from "../src/images/image-irene.jpg";
import anne from "../src/images/image-anne.jpg";
import StarCom from "./components/StarCom";
const App = () => {
  return (
    <div className="main">
      <Container
        maxWidth="lg"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "6rem",
          height: "100%",
          marginTop: "11rem",
          "@media (max-width: 780px)": {
            flexDirection: "column",
            marginLeft: "0",
            justifyContent: "center",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              gap: 5,
              "@media (max-width:780px)": {
                flexDirection: "column",
                textAlign: "center",
              },
            }}
          >
            <Box>
              <Typography
                variant="h3"
                color="hsl(300, 43%, 22%)"
                sx={{
                  fontFamily: "unset",
                  fontWeight: "700",
                  letterSpacing: "-2px",
                  lineHeight: "40px",
                }}
              >
                10,000+ of our
              </Typography>
              <Typography
                variant="h3"
                color="hsl(300, 43%, 22%)"
                sx={{
                  fontFamily: "unset",
                  fontWeight: "700",
                  letterSpacing: "-2px",
                  lineHeight: "40px",
                }}
              >
                users love our
              </Typography>
              <Typography
                variant="h3"
                color="hsl(300, 43%, 22%)"
                sx={{
                  fontFamily: "unset",
                  fontWeight: "700",
                  letterSpacing: "-2px",
                  lineHeight: "40px",
                }}
              >
                products.
              </Typography>

              <Box
                sx={{
                  marginTop: "2rem",
                  marginLeft: "1rem",
                  marginBottom: "-7rem",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "unset",
                    color: "hsl(303, 10%, 53%)",
                    letterSpacing: "-0.7px",
                    fontWeight: "500",
                    fontSize: 18,
                    "@media (max-width:780px)": {
                      marginBottom: "4rem",
                    },
                  }}
                >
                  We only provide great products combined with excellent
                  <Typography
                    sx={{
                      fontFamily: "unset",
                      color: "hsl(303, 10%, 53%)",
                      letterSpacing: "-0.7px",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    customer service. See what our satisfied customers are
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "unset",
                      color: "hsl(303, 10%, 53%)",
                      letterSpacing: "-0.7px",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    saying about our services.
                  </Typography>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "38%",
                "@media (max-width:780px)": {
                  width: "100%",
                },
              }}
            >
              <StarCom content="Rated 5 Stars in Reviews" />

              <Box
                sx={{
                  marginLeft: "3rem",
                  width: "100%",
                  "@media (max-width: 780px)": {
                    marginLeft: "0",
                  },
                }}
              >
                <StarCom content="Rated 5 Stars in Report Guru" />
              </Box>

              <Box
                sx={{
                  marginLeft: "6rem",
                  width: "100%",
                  "@media (max-width: 780px)": {
                    marginLeft: "0",
                  },
                }}
              >
                <StarCom content="Rated 5 Stars in BestTech" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            marginLeft: "1.7rem",
            marginTop: "3rem",

            "@media (max-width: 780px)": {
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            },
          }}
        >
          <Custom
            img={colton}
            name="Colton Smith"
            role="Verified Buyer"
            content="We needed the same printed design as the one we had ordered a week prior.
                Not only did they find the original order, but we also received it in time.Excellent!"
          />

          <Custom
            style={{
              marginTop: "5rem",
              "@media (max-width: 780px)": {
                marginTop: "0",
              },
            }}
            img={irene}
            name=" Irene Roberts "
            role="Verified Buyer"
            content="Customer service is always excellent and very quick turn around.
                   Completely delighted with the simplicity of the purchase and the speed of delivery."
          />
          <Custom
            style={{
              marginTop: "6rem",
              "@media (max-width: 780px)": {
                marginTop: "0",
              },
            }}
            img={anne}
            name="Anne Wallace "
            role="Verified Buyer"
            content="Put an order with this company and can only praise them for the very high
                  standard. Will definitely use them again and recommend them to everyone!"
          />
        </Box>
      </Container>
    </div>
  );
};

export default App;
