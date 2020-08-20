import React from "react";
import { twitchPlayerNode } from "../components/twitch_player";
import * as portals from "react-reverse-portal";

interface Options {
  fullWidth?: boolean;
  disablePopoutPlayer?: boolean;
}
export const Page = <T extends object>(
  C: React.ComponentType<T>,
  options: Options = {}
) => {
  return (props: T) => {
    return (
      <>
        {options.disablePopoutPlayer ? null : (
          <portals.OutPortal node={twitchPlayerNode} popout />
        )}
        <div className={options.fullWidth ? undefined : "container"}>
          <C {...props} />
        </div>
      </>
    );
  };
};
