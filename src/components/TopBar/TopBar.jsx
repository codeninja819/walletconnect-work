/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function TopBar({ hamburgeropen, setHamburgerOpen, open, setOpen }) {
  const dialog = useRef();

  useEffect(() => {
    document.addEventListener("mouseup", function (event) {
      if (dialog && dialog.current && !dialog.current.contains(event.target)) {
        setHamburgerOpen(false);
      }
    });
  }, []);

  const menus = ["Home", "Staking", "Migrate", "Farming"];

  return (
    <StyledContainer>
      <Box>
        <Box
          display={"flex"}
          minWidth={"198px"}
          minHeight={"48px"}
          maxWidth={"198px"}
          maxHeight={"48px"}
        >
          <img src={"/logo.png"} width={"100%"} height={"100%"} alt={""} />
        </Box>
        <Box />
        <Hamburger
          onClick={() => setHamburgerOpen(!hamburgeropen)}
          ref={dialog}
        >
          <HiOutlineMenuAlt4 />
        </Hamburger>
        <HamburgerMenu active={hamburgeropen}>
          <Box>
            <Box display={"flex"} flexDirection={"column"}>
              {menus.map((data, i) => {
                return (
                  <Link key={i} to={`/${data.toLowerCase()}`}>
                    {data}
                  </Link>
                );
              })}
            </Box>
            <Box>
              <Button type={"primary"} width={"100%"} height={"55px"}>
                Buy $ZENA
              </Button>
            </Box>
          </Box>
        </HamburgerMenu>
        <Menus>
          {menus.map((data, i) => {
            return (
              <Link key={i} to={`/${data.toLowerCase()}`}>
                {data}
              </Link>
            );
          })}
        </Menus>
        <ButtonGroup>
          <Button type={"learn"} width={"152px"} height={"61px"}>
            Learn more
          </Button>
          <Button
            type={"connect"}
            width={"166px"}
            height={"61px"}
            connected={false}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Box
                display={"flex"}
                minWidth={"19px"}
                minHeight={"31px"}
                maxWidth={"19px"}
                maxHeight={"31px"}
              >
                <img
                  src={"/icons/lock.png"}
                  width={"100%"}
                  height={"100%"}
                  alt={""}
                />
              </Box>
              <Box ml={"10px"} onClick={() => setOpen(true)}>
                Connect
              </Box>
            </Box>
          </Button>
        </ButtonGroup>
      </Box>
    </StyledContainer>
  );
}

const HamburgerMenu = styled(Box)`
  overflow: hidden;
  transition: all 0.3s;
  height: ${({ active }) => (active ? "290px" : "0")};
  position: absolute;
  background: white;
  top: 163px;
  left: 0;
  width: 100%;
  box-shadow: 0px 10px 6px rgba(0, 0, 0, 0.24);
  border-radius: 0px 0px 20px 20px;
  > div {
    padding: 40px 40px 30px 40px;
    @media screen and (max-width: 600px) {
      padding: 40px 20px 30px 20px;
    }
  }
  > div > div > a {
    font-family: "THICCCBOISemiBold";
    margin-bottom: 18px;
  }
`;

const Hamburger = styled.div`
  @media screen and (min-width: 1100px) {
    display: none;
  }
  font-size: 36px;
  color: #121028;
`;
const ButtonGroup = styled(Box)`
  width: 100%;
  max-width: 351px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Menus = styled(Box)`
  display: flex;
  > div {
    font-family: "THICCCBOISemiBold";
    font-size: 18px;
  }
  width: 100%;
  max-width: 415px;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const StyledContainer = styled(Box)`
  > div {
    width: 100%;
    max-width: 1550px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
    padding: 38px 40px 0px 40px;
    @media screen and (max-width: 600px) {
      padding: 48px 20px 0 20px;
    }
  }
  position: absolute;
  width: 100%;
  z-index: 200;
`;

export default TopBar;
