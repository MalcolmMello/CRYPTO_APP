import styled from "styled-components";

export const Navbar = styled.header<{menu: boolean, theme: string}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    width: 100%;
    position: fixed;
    background: ${props => props.theme === 'light' ? 'hsl(0, 0%, 98%)' : '#1b1a1d'};
    color: ${props => props.theme === 'light' ? '#000' : '#fff'};

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1024px;
        margin: auto
    }

    .logo--area {
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
            height: 35px;
            width: 35px;
            margin-right: 20px
        }
        h1 {
            font-size: 25px;
            font-weight: 300
        }
    }

    .change--theme {
        cursor: pointer
    }

    .menu--buttons {
        display: none;
        cursor: pointer
    }

    nav {
        display: flex;
        align-items: center
    }
    nav .menu--theme--area{
        display: flex;
        img {
            height: 20px;
            width: 20px;
            margin-right: 20px
        }
    }
    .nav--area {
        display: flex;
        list-style: none;
        padding: 0px 20px;
        
        li a {
            text-decoration: none;
            color: ${props => props.theme === 'light' ? '#000' : '#fff'};
            display: flex;
            align-items: flex-end;
            margin-left: 30px;
            img {
                height: 30px;
                width: 30px;
                margin-right: 30px
            }
            p {
                height: 100%;
                margin: 0px;
            }
        }
        li img{
            height: 20px;
            width: 20px;
            margin-left: 30px;
            cursor: pointer
        }
    }

    @media(max-width: 1024px) {
        .container {
            width: 100%;
            padding: 10px
        }
    }
    
    @media(max-width: 768px) {
        .container {
            .menu--buttons {
                display: block
            }
            nav {
                .nav--area {
                    position: absolute;
                    width: ${props => props.menu ? '70vw' : '0px'};
                    right: 0px;
                    top: 90px;
                    height: calc(100vh - 90px);
                    background: ${props => props.theme === 'light' ? 'hsl(0, 0%, 98%)' : '#1b1a1d'};
                    margin: auto;
                    flex-direction: column;
                    transition: all ease 0.2s;
                    padding: 0px;
                    li {
                        display: ${props => props.menu ? 'block' : 'none'};
                        margin: 0px;
                        margin-bottom: 30px;
                        height: auto;
                        font-weight: bold;
                        padding: 10px 20px;
                    }
                }
            }
        }
    }
`