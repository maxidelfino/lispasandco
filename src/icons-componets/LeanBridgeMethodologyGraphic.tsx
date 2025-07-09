import type React from "react"

const LeanBridgeMethodologyGraphic: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h4 className="text-center font-semibold text-gray-800 mb-6">Cuatro módulos sincronizados</h4>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Módulo 1 */}
        <div className="bg-white p-6 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              1
            </div>
            <h5 className="font-semibold text-gray-800">Gestión Visual</h5>
          </div>
          <p className="text-gray-600 text-sm">
            Implementación de tableros y herramientas visuales para monitoreo en tiempo real
          </p>
        </div>

        {/* Módulo 2 */}
        <div className="bg-white p-6 rounded-lg border-2 border-green-200 hover:border-green-400 transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              2
            </div>
            <h5 className="font-semibold text-gray-800">Resolución de Problemas</h5>
          </div>
          <p className="text-gray-600 text-sm">
            Metodologías estructuradas para identificar y resolver problemas en origen
          </p>
        </div>

        {/* Módulo 3 */}
        <div className="bg-white p-6 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              3
            </div>
            <h5 className="font-semibold text-gray-800">Mejora Continua</h5>
          </div>
          <p className="text-gray-600 text-sm">Cultura de mejora continua integrada en las operaciones diarias</p>
        </div>

        {/* Módulo 4 */}
        <div className="bg-white p-6 rounded-lg border-2 border-orange-200 hover:border-orange-400 transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              4
            </div>
            <h5 className="font-semibold text-gray-800">Liderazgo Operativo</h5>
          </div>
          <p className="text-gray-600 text-sm">
            Desarrollo de capacidades de liderazgo en todos los niveles organizacionales
          </p>
        </div>
      </div>

      {/* Conexiones visuales */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-gray-500">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Módulos sincronizados para máximo impacto</p>
      </div>
    </div>
  )
}

export default LeanBridgeMethodologyGraphic
