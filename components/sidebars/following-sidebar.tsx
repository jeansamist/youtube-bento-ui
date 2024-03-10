import { FOLLOWING } from '@/helpers/following';
import { FunctionComponent } from 'react';
import { Sidebar } from '../Sidebar';
import { GhostButton } from '../button';
import Image from 'next/image'

export type FollowingSidebarProps = {};

export const FollowingSidebar: FunctionComponent<FollowingSidebarProps> = () => {
  return (
    <Sidebar className="row-span-2">
      <h3 className="font-medium text-sm text-muted px-2">Abonnements</h3>
      {FOLLOWING.map((following, key) => (
        <GhostButton
          icon={<Image src={following.image} alt="" />}
          label={following.name}
          key={key}
        />
      ))}
      <GhostButton
        label="Plus"
        icon={
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
        }
      />
    </Sidebar>
  );
}