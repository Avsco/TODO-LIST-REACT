import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate =  useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        if(data.email === 'scesi@gmail.com' && data.password === '12345678') {
            localStorage.setItem('login_react', 'true')
            navigate('/todo')
        } else { 
            alert('Login incorrecto');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Login</button>
        </form>
    )
}