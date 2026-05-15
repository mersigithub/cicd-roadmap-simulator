export default function StepCard({ step, onClick }) {
  return (
    <div
      onClick={() => onClick(step)}
      className="border rounded-xl p-4 cursor-pointer hover:bg-gray-100 transition"
    >
      <h2 className="text-lg font-bold">{step.title}</h2>
      <p className="text-sm text-gray-600">{step.description}</p>
    </div>
  );
}