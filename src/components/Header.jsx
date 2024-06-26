import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
// import { Mobile, PC } from '../hooks/useMediaQuery';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import styled from 'styled-components';

const Header = () => {
	const activeStyle = {
		color: 'rgb(116, 0, 204,0.8)',
		borderRadius: '30px 0 30px 0 /30px 0 30px 0',
	};

	const [isToggled, setIsToggled] = useState(false);

	const handleToggleClick = () => {
		setIsToggled(!isToggled);
	};

	const handleLinkClick = () => {
		setIsToggled(false); // 메뉴 선택 시 사이드바 제거
	};
	return (
		<NavWrapper>
			<Log>
				<NavLink to="/" onClick={handleLinkClick}>
					<img src="Velora.png" alt="Logo" />
				</NavLink>
			</Log>

			<Depth isToggled={isToggled} onClick={handleLinkClick}>
				<li>
					<NavLink
						to="/aboutus"
						style={({ isActive }) => (isActive ? activeStyle : {})}
					>
						About Us
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/products"
						style={({ isActive }) => (isActive ? activeStyle : {})}
					>
						Products
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/community"
						style={({ isActive }) => (isActive ? activeStyle : {})}
					>
						Community
					</NavLink>
				</li>
			</Depth>
			<Util>
				<NavLink to="/login">signin</NavLink>
				<NavLink to="/mypage">
					<FiUser />
				</NavLink>
				<NavLink to="/shoppingCart">
					<FiShoppingCart />
				</NavLink>
				<NavLink>
					<FiSearch />
				</NavLink>
			</Util>
			<Toggle onClick={handleToggleClick}>
				<FaBars />
			</Toggle>
		</NavWrapper>
	);
};

export default Header;

const NavWrapper = styled.header`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	/* padding: 0 30px; */
	z-index: 50;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background: #fff;
`;

const Depth = styled.ul`
	display: flex;
	align-items: center;

	padding-right: 20px;
	color: var(--gray-300);
	list-style-type: none;

	li {
		position: relative; /* Ensure relative positioning for pseudo-element */
	}

	a {
		padding: 20px;
		color: #000;
		text-align: center;
		text-decoration: none;
		position: relative;
		border: 2px solid transparent;
		left: 12%;
		width: 75%;

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			/* color: var(--gray-300); */
			color: #000;

			border: 1px solid rgb(255, 255, 255, 0.6);
			border-radius: 3px;
			background-color: transparent;
			width: 50px;
			height: 30px;
		}
	}
	// 헤더 메뉴 side bar로 전환시
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		position: absolute;
		top: 80px; /* Align with header height */
		left: 0;
		width: 100%;
		height: 100vh;
		padding: 0px;

		background-color: white;
		overflow: hidden;
		transition: max-height 0.3s ease-out;
		max-height: ${(props) => (props.isToggled ? '100vh' : '0')};

		::-webkit-scrollbar {
			display: none;
		}

		li {
			display: flex;
			padding: 0px;
			width: 100%;
		
			a {
				font-size: 1.5rem;
				width: 100%;
				left: 0;
				border: none;
				color: black;
			}
		}
	}
`;
const Util = styled.div`
	display: flex;
	align-items: center;
	padding-right: 40px;
	:nth-child(1) {
		font-size: 1.1rem;
		text-decoration: none;
	}
	a {
		display: block;
		padding: 0 10px;
		color: #000;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const Log = styled.h1`
	width: 120px;
	margin-left: 20px;
	background-color: white;
	img {
		width: 100px;
	}
`;

const Toggle = styled.button`
	display: none;
	border: none;
	background: none;
	font-size: 24px;
	cursor: pointer;

	@media (max-width: 768px) {
		display: block;
	}
`;
