import { IConversation } from "@/types/interfaces";
import Conversation from "@components/chat/Conversation";
import ConversationList from "@components/chat/ConversationList";
import { useState } from "react";

function Chat() {
  const [selectedConversation, setSelectedConversation] = useState<
    IConversation | undefined
  >();

  return (
    <div className="flex h-full gap-8 px-3">
      <ConversationList
        selectedConversation={selectedConversation}
        onSelectConversation={setSelectedConversation}
      />
      {selectedConversation && (
        <Conversation conversation={selectedConversation} />
      )}
    </div>
  );
}

export default Chat;
