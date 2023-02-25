export default function Station(props) {
  const { channel } = props;

  return (
    <div
      className="flex flex-col justify-center items-center rounded-xl mt-3 border-black border-4 pl-4 pr-4"
      style={{ backgroundColor: `#${channel.color}` }}
    >
      <div className="flex items-center">
        <img className="h-36 w-36 mr-4 " src={channel.image} />
        <audio controls src={channel.liveaudio.url} type="audio/mpeg" />
      </div>
    </div>
  );
}
