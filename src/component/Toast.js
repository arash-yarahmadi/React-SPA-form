import { toast } from "react-toastify";



 export const notify = (text , type) => {

    if(type === "success"){
        // toast.success("You Signed in Successfully")
        toast.success(text);
    }else{
        // toast.error("Invalid data")
        toast.error(text);
    }
}
