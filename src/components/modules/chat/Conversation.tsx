import { TextInput } from "@/form/inputs/components/TextInput";
import { IConversation, IMessage } from "@/types/interfaces";
import { useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import { colors } from "../../../utils/variables";
import { Socket, io } from "socket.io-client";
import Message from "./Message";
import { useAuthState } from "@/user/components/UserProvider";
import Button from "@atoms/Button";
import axios from "@/api/service/axios";

const URL = import.meta.env.VITE_YARTISAN_API_URL;

interface IProps {
  conversation: IConversation;
}

interface StripeCheckoutDto {
  name: string;
  description: string;
  price: string;
}

function Conversation({ conversation }: IProps) {
  const { connectedUser } = useAuthState();
  const [isProposing, setIsProposing] = useState(false);
  const [propositionErrors, setPropositionErrors] = useState<string[]>([]);
  const [propositionData, setPropositionData] = useState<
    Partial<StripeCheckoutDto>
  >({});
  const [messages, setMessages] = useState<Partial<IMessage>[]>([]);
  const [messageText, setMessageText] = useState<string>("");
  const [socket, setSocket] = useState<Socket<any, any> | null>(null);

  useEffect(() => {
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
      console.log("conversation joined", conversation._id);
      console.log("messages", messages);

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
  }, [conversation]);

  const sendMessage = (text?: string, url?: string) => {
    if (socket && connectedUser) {
      socket.emit("message:send", {
        message: text ?? messageText,
        conversation_id: conversation._id,
        expediteur_id: connectedUser?._id,
        url,
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

  const handleSubmitProposition = () => {
    const { name, description, price } = propositionData;
    const errors = [];
    if (!name) errors.push("productName");
    if (!description) errors.push("productDescription");
    if (!price) errors.push("productPrice");
    if (errors.length > 0) return setPropositionErrors(errors);
    setPropositionErrors([]);

    axios
      .post("/create-checkout-session", {
        ...propositionData,
        price: Math.floor(parseFloat(price!) * 100),
        user_id: conversation.user._id,
        artisan_id: conversation.artisan._id,
      })
      .then(() => {
        sendMessage(
          `Vous avez reçu une proposition pour le produit suivant : ${name}.\nDescription : ${description}\nPour un montant de : ${price} €.\nVeuillez consulter votre compte pour régler la commande.`
        );
        setIsProposing(false);
        setPropositionData({});
      });
  };

  if (!socket) return <p>Veuillez patienter...</p>;

  if (!connectedUser) return <p>Vous n'êtes pas connectés.</p>;

  return (
    <div className="bg-white rounded shadow-xl flex-1 overflow-hidden flex flex-col gap-2">
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
      {isProposing ? (
        <div className="flex-1 flex flex-col overflow-auto px-4 gap-2 w-full">
          <p className="text-lg font-bold">Proposition de produit</p>
          <TextInput
            type="text"
            placeholder="Nom du produit"
            className={`${
              propositionErrors.includes("productName")
                ? "border-red-500 placeholder:text-red-500"
                : ""
            } `}
            value={propositionData.name}
            onChange={(e) => {
              if (propositionErrors.includes("productName"))
                setPropositionErrors(
                  propositionErrors.filter((e) => e !== "productName")
                );
              setPropositionData({ ...propositionData, name: e });
            }}
          />
          <TextInput
            type="text"
            placeholder="Description du produit"
            className={`${
              propositionErrors.includes("productDescription")
                ? "border-red-500 placeholder:text-red-500"
                : ""
            } `}
            value={propositionData.description}
            onChange={(e) => {
              if (propositionErrors.includes("productDescription"))
                setPropositionErrors(
                  propositionErrors.filter((e) => e !== "productDescription")
                );
              setPropositionData({ ...propositionData, description: e });
            }}
          />
          <TextInput
            type="number"
            placeholder="Prix du produit"
            className={`${
              propositionErrors.includes("productPrice")
                ? "border-red-500 placeholder:text-red-500"
                : ""
            } `}
            value={propositionData.price}
            onChange={(e) => {
              if (propositionErrors.includes("productPrice"))
                setPropositionErrors(
                  propositionErrors.filter((e) => e !== "productPrice")
                );
              setPropositionData({
                ...propositionData,
                price: e,
              });
            }}
          />{" "}
          <Button
            template="secondary"
            onClick={handleSubmitProposition}
            className="w-fit mx-auto"
          >
            Soumettre la proposition
          </Button>
        </div>
      ) : (
        <div
          id="messages-box"
          className="flex-1 flex flex-col overflow-auto px-4 gap-2 w-full"
        >
          {messages.map((message) => (
            <Message
              key={message._id}
              message={message}
              id={connectedUser._id ?? ""}
            />
          ))}
          <div id="bottom-messages"></div>
        </div>
      )}

      <div className="flex gap-2 items-center justify-center px-4 pb-2">
        {connectedUser.userFunction === "artisan" && (
          <Button
            template="secondary"
            invertColors={isProposing}
            onClick={() => setIsProposing(!isProposing)}
          >
            {isProposing ? "Annuler la proposition" : "Faire une proposition"}
          </Button>
        )}
        <TextInput
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e)}
          onKeyDown={onKeyDown}
          className="flex-1"
        />
        <div onClick={() => sendMessage()}>
          <MdSend size={25} color={colors.secondary} />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
