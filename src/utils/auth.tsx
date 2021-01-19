import Cookie from "js-cookie";

export const logIn = (token: string) => {
  return Cookie.set("token", token);
};

export const logOut = () => {
  return Cookie.remove("token");
};
