import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.VITE_YARTISAN_API_URL;

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

export default socket;
