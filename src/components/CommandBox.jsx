export default function CommandBox({ commands }) {
  if (!commands) return null;

  return (
    <div className="bg-black text-green-400 p-4 rounded mt-4">
      {commands.map((cmd, i) => (
        <div key={i}>$ {cmd}</div>
      ))}
    </div>
  );
}