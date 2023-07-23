import React from "react";

import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center" mt-3 mb-4>
      <img
        src={user.avatar_url}
        className="thumbnail"
        style={{ width: "520px", height: "350px" }}
      />
      <CardBody className="bg-info">
        <div className="primary">{user.name}</div>
        <div className="primary">{user.location}</div>
        <div className="primary">{user.bio}</div>
        <div className="secondary">
          Available for hire:- {user.hireable ? "YES" : "NO"}
        </div>
        <div className="info">User's Followers:- {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
