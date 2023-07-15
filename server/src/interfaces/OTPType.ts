export type  OTPType = {
    email:string,
    otp:  string,
    expiresAt: Date,
}

export type EmailDetails = {
    email: string, 
    subject: string, 
    message: string, 
    duration: number 
 }