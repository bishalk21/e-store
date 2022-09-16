import { fetchUsers } from "../../helpers/axiosHelper";
import { setUsers } from "./userSlice";

// client users
export const fetchUsersAction = () => async (dispatch) => {
  const { status, users } = await fetchUsers();

  status === "success" && dispatch(setUsers(users));
};
