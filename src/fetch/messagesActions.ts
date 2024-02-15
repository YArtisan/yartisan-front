import axios from "@/api/service/axios";
import { IConversation } from "@/types/interfaces";

export const psotMessage = (conversation_id: string, message: string) => {
  return new Promise<IConversation[]>((resolve, reject) => {
    try {
      axios
        .post(`/chat/conversation/${conversation_id}/message`)
        .then((res) => {
          resolve(res.data.conversations);
        });
    } catch (error) {
      reject(error);
    }
  });
};
