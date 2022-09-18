export const validate = (data,type) => {

    const errors ={};


    // Email && ReGex
    if(!data.email){
        errors.email = "Email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)) {

        errors.email = "Email address invalid "

    }else{
        delete errors.email
    }

    // password
    if(!data.password){
        errors.password = "password is required"

    }else if(data.password.length <6){
        errors.password = "password need to be 6 character or more"

    }else{
        delete errors.password
    }


    if(type === "SignUp"){

        // Name
        if(!data.name.trim()){
        errors.name = "username required"
        }else{
        delete errors.name
        }

        // confirmPassword
        if(!data.confirmPassword){
        errors.confirmPassword = "confirm the password"

        }else if(data.confirmPassword !== data.password){
        errors.confirmPassword = "password do not match"

        }else{
        delete errors.confirmPassword
        }

        // isAccepted
        if(data.isAccepted){
        delete errors.isAccepted

        }else{
        errors.isAccepted = "Accept our regulation"
        }
    }

    return errors;

}