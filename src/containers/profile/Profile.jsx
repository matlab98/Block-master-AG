import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {

    const auth = useSelector(state => state.auth)

    console.log(auth);

    return (
        <div style={{
            background: "rgb(238 237 243 / 93%)", textAlign: "-webkit-center", marginLeft: "10%",
            marginRight: "10%", borderRadius: "15px", width: "100%"
        }}>
            <h1>hola</h1>
        </div>
    )
}

export default Profile
