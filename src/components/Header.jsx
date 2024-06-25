/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Mobile, PC } from '../hooks/useMediaQuery';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const onClickEvent = () => {
		setIsActive(!isActive);
	};

	return (
		<NavWrapper>
			<Log>
				<Link to="/">
					<img src="Velora.png" alt="Logo" />
				</Link>
			</Log>

			<PC>
				<Depth>
					<li className={isActive ? 'active' : ''} onClick={onClickEvent}>
						<Link to="/aboutus">About Us</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/community">Community</Link>
					</li>
				</Depth>

				{/* <li>
							{isChecked === false ? <button>KR</button> : <button>EN</button>}
						</li> */}
				<Util>
					<Link to="/login">signin</Link>
					<Link to="/mypage">
						<FiUser />
					</Link>
					<Link to="/shoppingCart">
						<FiShoppingCart />
					</Link>
					<Link>
						<FiSearch />
					</Link>
				</Util>
			</PC>
			<Mobile>
				<MenuIcon>
					<FaBars />
				</MenuIcon>
			</Mobile>
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
		&:hover {
			a::after {
				transform: scaleX(1); /* Expand underline on hover */
			}
		}
	}
	a {
		padding: 20px;
		color: #000; /* Link text color */
		text-align: center;
		text-decoration: none; /* Remove underline from link */
		position: relative; /* Ensure relative positioning for pseudo-element */
		&:hover {
			cursor: pointer;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: 6px; /* Adjust position of underline */
			left: 12%;
			width: 75%;
			border-bottom: 2px solid #000; /* Underline style */
			transform: scaleX(0); /* Initial state for transition effect */
			transform-origin: 0% 50%; /* Set transform origin */
			transition: transform 250ms ease-in-out; /* Transition effect */
		}
	}
	&.active a::after {
		transform: scaleX(1);
	}

	ul {
		display: none;
	}
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

		&:hover {
			/* color:var(--point-green); */
			cursor: pointer;
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
`;

const Log = styled.h1`
	width: 120px;
	margin-left: 20px;
	background-color: white;
	img {
		width: 100px;
	}
`;

const MenuIcon = styled.button`
	display: flex;
	align-items: center;
	padding-right: 50px;

	border-style: none;
	background-color: transparent;
	font-size: 24px;
	cursor: pointer;
`;
