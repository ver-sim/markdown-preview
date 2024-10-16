import { useState } from "react";
import Markdown from 'marked-react';
import './Editor.scss'


const str = `# This is H1 element \n## This is H2 element

[link](https://google.com/)\n

inline code
\`<div></div>\`\n

code block
\`\`\`
function markdown(){ 
    return multineCode;
}
\`\`\` \n

oreder list \n
1. item 1
2. item 2
3. item 3

\n unorder list \n
- item 1
- item 2
- item 3

> blockquote\n

![alt text](image.jpg)

**bold text**
`;

export const Editor = () => {
  const [markdown, setMarkdown] = useState(str);
  return (
    <div id="container">
        <textarea id="editor" onChange={(e) => setMarkdown(e.target.value)}>{markdown}</textarea>
        <div id="preview">
            <Markdown>{markdown}</Markdown>
        </div>
    </div>

  )
}
