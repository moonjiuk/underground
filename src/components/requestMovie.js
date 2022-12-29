import { useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function RequestMovie() {
  
  return(
    <div className="requestMovie">
      <Routes>
        <Route path="/" element={<SelectMenu />} />
        <Route path="/1" element={<Request />} />
        <Route path="/2" element={<Upload />} />
      </Routes>
    </div>
  )
}

function SelectMenu() {
  const navigate = useNavigate();
  return(
    <div className="selectMenu">
      <h1>영화 신청</h1>
      <div className="Btns">
        <div>
          <button onClick={() => {navigate("/requestMovie/1")}}>영화 요청</button>
          <p className="comment">일반 사용자분들이 보고싶은 영화가 있을 때 이용해주세요</p>
        </div>

        <div>
          <button onClick={() => {navigate("/requestMovie/2")}}>영화 등록 신청</button>
          <p className="comment">영화 제자자 분들이 자신의 영화를 등록하고 싶을 때 이용해주세요</p>
        </div>
      </div>
    </div>
  )
}

function Request() {

  const [inputData, setInputData] = useState("");
  const [directors, setDirectors] = useState([]);

  const add = () => {
    if (inputData.split(' ').join('')) setDirectors([...directors, inputData]);
    setInputData("");
  }

  const enterKey = (e) => {
    if(e.key === 'Enter'){
      add();
    };
  }

  return (
    <div className="request">
      <h1>영화 요청</h1>
      <div className="inputs">
        <div className="titleInput">
          <span>제목</span>
          <input/>
        </div>
        <div className="directorInput">
          <span>감독</span>
          <input value={inputData} onChange={(e) => {setInputData(e.target.value)}} onKeyUp={enterKey}/>
          <button onClick={add}>추가</button>
          <div className="directors">
            {
              directors[0] ?
              directors.map((director) => {
                return (
                  <div className="directorBox">
                    <span className="director">{director}</span>
                    <button className="delBtn" onClick={() => {setDirectors(directors.filter((del) => del !== director))}}>x</button>
                  </div>
                )
              }):
              <div className="void" />
            }
          </div>
        </div>
      <button className="requestBtn" onClick={() => console.log(directors)}>요청</button>
      </div>
    </div>
  )
}

function Upload() {

  const [directorInput, setDirectorInput] = useState("");
  const [scenarioInput, setScenarioInput] = useState("");
  const [actorInput, setActorInput] = useState("");
  // const [genreInput, setGenreInput] = useState("");

  const genres = ['로맨스', '코미디', '액션', '느와르', '스릴러', '공포', '드라마', '판타지', 'SF'];

  const [videoFile, setVideoFile] = useState();
  const [posterFile, setPosterFile] = useState();
  const [subtitleFile, setSubtitleFile] = useState();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState("");
  const [directors, setDirectors] = useState([]);
  const [scenarios, setScenarios] = useState([]);
  const [actors, setActors] = useState([]);
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [rating, setRating] = useState('전체관람가');
  const [specialNote, setSpecialNote] = useState("")
  

  const videoInput = useRef();
  const posterInput = useRef();
  const subtitleInput = useRef();

  const fileInputClick = (ref) => {
    ref.current.click();
  };

  const addDirector = () => {
    if (directorInput.split(' ').join('')) setDirectors([...directors, directorInput]);
    setDirectorInput("");
  }

  const addScenario = () => {
    if (scenarioInput.split(' ').join('')) setScenarios([...scenarios, scenarioInput]);
    setScenarioInput("");
  }

  const addActor = () => {
    if (actorInput.split(' ').join('')) setActors([...actors, actorInput]);
    setActorInput("");
  }

  const enterKey = (e, add) => {
    if(e.key === 'Enter'){
      add();
    };
  }
  
  const checkGenres = (checked, genre) => {
    if (checked) setCheckedGenres([...checkedGenres, genre]);
    else setCheckedGenres(checkedGenres.filter((el) => el !== genre));
  }

  // const addGenre = () => {
  //   if (genreInput.split(' ').join('')) setGenres([...genres, genreInput]);
  //   setGenreInput("");
  // }

  return (
    <div className="upload">
      <h1>영화 등록 신청</h1>
      <div className="inputs">
        <div className="inputBox">
          <span className="inputName">영화 동영상</span>
          <input className="fileInput" ref={videoInput} type={"file"} onChange={(e) => {setVideoFile(e.target.value)}}/>
          <button className="fileInputBtn" onClick={() => {fileInputClick(videoInput)}}>동영상</button>
        </div>

        <div className="inputBox">
          <span className="inputName">영화 포스터</span>
          <input className="fileInput" ref={posterInput} type={"file"} onChange={(e) => {setPosterFile(e.target.value)}}/>
          <button className="fileInputBtn" onClick={() => {fileInputClick(posterInput)}}>포스터</button>
        </div>
        
        <div className="inputBox">
          <span className="inputName">자막</span>
          <input className="fileInput" ref={subtitleInput} type={"file"} onChange={(e) => {setSubtitleFile(e.target.value)}}/>
          <button className="fileInputBtn" onClick={() => {fileInputClick(subtitleInput)}}>자막</button>
        </div>
        
        <div className="inputBox">
          <span className="inputName">제목</span>
          <input onChange={(e) => {setTitle(e.target.value)}}/>
        </div>
        
        <div className="inputBox">
          <span className="inputName">줄거리</span>
          <textarea onChange={(e) => {setSummary(e.target.value)}}/>
        </div>
        
        <div className="inputBox">
          <span className="inputName">감독</span>
          <input value={directorInput} onChange={(e) => {setDirectorInput(e.target.value)}} onKeyUp={(e) => {enterKey(e, addDirector)}} />
          <button className="addBtns" onClick={addDirector}>추가</button>
          <div className="addedDatas">
            {
              directors[0] ?
              directors.map((director) => {
                return (
                  <div className="addedDataBox">
                    <span className="addedData">{director}</span>
                    <button className="delBtn" onClick={() => {setDirectors(directors.filter((del) => del !== director))}}>x</button>
                  </div>
                )
              }):
              <div className="void" />
            }
          </div>
        </div>
        
        <div className="inputBox">
          <span className="inputName">각본</span>
          <input value={scenarioInput} onChange={(e) => {setScenarioInput(e.target.value)}} onKeyUp={(e) => {enterKey(e, addScenario)}} />
          <button className="addBtns" onClick={addScenario}>추가</button>
          <div className="addedDatas">
            {
              scenarios[0] ?
              scenarios.map((scenario) => {
                return (
                  <div className="addedDataBox">
                    <span className="addedData">{scenario}</span>
                    <button className="delBtn" onClick={() => {setScenarios(scenarios.filter((del) => del !== scenario))}}>x</button>
                  </div>
                )
              }):
              null
              //<div className="void" />
            }
          </div>
        </div>
        
        <div className="inputBox">
          <span className="inputName">출연진</span>
          <input value={actorInput} onChange={(e) => {setActorInput(e.target.value)}} onKeyUp={(e) => {enterKey(e, addActor)}} />
          <button className="addBtns" onClick={addActor}>추가</button>
          <div className="addedDatas">
            {
              actors[0] ?
              actors.map((actor) => {
                return (
                  <div className="addedDataBox">
                    <span className="addedData">{actor}</span>
                    <button className="delBtn" onClick={() => {setActors(actors.filter((del) => del !== actor))}}>x</button>
                  </div>
                )
              }):
              <div className="void" />
            }
          </div>
        </div>
        
        <div className="inputBox">
          <span className="inputName">장르</span>
          {/* <input type={"checkbox"} value={genreInput} onChange={(e) => {setGenreInput(e.target.value)}} onKeyUp={(e) => {enterKey(e, addGenre)}} />
          <button className="addBtns" onClick={addGenre}>추가</button> */}

          <div className="genresBox">
          {
            genres.map((genre) => {
              return (
                <span className="genreCheckbox">
                  <span>{genre}</span>
                  <input type="checkbox" onChange={(e) => {checkGenres(e.currentTarget.checked, genre)}} />
                  {genre==='액션' || genre==='공포' ? <br/> : null}
                </span>
              )
            })
          }
          </div>

          {/* <div className="addedDatas">
            {
              genres[0] ?
              genres.map((genre) => {
                return (
                  <div className="addedDataBox">
                    <span className="addedData">{genre}</span>
                    <button className="delBtn" onClick={() => {setGenres(genres.filter((del) => del !== genre))}}>x</button>
                  </div>
                )
              }):
              <div className="void" />
            }
          </div> */}
        </div>

          <div className="inputBox">
            <span className="inputName">관람 등급</span>
            <select onChange={(e) => {setRating(e.target.value)}}>
              <option key='전체관람가' value='전체관람가'>전체관람가</option>
              <option key='12세이상 관람가' value='12세이상 관람가'>12세이상 관람가</option>
              <option key='15세이상 관람가' value='15세이상 관람가'>15세이상 관람가</option>
              <option key='청소년관람불가' value='청소년관람불가'>청소년관람불가</option>
            </select>
          </div>

          <div className="inputBox">
            <span className="inputName">특이사항</span>
            <textarea onChange={(e) => {setSpecialNote(e.target.value)}}/>
          </div>


        <button className="requestBtn" onClick={() => {console.log(videoFile, posterFile, subtitleFile, title, summary, directors, scenarios, actors, checkedGenres, rating, specialNote)}}>영화 등록 신청</button>
      </div>
    </div>
  )
}

export default RequestMovie;