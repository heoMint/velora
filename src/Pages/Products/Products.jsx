import { useState } from 'react';
import { ALLPRODUCTS } from '../../context/Mockup';
import { useProductsSlider } from '../../hooks/useSlider';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const Products = () => {
	const [isHover, setIsHover] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [clicked, setClicked] = useState(false);

	const pageSize = 8; // 한 페이지에 보여질 이미지 개수
	const totalItemsCount = ALLPRODUCTS.length;
	const lastIndex = Math.ceil(totalItemsCount / pageSize);
	const intervalTime = 300000; // Interval time in milliseconds

	const { selected, setIsHovered } = useProductsSlider(lastIndex, intervalTime);

	const renderImageCard = (image, index) => (
		<CardWrapper key={image.id}>
			<Card>
				<ImageCard
					onMouseEnter={() => setIsHover(index)}
					onMouseLeave={() => setIsHover(null)}
				>
					<Img
						src={image.url}
						alt={`Image ${index}`}
						isHover={isHover === index}
					/>
				</ImageCard>
				<ProductsTitle>{image.title}</ProductsTitle>
				<PriceWrapper>
					<Num>{`${image.num} / ${image.price}`}</Num>
				</PriceWrapper>
			</Card>
		</CardWrapper>
	);

	const renderImages = () => {
		const startIndex = (currentPage - 1) * pageSize;
		const endIndex = Math.min(startIndex + pageSize, totalItemsCount);

		return ALLPRODUCTS.slice(startIndex, endIndex).map(renderImageCard);
	};

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<ProductsWrapper
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			isVisible={scrollY >= 1000}
		>
			<div>
				<Title>ALL PRODUCTS</Title>
			</div>
			<CarouselWrapper>{renderImages()}</CarouselWrapper>
			<PaginationWrapper>
				<Pagination
					activePage={currentPage}
					itemsCountPerPage={pageSize}
					totalItemsCount={totalItemsCount}
					pageRangeDisplayed={5}
					onChange={handlePageChange}
				/>
			</PaginationWrapper>
		</ProductsWrapper>
	);
};

export default Products;

const ProductsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;
const CarouselWrapper = styled.div`
	width: 100%;
	flex-wrap: wrap;
	display: flex;
	justify-content: center;
	overflow: visible;
	position: relative;
	margin-bottom: 100px;
`;
const CardWrapper = styled.div`
	overflow: hidden;

	@media (max-width: 767px) {
	}
`;
const Card = styled.div`
	padding: 20px 10px;
`;

const ImageCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 300px;
	height: 300px;
	border: 1px solid #e4e4e4;
	margin-bottom: 20px;
	@media (max-width: 767px) {
		width: 180px;
		height: 180px;
	}
`;
const Img = styled.img`
	width: 80%;
	border-radius: 5px;
	background-size: cover;
	backface-visibility: hidden;

	transform: ${(props) => (props.isHover ? 'scale(1.1)' : 'scale(1)')};
	transition: transform 0.6s ease-in-out;
	z-index: ${(props) => (props.isHover ? 1 : 0)};
	@media (max-width: 767px) {
		width: 80%;
	}
`;

const Title = styled.div`
	text-align: center;
	font-size: 2.3rem;
	margin: 150px 0 50px;
	color: #111;
`;
const ProductsTitle = styled.div`
	margin-bottom: 10px;
	font-size: 1.4rem;
	font-weight: 600;
	color: #111;
	@media (max-width: 767px) {
		font-size: 1.2rem;
	}
`;
const Num = styled.div`
	/* font-weight: 600; */
`;

const PriceWrapper = styled.div`
	display: flex;
`;

const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 100px;
	ul {
		display: flex;
		list-style: none;
	}
	a {
		padding: 15px;
		text-decoration: none;
		color: #000;
	}
`;
