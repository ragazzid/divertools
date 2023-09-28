import React, { useState } from "react";

interface CalcConsumoACProps {
  onConsumoACCalculated: (consumoAC: number) => void;
}

const CalcConsumoAC: React.FC<CalcConsumoACProps> = ({
  onConsumoACCalculated,
}) => {
  const [cas, setCas] = useState<number>(0);
  const [v, setV] = useState<number>(12);
  const [t, setT] = useState<number>(0);
  const [p, setP] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculateConsumoAC = () => {
    console.log([cas, v, t, p]);
    if (cas === 0 || v === 0 || t === 0 || p === 0) {
      setResult(null);
      console.log("Diego");
    } else {
      // Cálculo correto do Consumo de Ar (AC)
      const calculatedResult = (t * p * cas) / v;
      setResult(calculatedResult);
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">
        Calcular Consumo de Ar (AC)
      </h2>
      <div className="mb-4">
        <label>
          Consumo de Ar na Superfície (CAS - litros/min):
          <input
            type="number"
            value={cas}
            onChange={(e) => setCas(parseFloat(e.target.value))}
            className="border rounded-md p-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Volume do Cilindro (V - litros):
          <input
            type="number"
            value={v}
            onChange={(e) => setV(parseFloat(e.target.value))}
            className="border rounded-md p-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Tempo (t - minutos):
          <input
            type="number"
            value={t}
            onChange={(e) => setT(parseFloat(e.target.value))}
            className="border rounded-md p-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Pressão absoluta na profundidade (P - bar):
          <input
            type="number"
            value={p}
            onChange={(e) => setP(parseFloat(e.target.value))}
            className="border rounded-md p-2"
          />
        </label>
      </div>
      <button
        onClick={calculateConsumoAC}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Calcular Consumo AC
      </button>
      {result !== null ? (
        <p className="mt-4">Consumo de Ar (AC): {result.toFixed(2)} bar</p>
      ) : (
        <p className="mt-4">
          Informe os valores CAS, V, t e P para calcular o Consumo de Ar (AC).
        </p>
      )}
    </div>
  );
};

export default CalcConsumoAC;
