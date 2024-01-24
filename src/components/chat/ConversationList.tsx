import { TextInput } from "@/form/inputs/components/TextInput";
import { IConversation } from "@/types/interfaces";
import Button from "@atoms/Button";
import { useState } from "react";
import { FaPlus, FaShare } from "react-icons/fa";

interface IProps {
  onSelectConversation: (conversation: IConversation) => void;
  selectedConversation?: IConversation;
}

function ConversationList({
  selectedConversation,
  onSelectConversation,
}: IProps) {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [conversationInput, setConversationInput] = useState("");

  const generateConversationId = (length: number): string => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  };

  const handleAddConversation = () => {
    const randomId = generateConversationId(6);
    const _id = `conversation-${randomId}`;
    setConversations((old) => [...old, { _id }]);
  };

  const handleJoinConversation = () => {
    setConversations((old) => [...old, { _id: conversationInput }]);
  };

  console.log(selectedConversation);
  console.log(conversations);

  return (
    <div className="max-w-[300px] w-full h-full flex flex-col bg-white rounded shadow-xl">
      <div className="flex flex-col">
        {conversations.map((c) => (
          <ConversationItem
            conversation={c}
            onClick={() => onSelectConversation(c)}
            isSelected={
              selectedConversation?._id.toLowerCase() === c._id.toLowerCase()
            }
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-auto w-full px-2 pb-2">
        <Button
          className="flex gap-3 justify-center items-center w-full"
          template="secondary"
          onClick={handleAddConversation}
        >
          <FaPlus size={22} />
          <p>Ajouter</p>
        </Button>
        <TextInput
          type="text"
          value={conversationInput}
          placeholder="Entrer l'id d'une conversation"
          onChange={(val) => setConversationInput(val)}
        />
        <Button
          className="flex gap-3 justify-center items-center w-full"
          template="secondary"
          onClick={handleJoinConversation}
        >
          <FaShare size={22} />
          <p>Rejoindre</p>
        </Button>
      </div>
    </div>
  );
}

interface ConversationItemProps extends React.HTMLAttributes<HTMLDivElement> {
  conversation: IConversation;
  isSelected: boolean;
}

function ConversationItem({
  conversation,
  isSelected,
  ...props
}: ConversationItemProps) {
  return (
    <div
      {...props}
      className={`flex items-center gap-3 border-b px-2 py-3 cursor-pointer bg-white duration-200 hover:brightness-90 ${
        isSelected ? "!bg-primary" : ""
      }`}
    >
      <div className="w-10 h-10 bg-black rounded-full"></div>
      <div className="flex-1 flex flex-col">
        <p>{conversation._id}</p>
        <p className="text-gray-400 line-clamp-1">
          Le dernier message a avoir été envoyé va être coupé parce que trop
          long
        </p>
      </div>
    </div>
  );
}

export default ConversationList;
