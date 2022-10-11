import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../style.css"
import userData from "../userData";


function Header(props){
  const [menuModal, setMenuModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return(
    <header>
      <img className="logo" src={process.env.PUBLIC_URL + '/assets/logoIcon.png'} />  
      <nav>
          {
            searchModal ?
            null:
            <button className="search" onClick={() => {setSearchModal(true)}}>
              <img className='searchIcon' src={process.env.PUBLIC_URL + '/assets/searchIcon.png'}></img>
            </button>
          }
          <button className="menu" onClick={() => {setMenuModal(!menuModal)}}>
            <img className='menuIcon' src={process.env.PUBLIC_URL + '/assets/menuIcon.png'}></img>
          </button>
        </nav>
      {searchModal ? <SearchModal setSearchModal={setSearchModal}/> : null}
      {menuModal ? <MenuModal setLoginModal={setLoginModal}/> : null}
      {loginModal ? <LoginModal setLoginModal={setLoginModal}/> : null}
    </header>
  )
}

function SearchModal(props) {
  const recentSearches = ['최근검색어1','최근검색어2','최근검색어3','최근검색어4','최근검색어5','최근검색어6'];
  const recommenedSearches = ['추천검색어1','추천검색어2','추천검색어3','추천검색어4','추천검색어5','추천검색어6'];
  const [searchWord, setSearchWord] = useState(''); 

  const navigate = useNavigate();

  return (
    <div>
      <div className="modalOut" onClick={() => props.setSearchModal(false)}></div>
      <div className="searchModal">
        <div className="searchInput">
        <input className="searchText" onChange={(e) => {setSearchWord(e.target.value)}} />
        <button className="searchBtn" onClick={() => {navigate('/search/'+searchWord)}}>
          <img className='searchBtnIcon' src={process.env.PUBLIC_URL + '/assets/searchIcon.png'} />
        </button>
        </div>
        {/* <div className="searchList">
        <ul>
          {recentSearches.map((recentSearch) => {
            return (
              <li>{recentSearch}</li>
            )
          })}
        </ul>
        <ul>
          {recommenedSearches.map((recommenedSearch) => {
            return (
              <li>{recommenedSearch}</li>
            )
          })}
        </ul>
        </div> */}
      </div>
    </div>
  )
}

function MenuModal(props) {
  const navigate = useNavigate();
  return (
    <div className="menuModal">
      <button onClick={() => {navigate('/account')}}>계정</button>
      <button onClick={() => {navigate('/keep')}}>찜목록</button>
      <button onClick={() => {navigate('/board')}}>고객센터</button>
      <button onClick={() => {navigate('/setup')}}>설정</button>
      <button onClick={() => {props.setLoginModal(true)}}>로그인</button>
    </div>
  )
}

function LoginModal(props) {
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');

  return (
    <div>
    <div className="modalOut"></div>
    <div className="loginModal">
      <button className="closeBtn" onClick={() => {props.setLoginModal(false)}}>x</button>
      <h2>로그인</h2>
      <input placeholder="아이디" className="loginInput" onChange={(e) => {setLoginId(e.target.value)}}></input>
      <input type="password" placeholder="비밀번호" className="loginInput" onChange={(e) => {setLoginPw(e.target.value)}}></input>
      <input type="checkbox" className="loginCheckbox"></input>
      <button className="loginBtn" onClick={() => {}}>로그인</button>
    </div>
    </div>
  )
}


export default Header;