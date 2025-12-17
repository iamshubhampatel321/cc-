import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { ThemeToggle } from './components/ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('intro-c');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-gray-900 dark:text-white">
                C/C++ Complete Notes
              </h1>
            </div>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </header>

        {/* Main Content */}
        <div className="pt-16 flex">
          {/* Sidebar */}
          <Sidebar
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Content Area */}
          <ContentArea selectedTopic={selectedTopic} />
        </div>
      </div>
    </div>
  );
}
