import React, {useEffect} from 'react';
import { getRandomInt } from "./utils";
import PostList from "./components/PostList";
import { Container } from 'react-bootstrap';
import AppBar from "./components/AppBar";

const App = () => {

  const clientId = Number(window.localStorage.getItem('clientId'));

  useEffect(() => {
    if(!clientId){
      window.localStorage.setItem('clientId', getRandomInt(1000).toString());
    }
  }, [clientId]);

  return (
    <>
      <AppBar />
      <Container>
        <PostList />
      </Container>
    </>
  );
}

export default App;
