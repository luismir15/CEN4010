import React from 'react';
import axios from 'axios';

const Profile = () => {
    const [currentUser, setCurrentUser] = React.useState(null);


    React.useEffect(async () => {
        console.log('fuck you')
        const { data: { user } } = await axios.get('/api/users');
        setCurrentUser(user);
    }, []);

    return (currentUser ? <div>{{ currentUser }}</div> : null);
}

export default Profile;