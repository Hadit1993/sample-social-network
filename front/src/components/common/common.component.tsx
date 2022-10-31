import { PropsWithChildren } from "react";

export const ShowIF = (props: PropsWithChildren & { term: any }) => (
  <>{props.term ? <>{props.children}</> : <></>}</>
);
