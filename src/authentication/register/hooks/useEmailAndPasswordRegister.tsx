import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuthentication } from "@/api/service/firebase";
import { useNavigate } from "react-router-dom";
import axios from "@/api/service/axios";

export const useEmailAndPasswordRegister = () => {
  const navigate = useNavigate();

  const createUser = async (data: any) => {
    const token = await firebaseAuthentication?.currentUser?.getIdToken();
    return axios.post(`/users/signup`, data, {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    });
  };

  const register = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(
      firebaseAuthentication,
      email,
      password
    ).then((firebaseRes) => {
      console.log("firebase res", firebaseRes);
    //   createUser({ email, password }).then((apiRes) => {
    //     console.log("apiRes", apiRes);
        navigate("/complete-profile");
    //   });
    });
  };

  return {
    register,
  };
};
