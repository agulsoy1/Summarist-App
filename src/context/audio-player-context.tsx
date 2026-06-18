import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useRef,
} from 'react';
export interface Track {
  title: string;
  src: string;
  author: string;
  thumbnail?: string;
}
interface AudioPlayerContextType {
  currentTrack: Track | null;
  setCurrentTrack: Dispatch<SetStateAction<Track | null>>;
  audioRef : React.RefObject<HTMLAudioElement | null>;
  progressBarRef : React.RefObject<HTMLInputElement | null>;
  timeProgress: number
  setTimeProgress: Dispatch<SetStateAction<number>>
  duration: number
  setDuration: Dispatch<SetStateAction<number>>
  isPlaying: boolean
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  
}
const AudioPlayerContext = createContext<
  AudioPlayerContextType | undefined
>(undefined);

export const AudioPlayerProvider = ({
  children,
}: {
  children: ReactNode;
}) =>{
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [timeProgress, setTimeProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [currentTrack,setCurrentTrack] = useState<Track | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLInputElement>(null)
  const contextValue: AudioPlayerContextType = {
    currentTrack,
    setCurrentTrack,
    audioRef,
    progressBarRef,
    timeProgress,
    setTimeProgress,
    duration,
    setDuration,
    isPlaying,
    setIsPlaying
  };
  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
export const useAudioPlayerContext = (): AudioPlayerContextType => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error(
      'useAudioPlayerContext must be used within an AudioPlayerProvider'
    );
  }
  return context;
};