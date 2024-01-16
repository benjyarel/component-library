import styled from "styled-components";

interface CategoryHeaderProps {
  title: string;
}

export const CategoryHeader = ({ title }: CategoryHeaderProps) => {
  return (
    <Wrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 8px;
`;

const HeaderTitle = styled.p`
  font-weight: bold;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
