import { Routes, Route, useNaviate } from "react-router-dom"
import { useEffect, useState } from "react"
import "./App.scss"
import Header from './components/header.js'
import Main from './components/main.js'
import Signin from './components/signin.js'
import Account from './components/account.js'
import Find from './components/findIdPw.js'
import Board from './components/board.js'
import Player from "./components/player"
import Search from "./components/search"
import movieData from './movieData';
import tagData from './tagData';
import userData from "./userData"

function App() {

  const [movies, setMovies] = useState(movieData.filter((movie) => movie.open));
  const [tags, setTags] = useState(tagData.filter((tag) => tag.tagOpen));
  
  return (
    <div className="App">
      
      <Header/>
      
      <main>
        <Routes>
          <Route path="/" element={<Main movies={movies} tags={tags} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/findIdPw" element={<Find />} />
          <Route path="/board" element={<Board />} />
          <Route path={"/player/:id"} element={<Player />} />
          <Route path={"/search/:searchWord"} element={<Search />} />
        </Routes>
      </main>

      </div>
  );
}

export default App;
