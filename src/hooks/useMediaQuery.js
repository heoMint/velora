import { useMediaQuery } from 'react-responsive';

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
	return isMobile ? children : null;
};

const PC = ({ children }) => {
	const isPc = useMediaQuery({ query: '(min-width: 768px)' });
	return isPc ? children : null;
};

export { Mobile, PC };
