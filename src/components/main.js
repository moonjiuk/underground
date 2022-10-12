import { useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import movieData from '../movieData';
import tagData from '../tagData';
import userData from '../userData';

function Main(props){
  
  const [detailModal, setDetailModal] = useState(-1);
  
  return(
    <div className="home">
      <Hero></Hero>
      <ul className='movieLists'>
        {props.tags.map((tag) => {
          return(
            <MovieLists key={tag.id} tag={tag} movies={props.movies} setDetailModal={setDetailModal} />
          )
        })}
      </ul>
      <Footer />
      {detailModal != -1 ? <DetailModal movie={props.movies.filter((movie) => movie.id == detailModal)} setDetailModal={setDetailModal} />: null}
      <div className='gradiant' />
    </div>
  )
}

function Hero() {
  return(
    <div>
      <img className="hero" src={process.env.PUBLIC_URL + "/assets/heroImg.png"}></img>
    </div>
  )
}

function MovieLists(props) {
  
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const tagMovies = [];

    props.tag.movieIds.map((movieId) => {
      var pushMovie = props.movies.find((movie) => movie.id == movieId);
      if (pushMovie !== undefined) tagMovies.push(pushMovie);
    })
  
  
    useEffect(() => {
      ref.current.removeEventListener('scroll', onCheckScroll);
      ref.current.addEventListener('scroll', onCheckScroll);
    },[]);

    const onCheckScroll = () => {
      const x = ref.current.scrollLeft;
      // console.log(x);
      if (x >= 110) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      } 
    }

  return(
    <div>
      <ul className="movieList">
      {scrolled ? <ReducedTag tag={props.tag} /> : <div className='voidReducedTag'/>}
        <ul className="movieScroll" ref={ref}>
          {scrolled ? <button className='prevBtn' onClick={() => {
            ref.current.scrollBy({left:-500, behavior:'smooth'})
          }}>◀</button>: null}
        <div className='tag'>
          <div>
            <img src={process.env.PUBLIC_URL + props.tag.tagIcon} className='tagIcon'/>
            <div>{props.tag.tagName}</div>
          </div>
        </div> 
          <TagMovies movies={tagMovies} setDetailModal={props.setDetailModal} />

          <button className="nextBtn" onClick={() => {
            ref.current.scrollBy({left:500, behavior:'smooth'})
          }}>▶</button>
        </ul>
        
      </ul>
    </div>
  )
}

function ReducedTag(props) {
  return(
    <div className='reducedTag'>
      <img src={process.env.PUBLIC_URL + props.tag.tagIcon} className='tagIcon'/>
      <span className='tagName'>{props.tag.tagName}</span>
    </div>
  )
}

function TagMovies(props) {
  const navigate = useNavigate();
  return(
    <>
    {
    props.movies.map((movie) => {
      return(
        <li className='movie' key={movie.id}>
          <div className='layer' onClick={() => {navigate('/palyer/'+movie.id)}} />
          <img className="moviePoster" src={process.env.PUBLIC_URL + movie.posterImg} />
          <div className={'movieInfo'}>
            <div className='title'>{movie.title}</div>
            <div className='movieMenu'>
              <button>찜</button>
              <button onClick={() => {props.setDetailModal(movie.id)}}>상세보기</button>
            </div>
          </div>
        </li>
      )
    })
  }
  </>
  )
}

function Footer() {
  return(
    <footer>
      <div>
        <span>고객센터</span>
        <span>후원</span>
        <span>개인정보</span>
        <span>법적고지</span>
      </div>
      <div>
        <span>about us</span>
        <span>문의하기</span>
        <span>대학 한눈에보기</span>
      </div>
      <pre>
      <br /><br />
      언더그라운드    통신판매법 신고번호 : 123456    전화번호:01062740069<br /><br />
      대표: 문지욱<br /><br />
      이메일주소: sallormoon917@naver.com<br /><br />
      주소: 충북 제천시 한수면 봉화재길 517<br /><br />
      사업자 등록 번호: 123456<br /><br />
      클라우드 호스팅: Amazon Web Sevices Inc.<br /><br />
      공정거래위원회 웹사이트: 12356789<br /><br />
      </pre>
    </footer>
  )
}

function DetailModal(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div className='modalOut'></div>
      <div className='detailModal'>
        <button className='closeBtn' onClick={() => {props.setDetailModal(-1)}}>x</button>
        <img className='detailImg' src={process.env.PUBLIC_URL + props.movie[0].posterImg} />
          <button className='playBtn' onClick={() => {navigate('/palyer/'+props.movie[0].id)}}>재생</button>
          <button className='keepBtn'>찜</button>
        <div className='detailInfo'>
          <div className='runningTime'>총 120분</div>
          <h2 className='title'>{props.movie[0].title}</h2>
          <div className='summary'>CHECK THIS OUT 나는 정 상 수백발백중 하는 명 사 수부산진구 유명가수일취월장 하며 성장 중내가 대표해 이 거리를누구도 막지 못해 내 지껄임을사양할게 너의 벌쓰 피처링은이건 나의 TRACK MY SWAG노린 RAP ATTACK난 계속해서 매섭게 쏘겠어죄 속에서 날 대속해 주신 주</div>
          <ul className='otherInfo'>
            <li>개봉일 : 2001년 1월 5일</li>
            <li>감독 : 장재영</li>
            <li>각본 : 장재영</li>
            <li>출연진 : 문지욱, 서태성, 장재영</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Main;