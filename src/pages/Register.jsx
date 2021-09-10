import styled from "styled-components"
import { mobile } from "../Responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(235, 52, 52, 0.7), rgba(235, 52, 101, 0.5));
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    ${mobile({ width: '80%' })}

`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    ${mobile({ minWidth: '80%' })}
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background: linear-gradient(rgba(235, 52, 52, 0.7), rgba(235, 52, 101, 0.7));
    color: white;
    cursor: pointer;
    font-weight: bold;
`;

const Register = () => {
    return (
        <Container>
             <Wrapper>
                <Title>CREATEAN AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                </Form>
                <Button>CREATE</Button>
            </Wrapper>
        </Container>
    )
}

export default Register
