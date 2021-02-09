import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";
import { createPost, getPost, updatePost } from "../../actions/postAction";
import { validateInput } from "../../validations/validations";

const AddPost = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const { post, error } = useSelector((state) => state.post);
  const { id } = useParams();
  const { addToast } = useToasts();

  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

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

  useEffect(() => {
    if (error) {
      addToast(error, {
        appearance: "error",
        autoDismissTimeout: 3000,
        autoDismiss: true,
      });
    }
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container">
      <div className="py-4">
        <div className="card shadow">
          <div className="card-header">Add A Post</div>
          <div className="card-body">
            <Formik
              enableReinitialize
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
                let post = {
                  title: values.title,
                  body: values.body,
                };
                if (values.id) {
                  post.id = values.id;
                }

                dispatch(values.id ? updatePost(post) : createPost(post));

                addToast(
                  `Post ${values.id ? "updated" : "added"} successfully`,
                  {
                    appearance: "success",
                    autoDismissTimeout: 3000,
                    autoDismiss: true,
                  }
                );
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
