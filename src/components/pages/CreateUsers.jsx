import React , {Fragment, useEffect , useState} from 'react'
import axios from 'axios';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"

export function CreateUsers() {

    const initialState = {
        firstname:'',
        age:'',
        email: ''
    }

    const [data, setdata] = useState(initialState)

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name);
        setdata({...data, [name]:value });
    }

    const sendData = (e) =>{
        e.preventDefault();
        console.log(`${data.firstname} ${data.lastname}`);

        console.log(data);
        axios
        .post('http://localhost:3002/api/users',data)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }

    return (
        <Fragment>
            <h1>Formulario de contacto</h1>
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" 
                        className="form-control"
                        name="firstname"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Age:</label>
                    <input type="text" 
                    name="lastname"
                    className="form-control"
                    onChange={handleInputChange}/>   
                </div>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="text" 
                    name="lastname"
                    className="form-control"
                    onChange={handleInputChange}/>   
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>


        </Fragment>
    )
}

