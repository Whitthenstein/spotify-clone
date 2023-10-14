"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

import { Song } from "@/types";
interface LibraryProps {
  songs: Song[];
}

export const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onPlay = useOnPlay(songs);

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div
        className="
        flex 
        items-center 
        justify-between 
        px-5 
        pt-4
        "
      >
        <div
          className="
          inline-flex 
          items-center 
          gap-x-2
          "
        >
          <TbPlaylist
            className="text-neutral-400"
            size={26}
          />
          <p
            className="
            text-neutral-400 
            font-medium 
            text-md
            "
          >
            Library
          </p>
        </div>
        {/* <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
          text-neutral-400 
          cursor-pointer 
          hover:text-white 
          transition
          "
        /> */}
      </div>
      <div
        className="
        flex 
        flex-col 
        gap-y-2 
        mt-4 
        px-3
        "
      >
        {songs.map((item) => (
          <MediaItem
            onClick={(url: string) => onPlay(url)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};
