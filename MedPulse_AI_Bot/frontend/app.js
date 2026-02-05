const API_BASE = "https://medpulse-backend.onrender.com";


function appendMessage(role, text) {
  const bubble = document.createElement("div");
  bubble.className = `p-3 rounded-xl max-w-xl ${role === "user" ? "bg-blue-600 ml-auto" : "bg-gray-700"}`;
  bubble.innerText = text;
  document.getElementById("chat").appendChild(bubble);
}

async function sendMessage() {
  const prompt = document.getElementById("prompt").value;
  const user_id = document.getElementById("userSelect").value;
  const files = document.getElementById("fileInput").files;

  if (!prompt) return;

  appendMessage("user", prompt);

  const formData = new FormData();
  formData.append("user_id", user_id);
  formData.append("prompt", prompt);
  for (let file of files) {
    formData.append("files", file);
  }

  try {
    const res = await fetch(`${API_BASE}/chat`, {
      method: "POST",
      body: formData
    });

    if (!res.ok) {
      throw new Error("Server Error");
    }

    const data = await res.json();
    appendMessage("assistant", data.reply);
  } catch (err) {
    appendMessage("assistant", "⚠️ Error contacting server. Try again in a few seconds.");
  }

  document.getElementById("prompt").value = "";
}
