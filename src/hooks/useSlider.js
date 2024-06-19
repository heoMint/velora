import { useState, useEffect } from 'react';

/* AllProducts 관리 */
export const useProductsSlider = (lastIndex, intervalTime) => {
	const [selected, setSelected] = useState(0); // 현재 이미지 인덱스를 추적
	const [isHovered, setIsHovered] = useState(false); // 마우스가 슬라이더 영역 위에 있는지 여부를 추적

	/**
	 * !isHovered이면 intervalTime 밀리초마다 selected를 업데이트하기 위해 (setInterval)을 시작합니다. isHovered 등이 변경되면 간격(clearInterval)을 지워 정리
	 * 구성 요소에서 사용될 상태 변수(selected, setSelected, isHovered, setIsHovered)를 반환
	 */
	useEffect(() => {
		let intervalId;

		if (!isHovered) {
			intervalId = setInterval(() => {
				setSelected((prevSelected) => (prevSelected + 1) % lastIndex);
			}, intervalTime);
		}

		return () => clearInterval(intervalId);
	}, [isHovered, lastIndex, intervalTime]);

	return { selected, setSelected, isHovered, setIsHovered };
};

/* Lank 관리 */
export const useLankSlider = (lastIndex, intervalTime) => {
	// State variables for slider functionality
	const [selected, setSelected] = useState(0); // 현재 이미지 인덱스를 추적
	const [isHovered, setIsHovered] = useState(false); // 마우스가 슬라이더 영역 위에 있는지 여부를 추적

	/**
	 * !isHovered이면 intervalTime 밀리초마다 selected를 업데이트하기 위해 (setInterval)을 시작합니다. isHovered 등이 변경되면 간격(clearInterval)을 지워 정리
	 * 구성 요소에서 사용될 상태 변수(selected, setSelected, isHovered, setIsHovered)를 반환
	 */
	useEffect(() => {
		let intervalId;

		if (!isHovered) {
			intervalId = setInterval(() => {
				setSelected((prevSelected) => (prevSelected + 2) % lastIndex);
			}, intervalTime);
		}

		return () => clearInterval(intervalId);
	}, [isHovered, lastIndex, intervalTime]);

	return { selected, setSelected, isHovered, setIsHovered };
};
