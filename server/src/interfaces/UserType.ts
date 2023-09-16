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
    marriageAnniversary:Date,
    email:string,
    dob:Date,
    department?: string,
    gender:string,
    password:string,
    profilePicture?:string,
}