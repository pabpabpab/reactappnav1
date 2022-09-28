
/*
import './App.sass';
import {Link, NavLink, Route, Routes, Outlet} from 'react-router-dom';
import C0 from './components/C0';
import Chat from './components/Chat';
import CustomLink from './components/CustomLink';
import Layout from './components/Layout';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    path="chat/:chatId"
                    element={<Chat />}
                />
            </Route>
        </Routes>
    );
}
*/

/*
function App() {

    return (
        <div className="messenger-app">
            <div className={'contacts'}>
                <CustomLink to="/">C0</CustomLink>
                <CustomLink to="/chat/1">Чат 1</CustomLink>
                <CustomLink to="/chat/2">Чат 2</CustomLink>
                <CustomLink to="/chat/3">Чат 3</CustomLink>
            </div>
            <div className={'messages'}>
                <Routes>
                    <Route path="/" element={<C0 />} />
                    <Route path="/chat/:chatId" element={<Chat />} />
                </Routes>
            </div>
            <div className={'input'}>
            </div>
        </div>
    );
}
*/

/*
function App() {

  return (
      <div className="messenger-app">
          <div className={'contacts'}>
              <NavLink className={getClassName} to="/" end>C0</NavLink>
              <NavLink className={getClassName} to="/blog">C1</NavLink>
              <NavLink className={getClassName} to="/about">C2</NavLink>
              <NavLink className={getClassName} to="/service">C3</NavLink>
          </div>
          <div className={'messages'}>
              <Routes>
                  <Route path="/" element={<C0 />} />
                  <Route path="/blog" element={<C1 />} />
                  <Route path="/about" element={<C2 />} />
                  <Route path="/service" element={<C3 />} />
              </Routes>
          </div>
          <div className={'input'}>
          </div>
      </div>
  );
}
*/

//export default App;

/*

.link-inactive
  display: block
  padding: 20px 25px
  +font(18px, #000, 700)
  cursor: pointer
  transition: background-color .3s
  &:hover
    background: #c1e0c1

.link-active
  display: block
  background: #5a9442
  padding: 20px 25px
  +font(18px, #000, 700)
  cursor: pointer
  transition: background-color .3s

 */


/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
 */