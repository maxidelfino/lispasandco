import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
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
import type { Podcast, PodcastCategory } from "../types/podcast";
import { podcasts as allPodcasts } from "../assets/podcast/podcast";

interface AudioPlayerProps {
  podcasts: Podcast[];
}

type CategoryFilter = "all" | PodcastCategory;

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
  emptyTitle: {
    [Language.SPANISH]: "Próximamente",
    [Language.ENGLISH]: "Coming Soon",
    [Language.PORTUGUESE]: "Em Breve",
  },
  emptyMessage: {
    [Language.SPANISH]:
      "Estamos preparando nuevos episodios. ¡Quedate atento a lo que viene!",
    [Language.ENGLISH]:
      "We're preparing new episodes. Stay tuned for what's coming!",
    [Language.PORTUGUESE]:
      "Estamos preparando novos episódios. Fique atento ao que está por vir!",
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

  /** Only show podcasts that have audio in the current language */
  const availablePodcasts = useMemo(
    () => podcasts.filter((p) => p.audio[currentLanguage] !== null),
    [podcasts, currentLanguage],
  );

  const filteredPodcasts = useMemo(() => {
    if (category === "all") return availablePodcasts;
    return availablePodcasts.filter((p) => p.category === category);
  }, [availablePodcasts, category]);

  const activePodcast = activeIndex !== null ? allPodcasts[activeIndex] : null;

  const hasAvailablePodcasts = availablePodcasts.length > 0;

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

  /* ── Reset selection when language changes to one with different podcasts ── */
  useEffect(() => {
    setActiveIndex(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
    }
  }, [currentLanguage]);

  /* ── Auto-advance on track end (respects current filter) ── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => {
      const currentGlobal = activeIndexRef.current;
      if (currentGlobal === null) return;

      const currentItem = allPodcasts[currentGlobal];
      const currentFilteredIdx = filteredPodcasts.indexOf(currentItem);

      if (
        currentFilteredIdx !== -1 &&
        currentFilteredIdx < filteredPodcasts.length - 1
      ) {
        const nextItem = filteredPodcasts[currentFilteredIdx + 1];
        const nextGlobal = allPodcasts.indexOf(nextItem);
        const nextSrc = nextItem.audio[currentLanguage]!;
        setActiveIndex(nextGlobal);
        setCurrentTime(0);
        setDuration(0);
        audio.src = nextSrc;
        audio.load();
        audio.play().catch(() => {});
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [filteredPodcasts, currentLanguage]);

  /* ── Playback actions ── */
  const playTrack = useCallback(
    (globalIndex: number) => {
      const audio = audioRef.current;
      if (!audio) return;
      const podcast = allPodcasts[globalIndex];
      const src = podcast.audio[currentLanguage];
      if (!src) return;

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
        audio.src = src;
        audio.load();
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    },
    [activeIndex, isPlaying, currentLanguage],
  );

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
    const currentItem = allPodcasts[activeIndex];
    const currentFilteredIdx = filteredPodcasts.indexOf(currentItem);
    if (currentFilteredIdx === -1) return;

    const nextFilteredIdx =
      direction === "next" ? currentFilteredIdx + 1 : currentFilteredIdx - 1;

    if (nextFilteredIdx >= 0 && nextFilteredIdx < filteredPodcasts.length) {
      const nextItem = filteredPodcasts[nextFilteredIdx];
      playTrack(allPodcasts.indexOf(nextItem));
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

  const handleProgressKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const getGlobalIndex = (podcast: Podcast) => allPodcasts.indexOf(podcast);

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      {/* ── Decorative background elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent), transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--color-primary)" }}
          >
            {i18n.sectionTitle[currentLanguage]}
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            {i18n.sectionSubtitle[currentLanguage]}
          </p>
        </div>

        {!hasAvailablePodcasts ? (
          /* ── Empty state: no podcasts in this language ── */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="relative mb-10">
              {/* Outer soft ring */}
              <div
                className="absolute inset-0 w-24 h-24 rounded-full"
                style={{
                  animation: "soft-ping 3.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--color-secondary) 50%, transparent), transparent 70%)",
                }}
              />
              {/* Main icon container */}
              <div
                className="relative w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-secondary) 15%, white), color-mix(in srgb, var(--color-accent) 15%, white))",
                  animation: "soft-pulse 4s ease-in-out infinite",
                }}
              >
                <Headphones
                  className="w-10 h-10"
                  style={{
                    color: "var(--color-secondary)",
                    animation: "gentle-float 6s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              {i18n.emptyTitle[currentLanguage]}
            </h3>
            <p
              className="text-base max-w-md leading-relaxed"
              style={{ color: "var(--color-text)", opacity: 0.7 }}
            >
              {i18n.emptyMessage[currentLanguage]}
            </p>
          </div>
        ) : (
          <>
            {/* ── Category Filter Tabs ── */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {(["all", "programs", "caseStudies"] as CategoryFilter[]).map(
                (cat) => {
                  const isActive = category === cat;
                  const count =
                    cat === "all"
                      ? availablePodcasts.length
                      : availablePodcasts.filter((p) => p.category === cat)
                          .length;

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
                            : "bg-[var(--color-bg)] text-[var(--color-text)]/60 hover:bg-[var(--color-border)] hover:text-[var(--color-text)]"
                        }
                      `}
                      style={
                        isActive
                          ? {
                              background:
                                "linear-gradient(135deg, var(--color-secondary), color-mix(in srgb, var(--color-secondary) 70%, var(--color-accent)))",
                              boxShadow:
                                "0 4px 20px color-mix(in srgb, var(--color-secondary) 30%, transparent)",
                            }
                          : undefined
                      }
                    >
                      {cat === "programs" && <Radio className="w-3.5 h-3.5" />}
                      {cat === "caseStudies" && (
                        <BookOpen className="w-3.5 h-3.5" />
                      )}
                      {categoryLabels[cat][currentLanguage]}
                      <span
                        className={`text-xs ml-1 ${
                          isActive ? "text-white/70" : "opacity-40"
                        }`}
                      >
                        ({count})
                      </span>
                    </button>
                  );
                },
              )}
            </div>

            {/* ── Episode count ── */}
            <div className="flex items-center justify-between px-1 mb-3">
              <span
                className="text-xs uppercase tracking-wider font-medium"
                style={{ color: "var(--color-text)" }}
              >
                {filteredPodcasts.length} {i18n.episodes[currentLanguage]}
              </span>
            </div>

            {/* ── Track List + Player ── */}
            <div
              className="rounded-2xl overflow-hidden border shadow-xl"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Track List */}
              <div
                className="max-h-[400px] overflow-y-auto podcast-scrollbar"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor:
                    "color-mix(in srgb, var(--color-primary) 15%, transparent) transparent",
                }}
              >
                {filteredPodcasts.map((podcast, i) => {
                  const globalIdx = getGlobalIndex(podcast);
                  const isActiveTrack = activeIndex === globalIdx;
                  const isCurrentlyPlaying = isActiveTrack && isPlaying;

                  return (
                    <button
                      key={`${podcast.slug}-${globalIdx}`}
                      onClick={() => playTrack(globalIdx)}
                      className={`
                        w-full flex items-center gap-4 px-5 py-4 text-left
                        transition-all duration-200 group last:border-b-0
                      `}
                      style={{
                        borderBottom: "1px solid var(--color-border)",
                        borderLeft: isActiveTrack
                          ? "3px solid var(--color-secondary)"
                          : "3px solid transparent",
                        paddingLeft: isActiveTrack ? "17px" : "20px",
                        backgroundColor: isActiveTrack
                          ? "color-mix(in srgb, var(--color-secondary) 6%, white)"
                          : undefined,
                      }}
                      onMouseEnter={(e) => {
                        if (!isActiveTrack)
                          e.currentTarget.style.backgroundColor =
                            "var(--color-bg)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActiveTrack)
                          e.currentTarget.style.backgroundColor = "";
                      }}
                    >
                      {/* Track number */}
                      <span
                        className="text-xs font-mono w-5 text-right flex-shrink-0"
                        style={{
                          color: isActiveTrack
                            ? "var(--color-secondary)"
                            : "var(--color-text)",
                          opacity: isActiveTrack ? 1 : 0.6,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Play/Equalizer indicator */}
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                        style={
                          isActiveTrack
                            ? {
                                background:
                                  "linear-gradient(135deg, var(--color-secondary), var(--color-accent))",
                                boxShadow:
                                  "0 2px 12px color-mix(in srgb, var(--color-secondary) 30%, transparent)",
                              }
                            : {
                                backgroundColor: "var(--color-bg)",
                              }
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
                          <Play
                            className="w-3.5 h-3.5 ml-0.5"
                            style={{ color: "var(--color-text)", opacity: 0.4 }}
                          />
                        )}
                      </div>

                      {/* Track info */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-semibold text-sm truncate"
                          style={{
                            color: isActiveTrack
                              ? "var(--color-primary)"
                              : "var(--color-text)",
                          }}
                        >
                          {podcast.title[currentLanguage] ||
                            podcast.title[Language.SPANISH]}
                        </p>
                        {(podcast.description[currentLanguage] ||
                          podcast.description[Language.SPANISH]) && (
                          <p
                            className="text-xs truncate mt-0.5"
                            style={{ color: "var(--color-text)", opacity: 0.8 }}
                          >
                            {podcast.description[currentLanguage] ||
                              podcast.description[Language.SPANISH]}
                          </p>
                        )}
                      </div>

                      {/* Category badge */}
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md flex-shrink-0 hidden sm:inline-block"
                        style={{
                          backgroundColor:
                            podcast.category === "programs"
                              ? "color-mix(in srgb, var(--color-secondary) 10%, white)"
                              : "color-mix(in srgb, var(--color-accent) 10%, white)",
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
                className="px-5 py-5"
                style={{
                  borderTop: "1px solid var(--color-border)",
                  background:
                    "linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%)",
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
                      <span style={{ color: "var(--color-border)" }}>—</span>
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {activePodcast.title[currentLanguage] ||
                          activePodcast.title[Language.SPANISH]}
                        {(() => {
                          const desc =
                            activePodcast.description[currentLanguage] ||
                            activePodcast.description[Language.SPANISH];
                          if (!desc) return null;
                          return (
                            <span
                              className="font-normal"
                              style={{
                                color: "var(--color-text)",
                                opacity: 0.8,
                              }}
                            >
                              {" "}
                              · {desc}
                            </span>
                          );
                        })()}
                      </p>
                    </div>

                    {/* Progress bar */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-[11px] font-mono w-10 text-right tabular-nums"
                        style={{ color: "var(--color-text)" }}
                      >
                        {fmt(currentTime)}
                      </span>
                      <div
                        className="flex-1 h-1.5 rounded-full cursor-pointer group/prog relative"
                        style={{ backgroundColor: "var(--color-border)" }}
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
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full
                              shadow-md opacity-0 group-hover/prog:opacity-100 transition-opacity duration-200"
                            style={{
                              backgroundColor: "var(--color-secondary)",
                            }}
                          />
                        </div>
                      </div>
                      <span
                        className="text-[11px] font-mono w-10 tabular-nums"
                        style={{ color: "var(--color-text)" }}
                      >
                        {fmt(duration)}
                      </span>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => skipTrack("prev")}
                          disabled={
                            activeIndex === null ||
                            filteredPodcasts.indexOf(activePodcast) === 0
                          }
                          className="p-2.5 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-lg"
                          style={{ color: "var(--color-text)", opacity: 0.5 }}
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
                              "0 4px 16px color-mix(in srgb, var(--color-secondary) 30%, transparent)",
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
                            activeIndex === null ||
                            filteredPodcasts.indexOf(activePodcast) ===
                              filteredPodcasts.length - 1
                          }
                          className="p-2.5 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-lg"
                          style={{ color: "var(--color-text)", opacity: 0.5 }}
                          aria-label="Next track"
                        >
                          <SkipForward className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Volume */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={toggleMute}
                          className="p-2 transition-colors rounded-lg"
                          style={{ color: "var(--color-text)", opacity: 0.5 }}
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
                          className="w-20 h-1 rounded-lg appearance-none cursor-pointer accent-[var(--color-secondary)]"
                          style={{ backgroundColor: "var(--color-border)" }}
                          aria-label="Volume"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  /* Empty state — no track selected */
                  <div
                    className="flex items-center justify-center gap-3 py-3"
                    style={{ color: "var(--color-text)", opacity: 0.35 }}
                  >
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
          </>
        )}
      </div>
    </section>
  );
};

export default AudioPlayer;
