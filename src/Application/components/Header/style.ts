import styled from "styled-components";

const Layout = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: #fff;
  border: ${({ theme }) => theme.border};
`

const Title =  styled.h2`
  position: absolute;
  left: 50%;
  font-family: monospace;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 900;
`

export { Layout, Title };
