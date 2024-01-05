import styled from "styled-components";

const EmptyState = () => {
  return (
    <NoComponentWrapper>
      <h3>No component selected</h3>
    </NoComponentWrapper>
  );
};

const NoComponentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: monospace;
  color: #000;
  font-weight: 900;
`;

export { EmptyState };
