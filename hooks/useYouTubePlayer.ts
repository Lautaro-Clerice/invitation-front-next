import { useState, useEffect, useRef, useCallback } from "react";

interface UseYouTubePlayerProps {
  videoId: string;
  volume?: number;
}

// Declarar el tipo para la API de YouTube
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const useYouTubePlayer = ({
  videoId,
  volume = 30,
}: UseYouTubePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cargar la API de YouTube
  useEffect(() => {
    // Si la API ya está cargada
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return;
    }

    // Cargar el script de la API de YouTube
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Callback cuando la API está lista
    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const initializePlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current) return;

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        showinfo: 0,
        loop: 1,
        playlist: videoId, // Necesario para loop
      },
      events: {
        onReady: (event: any) => {
          event.target.setVolume(volume);
          setIsReady(true);

          // Leer preferencia guardada
          const savedPreference = localStorage.getItem("musicPlayerState");
          if (savedPreference === "playing") {
            event.target.playVideo();
            setIsPlaying(true);
          }
        },
        onStateChange: (event: any) => {
          // 1 = playing, 2 = paused, 0 = ended
          if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
          } else if (event.data === window.YT.PlayerState.PAUSED) {
            setIsPlaying(false);
          } else if (event.data === window.YT.PlayerState.ENDED) {
            // Loop manual en caso de que no funcione el loop automático
            event.target.playVideo();
          }
        },
      },
    });
  }, [videoId, volume]);

  const play = () => {
    if (playerRef.current && isReady) {
      playerRef.current.playVideo();
      setIsPlaying(true);
      localStorage.setItem("musicPlayerState", "playing");
    }
  };

  const pause = () => {
    if (playerRef.current && isReady) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
      localStorage.setItem("musicPlayerState", "paused");
    }
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return {
    isPlaying,
    isReady,
    play,
    pause,
    toggle,
    containerRef,
  };
};
