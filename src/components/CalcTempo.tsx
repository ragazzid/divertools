import React, { useState } from 'react';

interface CalcTempoProps {
  onTempoCalculated: (tempo: number) => void;
}

const CalcTempo: React.FC<CalcTempoProps> = ({ onTempoCalculated }) => {
  const [cas, setCas] = useState<number>(0);
  const [ac, setAc] = useState<number>(0);
  const [v, setV] = useState<number>(0);
  const [p, setP] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculateTempo = () => {
    if (cas === 0 || ac === 0 || v === 0 || p === 0) {
      setResult(null);
    } else {
      // Cálculo correto do Tempo (t)
      const calculatedResult = (ac * v) / (cas * p);
      setResult(calculatedResult);
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Calcular Tempo (t)</h2>
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
          Consumo de Ar (AC - bar):
          <input
            type="number"
            value={ac}
            onChange={(e) => setAc(parseFloat(e.target.value))}
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
          Pressão absoluta na profundidade (P - bar):
          <input
            type="number"
            value={p}
            onChange={(e) => setP(parseFloat(e.target.value))}
            className="border rounded-md p-2"
          />
        </label>
      </div>
      <button onClick={calculateTempo} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Calcular Tempo
      </button>
      {result !== null ? (
        <p className="mt-4">
          Tempo (t): {result.toFixed(2)} minutos
        </p>
      ) : (
        <p className="mt-4">Informe os valores CAS, AC, V e P para calcular o Tempo (t).</p>
      )}
    </div>
  );
};

export default CalcTempo;
