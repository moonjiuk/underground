import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import "../style.css"
import userData from "../userData";


function Header(props){

  const locationNow = useLocation();

  const navigate = useNavigate();

  if(locationNow.pathname.includes('player')) return null;
  
  return(
    <header>
      <button className="logo" onClick={() => {navigate('/')}} >
        <img className="logoIcon" src={process.env.PUBLIC_URL + '/assets/logoIcon.png'} />  
      </button>
      <nav>
          {
            props.searchModal ?
            null:
            <button className="search" onClick={() => {props.setSearchModal(true)}}>
              <img className='searchIcon' src={process.env.PUBLIC_URL + '/assets/searchIcon.png'}></img>
            </button>
          }
          <button className="menu" onClick={() => {props.setMenuModal(!props.menuModal)}}>
            <img className='menuIcon' src={process.env.PUBLIC_URL + '/assets/menuIcon.png'}></img>
          </button>
        </nav>
      {props.searchModal ? <SearchModal setSearchModal={props.setSearchModal}/> : null}
      {props.menuModal ? <MenuModal setMenuModal={props.setMenuModal} setLoginModal={props.setLoginModal}/> : null}
      {props.loginModal ? <LoginModal setLoginModal={props.setLoginModal}/> : null}
    </header>
  )
}

function SearchModal(props) {
  const recentWords = ['최근검색어1','최근검색어2','최근검색어3','최근검색어4','최근검색어5','최근검색어6'];
  const recommenedWords = ['추천검색어1','추천검색어2','추천검색어3','추천검색어4','추천검색어5','추천검색어6'];
  
  const [wordsShowMode, setWordsShowMode] = useState(true);
  
  const [searchWord, setSearchWord] = useState(''); 

  const navigate = useNavigate();
  const search = (link) => {
    if (searchWord.split(' ').join('')){
      navigate(link);
      props.setSearchModal(false);
    }
    else alert("검색어를 입력해주세요");   
  }

  const enterKey = (e) => {
    if(e.key === 'Enter'){
      search('/search/'+searchWord)
    };
  }

  return (
    <div>
      <div className="modalOut" onClick={() => props.setSearchModal(false)}></div>
      <div className="searchModal">
        <div className="searchInput">
        <input className="searchText" onChange={(e) => {setSearchWord(e.target.value)}} onKeyUp={enterKey} autoFocus/>
        <button className="searchBtn" onClick={() => {search('/search/'+searchWord)}}>
          <img className='searchBtnIcon' src={process.env.PUBLIC_URL + '/assets/searchIcon.png'} />
        </button>
        </div>
        <div className="words">
        <div className="wordsBtns">
          <button className={wordsShowMode ? "selectedBtn" : "RecentWordsBtn"} onClick={() => {setWordsShowMode(true)}}>최근검색어</button>
          <button className={wordsShowMode ? "recommenedWordsBtn" : "selectedBtn"} onClick={() => {setWordsShowMode(false)}}>추천검색어</button>
        </div>
        <div className="wordList">

          {
            wordsShowMode ?
            recentWords.map((recentWord) => {
            return (
                <div className="word">{recentWord}<button>x</button></div>
            )
            }):
            recommenedWords.map((recommenedWord) => {
              return (
                  <div className="word">{recommenedWord}</div>
              )
            })
          }
        </div>
        </div>
      </div>
    </div>
  )
}

function MenuModal(props) {
  const navigate = useNavigate();
  return (
    <div>
    <div className="menuModalOut" onClick={() => props.setMenuModal(false)}></div>
    <div className="menuModal">
      <button onClick={() => {navigate('/account')}}>계정</button>
      <button onClick={() => {navigate('/keep')}}>찜목록</button>
      <button onClick={() => {navigate('/requestMovie')}}>영화 신청</button>
      <button onClick={() => {navigate('/customerService')}}>고객센터</button>
      <button onClick={() => {navigate('/notice')}}>공지</button>
      <button onClick={() => {navigate('/setup')}}>설정</button>
      <button onClick={() => {props.setLoginModal(true)}}>로그인</button>
    </div>
    </div>
  )
}

function LoginModal(props) {
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [warnning, setWarnning] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
    <div className="modalOut" />
    <div className="loginModal">
      <button className="closeBtn" onClick={() => {props.setLoginModal(false)}}>x</button>
      <h2 className="loginTitle">로그인</h2>
      {warnning ? <div className="warnning">아이디 또는 비밀번호를 잘못 입력하였습니다.</div> : <div className="hidedWarnning"></div>}
      <input placeholder="아이디" className="loginInput" onChange={(e) => {setLoginId(e.target.value)}}></input>
      <input type="password" placeholder="비밀번호" className="loginInput" onChange={(e) => {setLoginPw(e.target.value)}}></input>
      <div className="saveId">
        <input type="checkbox" className="checkbox"></input>
        <span> 아이디 저장</span>
      </div>
      <button className="loginBtn" onClick={() => {setWarnning(!warnning)}}>로그인</button>
      <div className="loginMenuBtns">
        <button onClick={() => {navigate('/findIdPw')}}>아이디 찾기</button>
        <span>|</span>
        <button onClick={() => {navigate('/findIdPw')}}>비밀번호 찾기</button>
        <span>|</span>
        <button onClick={() => {navigate('/signin')}}>회원가입</button>
      </div>
    </div>
    </div>
  )
}


export default Header;