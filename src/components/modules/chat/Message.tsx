import { IMessage } from "@/types/interfaces";

interface IProps {
  message: Partial<IMessage>;
  id: string;
}

function Message({ message, id }: IProps) {
  const { message: text, created_at, expediteur_id, url } = message;
  const isOwner = expediteur_id === id;
  console.log("message", message);

  return (
    <div
      className={`text-white w-fit p-2 rounded max-w-[50%] ${
        isOwner ? "ml-auto bg-message-me" : "bg-message-other"
      }`}
    >
      {url ? (
        <p className="break-words underline duration-200 hover:brightness-90">
          <a href={url} target="_blank">{text}</a>
        </p>
      ) : (
        <p className="break-words">{text}</p>
      )}

      {created_at && (
        <p className="text-xs italic">
          {new Date(created_at).toLocaleString()}
        </p>
      )}
    </div>
  );
}

export default Message;
