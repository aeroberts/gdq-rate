import React from "react";
import Draggable from "react-draggable";
import * as portals from "react-reverse-portal";

interface Props {
  popout?: boolean;
}

export const TwitchPlayer: React.FC<Props> = ({ popout }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!isVisible && popout === false) {
      setIsVisible(true);
    }
  }, [isVisible, popout]);

  const player = React.useMemo(
    () => (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src="https://player.twitch.tv/?channel=gamesdonequick&parent=gdq.cgs.dev"
          className="embed-responsive-item"
          allowFullScreen
          frameBorder={0}
        />
      </div>
    ),
    []
  );

  if (!isVisible) {
    return null;
  }

  if (popout) {
    return (
      <Draggable>
        <div className="popout-player">
          <div className="handle">
            <span onClick={() => setIsVisible(false)}>X</span>
          </div>
          {player}
        </div>
      </Draggable>
    );
  }
  return player;
};

// XXX: this is kind of gross, but since there's only ever one player it's _fine_
export const twitchPlayerNode = portals.createHtmlPortalNode();
