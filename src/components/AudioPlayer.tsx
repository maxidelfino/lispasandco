import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipForward,
  SkipBack,
  Headphones,
  Radio,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import type { Podcast } from "../assets/podcast/podcast";

interface AudioPlayerProps {
  podcasts: Podcast[];
}

type CategoryFilter = "all" | "programs" | "caseStudies";

const categoryLabels: Record<CategoryFilter, Record<Language, string>> = {
  all: {
    [Language.SPANISH]: "Todos",
    [Language.ENGLISH]: "All",
    [Language.PORTUGUESE]: "Todos",
  },
  programs: {
    [Language.SPANISH]: "Programas",
    [Language.ENGLISH]: "Programs",
    [Language.PORTUGUESE]: "Programas",
  },
  caseStudies: {
    [Language.SPANISH]: "Casos de Estudio",
    [Language.ENGLISH]: "Case Studies",
    [Language.PORTUGUESE]: "Estudos de Caso",
  },
};

const i18n = {
  sectionTitle: {
    [Language.SPANISH]: "Nuestro Podcast",
    [Language.ENGLISH]: "Our Podcast",
    [Language.PORTUGUESE]: "Nosso Podcast",
  },
  sectionSubtitle: {
    [Language.SPANISH]:
      "Escuchá las voces detrás de la transformación operacional",
    [Language.ENGLISH]:
      "Listen to the voices behind operational transformation",
    [Language.PORTUGUESE]:
      "Ouça as vozes por trás da transformação operacional",
  },
  nowPlaying: {
    [Language.SPANISH]: "Reproduciendo",
    [Language.ENGLISH]: "Now Playing",
    [Language.PORTUGUESE]: "Reproduzindo",
  },
  selectTrack: {
    [Language.SPANISH]: "Seleccioná un episodio para comenzar",
    [Language.ENGLISH]: "Select an episode to start listening",
    [Language.PORTUGUESE]: "Selecione um episódio para começar",
  },
  episodes: {
    [Language.SPANISH]: "episodios",
    [Language.ENGLISH]: "episodes",
    [Language.PORTUGUESE]: "episódios",
  },
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ podcasts }) => {
  const { currentLanguage } = useLanguage();
  const audioRef = useRef<HTMLAudioElement>(null);
  const activeIndexRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [category, setCategory] = useState<CategoryFilter>("all");

  activeIndexRef.current = activeIndex;

  const getAudioSrc = useCallback(
    (podcast: Podcast) => {
      switch (currentLanguage) {
        case Language.ENGLISH:
          return podcast.audioEnglish;
        case Language.PORTUGUESE:
          return podcast.audioPortuguese;
        default:
          return podcast.audioSpanish;
      }
    },
    [currentLanguage]
  );

  const filteredPodcasts = podcasts.filter(
    (p) => category === "all" || p.category === category
  );

  const activePodcast =
    activeIndex !== null ? podcasts[activeIndex] : null;

  /* ── Audio event listeners ── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      if (!Number.isNaN(audio.duration)) setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, []);

  /* ── Auto-advance on track end ── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => {
      const idx = activeIndexRef.current;
      if (idx !== null && idx < podcasts.length - 1) {
        const next = idx + 1;
        setActiveIndex(next);
        setCurrentTime(0);
        setDuration(0);
        audio.src = getAudioSrc(podcasts[next]);
        audio.load();
        audio.play().catch(() => {});
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [podcasts, getAudioSrc]);

  /* ── Playback actions ── */
  const playTrack = (globalIndex: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (activeIndex === globalIndex) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setActiveIndex(globalIndex);
      setCurrentTime(0);
      setDuration(0);
      audio.src = getAudioSrc(podcasts[globalIndex]);
      audio.load();
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (activeIndex === null) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const skipTrack = (direction: "prev" | "next") => {
    if (activeIndex === null) return;
    const next =
      direction === "next" ? activeIndex + 1 : activeIndex - 1;
    if (next >= 0 && next < podcasts.length) {
      playTrack(next);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * duration;
    setCurrentTime(pct * duration);
  };

  const handleProgressKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      const step = duration * 0.05;
      const t =
        e.key === "ArrowLeft"
          ? Math.max(0, currentTime - step)
          : Math.min(duration, currentTime + step);
      audio.currentTime = t;
      setCurrentTime(t);
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      togglePlayPause();
    }
  };

  const handleVolumeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = v;
      setVolume(v);
      setIsMuted(v === 0);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted) {
      audio.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const fmt = (s: number): string => {
    if (Number.isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const getGlobalIndex = (podcast: Podcast) =>
    podcasts.indexOf(podcast);

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* ── Decorative background elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent), transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-secondary), var(--color-accent))",
              }}
            >
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: "var(--color-secondary)" }}
            >
              LYSPAS & CO
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {i18n.sectionTitle[currentLanguage]}
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            {i18n.sectionSubtitle[currentLanguage]}
          </p>

          {/* ── Decorative sound wave ── */}
          <div className="flex items-end justify-center gap-[3px] mt-8 h-6 opacity-30">
            {[40, 70, 50, 90, 30, 80, 60, 100, 45, 75, 55, 85, 35].map(
              (h, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-full"
                  style={{
                    height: `${h}%`,
                    background:
                      i % 2 === 0
                        ? "var(--color-secondary)"
                        : "var(--color-accent)",
                  }}
                />
              )
            )}
          </div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(["all", "programs", "caseStudies"] as CategoryFilter[]).map(
            (cat) => {
              const isActive = category === cat;
              const count =
                cat === "all"
                  ? podcasts.length
                  : podcasts.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`
                    inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-white shadow-lg"
                        : "bg-white/[0.06] text-white/60 hover:bg-white/[0.12] hover:text-white/90"
                    }
                  `}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg, var(--color-secondary), color-mix(in srgb, var(--color-secondary) 70%, var(--color-accent)))",
                          boxShadow:
                            "0 4px 20px color-mix(in srgb, var(--color-secondary) 40%, transparent)",
                        }
                      : undefined
                  }
                >
                  {cat === "programs" && (
                    <Radio className="w-3.5 h-3.5" />
                  )}
                  {cat === "caseStudies" && (
                    <BookOpen className="w-3.5 h-3.5" />
                  )}
                  {categoryLabels[cat][currentLanguage]}
                  <span
                    className={`text-xs ml-1 ${
                      isActive ? "text-white/70" : "text-white/30"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            }
          )}
        </div>

        {/* ── Episode count ── */}
        <div className="flex items-center justify-between px-1 mb-3">
          <span className="text-xs text-white/30 uppercase tracking-wider font-medium">
            {filteredPodcasts.length}{" "}
            {i18n.episodes[currentLanguage]}
          </span>
        </div>

        {/* ── Track List + Player ── */}
        <div
          className="rounded-2xl overflow-hidden border border-white/[0.08]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Track List */}
          <div
            className="max-h-[400px] overflow-y-auto podcast-scrollbar"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.15) transparent",
            }}
          >
            {filteredPodcasts.map((podcast, i) => {
              const globalIdx = getGlobalIndex(podcast);
              const isActiveTrack = activeIndex === globalIdx;
              const isCurrentlyPlaying = isActiveTrack && isPlaying;

              return (
                <button
                  key={`${podcast.title}-${globalIdx}`}
                  onClick={() => playTrack(globalIdx)}
                  className={`
                    w-full flex items-center gap-4 px-5 py-4 text-left
                    transition-all duration-200 group border-b border-white/[0.04] last:border-b-0
                    ${
                      isActiveTrack
                        ? "bg-white/[0.08]"
                        : "hover:bg-white/[0.04]"
                    }
                  `}
                  style={
                    isActiveTrack
                      ? {
                          borderLeft: "3px solid var(--color-secondary)",
                          paddingLeft: "17px",
                        }
                      : { borderLeft: "3px solid transparent" }
                  }
                >
                  {/* Track number */}
                  <span
                    className={`text-xs font-mono w-5 text-right flex-shrink-0 ${
                      isActiveTrack
                        ? "text-[var(--color-secondary)]"
                        : "text-white/20"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Play/Equalizer indicator */}
                  <div
                    className={`
                      w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0
                      transition-all duration-200
                      ${
                        isActiveTrack
                          ? ""
                          : "bg-white/[0.06] group-hover:bg-white/[0.12]"
                      }
                    `}
                    style={
                      isActiveTrack
                        ? {
                            background:
                              "linear-gradient(135deg, var(--color-secondary), var(--color-accent))",
                            boxShadow:
                              "0 2px 12px color-mix(in srgb, var(--color-secondary) 35%, transparent)",
                          }
                        : undefined
                    }
                  >
                    {isCurrentlyPlaying ? (
                      <div className="flex items-end gap-[2px] h-3.5">
                        <span className="w-[3px] bg-white rounded-full animate-eq-1" />
                        <span className="w-[3px] bg-white rounded-full animate-eq-2" />
                        <span className="w-[3px] bg-white rounded-full animate-eq-3" />
                      </div>
                    ) : isActiveTrack ? (
                      <Pause className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Play className="w-3.5 h-3.5 text-white/60 group-hover:text-white ml-0.5" />
                    )}
                  </div>

                  {/* Track info */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-semibold text-sm truncate ${
                        isActiveTrack ? "text-white" : "text-white/80"
                      }`}
                    >
                      {podcast.title}
                    </p>
                    {podcast.description && (
                      <p className="text-xs text-white/35 truncate mt-0.5">
                        {podcast.description}
                      </p>
                    )}
                  </div>

                  {/* Category badge */}
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md flex-shrink-0 hidden sm:inline-block"
                    style={{
                      backgroundColor:
                        podcast.category === "programs"
                          ? "color-mix(in srgb, var(--color-secondary) 15%, transparent)"
                          : "color-mix(in srgb, var(--color-accent) 15%, transparent)",
                      color:
                        podcast.category === "programs"
                          ? "var(--color-secondary)"
                          : "var(--color-accent)",
                    }}
                  >
                    {podcast.category === "programs"
                      ? categoryLabels.programs[currentLanguage]
                      : categoryLabels.caseStudies[currentLanguage]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Player Bar ── */}
          <div
            className="border-t border-white/[0.08] px-5 py-5"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 100%)",
            }}
          >
            {activePodcast ? (
              <>
                {/* Now Playing info */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {i18n.nowPlaying[currentLanguage]}
                  </span>
                  <span className="text-white/20">—</span>
                  <p className="text-sm text-white/80 font-medium truncate">
                    {activePodcast.title}
                    {activePodcast.description && (
                      <span className="text-white/35 font-normal">
                        {" "}
                        · {activePodcast.description}
                      </span>
                    )}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-mono text-white/40 w-10 text-right tabular-nums">
                    {fmt(currentTime)}
                  </span>
                  <div
                    className="flex-1 h-1.5 bg-white/[0.08] rounded-full cursor-pointer group/prog relative"
                    onClick={handleProgressClick}
                    onKeyDown={handleProgressKeyDown}
                    role="slider"
                    tabIndex={0}
                    aria-label="Audio progress"
                    aria-valuemin={0}
                    aria-valuemax={duration}
                    aria-valuenow={currentTime}
                  >
                    <div
                      className="h-full rounded-full relative"
                      style={{
                        width: `${
                          duration ? (currentTime / duration) * 100 : 0
                        }%`,
                        background:
                          "linear-gradient(90deg, var(--color-secondary), var(--color-accent))",
                      }}
                    >
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full
                          shadow-md opacity-0 group-hover/prog:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-white/40 w-10 tabular-nums">
                    {fmt(duration)}
                  </span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => skipTrack("prev")}
                      disabled={activeIndex === 0}
                      className="p-2.5 text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-lg hover:bg-white/[0.06]"
                      aria-label="Previous track"
                    >
                      <SkipBack className="w-4 h-4" />
                    </button>

                    <button
                      onClick={togglePlayPause}
                      className="w-11 h-11 rounded-xl text-white flex items-center justify-center
                        hover:scale-105 transition-all duration-200"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-secondary), var(--color-accent))",
                        boxShadow:
                          "0 4px 16px color-mix(in srgb, var(--color-secondary) 40%, transparent)",
                      }}
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4.5 h-4.5" />
                      ) : (
                        <Play className="w-4.5 h-4.5 ml-0.5" />
                      )}
                    </button>

                    <button
                      onClick={() => skipTrack("next")}
                      disabled={
                        activeIndex === podcasts.length - 1
                      }
                      className="p-2.5 text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-lg hover:bg-white/[0.06]"
                      aria-label="Next track"
                    >
                      <SkipForward className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Volume */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/[0.06]"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--color-secondary)]"
                      aria-label="Volume"
                    />
                  </div>
                </div>
              </>
            ) : (
              /* Empty state */
              <div className="flex items-center justify-center gap-3 py-3 text-white/30">
                <Headphones className="w-5 h-5" />
                <span className="text-sm">
                  {i18n.selectTrack[currentLanguage]}
                </span>
              </div>
            )}
          </div>
        </div>

        <audio ref={audioRef} preload="metadata">
          <track kind="captions" />
        </audio>
      </div>
    </section>
  );
};

export default AudioPlayer;
