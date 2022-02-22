import '@builder.io/mitosis/dist/src/jsx-types';
import { onMount, useState } from '@builder.io/mitosis';

interface WvSharerProps {
  url?: string;
  light?: boolean;
  center?: boolean;
}

export default function WvSharer(props: WvSharerProps) {
  const state = useState({
    encodedURL: '',
  });

  onMount(() => {
    state.encodedURL = encodeURI(props.url || window.location.href);
  });

  return (
    <div
      class={`wv_sharer ${
        props.light ? 'wv_sharer--light' : 'wv_sharer--dark'
      } ${props.center ? 'wv_sharer--center' : ''}`}
    >
      <span class="wv-b5">Share</span>

      <a
        href={`http://www.facebook.com/sharer/sharer.php?u=${state.encodedURL}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM18.975 9.15C18.45 9.15 18 9.15 17.475 9.15C16.8 9.15 16.425 9.525 16.35 10.125C16.35 10.65 16.35 11.175 16.35 11.7C16.35 11.925 16.425 11.85 16.575 11.85C17.325 11.85 18.075 11.85 18.825 11.85C19.05 11.85 19.125 11.925 19.125 12.15C19.05 13.05 18.975 13.875 18.9 14.775C18.9 15 18.825 15 18.6 15C18 15 17.4 15 16.8 15C16.35 15 16.425 14.925 16.425 15.375C16.425 18.15 16.425 20.85 16.425 23.625C16.425 23.925 16.35 24 16.05 24C15 24 14.025 24 12.975 24C12.675 24 12.675 23.925 12.675 23.625C12.675 22.275 12.675 20.85 12.675 19.5C12.675 18.075 12.675 16.725 12.675 15.3C12.675 15.075 12.6 15 12.375 15C11.925 15 11.475 15 11.025 15C10.875 15 10.8 14.925 10.8 14.775C10.8 13.875 10.8 13.05 10.8 12.15C10.8 12 10.875 11.925 11.025 11.925C11.475 11.925 11.925 11.925 12.375 11.925C12.6 11.925 12.675 11.85 12.675 11.625C12.675 10.95 12.675 10.275 12.675 9.6C12.675 8.775 12.9 8.025 13.425 7.35C14.025 6.525 14.925 6.15 15.9 6.075C16.95 6 18 6.075 18.975 6.075C19.125 6.075 19.125 6.15 19.125 6.3C19.125 7.2 19.125 8.1 19.125 8.925C19.2 9.075 19.125 9.15 18.975 9.15Z"
          />
        </svg>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${state.encodedURL}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM22.2 11.325C22.2 11.475 22.2 11.625 22.2 11.775C22.2 16.65 18.45 22.35 11.625 22.35C9.525 22.35 7.575 21.75 5.925 20.7C6.225 20.7 6.525 20.775 6.825 20.775C8.55 20.775 10.125 20.175 11.4 19.2C9.75 19.2 8.4 18.075 7.95 16.65C8.175 16.725 8.4 16.725 8.625 16.725C9 16.725 9.3 16.65 9.6 16.575C7.875 16.2 6.6 14.7 6.6 12.975C6.6 12.975 6.6 12.975 6.6 12.9C7.125 13.2 7.65 13.35 8.25 13.35C7.35 12.6 6.75 11.475 6.75 10.2C6.75 9.525 6.9 8.85 7.275 8.325C9.075 10.575 11.85 12.075 14.925 12.225C14.85 11.925 14.85 11.7 14.85 11.4C14.85 9.375 16.5 7.725 18.525 7.725C19.575 7.725 20.55 8.175 21.225 8.925C22.05 8.775 22.875 8.475 23.55 8.025C23.25 8.925 22.65 9.6 21.9 10.05C22.65 9.975 23.4 9.75 24 9.45C23.55 10.125 22.875 10.8 22.2 11.325Z" />
        </svg>
      </a>
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${state.encodedURL}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path d="M12.75 11.4751C12.525 11.4751 12.3 11.7001 12.3 11.9251V15.3001C12.3 15.5251 12.525 15.7501 12.75 15.7501C12.975 15.7501 13.2 15.5251 13.2 15.3001V11.9251C13.2 11.7001 12.975 11.4751 12.75 11.4751Z" />
          <path d="M16.725 11.4751C16.5 11.4751 16.275 11.7001 16.275 11.9251V13.9501L14.7 11.7751C14.625 11.6251 14.4 11.5501 14.175 11.6251C14.025 11.7001 13.875 11.8501 13.875 12.0751V15.3751C13.875 15.6001 14.1 15.8251 14.325 15.8251C14.55 15.8251 14.775 15.6001 14.775 15.3751V13.4251L16.35 15.6001C16.425 15.7501 16.575 15.7501 16.725 15.7501C16.8 15.7501 16.8 15.7501 16.875 15.7501C17.025 15.6751 17.175 15.5251 17.175 15.3001V11.9251C17.1 11.7001 16.95 11.4751 16.725 11.4751Z" />
          <path d="M11.475 14.8501H10.275V11.9251C10.275 11.7001 10.05 11.4751 9.825 11.4751C9.6 11.4751 9.375 11.7001 9.375 11.9251V15.3001C9.375 15.5251 9.6 15.7501 9.825 15.7501H11.4C11.625 15.7501 11.85 15.5251 11.85 15.3001C11.85 15.0751 11.775 14.8501 11.475 14.8501Z" />
          <path d="M20.325 14.775H18.6V13.95H19.95C20.175 13.95 20.4 13.725 20.4 13.5C20.4 13.275 20.175 13.05 19.95 13.05H18.6V12.225H20.25C20.475 12.225 20.7 12 20.7 11.775C20.7 11.55 20.475 11.325 20.25 11.325H18.15C17.925 11.325 17.7 11.55 17.7 11.775V13.425V15.075C17.7 15.3 17.925 15.525 18.15 15.525H20.325C20.55 15.525 20.775 15.3 20.775 15.075C20.775 14.85 20.55 14.775 20.325 14.775Z" />
          <path d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM22.725 18.225C21.525 19.725 16.275 23.25 15.075 24C14.55 24.3 13.95 23.925 13.95 23.325V21.525C11.025 21.375 5.775 18.825 5.775 13.725C5.775 8.475 11.025 5.925 15.075 5.925C19.425 5.925 24.375 8.775 24.375 13.725C24.3 15.075 23.925 16.725 22.725 18.225Z" />
        </svg>
      </a>
    </div>
  );
}