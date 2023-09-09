export type SMSType = {
    phone: number,
    message: string,
    name:string,
}

export type SMSDetailsType = {
    email: string,
    phone: number,
    message: string,
}

export type mailOptionsType = {
    from?: string,
    to?: string,
    subject: string,
    html?: string,
    email?: string,
    message?: string,
    phone?: number
}