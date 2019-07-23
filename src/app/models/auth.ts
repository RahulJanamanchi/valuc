export interface Credentials {
  userName: string;
  userType: string;
  password: string;
}

export interface User {
  userName: string;
  userType: string;
  token?: string;
}
