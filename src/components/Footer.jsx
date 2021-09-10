import { Facebook, MailOutlined, Phone, Room, Twitter, YouTube } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    background-color: #${props => props.color};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px; 
    ${mobile({ display: 'none'})}

`;
const Title = styled.h3`
    margin-bottom: 20px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margon-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fcf5f5' })}
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`

`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ChienVan</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, facere vitae molestias totam nesciunt illum, repellendus asperiores dolorum nostrum fugit, sequi aperiam maiores non id distinctio at velit quam animi!
                </Desc>
                <SocialContainer >
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="ff0000">
                        <YouTube />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem><Room style={{marginRight: "10px"}}/> Ward 4, District 8, HCM City</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/> +84 358 208 351</ContactItem>
                <ContactItem><MailOutlined style={{marginRight: "10px"}}/> nt9a3chienvachuong@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
