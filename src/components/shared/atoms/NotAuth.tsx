import Button from "./Button";

function NotAuth() {
  return (
    <div className="flex flex-col items-center absolute right-1/2 top-1/2 translate-x-1/2 w-fit">
      <p className="font-bold mb-4 text-xl">Vous n'êtes pas connecté</p>
      <a href="/">
        <Button template="secondary">Retour à l'accueil</Button>
      </a>
    </div>
  );
}

export default NotAuth;
