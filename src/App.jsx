import { useState } from "react";
import "./App.css";
import { steps } from "./data/steps";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <div className="layout">

      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <div className="logo">CI/CD SaaS 🚀</div>

        {steps.map((step, i) => (
          <div
            key={step.id}
            className={`step-item ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            <div className="step-title">{step.title}</div>
            <div className="step-status">
              {i < activeIndex ? "✅ Done" : i === activeIndex ? "🔄 Running" : "⏳ Pending"}
            </div>
          </div>
        ))}
      </div>

      {/* CENTER PIPELINE VISUAL */}
      <div className="center">

        <div className="pipeline-container">

  <svg className="lines">
    {steps.map((_, i) => {
      if (i === steps.length - 1) return null;

      return (
        <line
          key={i}
          x1={i * 140 + 60}
          y1="50"
          x2={(i + 1) * 140 + 60}
          y2="50"
          className={`line ${i < activeIndex ? "done" : ""}`}
        />
      );
    })}
  </svg>

  <div className="pipeline">
    {steps.map((step, i) => (
      <div
        key={step.id}
        className={`node ${
          i < activeIndex
            ? "done"
            : i === activeIndex
            ? "active"
            : ""
        }`}
      >
        {step.short}
      </div>
    ))}
  </div>

</div>

        <div className="center-card">
          <h2>{activeStep.title}</h2>
          <p>{activeStep.description}</p>
        </div>
      </div>

      {/* RIGHT INSPECTOR */}
      <div className="inspector">

        <h3>Step Details</h3>

        <div className="box">
          <h4>Commands</h4>
          <pre>
{activeStep.commands?.map(c => `$ ${c}`).join("\n")}
          </pre>
        </div>

        <div className="box">
          <h4>Explanation</h4>
          <p>{activeStep.details}</p>
        </div>

        <div className="box logs">
          <h4>Logs</h4>
          {activeStep.logs?.map((l, i) => (
            <div key={i} className="log">
              {l}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}