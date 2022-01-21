import axios from "axios";
export const loginProccess = async (username, password) => {
  if (checkCredentials(username, password)) {
    const result = await callLogin(username, password);
    if (result.status) {
      return {
        status: true,
        data: {
          username: username,
          refreshToken: result.refreshToken,
          accessToken: result.accessToken,
        },
        message: "all good login",
      };
    }
    return {
      status: false,
      message: result.message,
    };
  }
};
const checkCredentials = (username, password) => {
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  let res = usernameRegex.exec(username);
  let valid = !!res;
  res = usernameRegex.exec(password);
  valid = valid && !!res;
  return valid && password.length > 6 && username.length > 6;
};
export const signUpProccess = async (username, password, rePassword) => {
  if (password === rePassword && checkCredentials(username, password)) {
    const result = await callSignUp(username, password);
    return result.status
      ? {
          status: result.status,
        }
      : {
          status: result.status,
          message: result.message,
        };
  }
  return {
    status: false,
    message: "username and password must have 6 characters at least",
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
  try {
    const response = await axios.post("http://localhost:8000/auth/login", {
      username: username,
      password: password,
    });
    console.log("res status: ", response.status, response.statusText);
    return {
      status: true,
      refreshToken: response.data.refreshToken,
      accessToken: response.data.accessToken,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.message,
    };
  }
};
const callSignUp = async (username, password) => {
  try {
    await axios.post("http://localhost:8000/auth/register", {
      username: username,
      password: password,
    });
    return {
      status: true,
    };
  } catch (e) {
    return {
      status: false,
      message: e.response.data.message,
    };
  }
};
const callLogout = async (token) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
