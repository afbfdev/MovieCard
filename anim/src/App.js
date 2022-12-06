import './App.css';
import Navbar from './Components/Navbar';
import Movies from './Components/movies';
import Watch from './Components/Watch';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  let listMovies = [ 
    {
    title: 'Movies Title',
    para : 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    image : 'manga1.jpeg'
  },

  {
    title: 'Movies Title',
    para : 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    image : 'manga2.jpeg'
  },
  {
    title: 'Movies Title',
    para : 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    image : 'manga3.jpeg'
  },

  {
    title: 'Movies Title',
    para : 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    image : 'manga4.jpeg'

  },

  {
    title: 'Movies Title',
    para : 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    image : 'manga5.jpeg'
  },

  {
    title: 'Movies Title',
    para : 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    image : 'manga6.jpeg'
  },

  {
    title: 'Movies Title',
    para : 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    image : 'manga7.jpeg'
  },

  {
    title: 'Movies Title',
    para : 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    image : 'manga8.jpeg'
  },


]
   
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path = '/home' element = {<Movies movies = {listMovies}/>}/>
            <Route path = '/home' element = {<Movies/>}/>            
            <Route path='/watch' element = {<Watch/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
