import { useNavigate, useParams } from "react-router-dom";
import '../App.scss'


function Search(props) {
  const {searchWord} = useParams();
  const navigate = useNavigate();

  const searchedMovies = [];

  props.movies.map((movie) => {
    if (movie.title.split(' ').join('').includes(searchWord.split(' ').join(''))) searchedMovies.push(movie);
  })

  return (
    <div className="search">
      <h1 className="searchWord">"{searchWord}"</h1>

      {
        searchedMovies.length === 0 ?
        <h2 className="comment">"{searchWord}"에 해당하는 영화가 없습니다...</h2>:
        null
      }

      <div className="searchedMovieList">
      {
        searchedMovies.map((searchedMovie) => {
          return(
            <div className="searchedMovie" onClick={() => {navigate('/player/'+searchedMovie.id)}}>
              <div className="searchedMovieImg">
                <img className='moviePoster' src={process.env.PUBLIC_URL + searchedMovie.posterImg} />
              </div>
              <div className="searchedMovieInfo">
                <div className="movieTitle">{searchedMovie.title}</div>
                <div className='summary'>CHECK THIS OUT 나는 정 상 수백발백중 하는 명 사 수부산진구 유명가수일취월장 하며 성장 중내가 대표해 이 거리를누구도 막지 못해 내 지껄임을사양할게 너의 벌쓰 피처링은이건 나의 TRACK MY SWAG노린 RAP ATTACK난 계속해서 매섭게 쏘겠어죄 속에서 날 대속해 주신 주</div>
              </div>   
            
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Search;