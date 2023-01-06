import { useRouter } from "next/router";
import { AmcatUser } from "../../amcat4react";
import { useMiddlecatContext } from "../../amcat4react/context/middlecat";

export default function useUser(): AmcatUser | undefined {
  const router = useRouter();
  const host = router.query.host as string;
  const { user } = useMiddlecatContext(host);
  return user;
}
