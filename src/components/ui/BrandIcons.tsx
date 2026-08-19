// Shared brand/contact icons, so the SVG paths live in one place instead of
// being duplicated across the hero, contact and footer sections.

type IconProps = { size?: number };

export function GitHubIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 .8a7.2 7.2 0 0 0-2.28 14.03c.36.07.5-.15.5-.34v-1.2c-2 .43-2.43-.97-2.43-.97-.33-.83-.8-1.05-.8-1.05-.66-.45.05-.44.05-.44.72.05 1.1.75 1.1.75.65 1.1 1.7.8 2.1.6.07-.46.26-.79.46-.97-1.6-.18-3.28-.8-3.28-3.56 0-.79.28-1.43.74-1.94-.07-.18-.32-.91.07-1.9 0 0 .6-.2 1.98.74a6.9 6.9 0 0 1 3.6 0c1.38-.94 1.98-.74 1.98-.74.4.99.15 1.72.07 1.9.46.5.74 1.15.74 1.94 0 2.77-1.69 3.38-3.3 3.56.26.22.5.66.5 1.33v1.97c0 .19.13.42.5.34A7.2 7.2 0 0 0 8 .8Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM2.6 6h2v7.6h-2V6Zm3.6 0h1.9v1c.3-.5 1-1.2 2.2-1.2 2.1 0 2.9 1.3 2.9 3.3v4.5h-2V9.6c0-1-.3-1.8-1.3-1.8-1 0-1.5.7-1.7 1.4v4.4h-2V6Z" />
    </svg>
  );
}

export function MailIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m2 4 6 5 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
