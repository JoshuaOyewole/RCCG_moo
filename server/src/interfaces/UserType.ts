/* export type  = {
    id: string,
    name: string,
    phone_no: number,
    profilePicture: string
}
 */
export interface UserType {
    _id?:string,
    firstname: string,
    lastname: string,
    phone: string,
    isMarried?:boolean,
    marriageAnniversary:String,
    email:string,
    dob:String,
    department?: string,
    gender:string,
    password:string,
    profilePicture?:string,
}

export type birthdayMembersProps = {
    fullnames: String,
    dob: String,
    phone: String,
    email: String
}[]