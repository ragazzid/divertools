import React, { useState } from "react";
import { prv } from "../helpers/numbers";

const CalcCAS: React.FC = () => {
  const [AC, setAC] = useState<number>(0);
  const [V, setV] = useState<number>(0);
  const [t, setT] = useState<number>(0);
  const [P, setP] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  function formOk() {
    return AC && V && t && P && AC > 0 && V > 0 && t > 0 && P > 0;
  }
  const calculateCAS = () => {
    // Implemente a lógica de cálculo para CAS aqui
    if (!formOk()) {
      setResult(null); // Defina como null se algum valor for zero
    } else {
      const calculatedResult = (AC * V) / (t * P);
      setResult(calculatedResult);
    }
  };

  

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">
        Calcular CAS (Consumo de Ar na Superfície)
      </h2>
      <div className="mb-4">
        <label>
          Consumo de Ar (AC - bar):
          <input
            type="number"
            value={AC}
            onChange={(e) => setAC(prv(parseFloat(e.target.value)))}
            className={`border rounded-md p-2 ${
              AC > 0 ? "border-green-500" : "border-red-500"
            }`}
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Volume do Cilindro (V - litros):
          <input
            type="number"
            value={V}
            onChange={(e) => setV(prv(parseFloat(e.target.value)))}
            className={`border rounded-md p-2 ${
              V > 0 ? "border-green-500" : "border-red-500"
            }`}
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Tempo (t - minutos):
          <input
            type="number"
            value={t}
            onChange={(e) => setT(prv(parseFloat(e.target.value)))}
            className={`border rounded-md p-2 ${
              t > 0 ? "border-green-500" : "border-red-500"
            }`}
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Pressão absoluta na profundidade (P - bar):
          <input
            type="number"
            value={P}
            onChange={(e) => setP(prv(parseFloat(e.target.value)))}
            className={`border rounded-md p-2 ${
              P > 0 ? "border-green-500" : "border-red-500"
            }`}
          />
        </label>
      </div>
      <button
        onClick={calculateCAS}
        className={`${
          formOk() ? "bg-green-500" : "bg-gray-500"
        } text-white px-4 py-2 rounded-md`}
      >
        Calcular CAS
      </button>
      {result !== null && (
        <p className="mt-4">
          Consumo de Ar na Superfície (CAS): {result.toFixed(2)} litros/min
        </p>
      )}
    </div>
  );
};

export default CalcCAS;
