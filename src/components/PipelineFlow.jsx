export default function PipelineFlow({ activeStep }) {
  const steps = ["Code", "GitHub", "CI", "Docker", "Deploy"];

  return (
    <div className="flex gap-2 mb-6">
      {steps.map((s, i) => (
        <div
          key={i}
          className={`px-3 py-1 rounded-full text-sm border ${
            activeStep >= i + 1 ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          {s}
        </div>
      ))}
    </div>
  );
}