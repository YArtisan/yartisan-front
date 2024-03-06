import Notifications from "./Notifications";
import Settings from "./Settings";

type Menu = "settings" | "notifications" | "";

function Window({ menu }: { menu: Menu }) {
  return (
    <div
      className={`absolute top-full right-0 rounded-b-lg max-[400px]:w-full bg-white ${
        !!menu ? "p-2 shadow-xl" : ""
      }`}
    >
      {menu === "settings" && <Settings />}
      {menu === "notifications" && <Notifications />}
    </div>
  );
}

export default Window;
