import './App.sass';
import theme from './components/theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';

import Messenger from './components/Messenger';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

function App() {

    return (
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Messenger />} />
                    <Route path="/messenger/*" element={<Messenger />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
    );
}

export default App;
