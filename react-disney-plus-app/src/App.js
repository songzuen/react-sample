import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Category from './components/Category';
import Row from './components/Row';
import requests from './api/requests';

function App() {
	return (
		<Container>
			<Nav />
			<Banner />
			<Category />
			<Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
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
