import React, { useEffect, useState } from 'react'
import { Alert, Card, Container, Spinner } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';
import { MainLayout } from '../../components/MainLayout'
import { verifyAdminUser } from '../../helpers/axiosHelper';

const EmailVerificationPage = () => {

        // 2. grab the c and e from the query string parameters
        const [queryParams] = useSearchParams();
        // const code = queryParams.get("c");
        // const email = queryParams.get("e");
        // console.log(code, email);

    const [response, setResponse] = useState({})

    // 1. show the spinner first
    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{
        const obj = {
        emailValidateCode: queryParams.get("c"),
        email: queryParams.get("e")
        };
           // 3. create an axios function to call the server

               // Using Async/Await
        // const verifyAdminUserfunc = async () => {
        //    const result = await verifyAdminUser(obj)
        //       setResponse(result)
        // }
        // verifyAdminUserfunc(obj)

        // Using IIFE - Immediately Invoke Function
        (async () => {
            const result = await verifyAdminUser(obj)
            setResponse(result)
            setIsPending(false)
        })();

        },[queryParams])

    // check if the code and email are not empty
    // if they are empty, show an error message
    // if they are not empty, call the server to check if the combination of the code and email exist in the user table
    // if the combination exist, activate the user and send the email notifications
    // if the combination does not exist, show an error message

 
    // 4. create api ep to receive this code
    // 5. check if the combination of the email and code exist in th user table, if so activate the user and send the email notifications

    // console.log(response);

  return (
    <>
        <MainLayout>
            <Container>

            {
                isPending && <Card className="mt-5 p-2 m-auto" style={{width: "20rem", border: "none"}}>
                <Spinner 
                    animation="border"
                    role="status"
                    variant='primary'
                    className="m-auto mb-4" 
                    style={{width: "3rem", height: "3rem"}}
                />
               <h4> Email Verification process has began, please wait...</h4>
                </Card>
            }

            {
                response.message && (
                    <Alert variant={response.status === "success" ? "success" : "danger"} className="mt-5 p-2 m-auto">
                        {response.message}
                    </Alert>     
                )
            }

            </Container>
        </MainLayout>
    </>
  )
}

export default EmailVerificationPage