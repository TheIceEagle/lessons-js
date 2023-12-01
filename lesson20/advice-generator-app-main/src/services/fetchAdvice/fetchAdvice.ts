type AdviceBody = {
  slip: {
    slip_id: number;
    advice: string;
  };
};

async function fetchAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  if (!res.ok) {
    await Promise.reject(
      new Error(`advice fetch error: ${res.status} - ${res.statusText}`),
    );
  }

  const json: AdviceBody = await res.json();

  return json.slip.advice;
}

export default fetchAdvice;
