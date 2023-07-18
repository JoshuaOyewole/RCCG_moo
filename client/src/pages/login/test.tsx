import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { countryCodes } from '../../util/types';
import tt from "../../context/countries.json"

/* interface LoginFormData {
    phoneNumber: string;
    password: string;
}

const initialValue = [
    {
        _id: "64b2cc662b94de01f436de5a",
        continent_name: "Europe",
        country_code: "AD",
        country_name: "Andorra",
        continent_code: "EU",
        capital_name: "Andorra la Vella",
        currency_code: "EUR",
        phone_code: "376",
        three_letter_country_code: "AND"
    }
]
 */
const LoginPage: React.FC = () => {
    const [count, setCount] = useState(0)
    const increment = (payload: number) => {
        setCount(prev => prev + payload)
    }
    const decrement = (payload: number) => {
        setCount(prev => prev - payload)
    }

    console.log('Component was re-render ==>');

    return (
        <>
            <h3>{count}</h3>
            <button onClick={()=>increment(5)}>Increment</button>
            <br />
            <button onClick={()=>decrement(2)}>Decrement</button>
        </>
    );
};

export default LoginPage;
