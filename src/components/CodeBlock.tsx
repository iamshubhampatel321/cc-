import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Simple syntax highlighting for C/C++
  const highlightCode = (code: string) => {
    const keywords = [
      'int', 'float', 'double', 'char', 'void', 'long', 'short', 'signed', 'unsigned',
      'if', 'else', 'while', 'for', 'do', 'switch', 'case', 'break', 'continue', 'return',
      'struct', 'union', 'enum', 'typedef', 'sizeof', 'const', 'static', 'extern', 'auto', 'register',
      'class', 'public', 'private', 'protected', 'virtual', 'friend', 'this', 'new', 'delete',
      'namespace', 'using', 'template', 'typename', 'try', 'catch', 'throw', 'nullptr',
      'bool', 'true', 'false', 'std', 'cout', 'cin', 'endl', 'include', 'define', 'main'
    ];

    const lines = code.split('\n');
    return lines.map((line, lineIndex) => {
      let highlightedLine = line;
      
      // Highlight preprocessor directives
      if (line.trim().startsWith('#')) {
        return (
          <div key={lineIndex}>
            <span className="text-purple-600 dark:text-purple-400">{line}</span>
          </div>
        );
      }

      // Highlight comments
      if (line.trim().startsWith('//')) {
        return (
          <div key={lineIndex}>
            <span className="text-gray-500 dark:text-gray-500 italic">{line}</span>
          </div>
        );
      }

      // Highlight strings
      const stringRegex = /"([^"\\]*(\\.[^"\\]*)*)"/g;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;

      const tempLine = line;
      while ((match = stringRegex.exec(tempLine)) !== null) {
        // Add text before string
        if (match.index > lastIndex) {
          const beforeText = tempLine.substring(lastIndex, match.index);
          parts.push(highlightKeywords(beforeText, keywords, parts.length));
        }
        // Add string
        parts.push(
          <span key={parts.length} className="text-green-600 dark:text-green-400">
            {match[0]}
          </span>
        );
        lastIndex = match.index + match[0].length;
      }

      // Add remaining text
      if (lastIndex < tempLine.length) {
        const remainingText = tempLine.substring(lastIndex);
        parts.push(highlightKeywords(remainingText, keywords, parts.length));
      }

      return <div key={lineIndex}>{parts.length > 0 ? parts : line}</div>;
    });
  };

  const highlightKeywords = (text: string, keywords: string[], keyBase: number) => {
    const parts: React.ReactNode[] = [];
    const words = text.split(/(\s+|[{}();,[\]])/);
    
    words.forEach((word, idx) => {
      if (keywords.includes(word)) {
        parts.push(
          <span key={`${keyBase}-${idx}`} className="text-blue-600 dark:text-blue-400 font-semibold">
            {word}
          </span>
        );
      } else if (/^\d+$/.test(word)) {
        parts.push(
          <span key={`${keyBase}-${idx}`} className="text-orange-600 dark:text-orange-400">
            {word}
          </span>
        );
      } else {
        parts.push(<span key={`${keyBase}-${idx}`}>{word}</span>);
      }
    });

    return parts;
  };

  return (
    <div className="relative group my-4">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
        <code className="text-sm leading-relaxed">
          {highlightCode(code)}
        </code>
      </pre>
    </div>
  );
}
