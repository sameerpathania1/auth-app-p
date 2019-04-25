export function setUser(data) {
  window.localStorage("user", JSON.stringify(data));
}

export function getUser() {
  return JSON.parse(window.localStorage.getItem("user"));
}
