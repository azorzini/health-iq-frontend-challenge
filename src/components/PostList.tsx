import React, {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";
import { Spinner } from "react-bootstrap";
import {PostsWithUser, Post, User} from "../types";
import PostWithUser from "./PostWithUser";
import styled from "styled-components";

const PostList = () => {

  const [ posts, postsError, isPostsLoading ] = useFetch('posts');
  const [ users, usersError, isUsersLoading ] = useFetch('users');
  const [ postsToShow, setPostsToShow] = useState<PostsWithUser[]>([]);

  const showError: boolean = (postsError || usersError);

  useEffect(() => {
    if (posts && users) {
      setPostsToShow(posts.map((p: Post) => {
        const user: User = users.find((u: User) => u.id === p.userId);
        return {
          title: p.title,
          body: p.body,
          username: user.username,
          city: user.address.city,
        }
      }));
    }
  }, [posts, users]);

  return (
    <>
      { (isPostsLoading || isUsersLoading) && <Loading />  }
      { showError && 'Error' }
      {
        postsToShow.map((p:PostsWithUser, index) => <PostWithUser postWithUser={p} key={index}/>)
      }
    </>
  )
}

const Loading = () => (
  <AlignCenter>
    <Spinner animation="border" />
  </AlignCenter>
);

const AlignCenter = styled.div`
  text-align: center;
`;

export default PostList;
