
export const isAuthenticated = () => localStorage.getItem("email") !== null;
export const getToken = () => localStorage.getItem("email");
export const login = (email, senha) => {
  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);
};
export const logout = () => {
  localStorage.removeItem("senha");
  localStorage.removeItem("email");
};