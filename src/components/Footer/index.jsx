/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import { Box, useMediaQuery } from "@mui/material";
import Button from "../Button";

const Footer = () => {
  const socials = [
    {
      element: "/icons/facebook.png",
      link: "",
    },
    {
      element: "/icons/twitter.png",
      link: "",
    },

    {
      element: "/icons/instagram.png",
      link: "",
    },
    {
      element: "/icons/linkedin.png",
      link: "",
    },
    {
      element: "/icons/youtube.png",
      link: "",
    },
  ];

  const menus = [
    ["Home", "Token"],
    ["About", "FAQ"],
    ["News", "Careers"],
    ["Migrate", "Contact"],
  ];

  const ecosystems = [
    "Diamond Wallet",
    "CryptoMerch",
    "Rising Tokens",
    "Chainify",
  ];

  const md = useMediaQuery("(max-width : 900px)");
  const sm = useMediaQuery("(max-width : 550px)");
  return (
    <StyledContainer>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          borderBottom={"1px solid rgb(40,38,62)"}
          paddingBottom={"80px"}
          flexDirection={md ? "column" : "row"}
        >
          <Box>
            <Box fontSize={"40px"}>ZENA</Box>
            <Box mt={"20px"} fontSize={"18px"}>
              Subscribe to our newzletter
            </Box>
            <SubScribePanel my={"10px"} maxWidth={"450px"}>
              <input type={"text"} placeholder={"example@youremail.com"} />
              <Box display={!md ? "block" : "none"} width={"100%"}>
                <Button width={"120px"} height={"44px"} type={"subscribe"}>
                  Subscribe
                </Button>
              </Box>
            </SubScribePanel>
            <Box
              width={"100%"}
              mb={"20px"}
              display={md ? "block" : "none"}
              maxWidth={"450px"}
            >
              <Button width={"100%"} height={"44px"} type={"subscribe"}>
                Subscribe
              </Button>
            </Box>
            <Box color={"rgb(156,161,190)"}>
              Get the latest updates on all things Zena.
            </Box>
          </Box>
          <Menu mt={md ? "40px" : 0}>
            <Box fontSize={"20px"}>Menu</Box>
            <Box mt={"30px"} color={"rgb(189,190,208)"}>
              {menus.map((data, i) => {
                return (
                  <Item
                    key={i}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Box>{data[0]}</Box>
                    <Box>{data[1]}</Box>
                  </Item>
                );
              })}
            </Box>
          </Menu>
          <Menu mt={md ? "40px" : 0}>
            <Box fontSize={"20px"}>Ecosystem</Box>
            <Box mt={"30px"} color={"rgb(189,190,208)"}>
              {ecosystems.map((data, i) => {
                return (
                  <Item
                    key={i}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Box>{data}</Box>
                  </Item>
                );
              })}
            </Box>
          </Menu>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={"50px"}
          flexDirection={sm ? "column" : "row"}
        >
          <Box fontSize={"20px"} mb={sm ? "10px" : 0}>
            Copyright 2022 @Zena Inc.
          </Box>
          <Socials>
            {socials.map((data) => {
              return (
                <a href={data.link} target={"_blank"} rel="noreferrer">
                  <img src={data.element} alt={""} />
                </a>
              );
            })}
          </Socials>
        </Box>
      </Box>
    </StyledContainer>
  );
};

const Socials = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 210px;
  > a {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    background: rgb(43, 41, 63);
    :hover {
      transform: scale(1.1, 1.1);
    }
  }
`;

const Item = styled(Box)`
  > div {
    transition: all 0.3s;
    :hover {
      opacity: 0.4;
      cursor: pointer;
    }
  }
`;

const Menu = styled(Box)`
  > div:nth-child(2) {
    font-size: 18px;
    width: 180px;
    > div {
      margin-bottom: 18px;
    }
  }
  font-family: "THICCCBOISemiBold";
`;

const SubScribePanel = styled(Box)`
  border-radius: 30px;
  background: #707070;
  > input {
    background: transparent;
    font-size: 18px;
    color: white;
    font-family: "THICCCBOI";
    padding: 0 15px;
    ::placeholder {
      color: white;
    }
  }
  display: flex;
  padding: 5px;
`;

const StyledContainer = styled(Box)`
  position: relative;
  padding: 150px 40px 50px 40px;
  width: 100%;
  background: rgb(18, 16, 40);
  color: white;
  > div:nth-child(1) {
    max-width: 1550px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }
`;

export default Footer;
