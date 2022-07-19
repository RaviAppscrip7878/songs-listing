export const getAuthTokenFromLocal = () => {
  const token = localStorage.getItem("token");
  return token;
};
