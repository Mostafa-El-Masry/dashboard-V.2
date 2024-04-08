import React from 'react'


interface User {
    id: number;
    name: string;
    email: string;
  }

const Table = async () => {

    
  const res = await fetch ('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json();


  return (
    <div>
        <h1>Users</h1>
    <table className="table table-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      {users.map(user => <tr key={user.id}>
        <th>{user.id}</th>
        <th>{user.name}</th>
      </tr>)}
    </table>
    </div>
  )
}

export default Table