import { useState, useEffect } from 'react'


/* 
Created this Hook to determine if an account is active or not using the user account balance as a parameter since the USER STATUS IS NOT COMING FORM THE API GIVEN 
*/

const useAccountStatus = (accountBalance: string) => {
    const [status, setStatus] = useState<string>("Inactive");

    useEffect(() => {
        if (parseInt(accountBalance) <= 200) setStatus("Blacklisted");
        else if (parseInt(accountBalance) <= 400) setStatus("Inactive");
        else if (parseInt(accountBalance) <= 500) setStatus("Pending");
        else if (parseInt(accountBalance) >= 600) setStatus("Active");
        else setStatus("Inactive")
    }, [accountBalance])



    return [status]
}

export default useAccountStatus