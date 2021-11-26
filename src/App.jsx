import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/layout/Layout";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route to="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog">
              <Route index element={<Blog />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
