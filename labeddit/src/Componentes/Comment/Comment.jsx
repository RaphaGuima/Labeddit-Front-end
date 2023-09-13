import axios from 'axios';
import React, { useContext } from 'react'
import { BASE_URL } from "../../constants/url";
import downArrow from "../../assets/downArrow.svg";
import upArrow from "../../assets/upArrow.svg";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from 'react-router-dom';
import { PostStyled } from "../Post/PostStyled";

export function Comment ({comment}) {

  const { fetchComments } = useContext(GlobalContext);

  const params = useParams();

  const likeComment = async (commentId) => {
    try{
      let body = {
        like: true,
      };
      await axios.put(`${BASE_URL}/posts/comment/${commentId}/like`, body,{
        headers:{
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      fetchComments(params.id);
    }catch (error){
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  const dislikeComment = async (commentId) => {
    try{
      let body = {
        like: false,
      };
      await axios.put(`${BASE_URL}/posts/comment/${commentId}/like`, body, {
        headers:{
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      fetchComments(params.id);
      }catch(error){
        console.log(error?.response?.data);
      }
  };

  return (
    <>
      <PostStyled>
        <section className="container-posts">
          <h6>Comentário enviado por: {comment.creatorName}</h6>
          <p>{comment.content}</p>
        </section>
        <section className="container-arrow">
          <div>
            <img
              src={upArrow}
              alt="like"
              onClick={() => likeComment(comment.id)}
            />
            <h6>{comment.likes}</h6>
            <img
              src={downArrow}
              alt="dislike"
              onClick={() => dislikeComment(comment.id)}
            />
            <h6>{comment.dislikes}</h6>
          </div>
        </section>
      </PostStyled>
    </>
  );
};

export default Comment;