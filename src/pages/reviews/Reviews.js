import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../components/main-layout/MainLayout";
import { fetchReviewsAction } from "./reviews-redux-actions/reviewsAction";

export const Reviews = () => {
  const dispatch = useDispatch();

  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviewsAction());
  }, [dispatch]);
  return (
    <MainLayout>
      <Container>
        <h2 className="py-3">Users Management</h2>
        <hr />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Ratings</th>
              <th>Reviews</th>
              <th>Reviewed By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.productName}</td>
                <td>{item.ratings}</td>
                <td>{item.review}</td>
                <td>{item.reviewedBy}</td>
                <td>
                  <Button variant="link">Info</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </MainLayout>
  );
};
