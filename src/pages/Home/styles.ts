import styled from "styled-components";

export const Area = styled.main`
    min-height: 100vh;
    padding: 120px 0px;
    background: #141316;
    color: #FFF;
    

    .container {
        width: 1024px;
        margin: auto
    }

    .global--crypto--stats h1 {
        margin: 0px
    }

    .global--crypto--stats .crypto--stats--area {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 20px 0px;
    }
    .coins--area .top--10--area {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px
    }
    .news--area .news--grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px
    }
`