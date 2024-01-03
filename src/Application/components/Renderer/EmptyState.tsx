import styled from "styled-components";

const EmptyState = () => {
  return (
    <NoComponentWrapper>
      <h2>No component selected</h2>
    </NoComponentWrapper>
  );
};

const NoComponentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { EmptyState };
