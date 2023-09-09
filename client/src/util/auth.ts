
export function getToken(): string | null {
    return localStorage.getItem('token');
}
export function getUserDatas(): { firstname: string | null, lastname: string | null, token: string | null, user_id: string | null, profilePicture: string | null } {
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    const user_id = localStorage.getItem('user_id');
    const token = getToken();
    const profilePicture = localStorage.getItem('profilePicture');

    return { firstname, lastname, user_id, token, profilePicture }
}

export function isAuthenticated(): boolean {
    const token = getToken();//Get Token from localStorage
    return !!token; // Return true if the token exists, false otherwise
}




/* 
export function getUserDatas() {

    let user = localStorage.getItem('user');
    var parsedUser: userType;

    if (typeof user === 'string') {
        parsedUser = JSON.parse(user) // ok
    }
    let token = getToken();
    let profilePicture = localStorage.getItem('profilePicture');

    console.log(parsedUser);
    
    return { firstname: parsedUser.firstname, token, profilePicture }
}
*/