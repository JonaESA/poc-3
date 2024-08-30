import { User } from "./user";

export interface DxResponse {
  applicationUserListDx: ApplicationUserListDx;
}

export interface ApplicationUserListDx {
  data:       User[];
  totalCount: number;
  groupCount: number;
  summary:    null;
}
