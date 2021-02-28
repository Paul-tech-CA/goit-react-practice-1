import styled from 'styled-components'

export const ProductFormContainer = styled.div`
width: 300px;

label{
margin: 5px 0;
display: inline-block;
}

input, textarea, select {
    width: 100%;
    border-radius: 14px;
    border: 1px solid cornflowerblue;
    outline: none;

}

textarea{
    min-height: 60px;
}

.options{
    display: flex;
    justify-content: center;
}

button {
    background-color: cornflowerblue;
    color: #fff;
    text-transform: uppercase;
    border: 1px solid cornflowerblue;
    border-radius: 7px;
}
`;