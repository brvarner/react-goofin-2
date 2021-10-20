import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])

    return (
        <main className="container">
            <section className="row mt-3">
                <dov className="col-12">
                    <h1 className="text-center">Users Page</h1>
                    <ul className="list-group">
                        {users.map(user => (
                            <li key={`user-item-${user.id}`} className="list-group-item d-flex justify-content-between align-items-center">
                                {user.username} from {user.address.city}
                                <Link to={`/users/${user.id}`} className="btn btn-primary">Read Profile</Link>
                            </li>
                        ))}
                    </ul>
                </dov>
            </section>
        </main>
    )
}

export default Users