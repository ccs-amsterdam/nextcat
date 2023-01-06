import { useRouter } from "next/router";
import { QueryForm } from "../../../../../amcat4react";
import Results from "../../../../../amcat4client/components/Query/Results";
import { useState } from "react";
import { AmcatQuery } from "../../../../../amcat4react";
import useUser from "../../../../../amcat4client/hooks/useUser";

export default function QueryPage() {
  const [query, setQuery] = useState<AmcatQuery>({});
  const user = useUser();
  const router = useRouter();
  const index = router.query.i as string;

  if (index === null || !user) return null;

  return (
    <>
      <QueryForm user={user} index={index} value={query} onSubmit={setQuery} />
      <Results user={user} index={index} query={query} setQuery={setQuery} />
    </>
  );
}
