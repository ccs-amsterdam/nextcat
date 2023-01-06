import Head from "next/head";
import { useMiddlecatContext, Indices } from "../amcat4react";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyleWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .AuthForm {
    padding-top: 2rem;
    font-size: 0.8rem;
  }
  .Indices {
  }
`;

export default function Home() {
  const router = useRouter();
  const host = router.query.host as string;
  const login_host = router.query.login_host as string;
  const { user, AuthForm } = useMiddlecatContext(host);

  function onSelectIndex(index: string) {
    if (!user) return;
    router.push(`/h/${encodeURIComponent(user.resource)}/i/${index}/query`);
  }

  return (
    <>
      <Head>
        <title>AmCAT 4 client</title>
        <meta name="description" content="AmCAT 4 client" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/amcat-logo.svg" />
      </Head>
      <main>
        <StyleWrapper>
          <div className="AuthForm">
            <AuthForm
              resourceFixed={login_host || undefined}
              resourceSuggestion={
                login_host ? undefined : "http://localhost:5000"
              }
            />
          </div>
          <div className="Indices">
            <Indices user={user} onSelect={onSelectIndex} />
          </div>
        </StyleWrapper>
      </main>
    </>
  );
}
