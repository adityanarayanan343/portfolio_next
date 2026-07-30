export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 text-center">
      <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
