import React, { useContext, useState } from "react";
import { Link,Navigate} from "react-router-dom";
import axios from "axios";
import { Context, server } from "../index";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // using useContext hook and destrucutring it
  const {isAuthenticated,setIsAuthenticated,loading,setLoading} = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.post(
        `${server}/users/new`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false)
    } catch (error) {
        console.log(error)
      toast.error("error");
      setIsAuthenticated(false);
      setLoading(false)
    }
  };

if(isAuthenticated) return <Navigate to={"/"}/>// if the user isauthenticated then navigate it to home page 
  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={loading} type="submit">Sign Up</button>
          <h4>Or</h4>
          <Link to="/login">Log In</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
