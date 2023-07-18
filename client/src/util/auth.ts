
export function getToken(): string | null {
    return localStorage.getItem('token');
}
export function getUserDatas(): {firstname:string| null, lastname:string| null, token:string| null, user_id:string| null}  {
   const firstname =  localStorage.getItem('firstname');
   const lastname =  localStorage.getItem('lastname');
   const user_id =  localStorage.getItem('user_id');
   const token =  localStorage.getItem('token');

   return {firstname,lastname,user_id,token}
}

export function isAuthenticated(): boolean {
    const token = getToken();//Get Token from localStorage
    return !!token; // Return true if the token exists, false otherwise
}