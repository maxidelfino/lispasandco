import type React from "react"
import { Target, TrendingUp, Users, CheckSquare } from "lucide-react"

const WhatIsProjectFocusGraphic: React.FC = () => {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Central Hub */}
      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl z-10">
        <div className="text-center">
          <Target className="w-6 h-6 mx-auto mb-1" />
          <div className="text-xs">
            PROJECT
            <br />
            FOCUS™
          </div>
        </div>
      </div>

      {/* Surrounding Elements */}
      <div className="absolute w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white -top-8 left-1/2 transform -translate-x-1/2 shadow-lg">
        <div className="text-center">
          <TrendingUp className="w-5 h-5 mx-auto mb-1" />
          <div className="text-xs">ESTRATEGIA</div>
        </div>
      </div>

      <div className="absolute w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white top-1/2 -right-8 transform -translate-y-1/2 shadow-lg">
        <div className="text-center">
          <CheckSquare className="w-5 h-5 mx-auto mb-1" />
          <div className="text-xs">SELECCIÓN</div>
        </div>
      </div>

      <div className="absolute w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white -bottom-8 left-1/2 transform -translate-x-1/2 shadow-lg">
        <div className="text-center">
          <Users className="w-5 h-5 mx-auto mb-1" />
          <div className="text-xs">COLABORACIÓN</div>
        </div>
      </div>

      <div className="absolute w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white top-1/2 -left-8 transform -translate-y-1/2 shadow-lg">
        <div className="text-center">
          <Target className="w-5 h-5 mx-auto mb-1" />
          <div className="text-xs">VALOR</div>
        </div>
      </div>

      {/* Connection Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 border-2 border-dashed border-purple-300 rounded-full opacity-50"></div>
      </div>
    </div>
  )
}

export default WhatIsProjectFocusGraphic
