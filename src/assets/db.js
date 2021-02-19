import axios from "axios";

const API_BASE = process.env.VUE_APP_API_BASE || "http://localhost:8030";

function apiUrl(endpoint) {
  return `${API_BASE}/${endpoint}`;
}

export async function search(s) {
  const res = await axios.get(apiUrl("search.php"), { params: { s } });
  return res.data;
}

export async function getType(id) {
  const res = await axios.get(apiUrl("type.php"), { params: { type: id } });
  return res.data;
}

export async function getMorpheme(morpheme) {
  const res = await axios.get(apiUrl("morpheme.php"), { params: { morpheme } });
  return res.data;
}
