export const fetchData = async (
  url: string,
  options: RequestInit = {}
) => {
  if (typeof window === "undefined" && url.startsWith("/")) {
    const base =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

    url = new URL(url, base).toString();
  }

  try {
    alert("fetchData called with URL: " + url); // Debugging line
    const res = await fetch(url, {
      cache: "no-store",
      method: "GET",
      ...options,
    });
    console.log("Fetch response:", res); // Debugging line
    if (!res.ok) {
      console.error("Fetch failed:", url, res.status);
      return null; // ✅ DO NOT THROW
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch error:", url, err);
    return null; // ✅ DO NOT THROW
  }
};
