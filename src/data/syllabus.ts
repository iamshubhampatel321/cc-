export interface Topic {
  id: string;
  title: string;
}

export interface Level {
  id: string;
  name: string;
  topics: Topic[];
}

export interface Section {
  id: string;
  title: string;
  levels: Level[];
}

export const syllabusData: Section[] = [
  {
    id: 'c-language',
    title: 'C Language',
    levels: [
      {
        id: 'level-1-c',
        name: 'Level 1: C Fundamentals',
        topics: [
          { id: 'intro-c', title: 'Introduction to C' },
          { id: 'data-types', title: 'Data Types & Variables' },
          { id: 'operators', title: 'Operators' },
          { id: 'control-statements', title: 'Control Statements' },
        ],
      },
      {
        id: 'level-2-c',
        name: 'Level 2: Core Programming',
        topics: [
          { id: 'functions', title: 'Functions' },
          { id: 'arrays', title: 'Arrays' },
          { id: 'strings', title: 'Strings' },
        ],
      },
      {
        id: 'level-3-c',
        name: 'Level 3: Memory & Structures',
        topics: [
          { id: 'pointers', title: 'Pointers' },
          { id: 'structures', title: 'Structures & Unions' },
          { id: 'enums', title: 'Enumerations & Typedef' },
        ],
      },
      {
        id: 'level-4-c',
        name: 'Level 4: Files & Advanced',
        topics: [
          { id: 'file-handling', title: 'File Handling' },
          { id: 'dynamic-memory', title: 'Dynamic Memory Allocation' },
          { id: 'preprocessor', title: 'Preprocessor Directives' },
          { id: 'error-handling', title: 'Error Handling' },
        ],
      },
      {
        id: 'level-5-c',
        name: 'Level 5: System-Level C',
        topics: [
          { id: 'command-line', title: 'Command Line Arguments' },
          { id: 'bit-manipulation', title: 'Bit Manipulation' },
          { id: 'storage-classes', title: 'Storage Classes' },
          { id: 'low-level', title: 'Low-Level Concepts' },
        ],
      },
    ],
  },
  {
    id: 'cpp-language',
    title: 'C++ Language',
    levels: [
      {
        id: 'level-1-cpp',
        name: 'Level 1: C++ Fundamentals',
        topics: [
          { id: 'intro-cpp', title: 'Introduction to C++' },
          { id: 'cpp-data-types', title: 'Data Types & Variables' },
          { id: 'cpp-control', title: 'Control Structures' },
        ],
      },
      {
        id: 'level-2-cpp',
        name: 'Level 2: OOP Core',
        topics: [
          { id: 'oop-concepts', title: 'OOP Concepts' },
          { id: 'inheritance', title: 'Inheritance' },
          { id: 'polymorphism', title: 'Polymorphism' },
        ],
      },
      {
        id: 'level-3-cpp',
        name: 'Level 3: Memory & References',
        topics: [
          { id: 'cpp-pointers', title: 'Pointers & References' },
          { id: 'const-correctness', title: 'const Correctness' },
        ],
      },
      {
        id: 'level-4-cpp',
        name: 'Level 4: STL',
        topics: [
          { id: 'stl-overview', title: 'STL Overview' },
        ],
      },
      {
        id: 'level-5-cpp',
        name: 'Level 5: Advanced C++',
        topics: [
          { id: 'exception-handling', title: 'Exception Handling' },
          { id: 'templates', title: 'Templates' },
          { id: 'cpp-file-handling', title: 'File Handling' },
        ],
      },
      {
        id: 'level-6-cpp',
        name: 'Level 6: Modern C++',
        topics: [
          { id: 'modern-cpp', title: 'Modern C++ Features' },
          { id: 'multithreading', title: 'Multithreading' },
          { id: 'performance', title: 'Performance & Memory' },
        ],
      },
      {
        id: 'level-7-cpp',
        name: 'Level 7: Design & Best Practices',
        topics: [
          { id: 'design-patterns', title: 'Design Patterns' },
          { id: 'competitive-programming', title: 'Competitive Programming' },
          { id: 'best-practices', title: 'C++ Best Practices' },
        ],
      },
    ],
  },
];
