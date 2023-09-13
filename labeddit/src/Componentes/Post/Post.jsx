import React, { useContext, useEffect, useState } from "react";
import { PostStyled } from "./PostStyled";
import conversation from "../../assets/conversation.svg";
import downArrow from "../../assets/downArrow.svg";
import upArrow from "../../assets/upArrow.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToCommentsPage } from "../../routes/coordinator";


function Post({post}) {
  const { fetchPosts, setPage } = useContext(GlobalContext);
  const [ comment, setComment ] = useState([]);

  const navigate = useNavigate();

  const likePost = async (postId) => {
    try{
      let body = {
        like: true,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      fetchPosts();
    }catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  const dislikePost = async (postId) => {
    try{
      let body = {
        like: false,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers:{
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      fetchPosts();
    }catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  const fetchComments = async (postId) => {
    try{
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      };
      const response = await axios.get(
        `${BASE_URL}/posts/comment/${postId}`,
        config
      );
      setComment(response.data);      
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  useEffect(() => {
    fetchComments(post.id);    
  }, []);

  return (
    <>
      <PostStyled>
        <section className="container-posts">
          <h6>Enviado por: {post?.creator?.name}</h6>
          <p>{post.content}</p>
        </section>
        <section className="container-arrow">
          <div>
            <img src={upArrow} alt="like" onClick={() => likePost(post.id)}/>
            <h6>{post.likes}</h6>
            <img src={downArrow} alt="dislike" onClick={() => dislikePost(post.id)}/>
            <h6>{post.dislikes}</h6>
          </div>
          <div onClick={() => {
            goToCommentsPage(navigate, post.id)
            setPage("CommentPage")
          }}>            
            <img src={conversation} alt="comments"/>
            <h6>{comment.length}</h6>
          </div>
        </section>
      </PostStyled>
    </>
  );
}

export default Post;