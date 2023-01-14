import axios from "axios";
import {updateStart ,updateSucess ,updateError} from "./userSlice"

 export const updateUser = async (user ,dispatch)=>{
    dispatch(updateStart());
    try{
      const res = await axios.post("http://localhost:8800/api/users/123/update", user);
      dispatch(updateSucess(res.data));
    }catch(err){
        dispatch(updateError());
    }
 } 