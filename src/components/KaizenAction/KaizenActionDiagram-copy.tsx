"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Target, BarChart3, Search, TrendingUp, Shield } from "lucide-react"

interface DMACNode {
  id: string
  label: string
  icon: React.ComponentType<any>
  color: string
  description: string
  angle: number
}

const KaizenActionDiagram: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nodes: DMACNode[] = [
    {
      id: "definir",
      label: "Definir",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      description: "Selección y definición precisa del problema con límites claros",
      angle: 0,
    },
    {
      id: "medir",
      label: "Medir",
      icon: BarChart3,
      color: "from-green-500 to-green-600",
      description: "Recolección y validación de información del problema",
      angle: 72,
    },
    {
      id: "analizar",
      label: "Analizar",
      icon: Search,
      color: "from-yellow-500 to-yellow-600",
      description: "Análisis profundo colaborativo con enfoque técnico",
      angle: 144,
    },
    {
      id: "mejorar",
      label: "Mejorar",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      description: "Generación y evaluación de ideas de solución",
      angle: 216,
    },
    {
      id: "controlar",
      label: "Controlar",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      description: "Seguimiento y sostenibilidad con controles visuales",
      angle: 288,
    },
  ]

  const radius = 140
  const centerX = 200
  const centerY = 200

  const getNodePosition = (angle: number) => {
    const radian = (angle * Math.PI) / 180
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY + radius * Math.sin(radian),
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative">
        <svg width="400" height="400" className="overflow-visible">
          {/* Connection lines */}
          {nodes.map((node, index) => {
            const pos = getNodePosition(node.angle)
            const nextNode = nodes[(index + 1) % nodes.length]
            const nextPos = getNodePosition(nextNode.angle)

            return (
              <line
                key={`line-${node.id}`}
                x1={pos.x}
                y1={pos.y}
                x2={nextPos.x}
                y2={nextPos.y}
                stroke="var(--color-border)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="opacity-30"
              />
            )
          })}

          {/* Center circle */}
          <circle cx={centerX} cy={centerY} r="60" fill="url(#centerGradient)" className="drop-shadow-lg" />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-secondary)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
            {nodes.map((node) => (
              <linearGradient key={`grad-${node.id}`} id={`gradient-${node.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={node.color.split(" ")[0].replace("from-", "").replace("-500", "")} />
                <stop offset="100%" stopColor={node.color.split(" ")[2].replace("to-", "").replace("-600", "")} />
              </linearGradient>
            ))}
          </defs>

          {/* Node circles */}
          {nodes.map((node) => {
            const pos = getNodePosition(node.angle)
            const Icon = node.icon
            const isHovered = hoveredNode === node.id
            const scale = isHovered && !isMobile ? 1.2 : 1

            return (
              <g key={node.id}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="35"
                  fill={`url(#gradient-${node.id})`}
                  className={`cursor-pointer transition-all duration-300 drop-shadow-lg ${
                    isHovered && !isMobile ? "drop-shadow-2xl" : ""
                  }`}
                  transform={`scale(${scale})`}
                  transformOrigin={`${pos.x} ${pos.y}`}
                  onMouseEnter={() => !isMobile && setHoveredNode(node.id)}
                  onMouseLeave={() => !isMobile && setHoveredNode(null)}
                />

                {/* Icon */}
                <foreignObject
                  x={pos.x - 12}
                  y={pos.y - 12}
                  width="24"
                  height="24"
                  className="pointer-events-none"
                  transform={`scale(${scale})`}
                  transformOrigin={`${pos.x} ${pos.y}`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </foreignObject>
              </g>
            )
          })}

          {/* Center text */}
          <text x={centerX} y={centerY - 5} textAnchor="middle" className="fill-white font-bold text-sm">
            KAIZEN
          </text>
          <text x={centerX} y={centerY + 10} textAnchor="middle" className="fill-white font-bold text-sm">
            ACTION™
          </text>
        </svg>

        {/* Node labels */}
        {nodes.map((node) => {
          const pos = getNodePosition(node.angle)
          const labelOffset = 55
          const labelPos = {
            x: centerX + (radius + labelOffset) * Math.cos((node.angle * Math.PI) / 180),
            y: centerY + (radius + labelOffset) * Math.sin((node.angle * Math.PI) / 180),
          }

          return (
            <div
              key={`label-${node.id}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
              style={{
                left: labelPos.x,
                top: labelPos.y,
              }}
            >
              <div className="font-bold text-[var(--color-primary)] text-sm">{node.label}</div>
            </div>
          )
        })}

        {/* Tooltip for desktop */}
        {hoveredNode && !isMobile && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-xl shadow-2xl p-4 border border-[var(--color-border)] max-w-xs z-10">
            <div className="text-center">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">
                {nodes.find((n) => n.id === hoveredNode)?.label}
              </h4>
              <p className="text-sm text-[var(--color-text)]">{nodes.find((n) => n.id === hoveredNode)?.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile legend */}
      {isMobile && (
        <div className="mt-8 w-full max-w-md">
          <h4 className="font-bold text-[var(--color-primary)] mb-4 text-center">Metodología DMAIC</h4>
          <div className="space-y-3">
            {nodes.map((node) => {
              const Icon = node.icon
              return (
                <div
                  key={node.id}
                  className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm border border-[var(--color-border)]"
                >
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${node.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[var(--color-primary)] text-sm">{node.label}</h5>
                    <p className="text-xs text-[var(--color-text)] mt-1">{node.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default KaizenActionDiagram
