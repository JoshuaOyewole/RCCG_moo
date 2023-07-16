export type MainSectionType = {
  iconClassName?: string
}

export type postType = {
  _id: string;
  creator: {
    id: string,
    name: string,
    profilePicture: string
  },
  createdAt: string,
  photos: string[],
  post_description: string,
  time_posted: string,
}

export type credentialsProps = {
  fname: string,
  lname: string,
  phone: string,
  password: string,
  email: string
}

export type userInfoType = {
  firstname: string,
  lastname: string,
  profilePicture?: string,

}
export type userType = {
  token: string,
  user: userInfoType
}
export type ResetPwdCredentialsProps = {
  password: string,
  email: string,
  otp:string
}