const getDateMonth = () => {
    //Get TODAY's date
    let cur_day = new Date().getDate();
    let cur_month = new Date().getMonth() + 1;
    let cur_mont = cur_month < 10 ? `0${cur_month}` : cur_month;
    let dob = `${cur_mont}-${cur_day}`;

    return dob;
}


export { getDateMonth }