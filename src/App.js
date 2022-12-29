import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import "./App.scss"
import Header from './components/header.js'
import Main from './components/main.js'
import Signin from './components/signin.js'
import Account from './components/account.js'
import Find from './components/findIdPw.js'
import CustomerService from "./components/customerService.js"
import Player from "./components/player"
import Search from "./components/search"
import movieData from './movieData';
import tagData from './tagData';
import userData from "./userData"
import Footer from "./components/footer"
import RequestMovie from "./components/requestMovie"
import ScrollToTop from './components/scrollToTop';
import Notice from "./components/notice"
import Back from "./components/back"

function App() {

  const [movies, setMovies] = useState(movieData.filter((movie) => movie.open));
  const [tags, setTags] = useState(tagData.filter((tag) => tag.tagOpen));
  const user = userData;

  const [menuModal, setMenuModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [detailModal, setDetailModal] = useState(-1);

  
  useEffect(() => {
    const escKey = (e) => {
      if(e.keyCode === 27){
        if(detailModal !== -1) setDetailModal(-1);
        else if(searchModal) setSearchModal(false);
        else {
          if(loginModal) setLoginModal(false);
          else setMenuModal(false);
        }
      }
    };
    window.addEventListener("keyup", escKey);
    return () => window.removeEventListener("keyup", escKey);
  },[menuModal, searchModal, loginModal, detailModal])


  return (
    <div className="App">

      <ScrollToTop setMenuModal={setMenuModal} setLoginModal={setLoginModal} setSearchModal={setSearchModal} />
      
      <Header menuModal={menuModal} searchModal={searchModal} loginModal={loginModal} setMenuModal={setMenuModal} setSearchModal={setSearchModal} setLoginModal={setLoginModal} />
      <Back />
      <main>
        <Routes>
          <Route path="/" element={<Main movies={movies} tags={tags} detailModal={detailModal} setDetailModal={setDetailModal} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/findIdPw" element={<Find />} />
          <Route path={"/customerService/*"} element={<CustomerService />} />
          <Route path={"/player/:id"} element={<Player />} />
          <Route path={"/search/:searchWord"} element={<Search movies={movies} />} />
          <Route path={"/requestMovie/*"} element={<RequestMovie />} />
          <Route path={"/notice/*"} element={<Notice />} />
        </Routes>
      </main>

      <Footer />

      </div>
  );
}

export default App;
