import { TextInput } from "@/form/inputs/components/TextInput";
import { IConversation, IMessage } from "@/types/interfaces";
import { useEffect, useRef, useState } from "react";
import { MdSend } from "react-icons/md";
import { colors } from "../../utils/variables";
import { Socket, io } from "socket.io-client";
import Message from "./Message";
import { useAuthState } from "@/user/components/UserProvider";

const URL = import.meta.env.VITE_YARTISAN_API_URL;

interface IProps {
  conversation: IConversation;
}

function Conversation({ conversation }: IProps) {
  const { connectedUser } = useAuthState();
  const [messages, setMessages] = useState<Partial<IMessage>[]>([]);
  const [messageText, setMessageText] = useState<string>("");
  const [socket, setSocket] = useState<Socket<any, any> | null>(null);

  useEffect(() => {
    console.log("use effect");
    const socket = io(URL);

    function onConnect() {
      console.log("Vous êtes connecté.");
    }

    function onDisconnect() {
      console.log("Vous avez été déconnecté.");
    }

    socket.on("connect_error", (err) => {
      console.log(`[socket.io] : Error : ${err.message}`);
    });

    socket.on("connect", onConnect);

    socket.on("disconnect", onDisconnect);

    function onMessageAdded(message: Partial<IMessage>) {
      setMessages((old) => [...old, message]);
      scrollBottom();
    }

    function onConversationJoined(messages: Partial<IMessage>[]) {
      setMessages(messages);
      scrollBottom();
    }

    function onNoConversationAdded() {
      alert("Vous n'avez rejoins aucune conversation");
    }

    socket.on("conversation:joined", onConversationJoined);
    socket.on("message:added", onMessageAdded);
    socket.on("message:no-conversation-joined", onNoConversationAdded);

    socket.emit("conversation:join", conversation._id);

    setSocket(socket);

    return () => {
      socket.off("message:added", onMessageAdded);
      socket.off("message:no-conversation-joined", onNoConversationAdded);
      socket.off("conversation:joined", onConversationJoined);
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket && connectedUser) {
      socket.emit("message:send", {
        message: messageText,
        conversation_id: conversation._id,
        expediteur_id: connectedUser?._id,
      });
      setMessageText("");
    } else {
      alert("Not auth");
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const scrollBottom = () => {
    const div = document.getElementById("messages-box");
    if (!div) return;
    setTimeout(
      () => div.scroll({ top: div.scrollHeight, behavior: "smooth" }),
      100
    );
  };

  if (!socket) return <p>Veuillez patienter...</p>;

  if (!connectedUser) return <p>Vous n'êtes pas connectés.</p>;

  return (
    <div className="bg-white rounded shadow-xl flex-1 flex flex-col gap-2">
      <div className="flex items-center justify-between border-b py-1 px-4">
        <p className="text-lg font-bold">{conversation.data.name}</p>
        <div className="flex flex-col">
          <p>Email</p>
          <p className="text-secondary font-bold">{conversation.data.email}</p>
        </div>
        <div className="flex flex-col">
          <p>Téléphone</p>
          <p className="text-secondary font-bold">{conversation.data.phone}</p>
        </div>
      </div>
      <div
        id="messages-box"
        className="flex-1 flex flex-col overflow-auto px-4 gap-2 w-full"
      >
        {messages.map((message) => (
          <Message message={message} id={connectedUser._id ?? ""} />
        ))}
        <div id="bottom-messages"></div>
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
