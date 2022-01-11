export const loginProccess = async (username, password) => {
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
    message: "all good login",
  };
};
export const signUpProccess = async (username, password, rePassword) => {
  //check credentials
  await callSignUp(username, password);
  let refreshToken = "guest";
  let accessToken = "guest";
  return {
    status: true,
    data: {
      username: username,
      refreshToken: refreshToken,
      accessToken: accessToken,
    },
    message: "all good signUp",
  };
};
export const logoutProccess = async () => {
  let accessToken = "guest";
  await callLogout(accessToken);

  return {
    status: true,
    data: {},
    message: "loged out",
  };
};
const callLogin = async (username, password) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
const callSignUp = async (username, password) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
const callLogout = async (token) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
