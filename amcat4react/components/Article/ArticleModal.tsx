import { useEffect, useState } from "react";
import { Modal } from "semantic-ui-react";
import Article, { ArticleProps } from "./Article";
import { useRouter } from "next/router";
import { link_doc } from "../../../amcat4client/functions/links";

/**
 * Show a single article
 */
export default function ArticleModal({
  user,
  index,
  id,
  query,
  changeArticle,
}: ArticleProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const link = window.location.href.replace(
    router.asPath,
    link_doc(user.resource, index, id)
  );

  useEffect(() => {
    setOpen(true);
  }, [id]);
  if (!index || !id) return null;

  return (
    <Modal
      open={open}
      onClose={() => {
        if (changeArticle) changeArticle(null);
        setOpen(false);
      }}
      style={{ width: "80vw", maxWidth: "1200px" }}
    >
      <Modal.Header></Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description style={{ height: "100%" }}>
          <Article
            user={user}
            id={id}
            index={index}
            query={query}
            link={link}
          />
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions></Modal.Actions>
    </Modal>
  );
}
