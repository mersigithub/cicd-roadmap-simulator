import { useState } from "react";
import { pipelineSteps } from "../data/pipeline";

export default function PipelineSimulator() {
  const [running, setRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [logs, setLogs] = useState([]);

  const sleep = (ms) => new Promise(res => setTimeout(res, ms));

  const runPipeline = async () => {
    setRunning(true);
    setLogs([]);
    setCurrentStep(-1);

    for (let i = 0; i < pipelineSteps.length; i++) {
      setCurrentStep(i);

      const step = pipelineSteps[i];

      for (let log of step.logs) {
        setLogs(prev => [...prev, `[${step.name}] ${log}`]);
        await sleep(600);
      }

      await sleep(800);
    }

    setRunning(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={runPipeline} disabled={running}>
        {running ? "Running Pipeline..." : "Run CI/CD Pipeline"}
      </button>

      {/* PIPELINE VISUAL */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        {pipelineSteps.map((step, i) => (
          <div
            key={step.id}
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid gray",
              background:
                i < currentStep
                  ? "#22c55e"
                  : i === currentStep
                  ? "#3b82f6"
                  : "#1f2937",
              color: "white"
            }}
          >
            {step.name}
            <div style={{ fontSize: 10, opacity: 0.7 }}>
              {step.layer}
            </div>
          </div>
        ))}
      </div>

      {/* LOGS */}
      <div
        style={{
          marginTop: 20,
          background: "#000",
          color: "#0f0",
          padding: 10,
          height: 250,
          overflowY: "auto"
        }}
      >
        {logs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}