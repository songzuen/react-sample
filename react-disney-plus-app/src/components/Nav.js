import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { setUser, removeUser } from '../store/userSlice'

const Nav = () => {
	const [show, setShow] = useState("false");
	const { pathname } = useLocation();
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();

	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	
	const initialUserData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : {};
	// const [userData, setUserData] = useState(initialUserData);

	const userData = useSelector(state => state.user);
	const dispatch = useDispatch()
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				if(pathname === "/") navigate("/main");
			} else {
				navigate("/");
			}
		});
	  }, [auth, navigate, pathname]);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setShow("true");
			} else {
				setShow("false");
			}
		})
		return () => {
			window.addEventListener('scroll',handleScroll);
		}
	},[])

	const handleScroll = () => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setShow("true");
			} else {
				setShow("false");
			}
		})
	}

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		navigate(`/search?q=${e.target.value}`);
	}

	const handleAuth = () => {
		signInWithPopup(auth, provider).then((result) => {
			// // This gives you a Google Access Token. You can use it to access the Google API.
			// const credential = GoogleAuthProvider.credentialFromResult(result);
			// const token = credential.accessToken;
			// // The signed-in user info.
			// const user = result.user;
			// // IdP data available using getAdditionalUserInfo(result)
			// // ...

			// setUserData(result.user);
			// localStorage.setItem("userData", JSON.stringify(result.user));
			dispatch(setUser({
				id : result.user.uid,
				email : result.user.email,
				photoURL : result.user.photoURL,
				displayName : result.user.displayName
			}))
			
		}).catch((error) => {
			// // Handle Errors here.
			// const errorCode = error.code;
			// const errorMessage = error.message;
			// // The email of the user's account used.
			// const email = error.customData.email;
			// // The AuthCredential type that was used.
			// const credential = GoogleAuthProvider.credentialFromError(error);
			// // ...
        	console.log(error);
		});
	}
	const handleLogOut = () => {
		signOut(auth).then(() => {
			// setUserData();
			// navigate('/')
			dispatch(removeUser())
		})
		.catch((error) => {
			alert(error.message);
		});
	};
	return (
		<NavWrapper show={show}>
			<Logo>
				<img alt="Disney Plus logo" src="/images/logo.svg" onClick={() => (window.location.href = "/")} />
			</Logo>

			{ pathname === '/' ? 
				<Login onClick={handleAuth}>Login</Login>
			:
				<>
				<Input className='nav__input' type='text' value={searchValue} onChange={handleChange} placeholder='검색해주세요.'/> 
				<SignOut>
					<UserImg src={userData.photoURL} alt={userData.displayName}/>
					<DropDown>
						<span onClick={handleLogOut}>Sign Out</span>
					</DropDown>
				</SignOut>
				</> 
			}
		</NavWrapper>
	)
}

const DropDown = styled.div`
	position: absolute;
	top: 48px;
	right: 0px;
	background: rgb(19, 19, 19);
	border: 1px solid rgba(151, 151, 151, 0.34);
	border-radius: 4px;
	padding: 10px;
	font-size: 14px;
	letter-spacing: 3px;
	width: 100px;
	opacity: 0;
`

const SignOut = styled.div`
	position: relative;
	height: 48px;
	width: 48px;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;

	&:hover {
		${DropDown} {
		opacity: 1;
		transition-duration: 1s;
		}
	}
`;

const UserImg = styled.img`
	height: 100%;
	border-radius: 50%;
`;

const Login = styled.a`
	background-color: rgba(0, 0, 0, 0.6);
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;

const Input = styled.input`
	position: fixed;
	left: 50%;
	transform: translate(-50%, 0);
	background-color: rgba(0, 0, 0, 0.582);
	border-radius: 5px;
	color: white;
	padding: 5px;
	border: 1px solid lightgray;
`;

const NavWrapper = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: ${(props) => (props.show ? "#090b13" : "transparent")};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
`;

const Logo = styled.a`
	padding: 0;
	width: 80px;
	margin-top: 4px;
	max-height: 70px;
	font-size: 0;
	display: inline-block;

	img {
		display: block;
		width: 100%;
	}
`;

export default Nav