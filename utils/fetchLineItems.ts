export const fetchLineItems = async (sessionId: string) => {
  const res = await fetch(`/api/getSession/${sessionId}`);

  if (!res.ok) return;

  const data = await res.json();
  const products: StripeProduct[] = data.session.data;

  return products;
};
