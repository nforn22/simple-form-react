import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Form = ({ userData, onChange, onSubmit })  => {
        const [showPassword, setShowPassword] = useState(false);
        const [showConfirmPassword, setShowConfirmPassword] = useState(false);

        const isMismatch =
        userData.password &&
        userData.confirmPassword &&
        userData.password !== userData.confirmPassword;

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Name"
                name="name"
                value={userData.name}
                onChange={onChange}
                required
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={onChange}
                required
            />
            <div className="password-container">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={onChange}
                required
                className={isMismatch ? "error" : ""}
            />
            <span
                className="toggle-eye"
                onClick={() => setShowPassword((prev) => !prev)}
            >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
        </div>

        <div className="password-container">
            <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={userData.confirmPassword}
                onChange={onChange}
                required
                className={isMismatch ? "error" : ""}
            />
            <span
                className="toggle-eye"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
        </div>

            <button type="submit">Register</button>   
        </form>
    );
};

export default Form;
