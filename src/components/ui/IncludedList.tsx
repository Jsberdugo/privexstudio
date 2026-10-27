/** Two-column checklist of what a service includes. */
export default function IncludedList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[11px] w-1.5 h-px bg-[#4A0D1A] shrink-0" />
          <span className="text-[#2D2424]">{item}</span>
        </li>
      ))}
    </ul>
  );
}
