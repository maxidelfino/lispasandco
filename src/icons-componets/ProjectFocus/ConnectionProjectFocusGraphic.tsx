import type React from "react"
import { Compass, Target, ArrowRight, CheckSquare, ArrowDown } from "lucide-react"

const ConnectionProjectFocusGraphic: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Connection Flow */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0">
        {/* StratBridge */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl mb-4 transform transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <Compass className="w-10 h-10 md:w-8 md:h-8 mx-auto mb-1" />
              <div className="text-sm md:text-xs font-bold">
                STRAT
                <br />
                BRIDGE™
              </div>
            </div>
          </div>
          <div className="text-center max-w-xs">
            <h4 className="font-bold text-gray-800 mb-2 text-lg md:text-base">
              Planificación Estratégica
            </h4>
            <p className="text-sm md:text-xs text-gray-600">
              Define el rumbo
            </p>
          </div>
        </div>

        {/* Arrow - Desktop/Tablet: Horizontal, Mobile: Vertical */}
        <div className="flex flex-col items-center md:flex-row">
          {/* Mobile Arrow (Vertical) */}
          <div className="flex flex-col items-center md:hidden">
            <ArrowDown className="w-8 h-8 text-purple-500 mb-2" />
            <div className="text-sm text-gray-600 text-center">
              Extensión
              <br />
              Natural
            </div>
          </div>
          
          {/* Desktop/Tablet Arrow (Horizontal) */}
          <div className="hidden md:flex flex-col items-center">
            <ArrowRight className="w-8 h-8 text-purple-500 mb-2" />
            <div className="text-xs text-gray-600 text-center">
              Extensión
              <br />
              Natural
            </div>
          </div>
        </div>

        {/* ProjectFocus */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-28 md:h-28 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl mb-4 transform transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <Target className="w-10 h-10 md:w-8 md:h-8 mx-auto mb-1" />
              <div className="text-sm md:text-xs font-bold">
                PROJECT
                <br />
                FOCUS™
              </div>
            </div>
          </div>
          <div className="text-center max-w-xs">
            <h4 className="font-bold text-gray-800 mb-2 text-lg md:text-base">
              Selección de Proyectos
            </h4>
            <p className="text-sm md:text-xs text-gray-600">
              Elige qué barcos navegar
            </p>
          </div>
        </div>

        {/* Arrow - Desktop/Tablet: Horizontal, Mobile: Vertical */}
        <div className="flex flex-col items-center md:flex-row">
          {/* Mobile Arrow (Vertical) */}
          <div className="flex flex-col items-center md:hidden">
            <ArrowDown className="w-8 h-8 text-indigo-500 mb-2" />
            <div className="text-sm text-gray-600 text-center">
              Resultado
            </div>
          </div>
          
          {/* Desktop/Tablet Arrow (Horizontal) */}
          <div className="hidden md:flex flex-col items-center">
            <ArrowRight className="w-8 h-8 text-indigo-500 mb-2" />
            <div className="text-xs text-gray-600 text-center">
              Resultado
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-28 md:h-28 bg-gradient-to-br from-indigo-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-xl mb-4 transform transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <CheckSquare className="w-10 h-10 md:w-8 md:h-8 mx-auto mb-1" />
              <div className="text-sm md:text-xs font-bold">
                PORTAFOLIO
                <br />
                EJECUTABLE
              </div>
            </div>
          </div>
          <div className="text-center max-w-xs">
            <h4 className="font-bold text-gray-800 mb-2 text-lg md:text-base">
              Proyectos Alineados
            </h4>
            <p className="text-sm md:text-xs text-gray-600">
              Validados y sostenidos
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectionProjectFocusGraphic