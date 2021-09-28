import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function AddUser() {
  const [user, setUser] = useState({});
  const [teams, setTeams] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:8000/teams').then((res) => {
      setTeams(res.data.team);
    });
  }, []);
  function addNewUser(e) {
    e.preventDefault();
    axios.post('http://localhost:8000/new-user', user).then((res) => {
      console.log(res.data);
      localStorage.setItem('username', res.data.user.name);
      history.push('/game');
    });
  }
  return (
    <div>
      <h3>add new user</h3>
      <form onSubmit={addNewUser}>
        <div class="form-group">
          <label>username</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter user name"
            name="name"
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
          <select
            class="form-control"
            name="team_id"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          >
            {teams.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
