import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>
                Назад
            </button>
            <div>
                Профайл номер {userId}
            </div>
        </div>
    );
};

export default Profile;