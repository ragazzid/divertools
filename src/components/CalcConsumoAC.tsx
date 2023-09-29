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
      Tempo (t - minutos):
    </div>
    <div>
      <input
        type="number"
        value={t}
        onChange={(e) => setT(parseFloat(e.target.value))}
        className={`border rounded-md p-2 ${
          t > 0 ? "border-green-500" : "border-red-500"
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
      onClick={calculateConsumoAC}
      className={`${
        cas > 0 && v > 0 && t > 0 && p > 0 ? "bg-green-500" : "bg-gray-500"
      } text-white px-4 py-2 rounded-md`}
    >
      Calcular Consumo AC
    </button>
    </div>
  </div>
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
