import { useParams } from "react-router-dom";
import '../App.scss'


function Search(props) {
  const {searchWord} = useParams();
  return (
    <div>{searchWord}</div>
  )
}

export default Search;