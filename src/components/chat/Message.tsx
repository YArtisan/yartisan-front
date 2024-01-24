import { IMessage } from "@/types/interfaces";

interface IProps {
  message: Partial<IMessage>;
  id: string;
}

function Message({ message, id }: IProps) {
  const { message: text, created_at, expediteur_id } = message;
  const isOwner = expediteur_id === id;

  return (
    <div
      className={`text-white w-fit p-2 rounded max-w-[50%] ${
        isOwner ? "ml-auto bg-message-me" : "bg-message-other"
      }`}
    >
      <p className="break-words">{text}</p>
      {created_at && (
        <p className="text-xs italic">
          {new Date(created_at).toLocaleString()}
        </p>
      )}
    </div>
  );
}

export default Message;
