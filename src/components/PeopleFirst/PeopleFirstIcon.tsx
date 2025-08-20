import React from "react";
import {
  Users,
  HeartHandshake,
  BookOpen,
  Lightbulb,
  Globe,
  Handshake,
  Star,
  ThumbsUp,
} from "lucide-react";

// Información tomada y adaptada del PDF LYS-P014-People-First.pdf
const peopleFirstPrinciples = [
  {
    icon: Users,
    title: "Respeto",
  },
  {
    icon: HeartHandshake,
    title: "Empatía",
  },
  {
    icon: BookOpen,
    title: "Desarrollo",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
  },
  {
    icon: Globe,
    title: "Diversidad e Inclusión",
  },
  {
    icon: Handshake,
    title: "Colaboración",
  },
  {
    icon: Star,
    title: "Reconocimiento",
  },
  {
    icon: ThumbsUp,
    title: "Bienestar",
  },
];

const PeopleFirstIcon: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-80">
      {peopleFirstPrinciples.map((principle, index) => {
        const Icon = principle.icon;
        return (
          <div key={index} className="text-center group/icon">
            <div className="relative mb-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center group-hover/icon:scale-110 transition-all duration-300 shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-sm">
              <div className="font-bold text-[var(--color-primary)] mb-1 leading-tight">
                {principle.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleFirstIcon;
