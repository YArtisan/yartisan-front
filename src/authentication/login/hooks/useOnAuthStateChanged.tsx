import axios from "@/api/service/axios";
import { firebaseAuthentication } from "@/api/service/firebase";
import { useAuthState } from "@/user/components/UserProvider";

export const useOnAuthStateChanged = async (): Promise<void> => {
  const { setConnectedUser, connectedUser } = useAuthState();

  firebaseAuthentication.onAuthStateChanged(async (user) => {
    if (user === null || user?.emailVerified === false) return;
    const token = await user?.getIdToken();

    const {
      data: { data },
    } = await axios.get(`/user`, {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    });
    if (connectedUser !== undefined) return;
    setConnectedUser(data);
  });
};
