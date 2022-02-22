import React from "react";
import styled from "styled-components";

const Button = ({
  width,
  height,
  type,
  fontSize = "16px",
  children,
  disabled,
  onClick,
  color = "white",
  style,
}) => {
  return (
    <>
      {type === "learn" ? (
        <LearnButton
          width={width}
          height={height}
          type={type}
          fontSize={fontSize}
          disabled={disabled}
          onClick={onClick}
          style={style}
          color={color}
        >
          {children}
        </LearnButton>
      ) : type === "subscribe" ? (
        <SubscribeButton
          width={width}
          height={height}
          type={type}
          fontSize={fontSize}
          disabled={disabled}
          onClick={onClick}
          style={style}
          color={color}
        >
          {children}
        </SubscribeButton>
      ) : type === "connect" ? (
        <ConnectButton
          width={width}
          height={height}
          type={type}
          fontSize={fontSize}
          disabled={disabled}
          onClick={onClick}
          style={style}
          color={color}
        >
          {children}
        </ConnectButton>
      ) : type === "max" ? (
        <MaxButton
          width={width}
          height={height}
          type={type}
          fontSize={fontSize}
          disabled={disabled}
          onClick={onClick}
          style={style}
          color={color}
        >
          {children}
        </MaxButton>
      ) : type === "primary" ? (
        <PrimaryButton
          width={width}
          height={height}
          type={type}
          fontSize={fontSize}
          disabled={disabled}
          onClick={onClick}
          style={style}
          color={color}
        >
          {children}
        </PrimaryButton>
      ) : (
        ""
      )}
    </>
  );
};

const BaseButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "THICCCBOISemiBold";
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  cursor: pointer;
  transition: all 0.3s;
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LearnButton = styled(BaseButton)`
  border: 2px solid #121028;
  background: white;
  border-radius: 100px;
  font-size: 18px;
  :hover {
    transform: translate(0, -2px);
    box-shadow: 0px 2px 5px #121028;
  }
`;

const SubscribeButton = styled(BaseButton)`
  background: white;
  border-radius: 100px;
  font-size: 18px;
  color : black;
  :hover {
    transform: scale(1.05, 1.05);
  }
`;

const ConnectButton = styled(BaseButton)`
  background: #251026;
  border-radius: 100px;
  box-shadow: 0px 3px 6px rgab(0, 0, 0, 0.35);
  font-size: 18px;
  color: #fedbdc;
  :hover {
    transform: translate(0, -2px);
    box-shadow: 0px 2px 5px #121028;
  }
`;

const MaxButton = styled(BaseButton)`
  background: #414052;
  border-radius: 50px;
  box-shadow: 0px 0px 6px rgab(0, 0, 0, 0.15);
  font-size: 20px;
  color: white;
  font-family: "THICCCBOI";
  border: 1px solid transparent;
  :hover {
    background: white;

    border: 1px solid #414052;
    color: #414052;
  }
  @media screen and (max-width : 600px){
    font-size : 14px;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(
    to bottom,
    #d0b7fe,
    #c0b5fa,
    #b1b3f7,
    #a3b1f4,
    #98aff2
  );
  border-radius: 100px;
  font-size: 20px;
  color: white;
  :hover {
    transform: translate(0, -2px);
    box-shadow: 0px 2px 5px #d0b7fe;
  }
  @media screen and (max-width : 600px){
    font-size : 16px;
  }
`;

export default Button;
