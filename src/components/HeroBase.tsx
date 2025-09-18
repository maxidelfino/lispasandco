import React from "react";
import CTAButtons from "./CTAButtons";
import ScrollIndicator from "./ScrollIndicator";

type BackgroundVariant =
  | "circles"
  | "circlesLarge"
  | "squares"
  | "bars"
  | "mixed"
  | "minimal";

export interface HeroBaseProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitles?: React.ReactNode[];
  descriptions?: React.ReactNode[];
  scrollTargetId: string;
  onDownload?: () => void;
  backgroundVariant?: BackgroundVariant;
  hideSubtitlesOnMobile?: boolean;
  hideDescriptionsOnMobile?: boolean;
}

const renderBackground = (variant: BackgroundVariant = "circles") => {
  switch (variant) {
    case "minimal":
      return null;
    case "circlesLarge":
      return (
        <>
          <div className="absolute top-1/5 left-1/6 w-80 h-80 bg-white/5 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1/5 right-1/6 w-64 h-64 bg-white/10 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-40 h-40 bg-white/5 transform rotate-45 animate-spin"
            style={{ animationDuration: "24s" }}
          ></div>
        </>
      );
    case "squares":
      return (
        <>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-lg rotate-12 animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-lg -rotate-12 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-white/5 rounded-lg animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-lg rotate-12 animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
        </>
      );
    case "bars":
      return (
        <>
          <div className="absolute top-1/4 left-1/4 w-40 h-8 bg-white/10 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-32 h-6 bg-white/5 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-24 h-4 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-36 h-6 bg-white/5 rounded-full animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-28 h-5 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </>
      );
    case "mixed":
      return (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/5 transform rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
        </>
      );
    case "circles":
    default:
      return (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/5 transform rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
        </>
      );
  }
};

const HeroBase: React.FC<HeroBaseProps> = ({
  badge,
  title,
  subtitles = [],
  descriptions = [],
  scrollTargetId,
  onDownload,
  backgroundVariant = "circles",
  hideSubtitlesOnMobile = false,
  hideDescriptionsOnMobile = true,
}) => {
  const scrollToContent = () => {
    const element = document.getElementById(scrollTargetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
        <div className="absolute inset-0 bg-black/20"></div>
        {renderBackground(backgroundVariant)}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 opacity-100 translate-y-0">
        {badge ? (
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mr-2 animate-pulse"></div>
            {badge}
          </div>
        ) : null}

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>

        {subtitles.map((node, idx) => (
          <p
            key={`subtitle-${idx}`}
            className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${
              hideSubtitlesOnMobile ? "hidden lg:block" : ""
            }`}
          >
            {node}
          </p>
        ))}

        {descriptions.map((node, idx) => (
          <p
            key={`desc-${idx}`}
            className={`${
              hideDescriptionsOnMobile ? "hidden lg:block" : ""
            } text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed`}
          >
            {node}
          </p>
        ))}

        <CTAButtons onDownload={onDownload} />
      </div>

      <ScrollIndicator scrollToContent={scrollToContent} />
    </section>
  );
};

export default HeroBase;
