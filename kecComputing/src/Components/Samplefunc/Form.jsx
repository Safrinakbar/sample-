import React from "react";
import '../../assets/css/Form.css'

const Form= () =>{
    return(
        <footer>
        <div>
            <form>
                Name:<input type="text" name="name" id="name"/>
                Phone number:<input type="number" name="pn" id="pn"/>
                Email Id:<input type="mail" name="email" id="email"/>
                <button type="button" >Submit</button>
            </form>
        </div>
        </footer>
    )
}

export default Form