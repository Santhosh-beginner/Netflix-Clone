import './App.css';
import requests from './requests';
import Row from './Row';
import React from 'react';
import Banner from './Banner';
import Nav from './Nav';
//<Navbar></Navbar>
//      <Banner></Banner>
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />

    </div>
  );
}

export default App;
