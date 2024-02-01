export type MainSectionType = {
  iconClassName?: string
}

export type postType = {
  id?: string;
  creator?: {
    id: string,
    name: string,
    profilePicture: string
  },
  createdAt?: string,
  photos: string[],
  post_description: string,
  time_posted: string,
}

export type signupCredentialsProps = {
  fname: string,
  lname: string,
  phone: string,
  gender: string,
  anniversary: string,
  dob?: string,
  //dob?: string | number | readonly string[] | undefined,
  department?: string,
  isMarried?: boolean,
  password: string,
  email: string,
  profilePicture?: string
}

export type userInfoType = {
  id?: string,
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
  otp: string
}

export type countryCodes = {
  _id: string,
  continent_name: string,
  country_code: string,
  country_name: string,
  continent_code: string,
  capital_name: string,
  currency_code: string,
  phone_code: string,
  three_letter_country_code: string,
}