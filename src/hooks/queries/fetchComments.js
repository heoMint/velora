// api.js (또는 API 함수를 정의하는 파일)
export const fetchComments = async ({ pageParam = 1 }) => {
	// API 호출 시뮬레이션을 위한 딜레이
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// 시뮬레이션 데이터
	const response = {
		data: [
			{
				id: 1,
				title: '이거 저만 이래요 ?',
				time: '10분전',
				num: '13',
			},
			{
				id: 2,
				title: '님들 앰플 뭐랑 같이써요?',
				time: '11분전',
				num: '1',
			},
			{
				id: 3,
				title: '에이지알 유쎄라 이제 안씀 ?',
				time: '15분전',
				num: '4',
			},
			{
				id: 4,
				title: '님들 이거',
				time: '20분전',
				num: '3',
			},
		],

		hasNextPage: pageParam < 2, // 페이지 파라미터 기반으로 다음 페이지 여부 결정
		nextPageParam: pageParam + 1, // 페이지 파라미터 기반으로 다음 페이지 값 설정
	};

	return response;
};
