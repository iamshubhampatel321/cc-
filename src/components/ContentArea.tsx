import { topicsContent } from '../data/content';
import { CodeBlock } from './CodeBlock';

interface ContentAreaProps {
  selectedTopic: string;
}

export function ContentArea({ selectedTopic }: ContentAreaProps) {
  const content = topicsContent[selectedTopic];

  if (!content) {
    return (
      <main className="flex-1 p-8 lg:ml-80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <h2 className="text-gray-900 dark:text-white mb-2">
              Topic not found
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Please select a topic from the sidebar
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-4 lg:p-8">
      <div className="max-w-4xl mx-auto pb-16">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-gray-900 dark:text-white mb-6">{content.title}</h1>
          
          {content.sections.map((section, index) => (
            <section key={index} className="mb-8">
              {section.heading && (
                <h2 className="text-gray-900 dark:text-white mt-8 mb-4">
                  {section.heading}
                </h2>
              )}
              
              {section.content && (
                <div className="text-gray-700 dark:text-gray-300 mb-4 space-y-4">
                  {section.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}

              {section.points && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}

              {section.code && (
                <CodeBlock
                  code={section.code}
                  language={section.language || 'c'}
                />
              )}

              {section.note && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>Note:</strong> {section.note}
                  </p>
                </div>
              )}

              {section.subsections && (
                <div className="ml-4">
                  {section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} className="mb-6">
                      {subsection.subheading && (
                        <h3 className="text-gray-800 dark:text-gray-200 mt-6 mb-3">
                          {subsection.subheading}
                        </h3>
                      )}
                      {subsection.content && (
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          {subsection.content}
                        </p>
                      )}
                      {subsection.code && (
                        <CodeBlock
                          code={subsection.code}
                          language={subsection.language || 'c'}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}