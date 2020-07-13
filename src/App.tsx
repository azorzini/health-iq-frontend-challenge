import React, {useEffect} from 'react';
import useFetch from "./hooks/useFetch";

function App() {

  const [ posts, postsError, isPostsLoading ] = useFetch('posts');
  const [ users, usersError, isUsersLoading ] = useFetch('users');

  const loading: boolean = (isPostsLoading || isUsersLoading);
  const showError: boolean = (postsError || usersError);

  useEffect(() => {
    if (posts && users) {
      // merge posts and users
    }
  }, [posts, users]);

  return (
    <div>
      { posts.map((r: any, i: any) => <div key={i}>{r.body}</div>) }
      { users.map((r: any, i: any) => <div key={i}>{r.name}</div>) }
    </div>
  );
}

export default App;
