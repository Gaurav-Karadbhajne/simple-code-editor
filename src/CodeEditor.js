import React, { useState } from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";
import { Highlight, themes } from 'prism-react-renderer';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div style={{ position: 'relative', margin: '20px', fontFamily: 'monospace' }}>
      <textarea
        value={code}
        onChange={handleChange}
        spellCheck="false"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
          color: 'transparent',
          caretColor: 'black',
          border: '1px solid #ddd',
          padding: '10px',
          fontSize: '14px',
          resize: 'none',
          overflow: 'hidden',
        }}
      />
      <Highlight
        theme={themes.github}
        Prism={Prism}
        code={code}
        language="javascript"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, margin: 0, pointerEvents: 'none' }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
