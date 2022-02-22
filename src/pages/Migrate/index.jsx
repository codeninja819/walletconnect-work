/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import styled from "styled-components";
import MigrationSection from "./MigrationSection";
import PriceSection from "./PriceSection";

const Migrate = () => {
  return (
    <StyledContainer>
      <MigrationSection />
      <PriceSection />
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)`
  position: relative;
  width: 100%;
  > div:nth-child(1) {
    max-width: 1550px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }
  overflow : hidden;
`;

export default Migrate;
