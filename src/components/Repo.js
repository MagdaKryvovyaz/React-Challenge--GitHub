import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

function Repo(props) {
  const { repo } = props;

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Title>
              <a href={repo.html_url}>{repo.name}</a>
            </Card.Title>
            <Card.Text>{repo.description}</Card.Text>
          </div>
          <Badge variant="secondary">{repo.language}</Badge>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <Card.Text>
              <span className="fw-bold">{repo.stargazers_count}</span> Stars
            </Card.Text>
            <Card.Text>
              <span className="fw-bold">{repo.forks_count}</span> Forks
            </Card.Text>
          </div>
          <Button variant="outline-primary" href={repo.html_url}>
            View on GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Repo;
