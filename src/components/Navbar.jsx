import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { mobile } from '../Responsive'
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    margin-bottom: 25px; 
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display:"none" })}

`
const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width:"50px" })}

`
const Center = styled.div`
    flex: 1;
    text-align: center;
    `
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize:"24px" })}

`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: black;
    ${mobile({ fontSize:"12px", marginLeft: "10px" })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: 'gray', fontSize: 16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>CHIEN</Logo>
                </Center>
                <Right>
                    <Link to="/register" className="link">
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" className="link">
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <MenuItem>
                    <Link to="/cart" className="link">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
