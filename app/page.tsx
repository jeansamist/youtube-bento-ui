import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/images/image 1.png";
import avatar1 from "@/images/Avatar1.png";
import { VideoCard } from "@/components/video-card";
import { VIDEOS } from "@/helpers/videos";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 container">
        <div className="col-span-3 row-span-2 bg-accent rounded-xl p-4">
          <ScrollArea className="w-full h-full">
            <div className="space-y-2">
              <Link
                href={"#"}
                className="bg-dark p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16.6667V10H12V16.6667M4 8L10 3.33333L16 8V15.3333C16 15.687 15.8595 16.0261 15.6095 16.2761C15.3594 16.5262 15.0203 16.6667 14.6667 16.6667H5.33333C4.97971 16.6667 4.64057 16.5262 4.39052 16.2761C4.14048 16.0261 4 15.687 4 15.3333V8Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Accueil
              </Link>
              <Link
                href={"#"}
                className="transition-colors bg-transparent hover:bg-accent-hovevered p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4702_21)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.44092 6.53985C4.06302 7.31257 3.59091 9.02396 4.38645 10.3623C4.79695 11.053 5.46478 11.5093 6.20438 11.6831L5.44092 12.1113C4.06302 12.884 3.59091 14.5954 4.38645 15.9337C5.18198 17.2721 6.9439 17.7307 8.3218 16.958L14.5591 13.4602C15.937 12.6874 16.4091 10.9761 15.6136 9.63767C15.203 8.94704 14.5352 8.49069 13.7956 8.3169L14.5591 7.88875C15.937 7.11604 16.4091 5.40465 15.6136 4.06627C14.818 2.72788 13.0561 2.26932 11.6782 3.04203L5.44092 6.53985Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.66667 12L12 10L8.66667 8V12Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4702_21">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(2 2)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Shorts
              </Link>
              <Link
                href={"#"}
                className="transition-colors bg-transparent hover:bg-accent-hovevered p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4702_363)">
                    <path
                      d="M4.66683 6.4C8.24246 5.80764 11.8912 5.80764 15.4668 6.4M8.30241 4.00287C9.64532 3.93106 10.9915 3.94129 12.3335 4.03357M3.68278 16C3.21707 13.8022 3.21707 11.5312 3.68278 9.33333C3.74398 9.11014 3.86221 8.90671 4.02586 8.74307C4.1895 8.57942 4.39292 8.46119 4.61612 8.4C8.19175 7.80764 11.8405 7.80764 15.4161 8.4C15.6393 8.46119 15.8427 8.57942 16.0064 8.74307C16.17 8.90671 16.2883 9.11014 16.3495 9.33333C16.8152 11.5312 16.8152 13.8022 16.3495 16C16.2883 16.2232 16.17 16.4266 16.0064 16.5903C15.8427 16.7539 15.6393 16.8721 15.4161 16.9333C11.8405 17.5258 8.19174 17.5258 4.61612 16.9333C4.39292 16.8721 4.1895 16.7539 4.02586 16.5903C3.86221 16.4266 3.74398 16.2232 3.68278 16ZM8.68278 14.6667L12.0161 12.6667L8.68278 10.6667V14.6667Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4702_363">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(2 2)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Abonnements
              </Link>
              <Link
                href={"#"}
                className="transition-colors bg-transparent hover:bg-accent-hovevered p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4702_73)">
                    <path
                      d="M8.6665 12L11.9998 10L8.6665 8V12Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6665 10C14.6665 12.5773 12.5772 14.6667 9.99984 14.6667C7.42251 14.6667 5.33317 12.5773 5.33317 10C5.33317 7.42267 7.42251 5.33333 9.99984 5.33333C12.5772 5.33333 14.6665 7.42267 14.6665 10Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.3332 10C17.3332 14.0501 14.0499 17.3333 9.99984 17.3333C5.94975 17.3333 2.6665 14.0501 2.6665 10C2.6665 5.94991 5.94975 2.66667 9.99984 2.66667C14.0499 2.66667 17.3332 5.94991 17.3332 10Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4702_73">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(2 2)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Youtube music
              </Link>
              <div className="flex items-center gap-4 pl-2 py-4">
                <span className="font-medium text-sm text-muted">Vous</span>
                <div className="h-px w-full bg-muted/70"></div>
              </div>
              <Link
                href={"#"}
                className="transition-colors bg-transparent hover:bg-accent-hovevered p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16C14 14.9391 13.5786 13.9217 12.8284 13.1716C12.0783 12.4214 11.0609 12 10 12M10 12C8.93913 12 7.92172 12.4214 7.17157 13.1716C6.42143 13.9217 6 14.9391 6 16M10 12C11.4728 12 12.6667 10.8061 12.6667 9.33333C12.6667 7.86057 11.4728 6.66667 10 6.66667C8.52724 6.66667 7.33333 7.86057 7.33333 9.33333C7.33333 10.8061 8.52724 12 10 12ZM5.33333 4H14.6667C15.403 4 16 4.59695 16 5.33333V14.6667C16 15.403 15.403 16 14.6667 16H5.33333C4.59695 16 4 15.403 4 14.6667V5.33333C4 4.59695 4.59695 4 5.33333 4Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Votre chaine
              </Link>
              <Link
                href={"#"}
                className="transition-colors bg-transparent hover:bg-accent-hovevered p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10C4 11.1867 4.35189 12.3467 5.01118 13.3334C5.67047 14.3201 6.60754 15.0892 7.7039 15.5433C8.80026 15.9974 10.0067 16.1162 11.1705 15.8847C12.3344 15.6532 13.4035 15.0818 14.2426 14.2426C15.0818 13.4035 15.6532 12.3344 15.8847 11.1705C16.1162 10.0067 15.9974 8.80026 15.5433 7.7039C15.0892 6.60754 14.3201 5.67047 13.3334 5.01118C12.3467 4.35189 11.1867 4 10 4C8.32263 4.00631 6.71265 4.66082 5.50667 5.82667L4 7.33333M4 7.33333V4M4 7.33333H7.33333M10 6.66667V10L12.6667 11.3333"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Historique
              </Link>
              <Link
                href={"#"}
                className="transition-colors bg-transparent hover:bg-accent-hovevered p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.66667 13.3333C3.20095 11.1355 3.20095 8.86449 3.66667 6.66667C3.72786 6.44347 3.8461 6.24005 4.00974 6.0764C4.17339 5.91276 4.37681 5.79453 4.6 5.73333C8.17564 5.14097 11.8244 5.14097 15.4 5.73333C15.6232 5.79453 15.8266 5.91276 15.9903 6.0764C16.1539 6.24005 16.2721 6.44347 16.3333 6.66667C16.7991 8.86449 16.7991 11.1355 16.3333 13.3333C16.2721 13.5565 16.1539 13.7599 15.9903 13.9236C15.8266 14.0872 15.6232 14.2055 15.4 14.2667C11.8244 14.8591 8.17563 14.8591 4.6 14.2667C4.37681 14.2055 4.17339 14.0872 4.00974 13.9236C3.8461 13.7599 3.72786 13.5565 3.66667 13.3333Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.66667 12L12 10L8.66667 8V12Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Vos vidéos
              </Link>
              <Link
                href={"#"}
                className="transition-colors bg-transparent hover:bg-accent-hovevered p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.6665 3.33333H11.3332M9.99984 11.3333V8.66666M4.6665 10.6667C4.82975 9.37064 5.46294 8.1796 6.446 7.31942C7.42906 6.45925 8.69362 5.98976 9.99984 6C10.8625 6.00091 11.7121 6.21109 12.4758 6.6125C13.2394 7.01391 13.8942 7.59458 14.3841 8.30468C14.874 9.01478 15.1844 9.83313 15.2885 10.6895C15.3926 11.5459 15.2875 12.4148 14.982 13.2216C14.6766 14.0284 14.18 14.7491 13.5348 15.3218C12.8897 15.8945 12.1152 16.3022 11.2779 16.5099C10.4405 16.7175 9.56533 16.7189 8.72733 16.514C7.88932 16.3091 7.11353 15.904 6.4665 15.3333L4.6665 13.7333M7.99984 13.3333H4.6665V16.6667"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                À regarder plus tard
              </Link>
              <Link
                href={"#"}
                className="transition-colors bg-transparent hover:bg-accent-hovevered p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66657 11.9327C4.17126 11.4266 3.79761 10.8145 3.57392 10.1426C3.35023 9.47078 3.28237 8.75684 3.37547 8.05488C3.46858 7.35291 3.7202 6.68134 4.1113 6.09103C4.50239 5.50072 5.02269 5.00715 5.63279 4.64771C6.24289 4.28827 6.92678 4.07238 7.63268 4.01639C8.33857 3.96041 9.04795 4.0658 9.70708 4.32458C10.3662 4.58336 10.9578 4.98875 11.4371 5.51003C11.9163 6.03132 12.2706 6.65483 12.4732 7.33334H13.6666C14.3102 7.33327 14.9369 7.54022 15.4539 7.92364C15.9709 8.30705 16.3509 8.84658 16.5377 9.46255C16.7246 10.0785 16.7084 10.7382 16.4915 11.3443C16.2746 11.9503 15.8685 12.4705 15.3332 12.828M10 10V16M10 16L7.33333 13.3333M10 16L12.6667 13.3333"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Téléchargements
              </Link>
              <Link
                href={"#"}
                className="transition-colors bg-transparent hover:bg-accent-hovevered p-2 text-sm font-medium flex items-center gap-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 8L10 12L14 8"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Plus
              </Link>
            </div>
          </ScrollArea>
        </div>
        {VIDEOS.slice(0, 5).map((video, k) => (
          <VideoCard {...video} key={k} />
        ))}
      </div>
    </>
  );
}
