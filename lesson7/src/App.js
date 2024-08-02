import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navigation from "./pages/navigation/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PhoneNumbers from "./pages/phoneNumbersPage/PhoneNumbersPage";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route index element={<MainPage/>}/>
                  <Route path='/Contacts' element={<ContactPage/>}/>
                  <Route path='/Todos' element={<MainPage/>}/>
                  <Route path='/Phones' element={<PhoneNumbers/>}/>
              </Routes>
          </BrowserRouter>

      </div>


  );
}

export default App;
