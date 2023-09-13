import React, { useContext, useEffect, useState } from "react";
import HeaderPostsPage from "../../components/HeaderPostsPage/HeaderPostsPage";
import { PostsPageStyled } from "./PostsPageStyled";
import Post from "../../components/Post/Post";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToLoginPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const PostsPage = () => {
  const { context, posts, setPosts, fetchPosts } = useContext(GlobalContext);

  const [content, setContent] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token");
    if (token) {
      context.setIsAuth(true);
    } else {
      goToLoginPage(navigate);
    }
  }, [context]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async () => {
    try {
      const body = {
        content: content,
      };
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      };
      const response = await axios.post(
        `${BASE_URL}/posts/create`,
        body,
        config
      );
      setPosts(response.data);
      fetchPosts();
    } catch (error) {
      console.log(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  return (
    <>
      <HeaderPostsPage />
      <PostsPageStyled>
        <section className="container-post">
          <div className="container-input">
            <input
              type="text"
              placeholder="Escreva seu post..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button className="button-color" type="submit" onClick={createPost}>
            Postar
          </button>
          <hr />
        </section>
        <section className="container-posts">
          {Array.isArray(posts) &&
            posts
              .map((post) => {
                return <Post key={post.id} post={post} />;
              })
              .reverse()}
        </section>
      </PostsPageStyled>
      <Footer />
    </>
  );
};

export default PostsPage;