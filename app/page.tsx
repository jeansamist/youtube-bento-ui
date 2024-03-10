import { ExploreSidebar } from "@/components/sidebars/explore-sidebar";
import { FollowingSidebar } from "@/components/sidebars/following-sidebar";
import { MainSidebar } from "@/components/sidebars/main-sidebar";
import { OtherContentSidebar } from "@/components/sidebars/othercontent-sidebar";
import { ShortVideoCard, VideoCard } from "@/components/video-card";
import { SHORTS } from "@/helpers/shorts";
import { VIDEOS } from "@/helpers/videos";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 container">
        <MainSidebar />
        {VIDEOS.slice(0, 5).map((video, k) => (
          <VideoCard {...video} key={k} />
        ))}
        <FollowingSidebar />
        <div className="col-span-1 grid gap-6 grid-rows-3">
          <div className="bg-primary flex items-center justify-center rounded-xl">
            <svg
              width="28"
              height="34"
              viewBox="0 0 28 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.136 3.46944C24.4672 0.295705 20.5413 -0.921769 17.3706 0.749491L3.46734 8.13734C0.296568 9.8086 -0.920854 13.735 0.747972 16.9087C1.86964 19.042 4.01176 20.2899 6.25783 20.373L3.65063 21.7592C0.479866 23.4305 -0.737557 27.3568 0.931269 30.5306C2.6001 33.7043 6.52594 34.9218 9.69671 33.2505L23.5999 25.8627C26.7734 24.1914 27.9881 20.265 26.3193 17.0913C25.1976 14.958 23.0555 13.7101 20.8094 13.627L23.4166 12.2408C26.5874 10.5695 27.8048 6.64317 26.136 3.46944ZM9.86633 11.7677L9.86621 11.7676V22.2517L9.86633 22.2517L18.2815 17.0221L9.86633 11.7677Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="bg-accent transition-colors hover:bg-accent-hovevered flex items-center justify-center rounded-xl">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20.25L17 14.25L11 8.25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="bg-accent transition-colors hover:bg-accent-hovevered flex items-center justify-center rounded-xl">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 20.75L11 14.75L17 8.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {SHORTS.map((short, k) => (
          <ShortVideoCard {...short} key={k} />
        ))}
        <div className="col-span-12 bg-accent p-6 pr-0 rounded-xl overflow-hidden">
          <div className="flex gap-3 w-[200%]">
            <button className="outline-none bg-primary px-3 py-1.5 font-medium text-xs rounded-lg">
              Tous
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Musique
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              En direct
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Actualité
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Jeux vidéo
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Musique d’ambiance
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Squeezie
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Mister V
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Comédie à sketch
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Histoire
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Joueur du grenier
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Intelligence artificielle
            </button>
            <button className="outline-none bg-ghost transition-colors hover:bg-accent-hovevered px-3 py-1.5 font-medium text-xs rounded-lg">
              Cameroun
            </button>
          </div>
        </div>
        {VIDEOS.slice(5, 8).map((video, k) => (
          <VideoCard {...video} key={k} />
        ))}
        <ExploreSidebar />
        <OtherContentSidebar />
        {VIDEOS.slice(8, 14).map((video, k) => (
          <VideoCard {...video} key={k} />
        ))}
        {VIDEOS.slice(0, 12).map((video, k) => (
          <VideoCard {...video} key={k} />
        ))}
      </div>
    </>
  );
}
