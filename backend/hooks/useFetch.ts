export const useFetch = async (url: string, options: RequestInit = {}) => {
  // Convert relative URLs to absolute when running on the server
  if (typeof window === "undefined" && url.startsWith("/")) {
    const base =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
      "http://localhost:3000";
    url = new URL(url, base).toString();
  }

  const res = await fetch(url, {
    cache: "no-store",
    method: "GET",
    ...options,
  });

  if (!res.ok) {
    // Try to read a helpful message from the response body
    let errMessage = "";
    try {
      const errText = await res.text();
      if (errText) {
        const parsed = JSON.parse(errText);
        errMessage = parsed?.error || parsed?.message || errText;
      }
    } catch (e) {
      // ignore parse errors
    }

    throw new Error(`Request failed with status ${res.status}${errMessage ? `: ${errMessage}` : ""}`);
  }

  // Read as text first to avoid JSON crash
  const text = await res.text();

  if (!text) {
    return {};
  }

  return JSON.parse(text);
};
