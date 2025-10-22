import { useState, useEffect, useRef } from "react";

interface UseAudioPlayerProps {
  audioSrc: string;
  volume?: number;
}

export const useAudioPlayer = ({ audioSrc, volume = 0.3 }: UseAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Crear elemento de audio
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    // Event listeners
    const handleCanPlay = () => setIsLoaded(true);
    const handleError = () => {
      console.error("Error loading audio");
      setIsLoaded(false);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);

    // Leer preferencia guardada
    const savedPreference = localStorage.getItem("musicPlayerState");
    if (savedPreference === "playing") {
      // Intentar reproducir automáticamente si el usuario ya había activado la música
      audio.play().catch(() => {
        // Si falla (por políticas del navegador), no hacer nada
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audio.src = "";
    };
  }, [audioSrc, volume]);

  const play = () => {
    if (audioRef.current && isLoaded) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        localStorage.setItem("musicPlayerState", "playing");
      }).catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
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
    isLoaded,
    play,
    pause,
    toggle,
  };
};
