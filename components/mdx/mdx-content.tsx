import * as runtime from "react/jsx-runtime";
import { useMemo } from "react";
import type { MDXComponents } from "mdx/types";

interface MDXContentProps {
  code: string;
  components?: MDXComponents;
}

export function MDXContent({ code, components }: MDXContentProps) {
  const Component = useMemo(() => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
  }, [code]);

  return <Component components={components} />;
}
