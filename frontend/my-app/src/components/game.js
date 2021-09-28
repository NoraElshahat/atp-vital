import { React, useEffect, useState } from 'react';
export function Game() {
  const [user, setUser] = useState('');
  useEffect(() => {
    const name = localStorage.getItem('username');
    setUser(name);
  }, []);

  return (
    <div>
      Welcome player <h3>{user}</h3>
    </div>
  );
}
