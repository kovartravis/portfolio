import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';

interface SocialLinksProps {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
  showLabels?: boolean;
}

const LINKS = [
  { name: 'LinkedIn', href: PERSONAL_INFO.linkedin, Icon: LinkedinIcon },
  { name: 'X', href: PERSONAL_INFO.x, Icon: XIcon },
  { name: 'GitHub', href: PERSONAL_INFO.github, Icon: GithubIcon },
] as const;

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = 'flex items-center gap-3',
  linkClassName = 'flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors',
  iconClassName = 'w-4 h-4',
  showLabels = false,
}) => {
  return (
    <div className={className}>
      {LINKS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={linkClassName}
        >
          <Icon className={iconClassName} />
          {showLabels && <span>{name}</span>}
        </a>
      ))}
    </div>
  );
};
