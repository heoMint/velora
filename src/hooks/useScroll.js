import { useState, useEffect } from 'react';

/* Lank 스크롤트리거 */
export const useLankScroll = () => {
	const [scrollY, setScrollY] = useState(0);
	// 페이지 로드 후 스크롤 이벤트 핸들러가 즉시 실행되지 않도록
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	// 스크롤 위치에 따라 콘텐츠 카드를 표시할지 여부를 결정
	const [isContentCardItem, setIsContentCardItem] = useState(false);
	// 사용자가 특정 지점을 스크롤할 때 스크롤 이벤트 핸들러 로직이 한 번만 실행되도록
	const [hasScrolledPast, setHasScrolledPast] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!isInitialLoad && !hasScrolledPast) {
				setScrollY(window.scrollY);
				// console.log(window.scrollY);

				if (window.scrollY >= 200) {
					setIsContentCardItem(true);
					setHasScrolledPast(true); // 추가 실행 방지를 위해 true로 설정
				}
			}
		};
		window.addEventListener('scroll', handleScroll);

		setTimeout(() => {
			setIsInitialLoad(false);
		}, 1000); // 페이지가 로드된 후 1초 뒤에 스크롤 감지 시작

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isInitialLoad, hasScrolledPast]);
	return {
		scrollY,
		isInitialLoad,
		isContentCardItem,
		hasScrolledPast,
	};
};

/* All Products 스크롤트리거 */
export const useProductsScroll = () => {
	const [scrollY, setScrollY] = useState(0);
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	const [isContentCardItem, setIsContentCardItem] = useState(false);
	const [hasScrolledPast, setHasScrolledPast] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!isInitialLoad && !hasScrolledPast) {
				setScrollY(window.scrollY);
				// console.log(window.scrollY);

				if (window.scrollY >= 1000) {
					setIsContentCardItem(true);
					setHasScrolledPast(true);
				}
			}
		};
		window.addEventListener('scroll', handleScroll);

		setTimeout(() => {
			setIsInitialLoad(false);
		}, 1000); // 페이지가 로드된 후 1초 뒤에 스크롤 감지 시작

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isInitialLoad, hasScrolledPast]);
	return {
		scrollY,
		isInitialLoad,
		isContentCardItem,
		hasScrolledPast,
	};
};

/* Community 스크롤트리거 */
export const useCommunityScroll = () => {
	const [scrollY, setScrollY] = useState(0);
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	const [isContentCardItem, setIsContentCardItem] = useState(false);
	const [hasScrolledPast, setHasScrolledPast] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!isInitialLoad && !hasScrolledPast) {
				setScrollY(window.scrollY);

				if (window.scrollY >= 2000) {
					setIsContentCardItem(true);
					setHasScrolledPast(true);
				}
			}
		};
		window.addEventListener('scroll', handleScroll);

		setTimeout(() => {
			setIsInitialLoad(false);
		}, 1000); // 페이지가 로드된 후 1초 뒤에 스크롤 감지 시작

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isInitialLoad, hasScrolledPast]);
	return {
		scrollY,
		isInitialLoad,
		isContentCardItem,
		hasScrolledPast,
	};
};
