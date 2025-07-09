import type React from "react"
import { Eye, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

const LeanBridgeVisualizationGraphic: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <p className="text-gray-700">
          Permite compartir información clave, alinear expectativas y conectar planes con acciones diarias
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Detección en tiempo real */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <h5 className="font-semibold text-gray-800">Detección de desvíos</h5>
          </div>
          <p className="text-gray-600 text-sm mb-4">Identificación inmediata de problemas y desvíos operativos</p>

          {/* Simulación de dashboard */}
          <div className="bg-gray-50 p-4 rounded border">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-600">Producción Línea A</span>
              <span className="text-xs text-red-600 font-bold">-15% Meta</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </div>
        </div>

        {/* Corrección inmediata */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h5 className="font-semibold text-gray-800">Corrección inmediata</h5>
          </div>
          <p className="text-gray-600 text-sm mb-4">Acciones correctivas aplicadas en tiempo real</p>

          {/* Simulación de acciones */}
          <div className="space-y-2">
            <div className="bg-green-50 p-2 rounded text-xs">
              <span className="font-medium text-green-800">Acción:</span>
              <span className="text-green-700"> Ajuste de velocidad línea</span>
            </div>
            <div className="bg-blue-50 p-2 rounded text-xs">
              <span className="font-medium text-blue-800">Responsable:</span>
              <span className="text-blue-700"> Operador Turno A</span>
            </div>
          </div>
        </div>

        {/* Visualización de resultados */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <h5 className="font-semibold text-gray-800">Visualización permanente</h5>
          </div>
          <p className="text-gray-600 text-sm mb-4">Resultados visibles para todos los equipos</p>

          {/* Simulación de dashboard visual */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-green-100 p-2 rounded text-center">
              <div className="text-lg font-bold text-green-600">95%</div>
              <div className="text-xs text-green-700">Calidad</div>
            </div>
            <div className="bg-yellow-100 p-2 rounded text-center">
              <div className="text-lg font-bold text-yellow-600">87%</div>
              <div className="text-xs text-yellow-700">Eficiencia</div>
            </div>
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="text-lg font-bold text-blue-600">92%</div>
              <div className="text-xs text-blue-700">Cumplimiento</div>
            </div>
          </div>
        </div>

        {/* Alineación de equipos */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <h5 className="font-semibold text-gray-800">Alineación de equipos</h5>
          </div>
          <p className="text-gray-600 text-sm mb-4">Mayor claridad en roles, responsabilidades y objetivos</p>

          {/* Simulación de roles */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-700">Operadores: Ejecución y reporte</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-700">Supervisores: Mejora continua</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-700">Gerencia: Decisiones estratégicas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeanBridgeVisualizationGraphic
