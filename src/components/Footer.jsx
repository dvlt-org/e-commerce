import React from 'react'
import styled from "styled-components"
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Pinterest from '@mui/icons-material/Pinterest';
import Facebook from '@mui/icons-material/Facebook';
import { Room, Phone, ContactPhone } from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div`
    display:flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const Logo = styled.h1`
`
const Description = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:${(props) => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor:pointer;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`

const Title = styled.h1`
    margin-bottom: 30px;
`

const List = styled.ul`
    list-style:none;
    display:flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    cursor:pointer;
    margin-bottom: 10px;
    width: 50%;
    padding-bottom: 5px;
    &:hover {
        text-decoration: underline;
    }
`

const ContactItem = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: 10px;
    gap: 10px;
`
const Payment = styled.img`
    width: 50%;
    cursor:pointer;
`

export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>MARKET.</Logo>
                <Description>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='3B5999'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='3B5999'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
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
                <Title>Contact</Title>
                <ContactItem>
                    <Room />  622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone />+1 234 56 78
                </ContactItem>
                <ContactItem>
                    <ContactPhone />contact@lama.dev
                </ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}
