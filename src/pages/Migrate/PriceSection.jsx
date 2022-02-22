/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { Box, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import Button from "../../components/Button";
import useTokenInfo from "../../hooks/useTokenInfo";
import { priceFormat } from "../../utils/functions";

const PriceSection = () => {
  const { zenaPrice, gdtPrice } = useTokenInfo();
  const md = useMediaQuery("(max-width : 1100px)");
  const sm = useMediaQuery("(max-width : 600px)");
  return (
    <StyledContainer>
      <Box>
        <Panel>
          <Box width={"100%"} maxWidth={"715px"}>
            <Box
              fontFamily={"THICCCBOISemiBold"}
              fontSize={sm ? "30px" : "45px"}
              lineHeight={"115%"}
              textAlign={"center"}
            >
              $GDT price
            </Box>
            <SubPanel mt={"22px"}>
              <Box textAlign={"center"} fontSize={sm ? "15px" : "18px"}>
                Current price of Gorilla Diamond Token ($GDT)
              </Box>
              <PriceBox mt={"30px"}>
                <Box>
                  0.0
                  <span style={{ fontSize: sm ? "16px" : "22px" }}>
                    {priceFormat(gdtPrice).count}
                  </span>
                  {priceFormat(gdtPrice).value}
                </Box>
              </PriceBox>
            </SubPanel>
          </Box>
          <Box mx={"30px"} />
          <Box width={"100%"} maxWidth={"715px"} mt={md ? "56px" : 0}>
            <Box
              fontFamily={"THICCCBOISemiBold"}
              fontSize={sm ? "30px" : "45px"}
              lineHeight={"115%"}
              textAlign={"center"}
            >
              $ZENA- price
            </Box>
            <SubPanel mt={"22px"}>
              <Box textAlign={"center"} fontSize={sm ? "15px" : "18px"}>
                Current price of Zena Token ($ZENA)
              </Box>
              <PriceBox mt={"30px"}>
                <Box>
                  0.0
                  <span style={{ fontSize: sm ? "16px" : "22px" }}>
                    {priceFormat(zenaPrice).count}
                  </span>
                  {priceFormat(zenaPrice).value}
                </Box>
              </PriceBox>
              <Box width={"100%"} mt={"46px"}>
                <Button type={"primary"} width={"100%"} height={"55px"}>
                  Buy $ZENA
                </Button>
              </Box>
            </SubPanel>
          </Box>
        </Panel>
        <Box
          mt={sm ? "57px" : "117px"}
          fontFamily={"THICCCBOISemiBold"}
          fontSize={sm ? "30px" : "60px"}
          textAlign={"center"}
          lineHeight={"115%"}
        >
          History
        </Box>
        <Box
          mt={sm ? "13px" : "36px"}
          fontFamily={"THICCCBOISemiBold"}
          fontSize={sm ? "16px" : "18px"}
          textAlign={"center"}
          lineHeight={"115%"}
          maxWidth={sm ? "252px" : "unset"}
          mx={sm ? "auto" : "unset"}
        >
          Find out more about the status of previous migration transactions
        </Box>
        <HistoryPanel mt={"50px"}>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Box>Date</Box>
            <Box>Direction</Box>
            <Box>Sending Tx</Box>
            <Box>Receiving Tx</Box>
            <Box>Amount</Box>
            <Box>Status</Box>
          </Box>
          <Box
            textAlign={"center"}
            fontSize={sm ? "20px" : "32px"}
            fontFamily={"THICCCBOISemiBold"}
            mt={"25px"}
          >
            No Histories
          </Box>
        </HistoryPanel>
      </Box>
      <Vector3 />
      <Vector4 />
    </StyledContainer>
  );
};

const HistoryPanel = styled(Box)`
  border-radius: 30px;
  border: 1px solid #eaebec;
  background: rgba(255, 255, 255, 0.8);
  padding: 40px 30px 30px 30px;
  width: 100%;
  > div > div {
    font-family: "THICCCBOISemiBold";
    font-size: 18px;
    line-height: 115%;
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 28px 20px 30px 20px;
  }
`;

const PriceBox = styled(Box)`
  border: 1px solid #d8d8d8;
  border-radius: 20px;
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "THICCCBOISemiBold";
  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 26px;
    height: 80px;
  }
`;

const SubPanel = styled(Box)`
  border: 1px solid #eaebec;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 39px 20px 30px 20px;
  height: 322px;
  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`;

const Vector = styled(Box)`
  background-size: 100% 100%;
  position: absolute;
`;

const Vector3 = styled(Vector)`
  background-image: url("/images/vector3.png");
  top: -50px;
  left: 0;
  width: 396px;
  height: 100%;
  max-height: 1109px;
`;

const Vector4 = styled(Vector)`
  background-image: url("/images/vector4.png");
  bottom: -300px;
  right: 0;
  width: 456px;
  height: 100%;
  max-height: 1279px;
`;

const Panel = styled(Box)`
  border-radius: 30px;
  padding: 53px 30px 30px 30px;
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid #eaebec;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    background: transparent;
    border: none;
    padding: 0;
  }
`;

const StyledContainer = styled(Box)`
  position: relative;
  padding: 111px 40px 173px 40px;
  width: 100%;
  > div:nth-child(1) {
    max-width: 1550px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }
  overflow: hidden;
  @media screen and (max-width: 600px) {
    padding: 57px 20px 80px 20px;
  }
`;

export default PriceSection;
