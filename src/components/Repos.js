import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchRepos = async () => {
      const { data } = await Axios.get(repos_url);
      setRepos(data);
    };

    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup style={{ marginBottom: "100px" }}>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="primary">{repo.name}</div>
          <div className="secondary">{repo.language}</div>
          <div className="info">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
