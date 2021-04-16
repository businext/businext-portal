import styled from "styled-components";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { JustifyContentProps } from "../styles/types";
import { colors } from "../styles/colors";
import { dimensions } from "../styles/dimensions";

const HeaderBar = styled.div`
	position: absolute;
	left: 0;
	top: 0;

	height: ${dimensions.headerHeight};
	line-height: ${dimensions.headerHeight};
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-left: ${dimensions.pageMargin.side.desktop};
	padding-right: ${dimensions.pageMargin.side.desktop};

	background: #404040;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderBlock = styled.div<{
	align?: JustifyContentProps;
	order?: number;
	weight?: number;
}>`
	order: ${({order}) => order};

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: ${({ align }): JustifyContentProps => align || "inherit"};

	height: ${dimensions.headerHeight};
	width: ${({ weight }) => `calc(${weight ?? 1} * 100%)`};
`;

const HeaderLogo = styled(Link)`
	color: ${colors.logoText};
	font-size: 32px;
	font-weight: bolder;
`;

const HeaderTitle = styled.h1`
	font-size: 24px;
`;

const HeaderLink = styled(Link)`
	color: ${colors.fadedText};
	font-size: 20px;
`;

const BusinextLogo = () => (
	<HeaderLogo to="/">businext.ai</HeaderLogo>
);

type HeaderProps = RouteComponentProps & {
	title?: string;
};

const Header = (props: HeaderProps) => {
	const { title } = props;
	return (
		<HeaderBar>
			<HeaderBlock align="center" order={2}>
				<BusinextLogo />
			</HeaderBlock>
			<HeaderBlock align="flex-start" order={1}>
				<HeaderTitle>{title ?? ''}</HeaderTitle>
			</HeaderBlock>
			<HeaderBlock align="flex-end" order={3}>
				<HeaderLink to="/insights/">Search</HeaderLink>
			</HeaderBlock>
		</HeaderBar>
	);
};

export default withRouter(Header);
