import styled from "styled-components";
import { Loading } from "./Style";

const MessageContainer = styled.div`
  margin: auto;
  position: relative;
`;

export function LoadingScreen() {
  return (
    <MessageContainer>
      <Loading />
    </MessageContainer>
  );
}

export function ErrorScreen() {
  return <MessageContainer>An error occured</MessageContainer>;
}
