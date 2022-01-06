export const loginProccess = async (username, password, rePassword) => {
  //check credentials
  await callLogin(username, password);
  let refreshToken = "guest";
  let accessToken = "guest";
  return {
    status: true,
    data: {
      username: username,
      refreshToken: refreshToken,
      accessToken: accessToken,
    },
    message:"all good"
  };
};
const callLogin = async (username, password) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
