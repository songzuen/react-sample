import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';

function App() {
	return (
		<Container>
			<Nav />
			<Banner />
		</Container>
	);
}

const Container = styled.main`
	position : relative;
	min-height : calc(100vh - 250px);
	overflow-x : hidden;
	display : block;
	top : 72px;								// 네비게이션 밑에 세팅하기 위해 top 설정
	padding : 0 calc(3.5vw + 5px);

	// 가상요소
	&::after {
		background : url("/images/home-background.png") center center / cover no-repeat fixed;
		content : "";						// 가상요소 사용시 필수로 입력
		position : absoulte;
		inset : 0px;
		opacity : 1;
		z-index : -1;
	}
`;

export default App;
