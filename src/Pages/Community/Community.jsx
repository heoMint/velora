import React, { useRef, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { BsChatRightQuote } from 'react-icons/bs';
import { fetchComments as fetchCommentsData } from '../../hooks/queries/fetchComments';
import styled, { keyframes } from 'styled-components';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Community = () => {
	const {
		data,
		isLoading,
		isError,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery('comments', fetchCommentsData, {
		getNextPageParam: (lastPage) => lastPage.nextPageParam,
	});

	const loadMoreRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasNextPage) {
					fetchNextPage();
				}
			},
			{ threshold: 1.0 },
		);

		if (loadMoreRef.current) {
			observer.observe(loadMoreRef.current);
		}

		return () => {
			if (loadMoreRef.current) {
				observer.unobserve(loadMoreRef.current);
			}
		};
	}, [hasNextPage, fetchNextPage]);
	// console.log('Data:', data);
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error fetching data</div>;

	return (
		<CommentBackground>
			<CommunityWrapper>
				<CommunityTitle>COMMUNITY</CommunityTitle>
				<BoxWrapper>
					{data.pages.map((page, pageIndex) => (
						<React.Fragment key={pageIndex}>
							{Array.isArray(page.data) &&
								page.data.map((item) => (
									<FirstBox key={item.id}>
										<div>
											<Title>{item.title}</Title>
											<Time>{item.time}</Time>
										</div>
										<Comment>
											<BsChatRightQuote size={22} />
											<CommentNum>{item.num}</CommentNum>
										</Comment>
									</FirstBox>
								))}
						</React.Fragment>
					))}
				</BoxWrapper>
				{hasNextPage && (
					<div ref={loadMoreRef} style={{ height: '150px' }}>
						{isFetchingNextPage ? (
							<DotLottieReact
								src="/Animation%20-%201718932225127.json"
								loop
								autoplay
							/>
						) : (
							''
						)}
					</div>
				)}
			</CommunityWrapper>
		</CommentBackground>
	);
};

export default Community;

const CommentBackground = styled.div`
	background-color: #fff7e6;
`;
const CommunityWrapper = styled.div`
	position: relative;
	padding-top: 5px;
`;
const CommunityTitle = styled.div`
	font-size: 2.3rem;
	font-weight: 600;
	text-align: center;
	margin: 100px 0 100px 0;
`;
const BoxWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 30px;
`;
const Title = styled.div`
	padding-bottom: 10px;
	font-size: 1.2rem;
	font-weight: 600;
`;
const FirstBox = styled.div`
	display: flex;
	flex-basis: 40%;
	flex-grow: 1;
	justify-content: space-between;
	padding: 30px;
	margin: 10px 10px;
	box-shadow: rgba(99, 99, 99, 0.05) 0px 2px 8px 0px;
	border-radius: 10px;
	background-color: white;
`;
const Comment = styled.div`
	display: flex;
	align-items: center;
`;
const Time = styled.div`
	color: gray;
`;
const CommentNum = styled.div`
	padding-left: 10px;
`;
