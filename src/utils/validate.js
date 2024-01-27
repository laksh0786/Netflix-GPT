export const  checkValidEmail = (email)=>{
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // console.log(emailRegex.test(email));

    return emailRegex.test(email);

}

export const checkValidPassword = (password)=>{
    const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ ;
    return passwordRegex.test(password);
}

export const checkValidName = (name)=>{
    const nameRegex =/^[A-Za-z][A-Za-z ' -]+([ A-Za-z][A-Za-z ' -]+)*/;
    return nameRegex.test(name);
}