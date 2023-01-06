import { List } from "semantic-ui-react";
import { AmcatDocument } from "../../interfaces";
import {
  highlightElasticTags,
  removeElasticTags,
} from "./highlightElasticTags";
import {
  PaginationFooter,
  PaginationProps,
  PaginationTableColumn,
} from "./PaginationTable";

function snippetText(row: AmcatDocument) {
  const text = row.text as string;
  if (text && text.includes("<em>")) return highlightElasticTags(text);
  return text.substring(0, 100) + "...";
}

export default function ArticleSnippets({
  data,
  columns,
  pages,
  pageChange,
  onClick,
}: PaginationProps) {
  const meta = (row: any) => {
    return columns
      .filter((c) => !["_id", "title", "text"].includes(c.name))
      .map((c) => formatSnippetMeta(row, c))
      .join(" - ");
  };
  return (
    <>
      <List divided relaxed className="snippets">
        {data.map((row, i) => (
          <List.Item key={i}>
            <List.Content onClick={() => onClick(row)}>
              <List.Header as="a">
                <span title={removeElasticTags(row.title || "")}>
                  {highlightElasticTags(row.title || "")}
                </span>
              </List.Header>
              <span>{snippetText(row)}</span>
              <List.Description>{meta(row)}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
      <PaginationFooter pages={pages} pageChange={pageChange} />
    </>
  );
}

function formatSnippetMeta(row: AmcatDocument, column: PaginationTableColumn) {
  let val = row[column.name];
  if (val == null) return "";
  if (column.type === "id") return "🔗";
  if (column.type === "date") return val.replace("T", " ").substring(0, 19);
  return val;
}
