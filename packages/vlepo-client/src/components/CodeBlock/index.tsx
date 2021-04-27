/* eslint-disable react/no-array-index-key */
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/vsLight';
import { useState } from 'react';
import { isBright } from 'src/shared/colorUtil';

import { useTheme } from '@emotion/react';

import { CopyButton, LanguageBadge, LanguageColors, Pre } from './style';

type CodeBlockProps = { children: string; className?: string };
const CodeBlock = (props: CodeBlockProps) => {
  const { children, className } = props;
  const language = className?.replace(/language-/, '') as Language;
  const theme = useTheme();
  const [copyButtonText, setCopyButtonText] = useState('copy');
  const badgeColor = Object.keys(LanguageColors).includes(language)
    ? LanguageColors[language as keyof typeof LanguageColors]
    : theme.colors.accent;
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme.name === 'light' ? vsLight : vsDark}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <Pre>
          <CopyButton
            px="0.5rem"
            py="0.1rem"
            onClick={() => {
              setCopyButtonText('copied');
              navigator.clipboard.writeText(children);
              setTimeout(() => setCopyButtonText('copy'), 2000);
            }}
          >
            {copyButtonText}
          </CopyButton>
          {language && (
            <LanguageBadge
              px="0.5rem"
              py="0.1rem"
              bg={badgeColor}
              color={isBright(badgeColor) ? theme.colors.blackText : theme.colors.whiteText}
            >
              {language}
            </LanguageBadge>
          )}
          {tokens.slice(0, tokens.length - 1).map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
