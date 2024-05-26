function Notifications() {
  return (
    <div className="flex flex-col gap-2 max-[400px]:w-full w-72">
      {/* {Array.from(new Array(3).keys()).map((i) => (
        <Notification key={`notification-${i}`} />
      ))} */}
    </div>
  );
}

const Notification = () => {
  const getTimeSince = (date: Date) => {
    var difference = new Date().getTime() - date.getTime();
    var jours = Math.floor(difference / (1000 * 60 * 60 * 24));
    var reste = difference % (1000 * 60 * 60 * 24);
    var heures = Math.floor(reste / (1000 * 60 * 60));

    if (jours > 0) return `${jours} jours`;
    return `${heures} heures`;
  };

  return (
    <div className="flex flex-col gap-1 pb-2 border-b-[1px] border-gray-300 last:border-b-0">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Notification title</p>
        <p className="text-sm">{getTimeSince(new Date("12/12/2023 15:00:00"))}</p>
      </div>
      <p className="text-sm">Notification description</p>
    </div>
  );
};

export default Notifications;
