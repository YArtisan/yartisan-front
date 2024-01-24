import { TextInput } from "@/form/inputs/components/TextInput";
import { IConversation, IMessage } from "@/types/interfaces";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { MdSend } from "react-icons/md";
import { colors } from "../../utils/variables";
import Message from "./Message";

const socket = io(import.meta.env.VITE_YARTISAN_API_URL);

interface IProps {
  conversation: IConversation;
}

function Conversation({ conversation }: IProps) {
  const [messages, setMessages] = useState<Partial<IMessage>[]>([]);
  const [messageText, setMessageText] = useState<string>("");

  useEffect(() => {
    const scrollToBottomOfMessage = () => {
      const element = document.getElementById("messages-box");
      if (element) {
        element.scrollTo({ top: element.offsetHeight });
      }
    };

    function onMessageAdded(message: Partial<IMessage>) {
      //   scrollToBottomOfMessage();
      setMessages((old) => [...old, message]);
    }

    function onConversationJoined(messages: Partial<IMessage>[]) {
      setMessages(messages);
    }

    function onNoConversationAdded() {
      alert("Vous n'avez rejoins aucune conversation");
    }

    socket.on("conversation:joined", onConversationJoined);
    socket.on("message:added", onMessageAdded);
    socket.on("message:no-conversation-joined", onNoConversationAdded);

    socket.emit("conversation:join", conversation._id);

    return () => {
      socket.off("message:added", onMessageAdded);
      socket.off("message:no-conversation-joined", onNoConversationAdded);
      socket.off("conversation:joined", onConversationJoined);
    };
  }, [conversation]);

  const sendMessage = () => {
    socket.emit("message:send", {
      message: messageText,
      conversationId: conversation._id,
    });
    setMessageText("");
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="bg-white rounded shadow-xl flex-1 flex flex-col gap-2">
      <div className="flex items-center justify-between border-b py-1 px-4">
        <p className="text-lg font-bold">{conversation._id}</p>
        <div className="flex flex-col">
          <p>Email</p>
          <p className="text-secondary font-bold">example@xyz.com</p>
        </div>
        <div className="flex flex-col">
          <p>Téléphone</p>
          <p className="text-secondary font-bold">0612457898</p>
        </div>
      </div>
      <div
        id="messages-box"
        className="flex-1 flex flex-col overflow-auto px-4 gap-2 w-full"
      >
        {messages.map((message) => (
          <Message message={message} id={socket.id ?? ""} />
        ))}
      </div>

      <div className="flex gap-2 items-center justify-center px-4 pb-2">
        <TextInput
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e)}
          onKeyDown={onKeyDown}
          className="flex-1"
        />
        <div onClick={sendMessage}>
          <MdSend size={25} color={colors.secondary} />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
