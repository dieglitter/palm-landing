import React from 'react'
import styled from 'styled-components'

const NewsletterStyled = styled.div` 
padding: 16px;
color: white;
border-radius: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url("https://res.cloudinary.com/dieglitter/image/upload/v1607456328/taby/palm_2_1_n5kjrc.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 1/span 2;
p{
    font-size:32px;
    font-weight: bold;
    text-align:center;
    margin-bottom: 20px;
}

form{
    display: flex;
    flex-direction: row;

    input{
        background-color: transparent; 
        width: 240px;
        color: black;
        border: 1px solid white;
        height: 24px;
        margin-right: 8px;
        padding: 4px;
        &::placeholder{
            color: white;
            text-transform: uppercase;
            padding: 4px;
            }
        }

        button{
            background-color: #FF465C;
            border: 1px solid #FF465C;
            padding: 4px;
        }
}

@media(max-width:900px){
    color: blue;
}
`

function Newsletter() {
    return (
        <NewsletterStyled>
            <p>La realidad es borrada mientras cruzamos a través de ella.</p>
            <form action="">
                <input type="text" placeholder="DESCARGA LA PRIMERA PARTE"/>
                <button>SUSCRÍBETE</button>
            </form>
        </NewsletterStyled>
    )
}

export default Newsletter