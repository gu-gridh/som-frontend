export function highlight(
  str,
  start,
  end,
  markStart = "<strong>",
  markEnd = "</strong>"
) {
  return (
    str.slice(0, start) +
    markStart +
    str.slice(start, end) +
    markEnd +
    str.slice(end)
  );
}
