import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

export type VideoCardProps = {
  image: StaticImageData;
  title: string;
  avatar: StaticImageData;
  infos: string;
  duration: string;
};

export const VideoCard: FunctionComponent<VideoCardProps> = ({
  image,
  avatar,
  infos,
  title,
  duration,
}) => {
  return (
    <div className="col-span-3 relative rounded-2xl overflow-hidden hover:scale-105 transition-transform">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 z-0 opacity-40"
        style={{
          background: `url("${image.src}") no-repeat center / cover`,
        }}
      ></div>
      <Image
        src={image}
        alt=""
        className="w-full aspect-video object-cover relative z-10"
      />
      <div className="p-3 gap-2 flex w-full h-full z-10 relative backdrop-blur-3xl">
        <div className="absolute rounded-xl -translate-x-2 -translate-y-full inline-block right-0 -top-2 bg-black/70 text-xs font-medium px-1.5">
          {duration}
        </div>
        <div>
          <Image src={avatar} alt="" className="w-[28px]" />
        </div>
        <div className="w-[calc(100%-28px-8px)]">
          <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
          <div className="text-[10px] text-white/50 font-medium">{infos}</div>
        </div>
      </div>
    </div>
  );
};
