import { syllabusData } from '../data/syllabus';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ selectedTopic, setSelectedTopic, sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [expandedLevels, setExpandedLevels] = useState<Record<string, boolean>>({
    'level-1-c': true,
  });

  const toggleLevel = (levelId: string) => {
    setExpandedLevels(prev => ({
      ...prev,
      [levelId]: !prev[levelId]
    }));
  };

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(topicId);
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-40 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <nav className="p-4">
          {syllabusData.map((section) => (
            <div key={section.id} className="mb-6">
              <h2 className="px-3 py-2 text-gray-900 dark:text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-2">
                {section.title}
              </h2>
              {section.levels.map((level) => (
                <div key={level.id} className="mb-2">
                  <button
                    onClick={() => toggleLevel(level.id)}
                    className="w-full flex items-center justify-between px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <span>{level.name}</span>
                    {expandedLevels[level.id] ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  {expandedLevels[level.id] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {level.topics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => handleTopicClick(topic.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedTopic === topic.id
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {topic.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
