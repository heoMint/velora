import { useState, useEffect } from 'react';
import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';
import styled from 'styled-components';

const AllProducts = () => {
	const [selected, setSelected] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const lastIndex = 5;
	const pageSize = 4; // 한 페이지에 보여질 이미지 개수

	const handlerPrev = () => {
		setSelected((prevSelected) => (prevSelected - 1 + lastIndex) % lastIndex);
	};
	const handlerNext = () => {
		setSelected((prevSelected) => (prevSelected + 1) % lastIndex);
	};

	useEffect(() => {
		let intervalId;
		if (!isHovered) {
			intervalId = setInterval(() => {
				setSelected((prevSelected) => (prevSelected + 1) % lastIndex);
			}, 2000); // 1.5초마다 슬라이드 변경
		}

		// 구성 요소가 마운트 해제되거나 호버가 시작될 때 간격을 지우는 정리
		return () => clearInterval(intervalId);
	}, [isHovered]); // isHovered 상태 변경에 따라

	// 이미지 목업 데이터
	const images = [
		{
			id: 1,
			url: '/src/assets/루나미니.jpeg',
			title: '루나 미니 2',
			num: '1ea',
			price: '244,000원',
		},
		{
			id: 2,
			url: '/src/assets/에이지알 유쎄라 딥 샷.jpeg',
			title: '에이지알 유쎄라 딥 샷',
			num: '1ea',
			price: '500,000원',
		},
		{
			id: 3,
			url: '/src/assets/스킨라이트 테라피.png',
			title: '스킨라이트 테라피',
			num: '1ea',
			price: '200,000원',
		},
		{
			id: 4,
			url: '/src/assets/에이지알 더마 EMS 샷.jpeg',
			title: '에이지알 더마 EMS 샷',
			num: '1ea',
			price: '458,000원',
		},
		{
			id: 5,
			url: '/src/assets/마데카프라임.jpeg',
			title: '마데카 프라임',
			num: '1ea',
			price: '459,000원',
		},
	];

	const renderImageCard = (image, index) => (
		<CardWrapper key={image.id}>
			<Card>
				<ImageCard>
					<Img src={image.url} alt={`Image ${index}`} />
				</ImageCard>
				<ProductsTitle>{image.title}</ProductsTitle>
				<PriceWrapper>
					<Num>{`${image.num} / ${image.price}`}</Num>
				</PriceWrapper>
			</Card>
		</CardWrapper>
	);

	const renderImages = () => {
		const startIndex = selected;
		const endIndex = (startIndex + pageSize) % lastIndex;

		if (startIndex <= endIndex) {
			return images.slice(startIndex, endIndex + 1).map(renderImageCard);
		} else {
			return [
				...images.slice(startIndex, lastIndex).map(renderImageCard),
				...images.slice(0, endIndex + 1).map(renderImageCard),
			];
		}
	};

	return (
		<ProductsWrapper
			onMouseEnter={() => setIsHovered(true)} /* hover시 슬라이드 중지 */
			onMouseLeave={() => setIsHovered(false)}
		>
			<div>
				<Title>ALL PRODUCTS</Title>
				<ButtonWrapper>
					<ButtonBox>
						<button onClick={handlerPrev}>
							<PiArrowLeftThin />
						</button>
					</ButtonBox>
					<ButtonRight>
						<button onClick={handlerNext}>
							<PiArrowRightThin />
						</button>
					</ButtonRight>
				</ButtonWrapper>
			</div>
			<CarouselWrapper>{renderImages()}</CarouselWrapper>
		</ProductsWrapper>
	);
};

export default AllProducts;

const ProductsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const CarouselWrapper = styled.div`
	width: 1440px;
	display: flex;
	justify-content: center;
	overflow: hidden;
	position: relative;
	margin-left: 40px;
`;
const CardWrapper = styled.div`
	overflow: hidden;
	padding: 0 10px;
`;
const Card = styled.div``;

const ImageCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin-bottom: 20px;
`;
const Img = styled.img`
	width: 100%;
	height: 300px;
	border: 1px solid #777;
	border-radius: 5px;

	background-size: cover;
	backface-visibility: hidden;
`;

const Title = styled.div`
	font-size: 2.3rem;
	margin-left: 50px;
`;
const ProductsTitle = styled.div`
	font-size: 1.4rem;
	font-weight: 500;
`;
const Num = styled.div``;

const PriceWrapper = styled.div`
	display: flex;
`;

// 오른쪽 왼쪽 버튼을 눌러 슬라이드 앞뒤로 넘기기

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-right: 20px;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 55px;
		height: 55px;
		margin-bottom: 30px;
		border: 1px solid;
		border-radius: 50%;

		&:hover {
			transition: 500ms ease;
		}
		button {
			display: flex;
			align-items: center;
			font-size: 36px;
			background-color: transparent;
			border-style: none;
		}
	}
`;
const ButtonBox = styled.div``;
const ButtonRight = styled.div`
	margin: 0 10px;
`;
