import React from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const { chatId } = useParams();


    return (
        <div className={'chat'}>
            Чат { chatId }
        </div>
    );
};

export default Chat;