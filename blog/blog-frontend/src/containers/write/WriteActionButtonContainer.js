import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButton';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../modules/write';
import { useNavigate } from 'react-router-dom';

const WriteActionButtonsContainer = ({ history }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(({ write }) => (
    {
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
    }
  ));

  // POSt Submit
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  // POST Cancel
  const onCancel = () => {
    navigate(-1);
  };

  // SUCCESS or FAILURE
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return (
    <WriteActionButtons 
      onPublish={onPublish} 
      onCancel={onCancel} 
    />
  );
};

export default WriteActionButtonsContainer;