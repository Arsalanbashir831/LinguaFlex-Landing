"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface MarkdownProps {
  content: string;
  className?: string;
}

const markdownComponents: Components = {
  // Custom components for better styling
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-6 pb-3 border-b-2 border-primary-200">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-2">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-base font-semibold text-gray-900 mt-4 mb-2">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-sm font-semibold text-gray-900 mt-3 mb-2">
      {children}
    </h6>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary-500 bg-primary-50/50 py-4 px-6 rounded-r-lg not-italic text-primary-800 my-6 font-medium">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 my-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 space-y-2 text-gray-700 my-4">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-gray-700 leading-relaxed">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-700">
      {children}
    </em>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 leading-relaxed mb-4">
      {children}
    </p>
  ),
  a: ({ children, href }) => (
    <a 
      href={href} 
      className="text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-200"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code className="text-primary-700 bg-primary-50 px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    
    return (
      <code className="block bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto my-4">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
      {children}
    </pre>
  ),
  hr: () => (
    <hr className="border-gray-200 my-8" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-50">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="bg-white divide-y divide-gray-200">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-gray-50">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
      {children}
    </td>
  ),
};

export function Markdown({ content, className = "" }: MarkdownProps) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
