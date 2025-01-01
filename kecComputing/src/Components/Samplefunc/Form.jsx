import React from "react";
import '../../assets/css/Form.css';

const Form = () => {
    return (
        <footer>
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" id="name" placeholder="Enter your name" />
                    </label>
                    <label>
                        Phone Number:
                        <input type="number" name="pn" id="pn" placeholder="Enter your phone number" />
                    </label>
                    <label>
                        Email ID:
                        <input type="email" name="email" id="email" placeholder="Enter your email" />
                    </label>
                    <button type="button">Submit</button>
                </form>
            </div>
        </footer>
    );
};

export default Form;
