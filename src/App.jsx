import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import List from "./pages/List";
import NoPage from "./pages/NoPage";
import Blog from "./pages/Blog";
import BlogWebsite from "./pages/BlogWebsite"; 


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="/Blog/:id" element={<Blog />} />
        <Route path="home" element={<BlogWebsite />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
