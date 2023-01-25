import { fetchUsers } from "../../../helpers/axiosHelper";
import { setUsers } from "./userSlice";

export const getUsersAction = () => async (dispatch) => {
  const { status, users } = await fetchUsers();

  status === "success" && dispatch(setUsers(users));
};
