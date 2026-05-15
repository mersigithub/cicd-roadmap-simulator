import "./background.css";

export default function AnimatedBackground() {
  const steps = ["Code", "GitHub", "CI", "Docker", "Deploy"];

  return (
    <div className="bg-container">
      <div className="bg-flow">
        {steps.concat(steps).map((step, i) => (
          <div key={i} className="bg-node">
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}