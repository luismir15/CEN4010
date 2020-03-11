import React from 'react';
import axios from 'axios';

const Profile = () => {
    // const [currentUser, setCurrentUser] = React.useState(null);


    // React.useEffect(() => {
    //     const fetchUserData = async () => {
    //         const { data: { user } } = await axios.get('/api/users');
    //         setCurrentUser(user);
    //     }
    //     fetchUserData();
    // }, []);

    // return (currentUser ? <div>{{ currentUser }}</div> : null);

    return (
        <div>
            <h1>Logged In</h1>
        </div>
    )
}

export default Profile;