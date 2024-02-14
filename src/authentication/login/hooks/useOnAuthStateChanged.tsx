import axios from "@/api/service/axios";
import { firebaseAuthentication } from "@/api/service/firebase";
import { useAuthState } from "@/user/components/UserProvider";

export const useOnAuthStateChanged = async (): Promise<void> => {
  const { setConnectedUser, connectedUser } = useAuthState();

  firebaseAuthentication.onAuthStateChanged(async (user) => {
    if (user === null) return;
    const token = await user?.getIdToken();
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : ""

    try {
      const { data: { data } } = await axios.get(`/user`);
      console.log(data)
      if (connectedUser !== undefined) return;
      setConnectedUser(data);
    } catch (error) { }
  });
};
