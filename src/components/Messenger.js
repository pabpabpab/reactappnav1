import {createContext} from 'react';
import {Route, Routes} from 'react-router-dom';

import Contacts from './../components/Contacts';
import Messages from './../components/Messages';
import NoChat from './../components/NoChat';
import Input from './../components/Input';

import useContacts from './../components/myHooks/useContacts';
import useCorrespondent from './../components/myHooks/useCorrespondent';
import useMessages from './../components/myHooks/useMessages';
import useGetLastId from './../components/myHooks/useGetLastId';
import useBotAnswer from './../components/myHooks/useBotAnswer';
import ProfileTitle from "./ProfileTitle";

export const AppContext = createContext(null);

function Messenger() {
    const {contacts} = useContacts();
    const {correspondentId, setCorrespondentIdCB} = useCorrespondent(contacts);

    const {msgState, dispatch, sendMessageCB} = useMessages();

    const {getLastIdCB} = useGetLastId(msgState);
    useBotAnswer(msgState, correspondentId, getLastIdCB, dispatch);

    return (
        <AppContext.Provider value={{msgState, setCorrespondentIdCB}}>
            <div className="messenger-app">
                <Contacts
                    contacts={contacts}/>
                <ProfileTitle
                    contacts={contacts}
                    correspondentId={correspondentId}/>
                <Routes>
                    <Route index element={<NoChat/>}/>
                    <Route path="chat/:chatId" element={<Messages/>}/>
                </Routes>
                <Input
                    correspondentId={correspondentId}
                    sendMessageCB={sendMessageCB}
                    getLastIdCB={getLastIdCB}/>
            </div>
        </AppContext.Provider>
    );
}

export default Messenger;