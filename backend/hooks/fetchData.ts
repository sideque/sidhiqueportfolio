// backend/hooks/fetchData.ts

export const fetchData = async (
  url: string,
  options: RequestInit = {}
) => {
  // Convert relative URL to absolute on server
  if (typeof window === "undefined" && url.startsWith("/")) {
    const base =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

    url = new URL(url, base).toString();
  }

  const res = await fetch(url, {
    cache: "no-store",
    method: "GET",
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Fetch failed (${res.status}): ${text || res.statusText}`
    );
  }

  return res.json();
};
