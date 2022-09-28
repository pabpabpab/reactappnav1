import './App.sass';
import theme from './components/theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import {createContext} from 'react';
import {Route, Routes} from 'react-router-dom';

import Contacts from './components/Contacts';
import Messages from './components/Messages';
import NoChat from './components/NoChat';
import Input from './components/Input';

import useContacts from './components/myHooks/useContacts';
import useCorrespondent from './components/myHooks/useCorrespondent';
import useMessages from './components/myHooks/useMessages';
import useFilteredMessages from './components/myHooks/useFilteredMessages';
import useGetLastId from './components/myHooks/useGetLastId';
import useBotAnswer from './components/myHooks/useBotAnswer';

export const AppContext = createContext(null);

function App() {
    const {contacts} = useContacts();
    // const {correspondentId, changeCorrespondentIdCB} = useCorrespondent(contacts);

    const {msgState, dispatch, sendMessageCB} = useMessages();
    // const {filteredMessages} = useFilteredMessages(correspondentId, msgState);

    const {getLastIdCB} = useGetLastId(msgState);
    useBotAnswer(msgState, correspondentId, getLastIdCB, dispatch);

    return (
        <AppContext.Provider value={{correspondentId, changeCorrespondentIdCB}}>
            <ThemeProvider theme={theme}>
                <div className="messenger-app">
                    <Contacts
                        contacts={contacts}/>
                    <Routes>
                        <Route path="/" element={<NoChat />} />
                        <Route path="/chat/:chatId"
                            element={<Messages messages={msgState?.messages} />} />
                        <Route path="*" element={<NoChat />} />
                    </Routes>
                    <Input
                        correspondentId={correspondentId}
                        sendMessageCB={sendMessageCB}
                        getLastIdCB={getLastIdCB}/>
                </div>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;

/*
<Messages messages={filteredMessages}/>
 */