interface User {
  _id: string;
  email: string;
  password: string;

  get(param1: string, param2, param3: { getters: boolean }): string;
}

export default User;
