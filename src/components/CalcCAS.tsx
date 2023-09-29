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
      <div>
      <h2 className="text-lg font-semibold mb-2">
        Calcular CAS (Consumo de Ar na Superfície)
      </h2>
      </div>
      <div className='w-full max-w-lg'>
        <div className="md:flex md:items-center text-right my-4">
          <div className="md:w-2/3 mr-2">
            Consumo de Ar (AC - bar):
          </div>
          <div className="">
            <input
              type="number"
              value={AC}
              onChange={(e) => setAC(prv(parseFloat(e.target.value)))}
              className={`border rounded-md p-2 ${
                AC > 0 ? "border-green-500" : "border-red-500"
              }`}
            />
          </div>
        </div>
      <div className="md:flex md:items-center text-right">
        <div className="md:w-2/3 mr-2">
          Volume do Cilindro (V - litros):
        </div>
        <div>
          <input
            type="number"
            value={V}
            onChange={(e) => setV(prv(parseFloat(e.target.value)))}
            className={`border rounded-md p-2 ${
              V > 0 ? "border-green-500" : "border-red-500"
            }`}
          />
        </div>
      </div>
      <div className="md:flex md:items-center text-right my-4">
        <div className="md:w-2/3 mr-2">
          Tempo (t - minutos):
        </div>
        <div>
          <input
            type="number"
            value={t}
            onChange={(e) => setT(prv(parseFloat(e.target.value)))}
            className={`border rounded-md p-2 ${
              t > 0 ? "border-green-500" : "border-red-500"
            }`}
          />
        </div>
      </div>
      <div className="md:flex md:items-center text-right">
        <div className="md:w-2/3 mr-2">
          Pressão absoluta profundidade (P - bar):
        </div>
        <div>
          <input
            type="number"
            value={P}
            onChange={(e) => setP(prv(parseFloat(e.target.value)))}
            className={`border rounded-md p-2 ${
              P > 0 ? "border-green-500" : "border-red-500"
            }`}
          />
        </div>
      </div>
      <div className="text-center my-5">
      <button
        onClick={calculateCAS}
        className={`${
          formOk() ? "bg-green-500" : "bg-gray-500"
        } text-white px-4 py-2 rounded-md`}
      >
        Calcular CAS
      </button>
      </div>
      </div>
      
      {result !== null && (
        <p className="mt-4">
          Consumo de Ar na Superfície (CAS): {result.toFixed(2)} litros/min
        </p>
      )}
    </div>
  );
};

export default CalcCAS;
