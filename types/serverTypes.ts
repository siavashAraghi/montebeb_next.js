export interface SettingsQuery {
  id: number;
  template_name: string;
  create_time: string;
  active: boolean;
}

export interface UserQuery {
  id: number;
  username: string;
  email: string;
  create_time: string;
  active: boolean;
}
