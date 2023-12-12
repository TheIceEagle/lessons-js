const THOUSAND = 1_000;
const TEN_THOUSANDS = 10_000;
const MILLION = 1_000_000;
const TEN_MILLIONS = 10_000_000;

function formatNumber(num: number) {
  if (num < TEN_THOUSANDS) {
    return `${num}`;
  }

  if (num < TEN_MILLIONS) {
    return `${Math.floor(num / THOUSAND)}k`;
  }

  return `${Math.floor(num / MILLION)}M`;
}

export default formatNumber;
