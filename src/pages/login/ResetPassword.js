import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../components/header/Header";
import { RequestOtp } from "../../components/reset-password/RequestOtp";
import { ResetPasswordForm } from "../../components/reset-password/ResetPasswordForm";

export const ResetPassword = () => {
  const showForm = "otp";
  const form = {
    otp: <RequestOtp />,
    reset: <ResetPasswordForm />,
  };

  return (
    <div>
      <Header />
      <Container className="py-5 page-main">
        <div className="pass-forms">{form[showForm]}</div>
      </Container>
    </div>
  );
};
