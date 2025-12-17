import { TopicContent } from './content';

export const extendedTopicsContent: Record<string, TopicContent> = {
  'file-handling': {
    title: 'File Handling',
    sections: [
      {
        heading: 'Introduction to File Handling',
        content: 'File handling in C allows programs to store data permanently. C provides various functions to create, read, write, and manipulate files.',
      },
      {
        heading: 'File Pointer',
        content: 'A file pointer is a pointer to a structure FILE defined in stdio.h. It keeps track of the file being accessed.',
        code: `#include <stdio.h>

FILE *filePointer;`,
      },
      {
        heading: 'File Opening Modes',
        points: [
          'r: Open for reading (file must exist)',
          'w: Open for writing (creates new file or truncates existing)',
          'a: Open for appending (creates new file if doesn\'t exist)',
          'r+: Open for reading and writing (file must exist)',
          'w+: Open for reading and writing (creates new or truncates)',
          'a+: Open for reading and appending',
          'rb, wb, ab: Binary mode variants',
        ],
      },
      {
        heading: 'Basic File Operations',
        subsections: [
          {
            subheading: 'Opening and Closing Files',
            code: `#include <stdio.h>

int main() {
    FILE *fp;
    
    // Open file
    fp = fopen("data.txt", "w");
    
    if (fp == NULL) {
        printf("Error opening file\\n");
        return 1;
    }
    
    // File operations here
    
    // Close file
    fclose(fp);
    
    return 0;
}`,
          },
          {
            subheading: 'Writing to File',
            code: `// Using fprintf
FILE *fp = fopen("output.txt", "w");
fprintf(fp, "Hello, World!\\n");
fprintf(fp, "Number: %d\\n", 42);
fclose(fp);

// Using fputc
fp = fopen("output.txt", "w");
fputc('A', fp);
fputc('B', fp);
fclose(fp);

// Using fputs
fp = fopen("output.txt", "w");
fputs("First line\\n", fp);
fputs("Second line\\n", fp);
fclose(fp);`,
          },
          {
            subheading: 'Reading from File',
            code: `// Using fscanf
FILE *fp = fopen("input.txt", "r");
int num;
char str[100];

fscanf(fp, "%d %s", &num, str);
printf("Number: %d, String: %s\\n", num, str);
fclose(fp);

// Using fgetc
fp = fopen("input.txt", "r");
char ch;
while ((ch = fgetc(fp)) != EOF) {
    printf("%c", ch);
}
fclose(fp);

// Using fgets
fp = fopen("input.txt", "r");
char line[256];
while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line);
}
fclose(fp);`,
          },
        ],
      },
      {
        heading: 'File Position Functions',
        code: `FILE *fp = fopen("data.txt", "r");

// fseek: Move file pointer
fseek(fp, 10, SEEK_SET);  // 10 bytes from beginning
fseek(fp, 5, SEEK_CUR);   // 5 bytes from current position
fseek(fp, -5, SEEK_END);  // 5 bytes before end

// ftell: Get current position
long pos = ftell(fp);
printf("Current position: %ld\\n", pos);

// rewind: Move to beginning
rewind(fp);

fclose(fp);`,
      },
      {
        heading: 'Binary File Operations',
        code: `#include <stdio.h>

struct Student {
    int rollNo;
    char name[50];
    float marks;
};

int main() {
    FILE *fp;
    struct Student s1 = {101, "Alice", 85.5};
    struct Student s2;
    
    // Write binary data
    fp = fopen("students.dat", "wb");
    fwrite(&s1, sizeof(struct Student), 1, fp);
    fclose(fp);
    
    // Read binary data
    fp = fopen("students.dat", "rb");
    fread(&s2, sizeof(struct Student), 1, fp);
    printf("Roll: %d, Name: %s, Marks: %.2f\\n", 
           s2.rollNo, s2.name, s2.marks);
    fclose(fp);
    
    return 0;
}`,
      },
      {
        heading: 'Error Handling in File Operations',
        code: `#include <stdio.h>
#include <errno.h>

FILE *fp = fopen("nonexistent.txt", "r");

if (fp == NULL) {
    perror("Error");  // Prints error message
    printf("Error code: %d\\n", errno);
    return 1;
}

// Check for errors during file operations
if (ferror(fp)) {
    printf("Error reading file\\n");
}

// Check for end of file
if (feof(fp)) {
    printf("End of file reached\\n");
}

fclose(fp);`,
      },
    ],
  },
  'dynamic-memory': {
    title: 'Dynamic Memory Allocation',
    sections: [
      {
        heading: 'Introduction',
        content: 'Dynamic memory allocation allows programs to request memory during runtime. Memory is allocated on the heap and must be manually freed.',
      },
      {
        heading: 'malloc() Function',
        content: 'Allocates specified bytes of memory and returns a pointer to the first byte.',
        code: `#include <stdlib.h>

// Allocate memory for 5 integers
int *ptr = (int*)malloc(5 * sizeof(int));

if (ptr == NULL) {
    printf("Memory allocation failed\\n");
    return 1;
}

// Use the memory
for (int i = 0; i < 5; i++) {
    ptr[i] = i + 1;
}

// Print values
for (int i = 0; i < 5; i++) {
    printf("%d ", ptr[i]);
}

// Free memory
free(ptr);
ptr = NULL;`,
      },
      {
        heading: 'calloc() Function',
        content: 'Allocates memory for an array of elements and initializes all bytes to zero.',
        code: `#include <stdlib.h>

// Allocate memory for 5 integers (initialized to 0)
int *arr = (int*)calloc(5, sizeof(int));

if (arr == NULL) {
    printf("Memory allocation failed\\n");
    return 1;
}

// All elements are 0
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);  // Output: 0 0 0 0 0
}

free(arr);`,
      },
      {
        heading: 'realloc() Function',
        content: 'Changes the size of previously allocated memory block.',
        code: `#include <stdlib.h>

// Initially allocate for 5 integers
int *ptr = (int*)malloc(5 * sizeof(int));

for (int i = 0; i < 5; i++) {
    ptr[i] = i + 1;
}

// Resize to hold 10 integers
ptr = (int*)realloc(ptr, 10 * sizeof(int));

if (ptr == NULL) {
    printf("Reallocation failed\\n");
    return 1;
}

// Add more data
for (int i = 5; i < 10; i++) {
    ptr[i] = i + 1;
}

free(ptr);`,
      },
      {
        heading: 'free() Function',
        content: 'Deallocates previously allocated memory.',
        code: `int *ptr = (int*)malloc(sizeof(int));
*ptr = 100;

printf("Value: %d\\n", *ptr);

// Free the memory
free(ptr);

// Good practice: set to NULL after freeing
ptr = NULL;`,
        note: 'Always free dynamically allocated memory to prevent memory leaks.',
      },
      {
        heading: 'Memory Leaks',
        content: 'A memory leak occurs when allocated memory is not freed.',
        code: `// Memory leak example (BAD)
void badFunction() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 10;
    // Forgot to free - memory leak!
}

// Correct approach (GOOD)
void goodFunction() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 10;
    // Use the memory
    printf("%d\\n", *ptr);
    free(ptr);  // Always free!
}`,
      },
      {
        heading: 'Dynamic Array Example',
        code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    // Dynamically allocate array
    int *arr = (int*)malloc(n * sizeof(int));
    
    if (arr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    
    // Input elements
    printf("Enter elements:\\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    // Process elements
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    printf("Sum: %d\\n", sum);
    
    // Free memory
    free(arr);
    
    return 0;
}`,
      },
      {
        heading: 'Dynamic 2D Array',
        code: `#include <stdlib.h>

int rows = 3, cols = 4;

// Allocate array of pointers
int **arr = (int**)malloc(rows * sizeof(int*));

// Allocate each row
for (int i = 0; i < rows; i++) {
    arr[i] = (int*)malloc(cols * sizeof(int));
}

// Use the 2D array
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        arr[i][j] = i * cols + j;
        printf("%d ", arr[i][j]);
    }
    printf("\\n");
}

// Free memory
for (int i = 0; i < rows; i++) {
    free(arr[i]);
}
free(arr);`,
      },
    ],
  },
  'preprocessor': {
    title: 'Preprocessor Directives',
    sections: [
      {
        heading: 'Introduction',
        content: 'Preprocessor directives are instructions to the compiler to preprocess the source code before compilation. They begin with # symbol.',
      },
      {
        heading: '#include Directive',
        content: 'Used to include header files in the program.',
        code: `// Include standard library
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Include user-defined header
#include "myheader.h"`,
        note: 'Use <> for standard headers and "" for user-defined headers.',
      },
      {
        heading: '#define Directive',
        subsections: [
          {
            subheading: 'Object-like Macros',
            code: `#define PI 3.14159
#define MAX_SIZE 100
#define GREETING "Hello, World!"

int main() {
    float radius = 5.0;
    float area = PI * radius * radius;
    printf("Area: %.2f\\n", area);
    return 0;
}`,
          },
          {
            subheading: 'Function-like Macros',
            code: `#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define IS_EVEN(n) ((n) % 2 == 0)

int main() {
    printf("Square of 5: %d\\n", SQUARE(5));
    printf("Max of 10 and 20: %d\\n", MAX(10, 20));
    printf("Is 4 even? %d\\n", IS_EVEN(4));
    return 0;
}`,
            note: 'Use parentheses in macros to avoid precedence issues.',
          },
        ],
      },
      {
        heading: '#undef Directive',
        content: 'Undefines a previously defined macro.',
        code: `#define MAX 100
printf("MAX: %d\\n", MAX);

#undef MAX
#define MAX 200
printf("New MAX: %d\\n", MAX);`,
      },
      {
        heading: 'Conditional Compilation',
        subsections: [
          {
            subheading: '#ifdef, #ifndef, #endif',
            code: `#define DEBUG

#ifdef DEBUG
    printf("Debug mode is ON\\n");
#endif

#ifndef RELEASE
    printf("Not in release mode\\n");
#endif`,
          },
          {
            subheading: '#if, #elif, #else',
            code: `#define VERSION 2

#if VERSION == 1
    printf("Version 1\\n");
#elif VERSION == 2
    printf("Version 2\\n");
#else
    printf("Unknown version\\n");
#endif`,
          },
        ],
      },
      {
        heading: 'Predefined Macros',
        code: `printf("File: %s\\n", __FILE__);
printf("Line: %d\\n", __LINE__);
printf("Date: %s\\n", __DATE__);
printf("Time: %s\\n", __TIME__);

#ifdef __STDC__
    printf("Standard C\\n");
#endif`,
      },
      {
        heading: 'Creating Header Files',
        code: `// mymath.h
#ifndef MYMATH_H
#define MYMATH_H

int add(int a, int b);
int subtract(int a, int b);

#endif

// mymath.c
#include "mymath.h"

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

// main.c
#include <stdio.h>
#include "mymath.h"

int main() {
    printf("Sum: %d\\n", add(10, 5));
    printf("Difference: %d\\n", subtract(10, 5));
    return 0;
}`,
        note: 'Use header guards (#ifndef, #define, #endif) to prevent multiple inclusion.',
      },
      {
        heading: 'Stringification (#)',
        code: `#define PRINT_VAR(x) printf(#x " = %d\\n", x)

int age = 25;
PRINT_VAR(age);  // Output: age = 25`,
      },
      {
        heading: 'Token Pasting (##)',
        code: `#define CONCAT(a, b) a##b

int xy = 100;
printf("%d\\n", CONCAT(x, y));  // Becomes xy, prints 100`,
      },
    ],
  },
  'error-handling': {
    title: 'Error Handling',
    sections: [
      {
        heading: 'errno Variable',
        content: 'errno is a global variable that stores error codes when library functions fail.',
        code: `#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    FILE *fp = fopen("nonexistent.txt", "r");
    
    if (fp == NULL) {
        printf("Error number: %d\\n", errno);
        printf("Error: %s\\n", strerror(errno));
    }
    
    return 0;
}`,
      },
      {
        heading: 'perror() Function',
        content: 'Prints a descriptive error message to stderr based on errno.',
        code: `#include <stdio.h>
#include <errno.h>

FILE *fp = fopen("test.txt", "r");

if (fp == NULL) {
    perror("Error opening file");
    // Output: Error opening file: No such file or directory
}`,
      },
      {
        heading: 'strerror() Function',
        content: 'Returns a pointer to the error message string corresponding to errno.',
        code: `#include <string.h>
#include <errno.h>

FILE *fp = fopen("data.txt", "r");

if (fp == NULL) {
    printf("Error: %s\\n", strerror(errno));
}`,
      },
      {
        heading: 'Custom Error Handling',
        code: `#include <stdio.h>
#include <stdlib.h>

enum ErrorCode {
    SUCCESS = 0,
    ERROR_FILE_NOT_FOUND = 1,
    ERROR_INVALID_INPUT = 2,
    ERROR_MEMORY_ALLOCATION = 3
};

int divide(int a, int b, int *result) {
    if (b == 0) {
        return ERROR_INVALID_INPUT;
    }
    *result = a / b;
    return SUCCESS;
}

int main() {
    int result;
    int status = divide(10, 0, &result);
    
    if (status == SUCCESS) {
        printf("Result: %d\\n", result);
    } else {
        printf("Error: Division by zero\\n");
    }
    
    return 0;
}`,
      },
      {
        heading: 'Error Handling Best Practices',
        points: [
          'Always check return values of functions',
          'Use meaningful error codes',
          'Provide descriptive error messages',
          'Clean up resources (close files, free memory) on error',
          'Log errors for debugging',
          'Handle errors at appropriate level',
        ],
        code: `#include <stdio.h>
#include <stdlib.h>

int* createArray(int size) {
    if (size <= 0) {
        fprintf(stderr, "Error: Invalid array size\\n");
        return NULL;
    }
    
    int *arr = (int*)malloc(size * sizeof(int));
    
    if (arr == NULL) {
        fprintf(stderr, "Error: Memory allocation failed\\n");
        return NULL;
    }
    
    return arr;
}

int main() {
    int *myArray = createArray(10);
    
    if (myArray == NULL) {
        return 1;  // Exit with error
    }
    
    // Use array
    for (int i = 0; i < 10; i++) {
        myArray[i] = i;
    }
    
    // Clean up
    free(myArray);
    
    return 0;  // Success
}`,
      },
      {
        heading: 'assert() Macro',
        content: 'Used for debugging, terminates program if condition is false.',
        code: `#include <assert.h>

void processArray(int *arr, int size) {
    assert(arr != NULL);  // Ensure array is not NULL
    assert(size > 0);     // Ensure size is positive
    
    for (int i = 0; i < size; i++) {
        // Process array
    }
}`,
        note: 'assert() is disabled when compiled with -DNDEBUG flag.',
      },
    ],
  },
  'command-line': {
    title: 'Command Line Arguments',
    sections: [
      {
        heading: 'Introduction',
        content: 'Command line arguments allow passing information to a program when it starts.',
      },
      {
        heading: 'argc and argv',
        points: [
          'argc: Argument count (number of arguments)',
          'argv: Argument vector (array of string pointers)',
          'argv[0]: Program name',
          'argv[1] to argv[argc-1]: Actual arguments',
        ],
        code: `#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Number of arguments: %d\\n", argc);
    
    printf("Arguments:\\n");
    for (int i = 0; i < argc; i++) {
        printf("argv[%d]: %s\\n", i, argv[i]);
    }
    
    return 0;
}

// Run: ./program hello world
// Output:
// Number of arguments: 3
// argv[0]: ./program
// argv[1]: hello
// argv[2]: world`,
      },
      {
        heading: 'Processing Arguments',
        code: `#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 3) {
        printf("Usage: %s <num1> <num2>\\n", argv[0]);
        return 1;
    }
    
    int num1 = atoi(argv[1]);
    int num2 = atoi(argv[2]);
    
    printf("Sum: %d\\n", num1 + num2);
    
    return 0;
}

// Run: ./program 10 20
// Output: Sum: 30`,
      },
    ],
  },
  'bit-manipulation': {
    title: 'Bit Manipulation',
    sections: [
      {
        heading: 'Bitwise Operators',
        points: [
          '& (AND): Sets bit to 1 if both bits are 1',
          '| (OR): Sets bit to 1 if at least one bit is 1',
          '^ (XOR): Sets bit to 1 if bits are different',
          '~ (NOT): Inverts all bits',
          '<< (Left shift): Shifts bits left',
          '>> (Right shift): Shifts bits right',
        ],
      },
      {
        heading: 'Common Bit Operations',
        code: `// Check if bit is set
int checkBit(int num, int pos) {
    return (num & (1 << pos)) != 0;
}

// Set a bit
int setBit(int num, int pos) {
    return num | (1 << pos);
}

// Clear a bit
int clearBit(int num, int pos) {
    return num & ~(1 << pos);
}

// Toggle a bit
int toggleBit(int num, int pos) {
    return num ^ (1 << pos);
}`,
      },
      {
        heading: 'Practical Applications',
        code: `// Check if power of 2
int isPowerOfTwo(int n) {
    return (n > 0) && ((n & (n - 1)) == 0);
}

// Count set bits
int countSetBits(int n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

// Swap without temp
void swap(int *a, int *b) {
    *a = *a ^ *b;
    *b = *a ^ *b;
    *a = *a ^ *b;
}`,
      },
    ],
  },
  'storage-classes': {
    title: 'Storage Classes',
    sections: [
      {
        heading: 'Introduction',
        content: 'Storage classes define the scope and lifetime of variables.',
        points: [
          'auto: Default for local variables',
          'register: CPU register storage',
          'static: Preserves value between calls',
          'extern: Global variable from another file',
        ],
      },
      {
        heading: 'static Storage Class',
        code: `void counter() {
    static int count = 0;  // Initialized once
    count++;
    printf("Count: %d\\n", count);
}

int main() {
    counter();  // Count: 1
    counter();  // Count: 2
    counter();  // Count: 3
    return 0;
}`,
      },
      {
        heading: 'extern Storage Class',
        code: `// global.c
int globalVariable = 100;

// main.c
extern int globalVariable;

int main() {
    printf("Value: %d\\n", globalVariable);
    return 0;
}`,
      },
    ],
  },
  'low-level': {
    title: 'Low-Level Concepts',
    sections: [
      {
        heading: 'Memory Layout',
        points: [
          'Text Segment: Executable code',
          'Data Segment: Initialized globals',
          'BSS Segment: Uninitialized globals',
          'Heap: Dynamic allocation',
          'Stack: Local variables',
        ],
      },
      {
        heading: 'Stack vs Heap',
        code: `void example() {
    int stack_var = 10;  // Stack
    
    int* heap_var = (int*)malloc(sizeof(int));  // Heap
    *heap_var = 20;
    
    free(heap_var);
}`,
      },
      {
        heading: 'volatile Keyword',
        content: 'Prevents compiler optimization for variables that may change unexpectedly.',
        code: `volatile int* hardwareReg = (int*)0x40000000;

int value = *hardwareReg;  // Always reads from memory`,
      },
    ],
  },
  'cpp-data-types': {
    title: 'C++ Data Types & Variables',
    sections: [
      {
        heading: 'Built-in Data Types',
        code: `int num = 10;
double pi = 3.14159;
char grade = 'A';
bool isValid = true;
string name = "Alice";`,
        language: 'cpp',
      },
      {
        heading: 'auto Keyword',
        code: `auto x = 5;        // int
auto y = 3.14;     // double
auto z = "Hello";  // const char*`,
        language: 'cpp',
      },
      {
        heading: 'Constants',
        code: `const int MAX = 100;
constexpr double PI = 3.14159;`,
        language: 'cpp',
      },
    ],
  },
  'cpp-control': {
    title: 'C++ Control Structures',
    sections: [
      {
        heading: 'Range-based For Loop',
        code: `#include <vector>
using namespace std;

vector<int> v = {1, 2, 3, 4, 5};

for (int x : v) {
    cout << x << " ";
}`,
        language: 'cpp',
      },
      {
        heading: 'if, switch, and loops',
        code: `// if-else
if (x > 0) {
    cout << "Positive" << endl;
} else {
    cout << "Non-positive" << endl;
}

// switch
switch (day) {
    case 1:
        cout << "Monday" << endl;
        break;
    default:
        cout << "Other day" << endl;
}

// while loop
while (i < 10) {
    cout << i << " ";
    i++;
}`,
        language: 'cpp',
      },
    ],
  },
  'const-correctness': {
    title: 'const Correctness',
    sections: [
      {
        heading: 'const Variables',
        code: `const int MAX = 100;
// MAX = 200;  // Error`,
        language: 'cpp',
      },
      {
        heading: 'const Member Functions',
        code: `class MyClass {
private:
    int value;
    
public:
    int getValue() const {
        // Cannot modify member variables
        return value;
    }
};`,
        language: 'cpp',
      },
      {
        heading: 'const Pointers',
        code: `const int* ptr1;     // Pointer to const int
int* const ptr2;     // Const pointer to int
const int* const ptr3;  // Const pointer to const int`,
        language: 'cpp',
      },
    ],
  },
  'cpp-file-handling': {
    title: 'C++ File Handling',
    sections: [
      {
        heading: 'File Streams',
        code: `#include <fstream>
using namespace std;

// Writing to file
ofstream outFile("output.txt");
outFile << "Hello, World!" << endl;
outFile.close();

// Reading from file
ifstream inFile("input.txt");
string line;
while (getline(inFile, line)) {
    cout << line << endl;
}
inFile.close();`,
        language: 'cpp',
      },
      {
        heading: 'Binary File Handling',
        code: `struct Student {
    int rollNo;
    char name[50];
    float marks;
};

// Write binary
ofstream outFile("data.dat", ios::binary);
Student s1 = {101, "Alice", 85.5};
outFile.write((char*)&s1, sizeof(Student));
outFile.close();

// Read binary
ifstream inFile("data.dat", ios::binary);
Student s2;
inFile.read((char*)&s2, sizeof(Student));
inFile.close();`,
        language: 'cpp',
      },
    ],
  },
  'multithreading': {
    title: 'Multithreading',
    sections: [
      {
        heading: 'Creating Threads',
        code: `#include <thread>
#include <iostream>
using namespace std;

void printNumbers() {
    for (int i = 0; i < 5; i++) {
        cout << i << " ";
    }
}

int main() {
    thread t1(printNumbers);
    thread t2(printNumbers);
    
    t1.join();
    t2.join();
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Mutex for Synchronization',
        code: `#include <mutex>
using namespace std;

mutex mtx;
int counter = 0;

void increment() {
    mtx.lock();
    counter++;
    mtx.unlock();
}`,
        language: 'cpp',
      },
    ],
  },
  'performance': {
    title: 'Performance & Memory',
    sections: [
      {
        heading: 'RAII Principle',
        content: 'Resource Acquisition Is Initialization - resources are tied to object lifetime.',
        code: `class File {
private:
    FILE* fp;
    
public:
    File(const char* filename) {
        fp = fopen(filename, "r");
    }
    
    ~File() {
        if (fp) fclose(fp);
    }
};`,
        language: 'cpp',
      },
    ],
  },
  'design-patterns': {
    title: 'Design Patterns',
    sections: [
      {
        heading: 'Singleton Pattern',
        code: `class Singleton {
private:
    static Singleton* instance;
    Singleton() {}
    
public:
    static Singleton* getInstance() {
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    }
};`,
        language: 'cpp',
      },
      {
        heading: 'Factory Pattern',
        code: `class Shape {
public:
    virtual void draw() = 0;
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Circle" << endl;
    }
};

class ShapeFactory {
public:
    static Shape* createShape(string type) {
        if (type == "circle") {
            return new Circle();
        }
        return nullptr;
    }
};`,
        language: 'cpp',
      },
    ],
  },
  'competitive-programming': {
    title: 'Competitive Programming',
    sections: [
      {
        heading: 'Fast I/O',
        code: `ios_base::sync_with_stdio(false);
cin.tie(NULL);`,
        language: 'cpp',
      },
      {
        heading: 'Time Complexity',
        points: [
          'O(1): Constant time',
          'O(log n): Logarithmic',
          'O(n): Linear',
          'O(n log n): Linearithmic',
          'O(n²): Quadratic',
          'O(2ⁿ): Exponential',
        ],
      },
      {
        heading: 'STL Tricks',
        code: `// Sorting in descending order
sort(v.begin(), v.end(), greater<int>());

// Binary search
auto it = lower_bound(v.begin(), v.end(), value);

// Unique elements
sort(v.begin(), v.end());
v.erase(unique(v.begin(), v.end()), v.end());`,
        language: 'cpp',
      },
    ],
  },
  'best-practices': {
    title: 'C++ Best Practices',
    sections: [
      {
        heading: 'Coding Standards',
        points: [
          'Use meaningful variable names',
          'Follow consistent naming conventions',
          'Write comments for complex logic',
          'Keep functions small and focused',
          'Use const correctness',
          'Prefer stack allocation over heap',
        ],
      },
      {
        heading: 'Memory Management',
        points: [
          'Use smart pointers instead of raw pointers',
          'Follow RAII principle',
          'Avoid memory leaks',
          'Delete what you allocate',
          'Use containers instead of manual arrays',
        ],
      },
      {
        heading: 'Modern C++ Features',
        code: `// Use auto
auto result = calculateValue();

// Use range-based loops
for (const auto& item : collection) {
    // Process item
}

// Use smart pointers
unique_ptr<MyClass> ptr = make_unique<MyClass>();

// Use lambdas
auto func = [](int x) { return x * 2; };`,
        language: 'cpp',
      },
    ],
  },
};