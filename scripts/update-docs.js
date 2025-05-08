import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, "../docs/components");

// Function to update code blocks in a file
function updateCodeBlocks(content) {
  // Replace import statements
  content = content.replace(
    /<span class="code-keyword">import<\/span>.*?<span class="code-string">'rohit-ui'<\/span>;/g,
    "<pre><code class=\"language-typescript\">import { Component } from 'rohit-ui';</code></pre>"
  );

  // Replace HTML entities in code blocks
  content = content.replace(
    /&lt;([A-Za-z]+)(.*?)&gt;(.*?)&lt;\/\1&gt;/g,
    "<$1$2>$3</$1>"
  );

  // Replace inline code blocks with proper formatting
  content = content.replace(
    /(<div class="example-code">\s*)((?!<pre>)[\s\S]*?)(<\/div>)/g,
    (match, start, code, end) => {
      // Skip if already properly formatted
      if (code.includes("<pre><code")) return match;

      // Clean up the code and wrap it in proper tags
      const cleanCode = code
        .trim()
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/<span class="code-comment">(.*?)<\/span>/g, "// $1")
        .replace(/<span class="code-string">(.*?)<\/span>/g, '"$1"')
        .replace(/<span class="code-keyword">(.*?)<\/span>/g, "$1");

      // Handle special case for RohitUIProvider
      if (code.includes("RohitUIProvider")) {
        return `${start}<pre><code class="language-tsx">// Enable globally
<RohitUIProvider theme="windows98" globalRohitMode>
  {/* All components will be unnecessarily complicated */}
</RohitUIProvider></code></pre>${end}`;
      }

      return `${start}<pre><code class="language-tsx">${cleanCode}</code></pre>${end}`;
    }
  );

  // Replace styled-components examples
  content = content.replace(
    /<span class="code-keyword">import<\/span> styled.*?<span class="code-string">'styled-components'<\/span>;.*?<span class="code-function">function<\/span>.*?<span class="code-function">MyComponent<\/span>.*?{.*?<span class="code-keyword">return<\/span>.*?&lt;CustomComponent&gt;.*?&lt;\/CustomComponent&gt;.*?;.*?}/gs,
    "<pre><code class=\"language-typescript\">import styled from 'styled-components';\nimport { Component } from 'rohit-ui';\n\nconst CustomComponent = styled(Component)`\n  // Custom styles here\n`;\n\nfunction MyComponent() {\n  return (\n    <CustomComponent>\n      Custom styled component\n    </CustomComponent>\n  );\n}</code></pre>"
  );

  // Replace any remaining HTML entities in code blocks
  content = content.replace(
    /(<pre><code[^>]*>)([\s\S]*?)(<\/code><\/pre>)/g,
    (match, start, code, end) => {
      const cleanCode = code
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&");
      return `${start}${cleanCode}${end}`;
    }
  );

  return content;
}

// Process all HTML files in the docs directory
try {
  const files = await fs.promises.readdir(docsDir);

  for (const file of files) {
    if (file.endsWith(".html")) {
      const filePath = path.join(docsDir, file);
      const content = await fs.promises.readFile(filePath, "utf8");
      const updatedContent = updateCodeBlocks(content);
      await fs.promises.writeFile(filePath, updatedContent, "utf8");
      console.log(`Updated ${file}`);
    }
  }
} catch (err) {
  console.error("Error processing files:", err);
}
