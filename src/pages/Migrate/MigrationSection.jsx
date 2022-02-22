/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { Box, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import Button from "../../components/Button";

const MigrationSection = () => {
  const md = useMediaQuery("(max-width : 1100px)");
  const sm = useMediaQuery("(max-width : 600px)");
  return (
    <StyledContainer>
      <Box>
        <Box
          textAlign={"center"}
          fontFamily={"THICCCBOISemiBold"}
          fontSize={sm ? "40px" : "80px"}
          lineHeight={"115%"}
        >
          Migration
        </Box>
        <Box
          textAlign={"center"}
          maxWidth={"360px"}
          mx={"auto"}
          mt={"27px"}
          fontFamily={"THICCCBOISemiBold"}
          fontSize={sm ? "16px" : "18px"}
          lineHeight={"111%"}
        >
          Convert you Gorilla Diamond Token ($GDT) to the new Zena Token
          ($ZENA).
        </Box>
        <Panel mt={"86px"}>
          <Box width={"100%"} maxWidth={"715px"}>
            <Box
              display={"flex"}
              minWidth={sm ? "66px" : "104px"}
              minHeight={sm ? "66px" : "104px"}
              maxWidth={sm ? "66px" : "104px"}
              maxHeight={sm ? "66px" : "104px"}
              mt={md ? "-85px" : "-115px"}
              mx={"auto"}
            >
              <img
                src={"/images/convert.png"}
                width={"100%"}
                height={"100%"}
                alt={""}
              />
            </Box>
            <Box
              textAlign={"center"}
              fontFamily={"THICCCBOISemiBold"}
              fontSize={sm ? "30px" : "45px"}
            >
              Convert
            </Box>
            <ConvertBox mt={"22px"} lineHeight={"115%"}>
              <Box
                textAlign={"center"}
                fontSize={sm ? "15px" : "18px"}
                lineHeight={"111%"}
              >
                Migrate your Gorilla Diamond Tokens ($GDT)
              </Box>
              <InputPanel mt={sm ? "24px" : "30px"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Box
                      display={"flex"}
                      minWidth={"30px"}
                      minHeight={"30px"}
                      maxWidth={"30px"}
                      maxHeight={"30px"}
                    >
                      <img
                        src={"/icons/gdt.png"}
                        width={"100%"}
                        height={"100%"}
                        alt={""}
                      />
                    </Box>
                    <Box
                      ml={"8px"}
                      fontSize={"20px"}
                      fontFamily={"THICCCBOISemiBold"}
                    >
                      $GDT
                    </Box>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box
                      display={"flex"}
                      minWidth={"16px"}
                      minHeight={"16px"}
                      maxWidth={"16px"}
                      maxHeight={"16px"}
                    >
                      <img
                        src={"/icons/bscscan.png"}
                        width={"100%"}
                        height={"100%"}
                        alt={""}
                      />
                    </Box>
                    <Box ml={"5px"} fontSize={sm ? "11px" : "16px"}>
                      0x2cEv…G4x9
                    </Box>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={"20px"}
                >
                  <input type={"text"} placeholder={"0.0"} />
                  <Button
                    type={"max"}
                    width={sm ? "61px" : "82px"}
                    height={sm ? "25px" : "33px"}
                  >
                    Max
                  </Button>
                </Box>
              </InputPanel>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                m={"12px 0 15px 0"}
                color={"#A7A7A7"}
                fontSize={sm ? "14px" : "16px"}
              >
                <Box>Maximum tokens to migrate</Box>
                <Box>123,456,789</Box>
              </Box>
              <Box width={"100%"}>
                <Button type={"primary"} width={"100%"} height={"55px"}>
                  Convert your $GDT
                </Button>
              </Box>
            </ConvertBox>
          </Box>
          <Box
            display={"flex"}
            minWidth={"34px"}
            minHeight={"34px"}
            maxWidth={"34px"}
            maxHeight={"34px"}
            mt={md ? "0px" : "236px"}
            mx={"13px"}
            my={md ? "40px" : "0"}
          >
            <img
              src={md ? "/icons/arrowdown.png" : "/icons/arrowright.png"}
              width={"100%"}
              height={"100%"}
              alt={""}
            />
          </Box>
          <Box width={"100%"} maxWidth={"715px"}>
            <Box
              display={"flex"}
              minWidth={"104px"}
              minHeight={"104px"}
              maxWidth={"104px"}
              maxHeight={"104px"}
              mt={md ? "0" : "-115px"}
              mx={"auto"}
            >
              <img
                src={"/images/receive.png"}
                width={"100%"}
                height={"100%"}
                alt={""}
              />
            </Box>
            <Box
              textAlign={"center"}
              fontFamily={"THICCCBOISemiBold"}
              fontSize={sm ? "30px" : "45px"}
            >
              Receive
            </Box>
            <ConvertBox mt={"22px"} lineHeight={"115%"}>
              <Box
                textAlign={"center"}
                fontSize={sm ? "16px" : "18px"}
                lineHeight={"111%"}
              >
                Migrate your Gorilla Diamond Tokens ($GDT)
              </Box>
              <InputPanel mt={sm ? "24px" : "30px"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Box
                      display={"flex"}
                      minWidth={"30px"}
                      minHeight={"30px"}
                      maxWidth={"30px"}
                      maxHeight={"30px"}
                    >
                      <img
                        src={"/icons/zena.png"}
                        width={"100%"}
                        height={"100%"}
                        alt={""}
                      />
                    </Box>
                    <Box
                      ml={"8px"}
                      fontSize={"20px"}
                      fontFamily={"THICCCBOISemiBold"}
                    >
                      $ZENA
                    </Box>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box
                      display={"flex"}
                      minWidth={"16px"}
                      minHeight={"16px"}
                      maxWidth={"16px"}
                      maxHeight={"16px"}
                    >
                      <img
                        src={"/icons/bscscan.png"}
                        width={"100%"}
                        height={"100%"}
                        alt={""}
                      />
                    </Box>
                    <Box ml={"5px"} fontSize={sm ? "11px" : "16px"}>
                      0x2cEv…G4x9
                    </Box>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={"20px"}
                >
                  <input type={"text"} placeholder={"0.0"} />
                  <Button
                    type={"max"}
                    width={sm ? "61px" : "82px"}
                    height={sm ? "25px" : "33px"}
                  >
                    Max
                  </Button>
                </Box>
              </InputPanel>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                m={"12px 0 15px 0"}
                color={"#A7A7A7"}
                fontSize={sm ? "14px" : "16px"}
              >
                <Box>Maximum tokens to migrate</Box>
                <Box>123,456,789</Box>
              </Box>
              <Box width={"100%"}>
                <Button type={"primary"} width={"100%"} height={"55px"}>
                  Convert your $GDT
                </Button>
              </Box>
            </ConvertBox>
          </Box>
        </Panel>
      </Box>
      <Vector1 />
      <Vector2 />
    </StyledContainer>
  );
};

const Vector = styled(Box)`
  background-size: 100% 100%;
  position: absolute;
`;

const Vector1 = styled(Vector)`
  background-image: url("/images/vector1.png");
  top: 0;
  left: 0;
  width: 1631px;
  height: 100%;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Vector2 = styled(Vector)`
  background-image: url("/images/vector2.png");
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 600px) {
    right: -300px;
    width: 1790px;
    max-height: 1078px;
  }
`;

const InputPanel = styled(Box)`
  border-radius: 20px;
  border: 1px solid #d8d8d8;
  padding: 12px 20px 13px 20px;
  > div > input {
    background: transparent;
    width: 100%;
    font-family: "THICCCBOI";
    font-size: 26px;
    line-height: 115%;
  }
`;

const ConvertBox = styled(Box)`
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.8);
  padding: 39px 20px 30px 20px;
  border: 1px solid #eaebec;
  @media screen and (max-width: 600px) {
    padding-top: 25px;
  }
`;
const Panel = styled(Box)`
  border-radius: 30px;
  padding: 53px 30px 30px 30px;
  backdrop-filter: blur(22px) brigthness(15px);
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    background: transparent;
    padding: 53px 0 0px 0;
  }
`;

const StyledContainer = styled(Box)`
  position: relative;
  padding: 228px 40px 109px 40px;
  width: 100%;
  > div:nth-child(1) {
    max-width: 1550px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }
  @media screen and (max-width: 600px) {
    padding: 330px 20px 0px 20px;
  }
`;

export default MigrationSection;
