import React from "react";
import { Page } from "../hocs/page";

export default Page(Home);

function Home() {
  return (
    <>
      <h1>SGDQ 2020</h1>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src="https://player.twitch.tv/?channel=gamesdonequick&parent=sgdq.shaneschulte.com"
          className="embed-responsive-item"
          allowFullScreen
          frameBorder={0}
        ></iframe>
      </div>
    </>
  );
}
