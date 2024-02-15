import axios from "@/api/service/axios";
import { IConversation } from "@/types/interfaces";

export const getConversationsByUser = (user_id: string) => {
  return new Promise<IConversation[]>((resolve, reject) => {
    try {
      axios.get(`/chat/user/${user_id}`).then((res) => {
        resolve(res.data.conversations);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const createConversation = (user_id: string, artisan_id: string) => {
  return new Promise<void>((resolve, reject) => {
    try {
      axios.post(`/chat`, { user_id, artisan_id }).then((res) => {
        resolve(res.data);
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
