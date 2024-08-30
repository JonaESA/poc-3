export interface User {
  applicationUserId?: string;
  userName: string; // not null
  firstName: string;
  lastName: string;
  email: string; // not nul
  isEmailVerified: boolean;
  isBlocked: boolean;
  isEnabled: boolean;
}

export interface ApplicationUserGetListDxRequest {
  loadOptions: string;
}

// fue justo y necesario
export interface UserGetId {
  applicationUserById: ApplicationUserByID;
}

export interface ApplicationUserByID {
  applicationUserId: string;
  userName:          string; // not null
  firstName:         string;
  lastName:          string;
  email:             string; // not null
  isEmailVerified:   boolean;
  isBlocked:         boolean;
  isEnabled:         boolean;
}
