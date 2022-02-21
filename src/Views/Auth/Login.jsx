import React from "react";
import Container from "@mui/material/Container";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "transparent",
    border: "none !important",
    padding: "10px 10px",
    borderRadius: "5px",
    fontWeight: "300",
    fontSize: "14px",
    lineHeight: "20px",
    marginBottom: "10px",
    width: "100%",
    "&:focus-visible": {
      border: "none !important",
      outlineColor: "none !important",
    },
    "&:focus:not(.focus-visible)": {
      outline: "none !important",
    },
  },
  inputIcon: {
    display: "flex",
    height: "20px",
    border: "1px solid #363740",
    padding: "10px 10px",
    fontSize: "14px",
    fontWeight: "300",
    lineHeight: "20px",
    borderRadius: "5px",
    marginBottom: "10px",
    backgroundColor: "transparent",
  },
  btn: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("email is Required"),
  password: Yup.string().required("Password is Required"),
});
const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xs" mt={3}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {}}
        >
          {({
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <Form>
              <h1 style={{marginTop:'100px'}}>Login</h1>
              <div className={classes.inputIcon}>
                <Field
                  className={classes.input}
                  text="Email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  autocomplete="off"
                />
              </div>

              <div className={classes.inputIcon}>
                <Field
                  className={classes.input}
                  text="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  autocomplete="off"
                />
              </div>
              <div className={classes.btn}>
                <Button variant="contained" >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Login;
