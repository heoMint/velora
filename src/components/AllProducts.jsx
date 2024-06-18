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
			}, 3000); // 3초마다 슬라이드 변경
		}

		// 구성 요소가 마운트 해제되거나 호버가 시작될 때 간격을 지우는 정리
		return () => clearInterval(intervalId);
	}, [isHovered]); // isHovered 상태 변경에 따라

	// 이미지 목업 데이터
	const renderImages = () => {
		const images = [
			{
				id: 1,
				url: 'https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=600',
				title: '루나 미니 2',
				num: '1ea',
				price: '244,000원',
			},
			{
				id: 2,
				url: 'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=600',
				title: '에이지알 유쎄라 딥 샷',
				num: '1ea',
				price: '500,000원',
			},
			{
				id: 3,
				url: 'https://images.pexels.com/photos/4464377/pexels-photo-4464377.jpeg?auto=compress&cs=tinysrgb&w=600',
				title: '스킨라이트 테라피',
				num: '1ea',
				price: '200,000원',
			},
			{
				id: 4,
				url: 'https://images.pexels.com/photos/6898856/pexels-photo-6898856.jpeg?auto=compress&cs=tinysrgb&w=600',
				title: '에이지알 더마 EMS 샷',
				num: '1ea',
				price: '458,000원',
			},
			{
				id: 5,
				url: 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=600',
				title: '루나 미니 2',
				num: '1ea',
				price: '244,000원',
			},
		];

		const startIndex = selected;
		const endIndex = (startIndex + pageSize) % lastIndex;
		// 페이지 단위로 이미지를 표시
		// slice메서드를 사용해 현재페이지의 이미지를 추출 후 map 메서드로 이미지를 컴포넌트로 변환
		if (startIndex <= endIndex) {
			return images.slice(startIndex, endIndex + 1).map((image, index) => (
				<CardWrapper key={image.id}>
					<Card>
						<ImageCard>
							<Img src={image.url} alt={`Image ${startIndex + index}`} />
						</ImageCard>
						<Title>{image.title}</Title>
						<Num>{image.num}</Num>
						<Price>{image.price}</Price>
					</Card>
				</CardWrapper>
			));
		} else {
			return [
				...images.slice(startIndex, lastIndex + 1).map((image, index) => (
					<CardWrapper key={image.id}>
						<Card>
							<ImageCard>
								<Img src={image.url} alt={`Image ${startIndex + index}`} />
							</ImageCard>

							<Title>{image.title}</Title>
							<Num>{image.num}</Num>
							<Price>{image.price}</Price>
						</Card>
					</CardWrapper>
				)),
				...images.slice(0, endIndex + 1).map((image, index) => (
					<CardWrapper key={image.id}>
						<Card>
							<ImageCard>
								<Img src={image.url} alt={`Image ${index}`} />
							</ImageCard>
							<Title>{image.title}</Title>
							<Num>{image.num}</Num>
							<Price>{image.price}</Price>
						</Card>
					</CardWrapper>
				)),
			];
		}
	};
	return (
		<div
			onMouseEnter={() => setIsHovered(true)} /* hover시 슬라이드 중지 */
			onMouseLeave={() => setIsHovered(false)}
		>
			<div>
				<div>ALL PRODUCTS</div>
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
			<ImgWrapper>{renderImages()}</ImgWrapper>
			<div></div>
		</div>
	);
};

export default AllProducts;

const CardWrapper = styled.div`
	width: 1200px;
	overflow: hidden;
	padding: 0 10px;
`;
const Card = styled.div``;
const ImgWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
const ImageCard = styled.div`
	border: 1px solid #777;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Img = styled.img`
	width: 100%;
	height: 300px;
	
	background-size: cover;
	backface-visibility: hidden;
`;

const Title = styled.div``;
const Num = styled.div``;
const Price = styled.div``;

// 오른쪽 왼쪽 버튼을 눌러 슬라이드 앞뒤로 넘기기

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
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
