const Form = ({ userData, onChange, onSubmit })  => {
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
            <input
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={onChange}
                required
            />
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={userData.confirmPassword}
                onChange={onChange}
                required
            />
            <button type="submit">Register</button>   
        </form>
    );
};

export default Form;
