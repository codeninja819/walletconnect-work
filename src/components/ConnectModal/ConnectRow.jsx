import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import { Login, Config } from "./types";
import { connections, connectorLocalStorageKey } from "./entry";
import { ethers } from "ethers";

const ConnectRow = ({
  login,
  focus,
  id,
  name,
  icon,
  setOpen,
  account,
  setAccount,
  provider,
  setProvider,
}) => {
  const loadWeb3 = async () => {
    if (window.ethereum) {
      setProvider(new ethers.providers.Web3Provider(window.ethereum, "any"));
      await window.ethereum.enable();
    }
  };

  const onConnectWallet = async () => {
    if (id === 0) {
      if (account) {
        return;
      }

      await loadWeb3();
      const accounts = await provider.getSigner;
      setAccount(accounts[0]);
      setOpen(false);
    } else {
      login(connections[id].connectorId);
      window.localStorage.setItem(
        connectorLocalStorageKey,
        connections[id].connectorId
      );
      setOpen(false);
    }
  };

  return (
    <StyledContainer
      width="calc(100% - 42px)"
      height="26px"
      bgcolor="rgb(239, 244, 245)"
      border="1px solid"
      borderColor={focus ? "cardtxt.main" : "transparent"}
      borderRadius="15px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="14.75px 20px"
      onClick={() => onConnectWallet()}
    >
      <Box display="flex" alignItems="center">
        <Box color="rgb(58, 193, 97)" ml="15px" letterSpacing="1px">
          {name}
        </Box>
      </Box>
      <Box
        width="40px"
        height="40px"
        borderRadius="50%"
        bgcolor="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={icon} alt="connection-icon" />
      </Box>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)`
  cursor: pointer;
`;

export default ConnectRow;
