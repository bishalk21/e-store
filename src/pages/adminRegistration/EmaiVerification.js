import React, { useEffect, useState } from "react";
import { Alert, Card, Container, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { verifyNewAdminUser } from "../../helper/axiosHelper";

// show the spinner first
// grab the c ans e from the query string parameters
// create an axios function to call the server

// create an endpoint to receive the email verification code
// check if combination of email and code is valid, if so then redirect to the admin registration page

export const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState(true);
  console.log(queryParams.get("c"));
  console.log(queryParams.get("e"));
  const [response, setResponse] = useState({});

  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    (async () => {
      const result = await verifyNewAdminUser(obj);
      console.log(result);
      setResponse(result);
      setIsPending(false);
    })();
  }, [queryParams]);
  console.log(response);

  //call the axios function to call the server

  return (
    <div>
      <Header />
      <Container className="page-min">
        {isPending && (
          <Card className="mt-5 p-2 m-auto" style={{ width: "20rem" }}>
            <Spinner animation="border" variant="primary" />
            <h5>Email Verification Process is in progress...</h5>
          </Card>
        )}

        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}
      </Container>

      <Footer />
    </div>
  );
};
