const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function getHealth() {
  const res = await fetch(`${API_URL}/health`);

  if (!res.ok) {
    throw new Error("Backend not reachable");
  }

  return res.json();
}
