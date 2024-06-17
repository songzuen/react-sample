import './App.css';
import TextInput from './components/TextInput';
import CharcterCount from './components/CharcterCount';
import { atom, selector } from 'recoil';

/**
 * atom은 상태(state)의 일부를 나타냄
 * 어떤 컴포넌트에서나 읽고 쓸수 있고 해당 컴포넌트들은 암묵적으로 atom을 구독
 * atom에 변화가 있으면 atom을 구독하는 모든 컴포넌트들이 렌더링됨
 */
export const textState = atom({
	key : 'textState',
	default : ''
})




/**
 *  selector 는 atom 혹은 다른 selector 상태를 입력받아 동적인 데이터를 반환(순수함수)
 * 참조하던 다른 상태가 변경되면 같이 update
 * selector가 바라보던 컴포넌트들도 렌더링
 */
export const charCountState = selector({
	key : 'charCountState',
	// get: selector의 순수함수 사용할 값을 반환
	// 매개변수인 콜백 객체 내 get() 메서드로 다른 atom 혹은 selector를 참조
	get : ({get}) => {
		const text = get(textState)

		return text.length
	}
})

function App() {
	return (
		<div>
			<TextInput />
			<CharcterCount />
		</div>
	);
}

export default App;
