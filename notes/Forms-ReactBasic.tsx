import React, { useState } from "react";

const Forms = () => {
	// Forms
	const [name, setName] = useState("");
	const handleSubmit = (event: any) => {
		event.preventDefault();
		alert(`The name you entered was: ${name}`);
	};

	return (
		<>
			{/* Basic form */}
			<form onSubmit={handleSubmit}>
				<label>
					Enter your name:
					<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				</label>
				<input type="submit" />
			</form>
		</>
	);
};

//////////////////////////////////////////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=77pemM2hwbc = 13:53
export function SignUp() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   async function handleSignUp(){
      alert(email + ":" + password);
   }

   return (
      <div>
         <h1>This is the Sign Up page:</h1>
         <form action="">
            <input type="text" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"/>
            <input type="text" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
            <button onClick={() => {handleSignUp()}}>Sign Up</button>
         </form>
      </div>
   )
}