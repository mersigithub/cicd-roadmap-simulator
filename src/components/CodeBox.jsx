export default function CodeBox({ code }) {
  if (!code) return null;

  return (
    <pre className="bg-gray-900 text-white p-4 rounded mt-4 overflow-auto">
      <code>{code}</code>
    </pre>
  );
}