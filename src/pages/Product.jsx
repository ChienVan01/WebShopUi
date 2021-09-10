import styled from "styled-components"
import Navbar from '../components/Navbar'
import Anoucements from '../components/Anoucements'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../Responsive"

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: '40vh' })}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: '10px' })}

`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`;
const FilterContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    ${mobile({ width: '100%' })}

`;
const Filter = styled.div`
    display: flex;
    align-items: center;

`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColer = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    font-weight: 200;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: '100%' })}

`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid gray;
    background-color: white;
    cursor: pointer;
    font-weight: 500;   
    transition: all 0.3s ease;

    &:hover{
       background-color: rgba(1, 1, 1, 0.1);
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Anoucements />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus at omnis. Dolorum excepturi debitis magnam quia molestias at vitae. Natus quo similique inventore, asperiores laborum amet nulla nihil pariatur.</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColer color="black"/>
                            <FilterColer color="darkblue"/>
                            <FilterColer color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
