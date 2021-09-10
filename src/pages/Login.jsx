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
    width: 30%;
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
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
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

const Link = styled.a`
    margin: 20px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    display: flex;
`;

const Login = () => {
    return (
        <Container>
           <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                </Form>
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD!</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Wrapper>
        </Container>
    )
}

export default Login
