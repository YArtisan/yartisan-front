import { IConversation } from "@/types/interfaces";
import { useAuthState } from "@/user/components/UserProvider";
import NotAuth from "@atoms/NotAuth";
import Conversation from "@components/modules/chat/Conversation";
import ConversationList from "@components/modules/chat/ConversationList";
import { useState } from "react";

function Chat() {
  const { connectedUser } = useAuthState();
  const [selectedConversation, setSelectedConversation] = useState<
    IConversation | undefined
  >();

  if (!connectedUser) return <NotAuth />;

  return (
    <div className="flex h-full gap-8 px-3">
      <ConversationList
        selectedConversation={selectedConversation}
        onSelectConversation={(e) =>
          setSelectedConversation(
            selectedConversation?._id === e._id ? undefined : e
          )
        }
      />
      {selectedConversation && (
        <Conversation conversation={selectedConversation} />
      )}
    </div>
  );
}

export default Chat;
