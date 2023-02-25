import { useState, useEffect } from "react";
import Station from "./Station";
import "./App.css";

function App() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=10")
      .then((response) => response.json())
      .then((data) => {
        setChannels(data.channels);
        console.log(data);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4 items-center">
      {channels.map((channel) => {
        return <Station channel={channel} />;
      })}
    </div>
  );
}

export default App;
