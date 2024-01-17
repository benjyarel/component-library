import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  // 100 view height - (Header height + bottom border size)
  height: calc(100vh - 72px - 6px);
  background: #e8e6e6;
  border-left: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
`;

export { ContentWrapper };