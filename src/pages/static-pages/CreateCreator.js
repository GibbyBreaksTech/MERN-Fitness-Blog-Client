import { useState, useEffect } from 'react';
import axios from 'axios';

// styled
import styled from 'styled-components';
import { StyledButton } from '../../Styled/Styled';

export default function CreateUser({role, confirmAdmin}) {

	const [ creator, setCreator ] = useState("");
	const [ twitter, setTwitter] = useState("");
	const [ linkedin, setLinkedin ] = useState("");
	const [ instagram, setInstagram ] = useState("");
	const [ other, setOther ] = useState("");
	const [ bio, setBio ] = useState("");
	const [ youtube, setYoutube ] = useState("");
    const [ avatar, setAvatar ] = useState("");
    const [ authorUsername, setAuthorUsername ] = useState("");
    const [ location, setLocation ] = useState("");

    useEffect(() => {
        confirmAdmin()
    }, [confirmAdmin])

    function registerCreator() {
        axios.post(`${process.env.REACT_APP_ADD_CREATOR_URL}`, {
            creator: creator,
            authorUsername: authorUsername,
            avatar: avatar,
            twitter: twitter,
            linkedin: linkedin,
            instagram: instagram,
            youtube: youtube,
            other: other,
            bio: bio,
            location: location,
        })
        .then(function(response) {
            if(response.data !== "Creator Registered!"){
                alert("Server Error - Creator was not created")
            } else {
                alert('Creator registered!');
            }
        })
    }


	function unauthorized() {
        alert("You do not have permissions to do that!")
    }

	return (
		<StyledRegister>
			<h1>Register Creator</h1>
			<div className="form-wrapper">
                <div className="left-container">
                    <label>Creator Name:</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setCreator(event.target.value);
                        }}
                    />
                    <label>Username:</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setAuthorUsername(event.target.value);
                        }}
                    />
                    <label>Bio:</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setBio(event.target.value);
                        }}
                    />
                    <label>Location:</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setLocation(event.target.value);
                        }}
                    />
                    <label>Avatar:</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setAvatar(event.target.value);
                        }}
                    />
                </div>
                <div className="right-container">
                    <label>Twitter:</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setTwitter(event.target.value);
                        }}
                    />
                    <label>Youtube</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setYoutube(event.target.value);
                        }}
                    />
                    <label>Instagram:</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setInstagram(event.target.value);
                        }}
                    />
                    <label>Linkedin:</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setLinkedin(event.target.value);
                        }}
                    />
                    <label>Other:</label>
                    <input 
                        type="text" 
                        onChange={(event) => {
                            setOther(event.target.value);
                        }}
                    />
                </div>
            </div>
            {
                role === process.env.REACT_APP_ADMIN_SECRET ? (
                    <StyledButton type="submit" onClick={()=>{registerCreator();}}>Register Creator</StyledButton>
                ) : (    
                    <StyledButton type="submit" onClick={()=>{unauthorized();}}>Register Creator</StyledButton>
                )
            }
		</StyledRegister>
	)
}

const StyledRegister = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: white;
height: 80vh;
width: 100%;
max-width: 875px;
margin: 20px auto;
border-radius: 12px;
	@media (max-width: 1050px){
		width: 98%;
	}
	h1 {
		font-size: 3em;
		color: #0f4d92;
        margin-bottom: 40px;
    }
	.form-wrapper {
            display: flex;
            width: 50%;
            align-items: center;
            justify-content: space-between;
            @media (max-width: 1150px){
                font-size: 1.2em;
            }
            label {
                font-weight: bold;
                @media (max-width: 1150px){
                    font-size: 1.2em;
                }
            }
            input {
                width: 200px;
                margin-bottom: 20px;
                border-radius: 4px;
                @media (max-width: 1150px){
                    width: 50%;
                }
                @media (max-width: 750px){
                    width: 70%;
                }
				@media (max-width: 550px){
                    width: 90%;
                }
            }
            .right-container, .left-container {
                display: flex;
                flex-direction: column;
            } 
        }

`;