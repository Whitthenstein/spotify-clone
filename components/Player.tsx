"use client";

import useGetSongBySongPath from "@/hooks/useGetSongBySongPath";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";
import { useEffect } from "react";

const Player = () => {
  const player = usePlayer();
  const songPath = player.activeUrl?.split("/").at(-1);
  const { song } = useGetSongBySongPath(songPath);

  if (!song || !player.activeUrl || !player) {
    return null;
  }

  return (
    <div
      className="
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-[80px]
        px-4
      "
    >
      <PlayerContent
        key={song.id}
        song={song}
      />
    </div>
  );
};

export default Player;
