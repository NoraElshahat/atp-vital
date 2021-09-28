import { React, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function AddTeam() {
  let history = useHistory();

  const [team, setTeam] = useState({ name: '' });
  function addNewTeam(e) {
    e.preventDefault();
    console.log(team);
    axios.post('http://localhost:8000/new-team', team).then((res) => {
      console.log(res.data);
    });
    history.push('/add-player-name');
  }
  return (
    <div>
      <h3>add new team</h3>
      <form onSubmit={addNewTeam} it>
        <div class="form-group">
          <label>Team Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Team Name"
            name="name"
            value={team.name}
            onChange={(e) => {
              setTeam({ ...team, [e.target.name]: e.target.value });
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
