import styled from "styled-components";

export const Loading = styled.div`
  margin: auto;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
`;

export const Button = styled.button`
  width: 100%;
  background: white;
  border: 2px solid var(--primary);
  font-size: inherit;
  max-width: 400px;
  padding: 1rem 2rem;
  border-radius: 10px;
  transition: background 0.3s;

  &:hover:enabled {
    color: white;
    cursor: pointer;

    background: var(--primary);
  }
`;
