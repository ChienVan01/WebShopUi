import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Anoucements from "../components/Anoucements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: '10px' })}
    
`;
const Title = styled.h1`
    font-weight: 400;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "#0e3f7e" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: 'none'})}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}

`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}

`;
const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`;
const Image = styled.img`
    width: 200px;
`;
const Detail = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ flexDirection: 'row', justifyContent: 'flex-end'})}

`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({ margin: '10px 15px' })}

`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    ${mobile({ flex: '2' })}

`;

const SummaryTitle = styled.h1`
    font-weight: 300;
`;
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "600"};
    font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button= styled.button`
    border: none;
    padding: 10px;
    width: 100%;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Anoucements />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(3)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Detail>
                                    <ProductName><b>Procuct: </b>JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID: </b>93436463733</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size: </b>38</ProductSize>
                                </Detail>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30 </ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                                <Detail>
                                    <ProductName><b>Procuct: </b>HAKURA T-SHIRT </ProductName>
                                    <ProductId><b>ID: </b>93813718293</ProductId>
                                    <ProductColor color="gray"/>
                                    <ProductSize><b>Size: </b>M</ProductSize>
                                </Detail>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30 </ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.09</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.09</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 60</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
