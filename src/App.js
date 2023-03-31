import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';
import { Container, Row, Col } from 'react-bootstrap';

import Users from './components/Users';
import Repo from './components/Repo';
import Search from './components/Search';

  const client_id = "WRITE HERE YOUR CLIENT ID";
  const client_secret="WRITE HERE YOUR CLIENT SECRET";


function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [err, setErr] = useState('');

  const handleSearch = (searchKeyword) => {
    setErr('');
    if (searchKeyword === '') {
      setErr("Search field can't be empty!!");
    } else {
      axios.all([
        axios.get(`https://api.github.com/users/${searchKeyword}?client_id=${client_id}&client_secret=${client_secret}`),
        axios.get(`https://api.github.com/users/${searchKeyword}/repos?client_id=${client_id}&client_secret=${client_secret}&sort=created`),
      ])
        .then(
          axios.spread((userRes, reposRes) => {
            // console.log(userRes.data, reposRes.data);
            setUser(userRes.data);
            setRepos(reposRes.data);
          })
        )
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (user.login) {
      const userContainer = document.querySelector('.user-container');
      userContainer.classList.add('animate__animated', 'animate__fadeInRight');
    }
  }, [user]);

  return (
    <>
      <Container>
        <Search onSubmit={handleSearch} />
        {err ? <h5 className="err">{err}</h5> : null}
        <div className="users-container">
          <div className="user-container">
            <Users user={user} />
          </div>
          {repos.length > 0 && (
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Users Repo</h1>
          )}
          <Row>
            {repos &&
              repos.map((repo) => (
                <Col sm={6} key={repo.id} style={{ marginBottom: '20px' }}>
                  <Repo repo={repo} />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default App;
