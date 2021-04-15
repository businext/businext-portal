import React from "react";
import styled from "styled-components";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

const HEADER_HEIGHT = "64px";

const HeaderBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: ${HEADER_HEIGHT};
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;

  background: #404040;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderBlock = styled.div<{
  weight?: number;
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ align }) => align || "inherit"};
  width: ${({ weight }) => `calc(${weight ?? 1} * 100%)`};
`;

const HeaderTitle = styled.h1`
  line-height: ${HEADER_HEIGHT};
  height: ${HEADER_HEIGHT};
  margin: 0;
`;

const colours = {
  primary: "#0097c7",
};

const Logo = styled.h1`
  color: ${colours.primary};
  line-height: ${HEADER_HEIGHT};
  height: ${HEADER_HEIGHT};
  margin: 0;
`;

const BusinextLogo = () => (
  <Link to="/">
    <Logo>businext.ai</Logo>
  </Link>
);

type HeaderProps = RouteComponentProps & {
  title?: string;
};

const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
    <HeaderBar>
      <HeaderBlock align="flex-start">
        <BusinextLogo />
      </HeaderBlock>
      <HeaderBlock align="center">
        <HeaderTitle>{title ?? ""}</HeaderTitle>
      </HeaderBlock>
      <HeaderBlock align="flex-end"></HeaderBlock>
    </HeaderBar>
  );
};

export default withRouter(Header);
