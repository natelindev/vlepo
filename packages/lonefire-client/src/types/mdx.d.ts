declare module '@mdx-js/runtime' {
  /**
   * Properties for the MDX Runtime component
   */
  interface Options {
    /**
     * Path on disk to processed file
     * @default undefined
     */
    filepath?: string;

    /**
     * skip the addition of 'export default' statement when serializing
     * to JSX
     * @default false
     */
    skipExport?: boolean;

    /**
     * wrap 'export default' statement with provided string when serializing
     * to JSX
     */
    wrapExport?: string;

    /**
     * remark plugins to transform markdown content
     *
     * @default []
     */
    remarkPlugins?: Plugin[];

    /**
     * rehype plugins html content
     *
     * @default []
     */
    rehypePlugins?: Plugin[];
  }

  export interface MDXRuntimeProps
    extends Omit<Options, 'footnotes' | 'compilers'>,
      Partial<import('@mdx-js/react').ComponentsProp> {
    /**
     * MDX text
     */
    children?: string;

    /**
     * Values in usable in MDX scope
     */
    scope?: {
      [variableName: string]: unknown;
    };
  }

  /**
   * Renders child MDX text as a React component
   */
  export const mdxRuntime: import('react').FunctionComponent<MDXRuntimeProps>;

  export default mdxRuntime;
}
