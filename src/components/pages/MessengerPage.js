import { AppContext } from '../../appContext';
import { Route, Routes } from 'react-router-dom';

import Contacts from '../Contacts';
import Messages from '../Messages';
import NoChat from '../NoChat';
import Input from '../Input';

import useContacts from '../myHooks/useContacts';
import useCorrespondent from '../myHooks/useCorrespondent';
import useMessages from '../myHooks/useMessages';
import useGetLastId from '../myHooks/useGetLastId';
import useBotAnswer from '../myHooks/useBotAnswer';
import ProfileTitle from '../ProfileTitle';
import AddContact from '../AddContact';


function MessengerPage() {
    const {contacts, deleteContactCb, addContactCb} = useContacts();
    const {correspondentId, setCorrespondentIdCb} = useCorrespondent(contacts);

    const {msgState, dispatch, sendMessageCb} = useMessages();

    const {getLastIdCb} = useGetLastId(msgState);
    useBotAnswer(msgState, correspondentId, getLastIdCb, dispatch);

    return (
        <AppContext.Provider value={{msgState, setCorrespondentIdCb, deleteContactCb}}>
            <div className="messenger-app">
                <AddContact
                    addContactCb={addContactCb} />
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
                    sendMessageCb={sendMessageCb}
                    getLastIdCb={getLastIdCb}/>
            </div>
        </AppContext.Provider>
    );
}

export default MessengerPage;