export const errorLogger = (text, error) => {
  console.log("====================================");
  console.log(text, error.response.message);
  console.log("====================================");
};
