import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id/comment" element={<CommentsPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;