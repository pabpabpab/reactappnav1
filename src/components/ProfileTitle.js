import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const ProfileTitle = ({ contacts, correspondentId }) => {

    const user = useMemo(
        () => contacts.find((item) => item.userId === correspondentId),
        [contacts, correspondentId]
    );

    if (!user) {
        return (
            <div className={'profile'}>
                &nbsp;
            </div>
        );
    }

    return (
        <div className={'profile'}>
            <Link
                to={`/profile/${correspondentId}`}
                className={'link-profile'}>
                {user.nick}
            </Link>
        </div>
    );
};

export default ProfileTitle;