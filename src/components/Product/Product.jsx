import styled from 'styled-components';

import { ReactComponent as MyIcon } from './icon.svg';

const Wrapper = styled.div`
  max-width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 0 10px #000;
  margin: 30px;
`;

/* margin: ${props => (props.data ? props.data : '0')}; */
// margin: ${props => (props.data || '0')};
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: ${({ data = '0' }) => data};
  color: ${({ primary }) => (primary ? 'blue' : '#999')};
  padding: ${props => (props.primary ? '20px' : '0')};
`;

export const Product = () => {
  return (
    <Wrapper>
      <Title>Not Primary - Consectetur adipisicing elit</Title>
      <Title primary data="10px">
        Primary - adipisicing elit
      </Title>

      <MyIcon />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, veritatis aliquid voluptatem harum quam
        dolores nostrum est velit maiores ipsam accusantium officia qui fugiat natus reprehenderit voluptates asperiores
        laboriosam eos?
      </p>
    </Wrapper>
  );
};
