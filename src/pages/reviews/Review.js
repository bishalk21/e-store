import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { fetchReviewsAction } from "./reviewAction";

const Review = () => {
  const dispatch = useDispatch();

  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviewsAction());
  }, [dispatch]);

  return (
    <AdminLayout>
      <h3 className="py-3">Reeviews Mgmt.</h3>
      <hr />
      <Table striped bordered hove>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Rating</th>
            <th>Reviesw</th>
            <th>Reviewed By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{item.productName}</td>
              <td>{item.rating}</td>
              <td>{item.review}</td>
              <td>{item.reviewedBy}</td>
              <td>
                <Button variant="link">Info</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminLayout>
  );
};

export default Review;
