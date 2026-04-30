import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AudioLines,
  BookOpen,
  Headphones,
  Mic,
  Pause,
  Play,
  Radio,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import type { Podcast, PodcastCategory } from "../types/podcast";

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
    [Language.SPANISH]: "Casos",
    [Language.ENGLISH]: "Cases",
    [Language.PORTUGUESE]: "Casos",
  },
};

const i18n = {
  sectionEyebrow: {
    [Language.SPANISH]: "Podcast",
    [Language.ENGLISH]: "Podcast",
    [Language.PORTUGUESE]: "Podcast",
  },
  sectionTitle: {
    [Language.SPANISH]: "Voces de la transformación",
    [Language.ENGLISH]: "Voices of transformation",
    [Language.PORTUGUESE]: "Vozes da transformação",
  },
  sectionSubtitle: {
    [Language.SPANISH]:
      "Conversaciones, programas y casos detrás de la excelencia operacional.",
    [Language.ENGLISH]:
      "Conversations, programs and cases behind operational excellence.",
    [Language.PORTUGUESE]:
      "Conversas, programas e casos por trás da excelência operacional.",
  },
  nowPlaying: {
    [Language.SPANISH]: "Reproduciendo",
    [Language.ENGLISH]: "Now playing",
    [Language.PORTUGUESE]: "Reproduzindo",
  },
  selectTrack: {
    [Language.SPANISH]: "Elegí un episodio para empezar",
    [Language.ENGLISH]: "Pick an episode to start",
    [Language.PORTUGUESE]: "Escolha um episódio para começar",
  },
  episodes: {
    [Language.SPANISH]: "episodios",
    [Language.ENGLISH]: "episodes",
    [Language.PORTUGUESE]: "episódios",
  },
  episodeList: {
    [Language.SPANISH]: "Episodios",
    [Language.ENGLISH]: "Episodes",
    [Language.PORTUGUESE]: "Episódios",
  },
  emptyTitle: {
    [Language.SPANISH]: "Próximamente",
    [Language.ENGLISH]: "Coming soon",
    [Language.PORTUGUESE]: "Em breve",
  },
  emptyMessage: {
    [Language.SPANISH]:
      "Estamos preparando nuevos episodios en este idioma. Volvé pronto.",
    [Language.ENGLISH]:
      "We're preparing new episodes in this language. Check back soon.",
    [Language.PORTUGUESE]:
      "Estamos preparando novos episódios neste idioma. Volte em breve.",
  },
};

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const fmt = (seconds: number): string => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
};

const getTitle = (podcast: Podcast, language: Language) =>
  podcast.title[language] || podcast.title[Language.SPANISH];

const getDescription = (podcast: Podcast, language: Language) =>
  podcast.description[language] || podcast.description[Language.SPANISH];

const Equalizer: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cx("flex h-3.5 items-end gap-[2px]", className)} aria-hidden>
    <span className="w-[3px] rounded-full bg-current animate-eq-1" />
    <span className="w-[3px] rounded-full bg-current animate-eq-2" />
    <span className="w-[3px] rounded-full bg-current animate-eq-3" />
  </div>
);

const ArtworkTile: React.FC<{
  episodeNumber: number;
  category: PodcastCategory;
  size?: "sm" | "lg";
  isPlaying?: boolean;
}> = ({ episodeNumber, category, size = "sm", isPlaying = false }) => {
  const isProgram = category === "programs";

  return (
    <div
      className={cx(
        "relative shrink-0 overflow-hidden rounded-2xl shadow-sm",
        "flex items-center justify-center font-sans font-bold tracking-tight tabular-nums text-white",
        size === "lg"
          ? "h-24 w-24 text-4xl sm:h-28 sm:w-28 sm:text-5xl"
          : "h-12 w-12 text-lg"
      )}
      style={{
        background: isProgram
          ? "linear-gradient(135deg, var(--color-secondary), color-mix(in srgb, var(--color-secondary) 62%, var(--color-accent)))"
          : "linear-gradient(135deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 68%, var(--color-accent)))",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(110% 80% at 0% 0%, rgba(255,255,255,0.45), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-4 -right-4 rounded-full border border-white/30"
        style={{ width: "72%", height: "72%" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-1 -right-1 rounded-full border border-white/20"
        style={{ width: "42%", height: "42%" }}
      />
      <span className="relative leading-none">
        {String(episodeNumber).padStart(2, "0")}
      </span>
      {isPlaying && size === "lg" && (
        <div className="absolute bottom-2 right-2 rounded-full bg-white/90 p-1 text-[var(--color-primary)] shadow-md">
          <Equalizer className="h-2.5" />
        </div>
      )}
    </div>
  );
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

  const availablePodcasts = useMemo(
    () =>
      podcasts
        .filter((podcast) => podcast.audio[currentLanguage] !== null)
        .sort((a, b) => a.episodeNumber - b.episodeNumber),
    [podcasts, currentLanguage]
  );

  const filteredPodcasts = useMemo(() => {
    if (category === "all") return availablePodcasts;
    return availablePodcasts.filter((podcast) => podcast.category === category);
  }, [availablePodcasts, category]);

  const activePodcast = activeIndex !== null ? podcasts[activeIndex] : null;
  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

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

  useEffect(() => {
    const audio = audioRef.current;
    setActiveIndex(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setCategory("all");

    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
    }
  }, [currentLanguage]);

  const playTrack = useCallback(
    (globalIndex: number) => {
      const audio = audioRef.current;
      const podcast = podcasts[globalIndex];
      if (!audio || !podcast) return;

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
        return;
      }

      setActiveIndex(globalIndex);
      setCurrentTime(0);
      setDuration(0);
      audio.src = src;
      audio.load();
      audio.play().catch(() => {});
      setIsPlaying(true);
    },
    [activeIndex, currentLanguage, isPlaying, podcasts]
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => {
      const currentGlobalIndex = activeIndexRef.current;
      if (currentGlobalIndex === null) return;

      const currentItem = podcasts[currentGlobalIndex];
      const currentFilteredIndex = filteredPodcasts.indexOf(currentItem);

      if (
        currentFilteredIndex !== -1 &&
        currentFilteredIndex < filteredPodcasts.length - 1
      ) {
        const nextItem = filteredPodcasts[currentFilteredIndex + 1];
        playTrack(podcasts.indexOf(nextItem));
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [filteredPodcasts, playTrack, podcasts]);

  const togglePlayPause = useCallback(() => {
    if (activeIndex === null) {
      const firstPodcast = filteredPodcasts[0];
      if (firstPodcast) playTrack(podcasts.indexOf(firstPodcast));
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activeIndex, filteredPodcasts, isPlaying, playTrack, podcasts]);

  const skipTrack = (direction: "prev" | "next") => {
    if (activeIndex === null || !activePodcast) return;

    const currentFilteredIndex = filteredPodcasts.indexOf(activePodcast);
    if (currentFilteredIndex === -1) return;

    const nextFilteredIndex =
      direction === "next" ? currentFilteredIndex + 1 : currentFilteredIndex - 1;

    if (nextFilteredIndex < 0 || nextFilteredIndex >= filteredPodcasts.length) {
      return;
    }

    playTrack(podcasts.indexOf(filteredPodcasts[nextFilteredIndex]));
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextVolume = Number(event.target.value);
    const audio = audioRef.current;

    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);
    if (audio) audio.volume = nextVolume;
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      const restoredVolume = volume || 0.5;
      audio.volume = restoredVolume;
      setVolume(restoredVolume);
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const canGoPrevious =
    activePodcast !== null && filteredPodcasts.indexOf(activePodcast) > 0;
  const canGoNext =
    activePodcast !== null &&
    filteredPodcasts.indexOf(activePodcast) < filteredPodcasts.length - 1;

  return (
    <section
      id="podcast-player"
      className="relative overflow-hidden px-4 py-12 sm:py-16 lg:py-20"
      style={{ background: "var(--color-bg)" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-36 top-0 h-[28rem] w-[28rem] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: "var(--color-secondary)" }}
        />
        <div
          className="absolute -bottom-44 -left-24 h-[24rem] w-[24rem] rounded-full opacity-[0.1] blur-3xl"
          style={{ background: "var(--color-accent)" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <header className="mb-8 sm:mb-10">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-md"
            style={{
              background: "color-mix(in srgb, var(--color-surface) 78%, white)",
              borderColor: "var(--color-border)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: "var(--color-accent)" }}
            />
            <Mic
              className="h-3.5 w-3.5"
              style={{ color: "var(--color-accent)" }}
            />
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--color-primary)" }}
            >
              LYSPAS & CO {i18n.sectionEyebrow[currentLanguage]}
            </span>
          </div>

          <h2
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-balance"
            style={{ color: "var(--color-primary)" }}
          >
            {i18n.sectionTitle[currentLanguage]}
          </h2>

          <p
            className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--color-text)", opacity: 0.74 }}
          >
            {i18n.sectionSubtitle[currentLanguage]}
          </p>
        </header>

        {availablePodcasts.length === 0 ? (
          <div
            className="rounded-3xl border px-6 py-14 text-center shadow-sm sm:py-16"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  animation: "soft-ping 3s ease-out infinite",
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 45%, transparent), transparent 70%)",
                }}
              />
              <span
                className="relative flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  animation: "soft-pulse 4s ease-in-out infinite",
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-secondary) 14%, white), color-mix(in srgb, var(--color-accent) 16%, white))",
                }}
              >
                <Headphones
                  className="h-9 w-9"
                  style={{ color: "var(--color-secondary)" }}
                />
              </span>
            </div>
            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {i18n.emptyTitle[currentLanguage]}
            </h3>
            <p
              className="mx-auto mt-3 max-w-md leading-relaxed"
              style={{ color: "var(--color-text)", opacity: 0.7 }}
            >
              {i18n.emptyMessage[currentLanguage]}
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div
                className="grid grid-cols-3 rounded-2xl border p-1 sm:inline-grid"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                {(["all", "programs", "caseStudies"] as CategoryFilter[]).map(
                  (cat) => {
                    const count =
                      cat === "all"
                        ? availablePodcasts.length
                        : availablePodcasts.filter(
                            (podcast) => podcast.category === cat
                          ).length;
                    const isActive = category === cat;

                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={cx(
                          "inline-flex min-w-0 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all sm:text-sm",
                          isActive ? "text-white shadow-md" : "hover:opacity-80"
                        )}
                        style={
                          isActive
                            ? {
                                background:
                                  "linear-gradient(135deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 58%, var(--color-secondary)))",
                              }
                            : { color: "var(--color-text)" }
                        }
                        aria-pressed={isActive}
                      >
                        {cat === "programs" && (
                          <Radio className="hidden h-3.5 w-3.5 sm:block" />
                        )}
                        {cat === "caseStudies" && (
                          <BookOpen className="hidden h-3.5 w-3.5 sm:block" />
                        )}
                        <span className="truncate">
                          {categoryLabels[cat][currentLanguage]}
                        </span>
                        <span className="font-mono text-[10px] opacity-70 tabular-nums">
                          {count}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>

              <p
                className="text-xs font-semibold uppercase tracking-[0.16em] tabular-nums"
                style={{ color: "var(--color-text)", opacity: 0.62 }}
              >
                {String(filteredPodcasts.length).padStart(2, "0")} {" "}
                {i18n.episodes[currentLanguage]}
              </p>
            </div>

            <div className="mt-6 relative">
              <div
                aria-hidden
                className="absolute inset-x-6 -top-3 h-16 rounded-full opacity-[0.12] blur-3xl"
                style={{ background: "var(--color-accent)" }}
              />
              {activePodcast ? (
                <article
                  className="relative overflow-hidden rounded-3xl border shadow-xl"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-secondary), var(--color-accent))",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
                    style={{
                      background:
                        activePodcast.category === "programs"
                          ? "var(--color-secondary)"
                          : "var(--color-accent)",
                    }}
                  />

                  <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
                    <ArtworkTile
                      episodeNumber={activePodcast.episodeNumber}
                      category={activePodcast.category}
                      size="lg"
                      isPlaying={isPlaying}
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="inline-flex h-1.5 w-1.5 rounded-full animate-pulse"
                          style={{ background: "var(--color-accent)" }}
                        />
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: "var(--color-accent)" }}
                        >
                          {i18n.nowPlaying[currentLanguage]}
                        </span>
                        <span
                          className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          style={{
                            color: "var(--color-primary)",
                            borderColor: "var(--color-border)",
                            background:
                              "color-mix(in srgb, var(--color-bg) 70%, var(--color-surface))",
                          }}
                        >
                          {activePodcast.category === "programs" ? (
                            <Radio className="h-2.5 w-2.5" />
                          ) : (
                            <BookOpen className="h-2.5 w-2.5" />
                          )}
                          {categoryLabels[activePodcast.category][currentLanguage]}
                        </span>
                      </div>

                      <h3
                        className="mt-2 text-2xl font-bold leading-tight text-balance sm:text-3xl"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {getTitle(activePodcast, currentLanguage)}
                      </h3>

                      {getDescription(activePodcast, currentLanguage) && (
                        <p
                          className="mt-1.5 line-clamp-2 text-sm"
                          style={{ color: "var(--color-text)", opacity: 0.72 }}
                        >
                          {getDescription(activePodcast, currentLanguage)}
                        </p>
                      )}

                      <div className="mt-5">
                        <input
                          type="range"
                          min={0}
                          max={duration || 100}
                          step={0.1}
                          value={currentTime}
                          onChange={handleProgressChange}
                          className="w-full cursor-pointer accent-[var(--color-accent)]"
                          aria-label="Audio progress"
                        />
                        <div
                          className="mt-1.5 flex justify-between font-mono text-[11px] tabular-nums"
                          style={{ color: "var(--color-text)", opacity: 0.62 }}
                        >
                          <span>{fmt(currentTime)}</span>
                          <span>-{fmt(Math.max(0, duration - currentTime))}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => skipTrack("prev")}
                            disabled={!canGoPrevious}
                            className="h-10 w-10 rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-25"
                            style={{ color: "var(--color-text)" }}
                            aria-label="Previous track"
                          >
                            <SkipBack className="mx-auto h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={togglePlayPause}
                            className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform active:scale-95"
                            style={{
                              background:
                                "linear-gradient(135deg, var(--color-secondary), var(--color-accent))",
                              boxShadow:
                                "0 12px 32px -14px color-mix(in srgb, var(--color-secondary) 70%, transparent)",
                            }}
                            aria-label={isPlaying ? "Pause" : "Play"}
                          >
                            {isPlaying ? (
                              <Pause className="h-5 w-5" />
                            ) : (
                              <Play className="ml-0.5 h-5 w-5" />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => skipTrack("next")}
                            disabled={!canGoNext}
                            className="h-10 w-10 rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-25"
                            style={{ color: "var(--color-text)" }}
                            aria-label="Next track"
                          >
                            <SkipForward className="mx-auto h-4 w-4" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={toggleMute}
                            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[var(--color-bg)]"
                            style={{ color: "var(--color-text)" }}
                            aria-label={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? (
                              <VolumeX className="h-4 w-4" />
                            ) : (
                              <Volume2 className="h-4 w-4" />
                            )}
                          </button>
                          <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="hidden w-24 cursor-pointer accent-[var(--color-accent)] sm:block"
                            aria-label="Volume"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-1 w-full" style={{ background: "var(--color-border)" }}>
                    <div
                      className="h-full transition-[width] duration-150"
                      style={{
                        width: `${progressPct}%`,
                        background:
                          "linear-gradient(90deg, var(--color-secondary), var(--color-accent))",
                      }}
                    />
                  </div>
                </article>
              ) : (
                <button
                  type="button"
                  onClick={togglePlayPause}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border p-5 text-left shadow-sm transition-all hover:shadow-lg sm:p-6"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-secondary), var(--color-accent))",
                    }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-10 blur-3xl"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-transform group-hover:scale-105 group-active:scale-95 sm:h-16 sm:w-16"
                    style={{ background: "var(--color-primary)" }}
                  >
                    <Play className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {i18n.nowPlaying[currentLanguage]}
                    </span>
                    <span
                      className="mt-1 truncate text-xl font-bold sm:text-2xl"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {i18n.selectTrack[currentLanguage]}
                    </span>
                  </span>
                  <AudioLines
                    className="ml-auto hidden h-5 w-5 transition-colors sm:block"
                    style={{ color: "var(--color-text)", opacity: 0.5 }}
                  />
                </button>
              )}
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center gap-2 px-1">
                <h3
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-text)", opacity: 0.62 }}
                >
                  {i18n.episodeList[currentLanguage]}
                </h3>
                <span
                  className="h-px flex-1"
                  style={{ background: "var(--color-border)" }}
                />
              </div>

              <div
                className="overflow-hidden rounded-2xl border shadow-sm"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <ul className="max-h-[28rem] divide-y overflow-y-auto podcast-scrollbar" role="list">
                  {filteredPodcasts.map((podcast) => {
                    const globalIndex = podcasts.indexOf(podcast);
                    const isActiveTrack = activeIndex === globalIndex;
                    const isCurrentlyPlaying = isActiveTrack && isPlaying;

                    return (
                      <li key={`${podcast.slug}-${globalIndex}`}>
                        <button
                          type="button"
                          onClick={() => playTrack(globalIndex)}
                          className="group flex w-full items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-[var(--color-bg)] sm:gap-4 sm:px-5 sm:py-4"
                          style={{
                            background: isActiveTrack
                              ? "color-mix(in srgb, var(--color-accent) 8%, var(--color-surface))"
                              : undefined,
                            borderColor: "var(--color-border)",
                          }}
                          aria-pressed={isActiveTrack}
                        >
                          <div className="relative">
                            <ArtworkTile
                              episodeNumber={podcast.episodeNumber}
                              category={podcast.category}
                              size="sm"
                            />
                            <span
                              className={cx(
                                "absolute inset-0 flex items-center justify-center rounded-2xl bg-black/55 text-white transition-opacity",
                                isActiveTrack
                                  ? "opacity-100"
                                  : "opacity-0 group-hover:opacity-100"
                              )}
                              aria-hidden
                            >
                              {isCurrentlyPlaying ? (
                                <Pause className="h-4 w-4" />
                              ) : (
                                <Play className="ml-0.5 h-4 w-4" />
                              )}
                            </span>
                          </div>

                          <div className="min-w-0 flex-1">
                            <p
                              className="truncate text-sm font-semibold sm:text-[15px]"
                              style={{
                                color: isActiveTrack
                                  ? "var(--color-secondary)"
                                  : "var(--color-primary)",
                              }}
                            >
                              {getTitle(podcast, currentLanguage)}
                            </p>
                            {getDescription(podcast, currentLanguage) && (
                              <p
                                className="mt-0.5 truncate text-xs sm:text-sm"
                                style={{ color: "var(--color-text)", opacity: 0.7 }}
                              >
                                {getDescription(podcast, currentLanguage)}
                              </p>
                            )}
                          </div>

                          <div className="flex shrink-0 items-center gap-2">
                            {isCurrentlyPlaying ? (
                              <span
                                className="flex h-8 w-8 items-center justify-center rounded-full"
                                style={{
                                  color: "var(--color-accent)",
                                  background:
                                    "color-mix(in srgb, var(--color-accent) 13%, white)",
                                }}
                              >
                                <Equalizer className="h-3" />
                              </span>
                            ) : (
                              <span
                                className="hidden rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider sm:inline-flex"
                                style={{
                                  color:
                                    podcast.category === "programs"
                                      ? "var(--color-secondary)"
                                      : "var(--color-accent)",
                                  background:
                                    podcast.category === "programs"
                                      ? "color-mix(in srgb, var(--color-secondary) 10%, white)"
                                      : "color-mix(in srgb, var(--color-accent) 12%, white)",
                                }}
                              >
                                {categoryLabels[podcast.category][currentLanguage]}
                              </span>
                            )}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
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
