export function ComparisonSummary({ result }) {
  const { count, title1, title2 } = result;
  if (!(count && title1 && title2))
    return;
  return <p className="mx-5 text-center">
    You can get <strong>{count}x</strong> <em>{title1}</em> for about the same price as a single <em>{title2}</em>
  </p>;
}
