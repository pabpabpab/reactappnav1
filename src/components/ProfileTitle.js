import React, { useMemo, memo } from 'react';
import { Link } from 'react-router-dom';

// Компонент рендерит ссылку на профиль контакта с которым идет чат
export default memo(function ProfileTitle ({ contacts, correspondentId }) {
    // console.log('render');

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
}, (prevState, nextState) => {
    // console.log(prevState, nextState);
    if (prevState.correspondentId !== nextState.correspondentId) {
        return false;
    }
    if (prevState.contacts.length !== nextState.contacts.length) {
        return false;
    }
    return true; // ререндер не производится когда true
});