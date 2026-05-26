function SectionCard({ title, items }) {
  return (
    <div className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-cyan-400 pl-3">
        {title}
      </h2>

      <div className="space-y-2 text-gray-300">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default SectionCard;
