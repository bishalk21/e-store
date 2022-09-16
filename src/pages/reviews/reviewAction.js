import { fetchReviews } from "../../helpers/axiosHelper";
import { setReviews } from "./reviewSlice";

export const fetchReviewsAction = () => async (dispatch) => {
  const { status, reviews } = await fetchReviews();

  status === "success" && dispatch(setReviews(reviews));
};
