import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../features/auth/login/api/loginApi";
import { useRegisterMutation } from "../../../features/auth/registration/api/registrationApi";
import { logout, setCredentials } from "../../../features/auth/slice/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loginMutation] = useLoginMutation();
  const [registerMutation] = useRegisterMutation();

  const login = async (credentials) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await loginMutation(credentials).unwrap();
      dispatch(
        setCredentials({ token: response.token, userId: response.user.id })
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await registerMutation(userData).unwrap();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const signOut = () => {
    dispatch(logout());
  };

  return { login, register, signOut };
};
