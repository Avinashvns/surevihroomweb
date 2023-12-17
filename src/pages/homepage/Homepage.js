import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
      });

    function handler() {
        console.log("Clicked");
        navigate('/login');
    }
    const handleSubmit = (event) => {
        event.preventDefault();    
        // Redirect to your desired page here
        navigate("/login");
      };
    return (
        <div>
            {/* Page Header */}
            <header>
                <h1 style={{ textAlign: 'center' }}>Header</h1>
                <div style={{
                    background: 'red',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    height: "100%",
                    padding: '12px',
                }} >
                    <button href='/login' onClick={handler}>Sign In</button>
                    <Button style={{ background: "white" }} href="/login">Link</Button>
                    <Button onClick={() => {
                        navigate('/login')
                    }}>Click Me</Button>
                </div>


            </header>

            <content>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </content>

            {/* Page Footer */}
            <footer>

            </footer>
        </div >
    );
}