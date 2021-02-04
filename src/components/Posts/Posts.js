import React, { useEffect, useState } from "react";
import { deletePost } from "../../actions/postAction";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/postAction";
import { Table } from "react-bootstrap";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import SweetAlert from "react-bootstrap-sweetalert";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="row">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th colSpan="2" align="center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((postItem) => (
            <tr key={postItem.id}>
              <td>{postItem.id}</td>
              <td>{postItem.title}</td>
              <td>{postItem.body}</td>
              <td>
                <Link
                  to={`/updatePost/${postItem.id}`}
                  className="btn btn-edit"
                >
                  <PencilSquare />
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-delete"
                  onClick={() => {
                    setPostId(postItem.id);
                  }}
                >
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {postId ? (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Yes"
          confirmBtnBsStyle="danger"
          title="Are you sure want to delete this post?"
          onConfirm={() => {
            dispatch(deletePost(postId));
            setPostId(null);
          }}
          onCancel={() => {
            setPostId(null);
          }}
          focusCancelBtn
        ></SweetAlert>
      ) : (
        ""
      )}
    </div>
  );
};

export default Posts;
