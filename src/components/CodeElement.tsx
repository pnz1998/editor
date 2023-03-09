import { FC } from "react";

const CodeElement: FC = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
};
export default CodeElement;