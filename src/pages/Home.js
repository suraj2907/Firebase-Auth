import React, { useState, useContext } from "react";
import Axios from "axios";
import { Container, Col, Row, InputGroup, Input, Button } from "reactstrap";

import Repos from "../components/Repos";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log(data);
    } catch (error) {
      toast("Not able to find User", { type: "error" });
    }
  };
  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }

  return (
    <Container>
      <Row className="mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please enter a username"
            />
            <Button onClick={fetDetails} className="secondary">
              Fetch User
            </Button>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;
