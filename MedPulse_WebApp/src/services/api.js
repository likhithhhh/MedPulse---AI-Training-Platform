// MedPulse_WebApp/src/services/api.js
const API_BASE = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || `Request failed: ${res.status}`);
  }

  // If response is empty, avoid JSON parse errors
  if (res.status === 204) return null;

  return res.json();
}

export const api = {
  get(path, options) {
    return request(path, { ...options, method: "GET" });
  },
  post(path, body, options) {
    return request(path, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
  },
  put(path, body, options) {
    return request(path, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    });
  },
  del(path, options) {
    return request(path, { ...options, method: "DELETE" });
  },
};
