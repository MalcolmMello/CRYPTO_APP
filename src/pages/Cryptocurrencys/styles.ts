import styled from "styled-components";

export const Cryptocurrencies = styled.main<{theme: string}>`
    min-height: 100vh;
    padding: 120px 0px;
    background: ${props => props.theme === 'light' ? 'hsl(0, 0%, 94%)' : '#141316'};
    color: ${props => props.theme === 'light' ? '#000' : '#fff'};
    transition: all ease 0.2s;

    .container {
        width: 1024px;
        margin: auto;
        .input--area {
            display: flex;
            justify-content: center;
            
            input {
                outline: 0;
                padding: 10px 20px;
                font-size: 14px;
                background: ${props => props.theme === 'light' ? '#FFF' : '#1b1a1d'};
                transition: all ease 0.2s;
                border: 0;
                color: ${props => props.theme === 'light' ? '#000' : '#fff'}
            }
        }
    }

    .coins--area {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        padding: 20px 0px
    }

    @media(max-width: 1024px) {
        .container {
            width: 100%;
            padding: 10px
        }
    }

    @media(max-width: 800px) {
        .coins--area {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media(max-width: 650px) {
        .coins--area {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 510px) {
        .coins--area {
            grid-template-columns: 1fr;
        }
    }

`