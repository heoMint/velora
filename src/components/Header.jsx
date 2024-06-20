/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Mobile, PC } from '../hooks/useMediaQuery';

const Header = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<NavWrapper>
			<Log>
				<Link to="/">
					<img
						src="https://raw.githubusercontent.com/heoMint/velora/main/public/Velora.png"
						alt="Logo"
					/>
				</Link>
			</Log>
			<Nav>
				<PC>
					<Depth>
						<li>
							<Link to="/aboutus">About Us</Link>
						</li>
						<li>
							<Link to="/products">Products</Link>
						</li>
						<li>
							<Link to="/community">Community</Link>
						</li>
						<li>
							{isChecked === false ? <button>KR</button> : <button>EN</button>}
						</li>
					</Depth>
				</PC>
				<Mobile>
					<MenuIcon>
						<FaBars />
					</MenuIcon>
				</Mobile>
			</Nav>
		</NavWrapper>
	);
};

export default Header;

const NavWrapper = styled.div`
	position: relative;
	top: -7px;
	left: 0;
	height: 80px;
	width: 100%;

	z-index: 50;
	cursor: pointer;

	display: flex;
	align-items: center;

	justify-content: flex-end;
	background: rgba(255, 255, 255, 0.13);
	backdrop-filter: blur(2px);
	-webkit-backdrop-filter: blur(3px);
	border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Nav = styled.div`
	display: flex;
	justify-content: flex-end; /* 수정된 부분: 오른쪽 정렬 */
	align-items: center;
`;

const Depth = styled.ul`
	display: flex;
	align-items: center;
	padding-right: 20px;
	color: var(--gray-300);
	list-style-type: none;

	li {
		width: 150px;
	}
	a {
		color: inherit; /* 링크의 색상 제거 */
		text-align: center;
		text-decoration: none; /* 링크의 밑줄 제거 */
	}

	&:hover {
		cursor: pointer;
	}

	ul {
		display: none;
	}
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: var(--gray-300);

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

const Log = styled.div`
	position: absolute;
	top: 35%;
	left: 30px;
	img {
		width: 100px;
	}
`;

const MenuIcon = styled.button`
	display: flex;
	align-items: center;
	margin-right: 20px;

	border-style: none;
	background-color: transparent;
	font-size: 24px;
	cursor: pointer;
`;
