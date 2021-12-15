import React , {Fragment, useEffect , useState} from 'react'
import axios from 'axios';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"


export function Users() {

    const [users, setusers] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:3002/api/users')
        .then((response) => {
            console.log(response.data);
            setusers(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <Fragment>
            <h1>Users rest example</h1>

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( (u) => (
                        <tr>
                        <td>{u.name}</td>
                        <td>{u.age}</td>
                        <td>{u.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </Fragment>
    )
}
