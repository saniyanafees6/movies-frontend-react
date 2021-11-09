import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Loader } from '../components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await axios.get('/v1/movies');
      setIsLoaded(true);
      setMovies(data.movies);
    };

    fetchData();
    return movies;
  }, [isLoaded, error]);
  return (
    <>
      <h2>Movies</h2>
      {!isLoaded ? (
        <Loader />
      ) : (
        <Row>
          {movies.map((movie) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Link to={`/movies/${movie.id}`}>
                <Card className="my-3 p-3 rounded movie__card">
                  <Card.Body className="display__hover">
                    <Card.Title as="div">
                      <strong>{movie.title}</strong>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Movies;
