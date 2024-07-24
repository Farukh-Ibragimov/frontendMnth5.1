import './App.css';
import PostPage from "./pages/postPage/PostPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsCardId from "./components/PostsCardId";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<PostPage/>}/>
              <Route path='posts/:id' element={<PostsCardId/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
