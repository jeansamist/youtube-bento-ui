import { FunctionComponent } from "react";
import { Sidebar } from "../Sidebar";
import { GhostButton } from "../button";

export type OtherContentSidebarProps = {};

export const OtherContentSidebar: FunctionComponent<
  OtherContentSidebarProps
> = () => {
  return (
    <Sidebar className="row-span-1">
      <h3 className="font-medium text-sm text-muted px-2">
        Autres contenus YouTube
      </h3>
      <GhostButton
        icon={
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
        }
        label="YouTube Premium"
      />
      <GhostButton
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4717_409)">
              <path
                d="M8.6665 12L11.9998 9.99996L8.6665 7.99996V12Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M14.6665 9.99996C14.6665 12.5773 12.5772 14.6666 9.99984 14.6666C7.42251 14.6666 5.33317 12.5773 5.33317 9.99996C5.33317 7.42263 7.42251 5.33329 9.99984 5.33329C12.5772 5.33329 14.6665 7.42263 14.6665 9.99996Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M17.3332 9.99996C17.3332 14.05 14.0499 17.3333 9.99984 17.3333C5.94975 17.3333 2.6665 14.05 2.6665 9.99996C2.6665 5.94987 5.94975 2.66663 9.99984 2.66663C14.0499 2.66663 17.3332 5.94987 17.3332 9.99996Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4717_409">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(2 2)"
                />
              </clipPath>
            </defs>
          </svg>
        }
        label="YouTube Music"
      />
      <GhostButton
        icon={
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
        }
        label="YouTube Kids"
      />
    </Sidebar>
  );
};
