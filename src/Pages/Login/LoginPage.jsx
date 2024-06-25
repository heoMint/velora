import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [button, setButton] = useState(true);
	const navigate = useNavigate();

	// 5글자 이상 입력시 활성화
	function changeButton() {
		setButton(!(id && pw.length >= 5));
	}
	const goToMain = () => {
		navigate('/');
	};
	return (
		<LoginWrapper>
			<Title>The VELORA</Title>
			<InputWrapper>
				<input
					type="text"
					placeholder="아이디"
					name="id"
					onChange={(e) => {
						setId(e.target.value);
					}}
					onKeyUp={changeButton}
				/>
				<input
					type="password"
					placeholder="비밀번호"
					name="password"
					onChange={(e) => {
						setPw(e.target.value);
					}}
					onKeyUp={changeButton}
				/>
			</InputWrapper>
			<ButtonWrapper>
				<Button
					disabled={button}
					onClick={(e) => {
						goToMain();
					}}
				>
					로그인
				</Button>
			</ButtonWrapper>
			<LinkedWrapper>
				<Link to="signup">회원가입</Link>
				<span> | </span>
				<Link to="search_pw">아이디∙비밀번호찾기</Link>
			</LinkedWrapper>
			<p>간편로그인</p>
			<OathWrapper>
				<button>네이버</button>
				<button>카카오</button>
				<button>구글</button>
			</OathWrapper>
		</LoginWrapper>
	);
};

export default LoginPage;

const LoginWrapper = styled.div`
	text-align: center;
	font-size: 15px;
	margin: 50px 0;
`;
const Title = styled.strong`
	font-size: 2rem;
	margin-bottom: 30px;
`;
const InputWrapper = styled.form`
	display: grid;
	justify-content: center;
	margin-top: 30px;

	input {
		border: 1px solid #c6c6c6;
		width: 300px;
		height: 30px;
		margin-top: 5px;
	}
`;
const ButtonWrapper = styled.div`
	padding: 10px;
	margin-top: 20px;
`;
const Button = styled.button`
	background-color: black;
	color: white;
	border-style: none;
	border-radius: 50px;
	width: 310px;
	height: 40px;

	&:disabled {
		background-color: rgba(182, 182, 182, 0.3);
		color: black;
	}
`;
const LinkedWrapper = styled.div`
	font-size: 14px;
	padding: 20px;
	a {
		text-decoration: none;
		color: #000;
	}
`;

const OathWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;

	button {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border-style: none;
		margin: 10px;
	}
`;
