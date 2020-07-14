import {Card} from "react-bootstrap";
import React from "react";
import {PostsWithUser} from "../types";
import styled from "styled-components";

interface IPostWithUser {
  postWithUser: PostsWithUser;
}

const PostWithUser = ({ postWithUser: {body, city, title, username} }: IPostWithUser) => {

  return (
    <SpaceBelowCard>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {body}
          </p>
          <footer className="blockquote-footer">
            {username} in <cite>{city}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </SpaceBelowCard>
  );
}

const SpaceBelowCard = styled(Card)`
  margin-bottom: 20px;
`;

export default PostWithUser;
