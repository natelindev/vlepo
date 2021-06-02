type Node = {
  type: string;
  children: (Node | undefined)[] | undefined;
};
const remove = (node: Node, types: string[]): Node | undefined => {
  if (node) {
    if (types.includes(node.type)) {
      return undefined;
    }
    if (node.children && node.children.length > 0) {
      return {
        ...node,
        children: node.children
          .map((child) => (child ? remove(child, types) : child))
          .filter((c) => c),
      };
    }
  }
  return node;
};

export const mdxToMd = () => (node: Node) => {
  return remove(node, ['jsx', 'import', 'export']);
};
