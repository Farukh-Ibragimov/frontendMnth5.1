import './App.css';
import MainPages from "./pages/mainPage/MainPages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserCard from "./components/UserCard";
import UserCardId from "./components/UserCardId";
import MainPage from "./pages/mainPage/MainPages";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<MainPages/>}/>
            <Route path='users/:id' element={<UserCardId/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
