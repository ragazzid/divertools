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
    <div>
    <h2 className="text-lg font-semibold mb-2">Calcular Tempo (t)</h2>
    </div>
    <div className='w-full max-w-lg'>
  <div className="md:flex md:items-center text-right my-4">
    <div className="md:w-2/3 mr-2">
      Consumo de Ar na Superfície (CAS - litros/min):
    </div>
    <div>
      <input
        type="number"
        value={cas}
        onChange={(e) => setCas(parseFloat(e.target.value))}
        className={`border rounded-md p-2 ${
          cas > 0 ? "border-green-500" : "border-red-500"
        }`}
      />
    </div>
  </div>
  <div className="md:flex md:items-center text-right my-4">
    <div className="md:w-2/3 mr-2">
      Consumo de Ar (AC - bar):
    </div>
    <div>
      <input
        type="number"
        value={ac}
        onChange={(e) => setAc(parseFloat(e.target.value))}
        className={`border rounded-md p-2 ${
          ac > 0 ? "border-green-500" : "border-red-500"
        }`}
      />
    </div>
  </div>
  <div className="md:flex md:items-center text-right my-4">
    <div className="md:w-2/3 mr-2">
      Volume do Cilindro (V - litros):
    </div>
    <div>
      <input
        type="number"
        value={v}
        onChange={(e) => setV(parseFloat(e.target.value))}
        className={`border rounded-md p-2 ${
          v > 0 ? "border-green-500" : "border-red-500"
        }`}
      />
    </div>
  </div>
  <div className="md:flex md:items-center text-right my-4">
    <div className="md:w-2/3 mr-2">
      Pressão absoluta na profundidade (P - bar):
    </div>
    <div>
      <input
        type="number"
        value={p}
        onChange={(e) => setP(parseFloat(e.target.value))}
        className={`border rounded-md p-2 ${
          p > 0 ? "border-green-500" : "border-red-500"
        }`}
      />
    </div>
  </div>
  <div className="text-center my-5">
    <button
      onClick={calculateTempo}
      className={`${
        cas > 0 && ac > 0 && v > 0 && p > 0 ? "bg-green-500" : "bg-gray-500"
      } text-white px-4 py-2 rounded-md`}
    >
      Calcular Tempo
    </button></div>
  </div>
  {result !== null ? (
    <p className="mt-4">
      Tempo (t): {result.toFixed(2)} minutos
    </p>
  ) : (
    <p className="mt-4">
      Informe os valores CAS, AC, V e P para calcular o Tempo (t).
    </p>
  )}
</div>

  );
};

export default CalcTempo;
