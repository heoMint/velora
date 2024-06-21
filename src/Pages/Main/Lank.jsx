import { LANKPRODUCTS } from '../../context/Mockup';
import styled, { keyframes } from 'styled-components';
import { useLankSlider } from '../../hooks/useSlider';
import { useLankScroll } from '../../hooks/useScroll';

const Lank = () => {
	const lastIndex = 10;
	const pageSize = 4; // 한 페이지에 보여질 이미지 개수
	const intervalTime = 5000;
	const { selected, setIsHovered } = useLankSlider(lastIndex, intervalTime);
	const { isContentCardItem } = useLankScroll();

	const renderImageCard = (item, index) => (
		<CardWrapper key={item.id}>
			<Card isVisible={isContentCardItem}>
				<LankNum>{item.rank}</LankNum>
				<ItemWrapper>
					<ImageCard>
						<Img src={item.url} alt={`Image ${index}`} />
					</ImageCard>
					<LankText>
						<Brand>{item.brand}</Brand>
						<ProductsTitle>{item.title}</ProductsTitle>
					</LankText>
				</ItemWrapper>
			</Card>
		</CardWrapper>
	);
	const renderImages = () => {
		const startIndex = selected;
		const endIndex = (startIndex + pageSize) % lastIndex;

		if (startIndex <= endIndex) {
			return LANKPRODUCTS.slice(startIndex, endIndex + 1).map(renderImageCard);
		} else {
			return [
				...LANKPRODUCTS.slice(startIndex, lastIndex).map(renderImageCard),
				...LANKPRODUCTS.slice(0, endIndex + 1).map(renderImageCard),
			];
		}
	};
	return (
		<RankBackground>
			<div className="container">
				<LankWrapper
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					isVisible={scrollY >= 200}
				>
					<LankTitle>
						<span>디바이스</span>
						<span>LANK</span>
					</LankTitle>
					<LankList>
						<CarouselWrapper>{renderImages()}</CarouselWrapper>
					</LankList>
				</LankWrapper>
			</div>
		</RankBackground>
	);
};

export default Lank;

const slideTop = keyframes`
	 0% {
    transform: translateX(70px);
	opacity: 0;
  }
  100% {
    transform: translateX(0px);
	opacity: 1;
  }
`;

const slideTopLank = keyframes`
	 0% {
    transform: translateY(100px);
	opacity: 0;
  }
  100% {
    transform: translateY(0px);
	opacity: 1;
  }
`;
const RankBackground = styled.div`
	/* background-image: url('/SpritePattern.png'); */
	overflow: hidden;
	background-size: cover;
	margin: 100px 0;
`;

const LankList = styled.div`
	display: flex;
`;
const CarouselWrapper = styled.div`
	height: 400px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 767px) {
		flex-wrap: wrap;
		height: 500px;
		padding: 30px 0;
	}
`;

const LankWrapper = styled.div`
	display: flex;
	flex-direction: column;

	/* margin-left: -50px; */
	width: 100%;
	height: 100%;
	flex-wrap: wrap;
	opacity: ${(props) => (props.isVisible ? 1 : 0)};
	animation: ${(props) => (props.isVisible ? slideTopLank : 'none')} 0.6s
		ease-in-out both;
	transition: opacity 0.5s ease-in-out;
	@media (max-width: 767px) {
		padding-left: 0px;
		justify-content: center;
	}
`;
const ItemWrapper = styled.div`
	display: grid;
	justify-items: center;
	@media (max-width: 767px) {
		display: flex;
	}
`;
const LankTitle = styled.div`
	text-align: center;
	font-size: 2.6rem;
	font-weight: 300;
	color: #111;
	padding-bottom: 20px;
	:nth-child(2) {
		color: #a85eee;
		font-size: 3rem;
		font-weight: 700;
		font-style: italic;
	}
	@media (max-width: 767px) {
		font-size: 1.5rem;

		:nth-child(2) {
			font-size: 1.9rem;
		}
	}
`;

const LankText = styled.div``;
const CardWrapper = styled.div`
	padding: 40px 10px;
	@media (max-width: 767px) {
		padding: 6px;
	}
`;
const Card = styled.div`
	display: flex;
	text-align: center;
	animation: ${slideTop} 0.3s ease-in-out;
	@media (max-width: 767px) {
		text-align: left;
	}
`;

const ImageCard = styled.div`
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 180px;
	height: 180px;
	margin-bottom: 10px;
	border: 1px solid #e4e4e4;
	border-radius: 100%;
	@media (max-width: 767px) {
		width: 100px;
		height: 100px;
	}
`;

const Img = styled.img`
	margin: auto;
	display: block;
	width: 70%;
	/* height: 150px; */
	/* border: 5px solid #f1f1f1; */
`;

const LankNum = styled.div`
	width: 40px;
	padding-top: 10px;
	margin-right: -10px;
	font-size: 1.2rem;
	font-weight: 600;

	color: #111;

	@media (max-width: 767px) {
		font-size: 1rem;
	}
`;
const Brand = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #969595;
	padding-top: 10px;
	@media (max-width: 767px) {
		justify-content: flex-start;
		padding-left: 10px;
	}
`;
const ProductsTitle = styled.div`
	display: grid;
	align-items: flex-start;
	width: 200px;
	height: 70px;
	padding: 10px 0;
	font-size: 1.3rem;
	font-weight: 600;
	color: #111;

	@media (max-width: 767px) {
		width: 150px;
		padding-left: 10px;
		font-size: 1rem;
		justify-content: flex-start;
	}
`;
