import { getConversationsByUser } from "@/fetch/conversationActions";
import { IConversation } from "@/types/interfaces";
import { useAuthState } from "@/user/components/UserProvider";
import { useEffect, useState } from "react";

interface IProps {
  onSelectConversation: (conversation: IConversation) => void;
  selectedConversation?: IConversation;
}

function ConversationList({
  selectedConversation,
  onSelectConversation,
}: IProps) {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const { connectedUser } = useAuthState();

  useEffect(() => {
    if (!connectedUser) return;
    getConversationsByUser(connectedUser._id).then((data) =>
      setConversations(
        data.map((c) => {
          console.log(c);
          const isArtisan = connectedUser?.userFunction === "artisan";
          const isUser = connectedUser?.userFunction === "user";
          let data = {
            name: "Inconnu",
            email: "Inconnu",
            phone: "Inconnu",
          };

          if (isArtisan && c.user) {
            data = {
              name: `${c.user.firstname} ${c.user.lastname}`,
              email: c.user.email,
              phone: c.user.phone_number,
            };
          }

          if (isUser && c.artisan) {
            data = {
              name: c.artisan.company_name,
              email: c.artisan.email,
              phone: c.artisan.phone_number,
            };
          }

          return { ...c, data };
        })
      )
    );
  }, [connectedUser]);

  return (
    <div className="max-w-[300px] w-full h-full flex flex-col bg-white rounded shadow-xl">
      <div className="flex flex-col">
        {conversations.map((c) => (
          <ConversationItem
            key={c._id}
            conversation={c}
            onClick={() => onSelectConversation(c)}
            isSelected={
              selectedConversation?._id.toLowerCase() === c._id.toLowerCase()
            }
          />
        ))}
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
      <div
        className="w-12 h-12 rounded-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${conversation.artisan.profile_picture})`,
        }}
      ></div>
      <div className="flex-1 flex flex-col">
        <p>{conversation.data?.name}</p>
        <p className="text-gray-400 line-clamp-1">
          Le dernier message a avoir été envoyé va être coupé parce que trop
          long
        </p>
      </div>
    </div>
  );
}

export default ConversationList;
