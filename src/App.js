import { useEffect, useState } from 'react';
import './App.css';
import { LanguageContext, UserContext } from "./contexts";
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Posts from './pages/Posts';

function App(props) {

  const [user, SetUser] = useState({
    name: "Aghasi",
    sureName: "Gyurjoghlyan",
    age: 33
  });
  const [lng, setLng] = useState("am");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <LanguageContext.Provider value={{ lng, change: setLng }}>
          <UserContext.Provider value={user}>
            <header>
              <Link to="/">Home</Link>
              <Link to="/posts">POSTS</Link>
            </header>
            <section>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={ <Posts/>} />
            </Routes>
            </section>
            
          </UserContext.Provider>
        </LanguageContext.Provider >
      </BrowserRouter>
    </Provider>
  );
}

export default App;






