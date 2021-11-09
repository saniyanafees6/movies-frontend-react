import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Footer, Admin } from './components';
import { Home, Movie, Movies, Categories } from './Screens';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3 custom__main">
        <Container>
          <Routes>
            <Route path="/movies/:_id" element={<Movie />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/" element={<Home />} exact></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
