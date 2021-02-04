import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import { createPost, getPost, updatePost } from "../../actions/postAction";
import { validateInput } from "../../validations/validations";

const AddPost = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [onSubmit, setOnSubmit] = useState(false);
  const post = useSelector((state) => state.post.post);
  const loader = useSelector((state) => state.post.loader);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadPost();
    }
  }, [id]);

  const loadPost = () => {
    dispatch(getPost(id));
  };

  const [initialValues, setInitialValues] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    if (id && post) {
      setInitialValues({
        id,
        title: post.title,
        body: post.body,
      });
    }
  }, [id, post]);

  return (
    <div className="container">
      {!loader || (!loader && id) ? (
        <div className="py-4">
          <div className="card shadow">
            <div className="card-header">Add A Post</div>
            <div className="card-body">
              <Formik
                initialValues={initialValues}
                validate={(values) => {
                  const errors = {};

                  errors.title = validateInput(values.title) || null;
                  errors.body = validateInput(values.body) || null;

                  for (var key in errors) {
                    if (errors[key] !== null) return errors;
                  }
                  return true;
                }}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(false);
                  setOnSubmit(true);
                  let post = {
                    title: values.title,
                    body: values.body,
                  };
                  if (values.id) {
                    post.id = values.id;
                  }

                  dispatch(values.id ? updatePost(post) : createPost(post));
                  ToastsStore.success("Post added successfully.");
                  history.push("/");
                }}
              >
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        Title <span className="text-danger">*</span>
                      </Form.Label>
                      <span className="errorMsg">
                        {props.errors.title &&
                          props.touched.title &&
                          props.errors.title}
                      </span>
                      <Form.Control
                        name="title"
                        type="text"
                        placeholder="Enter Post Title"
                        value={props.values.title}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>
                        Body <span className="text-danger">*</span>
                      </Form.Label>
                      <span className="errorMsg">
                        {props.errors.body &&
                          props.touched.body &&
                          props.errors.body}
                      </span>
                      <Form.Control
                        name="body"
                        as="textarea"
                        rows={3}
                        placeholder="Enter Post Body Text"
                        value={props.values.body}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      {id ? "Update" : "Add New"} Post
                    </Button>
                  </Form>
                )}
              </Formik>
              <ToastsContainer
                store={ToastsStore}
                position={ToastsContainerPosition.TOP_RIGHT}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddPost;
