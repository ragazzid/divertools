import { useState } from "react";
import CalcCAS from "./../components/CalcCAS";
import CalcTempo from "./../components/CalcTempo";
import CalcConsumoAC from "./../components/CalcConsumoAC";

const ConsumoArCalculator = () => {
  const [calculationType, setCalculationType] = useState("CAS");

  const handleCalculationTypeChange = (e) => {
    setCalculationType(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Consumo de Ar</h1>
      <div className="mb-4">
        <label>
          Escolha o que deseja calcular:
          <select
            value={calculationType}
            onChange={handleCalculationTypeChange}
            className="border rounded-md p-2"
          >
            <option value="CAS">Consumo de Ar na Superfície (CAS)</option>
            <option value="t">Tempo (t)</option>
            <option value="ConsumoAC">Consumo AC</option>
          </select>
        </label>
      </div>
      {calculationType === "CAS" && <CalcCAS />}
      {calculationType === "t" && <CalcTempo />}
      {calculationType === "ConsumoAC" && <CalcConsumoAC />}
    </div>
  );
};

export default ConsumoArCalculator;
