import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  max-height: 100vh;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 200px;
`;

export const ProductImg = styled.img`
  height: 200px;
  min-width: 200px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
 
  margin-bottom: 2rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 1rem;
  text-align: center;
  margin-bottom: 1rem
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
   
  font-size: 1rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;