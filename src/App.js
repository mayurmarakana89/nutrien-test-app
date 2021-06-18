import React, { useState, useEffect } from 'react';

import './App.css';

const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error has occured on data fetch</div>;
const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <span>{`${user.first_name} ${user.last_name}`}</span>
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch(
          'https://reqres.in/api/users',
        );
        const { data } = await res.json();
        setUsers(data);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Nutrien Test App: Users List</h1>
      {hasError && <Error />}
      {isLoading ? <Loading /> : <UsersList users={users} />}
    </div>
  );
}

export default App;
