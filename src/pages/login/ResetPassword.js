import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { Header } from "../../components/header/Header";
import { RequestOtp } from "../../components/reset-password/RequestOtp";
import { ResetPasswordForm } from "../../components/reset-password/ResetPasswordForm";
import { resetAdminUserPassword } from "../../helpers/axiosHelper";

export const ResetPassword = () => {
  const [passwordForm, setPasswordForm] = useState("otp");
  const [resp, setResp] = useState({});

  const handleOnOtpReq = async (email) => {
    if (!email) {
      setResp({ error: "Email is required" });
      return;
    }

    if (email) {
      const response = await resetAdminUserPassword({ email });
      setResp(response);
      response.status === "success" && setPasswordForm("reset");
    }
  };

  const form = {
    otp: <RequestOtp handleOnOtpReq={handleOnOtpReq} />,
    reset: <ResetPasswordForm />,
  };

  return (
    <div>
      <Header />
      <Container className="py-5 page-main">
        {resp.message && (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {" "}
            {resp.message}{" "}
          </Alert>
        )}
        <div className="pass-forms">{form[passwordForm]}</div>
      </Container>
    </div>
  );
};
