import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const AllProducts = () => {
	return (
		<div>
			<Title>ALL PRODUCTS</Title>
			<div>
				<ImageBox>이미지박스</ImageBox>
				<ProductName>에이지알 유쎄라 딥 샷</ProductName>
				<ProductPrice>
					<span>1ea / </span>
					<span>200,000원</span>
				</ProductPrice>
			</div>
			<div className="swiper-wrapper">
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination, Navigation]}
					className="swiper"
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<div>에이지알 유세라 딥 샷</div>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
					<SwiperSlide>Slide 8</SwiperSlide>
					<SwiperSlide>Slide 9</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default AllProducts;

const Title = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 50px;
	font-size: 3rem;
	font-weight: 500;
`;
const ImageBox = styled.div`
	border: 1px solid black;
	width: 300px;
	height: 300px;
`;
const ProductName = styled.h3`
	font-size: 1.4rem;
	font-weight: 600;
`;

const ProductPrice = styled.p``;
