export function formatTotalTime(t) {
  const h = Math.floor(t / 3600)
    .toString()
    .padStart(2, "0");
  t %= 3600;
  const m = Math.floor(t / 60)
    .toString()
    .padStart(2, "0");
  const s = (t % 60).toString().padStart(2, "0");

  return `${h > 0 ? `${h.padStart()}:${m}:${s}` : `${m}:${s}`}`;
}
