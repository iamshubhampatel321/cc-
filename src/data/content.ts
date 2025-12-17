import { extendedTopicsContent } from './content-extended';
import { cppTopicsContent } from './content-cpp';

export interface ContentSection {
  heading?: string;
  content?: string;
  points?: string[];
  code?: string;
  language?: string;
  note?: string;
  subsections?: {
    subheading?: string;
    content?: string;
    code?: string;
    language?: string;
  }[];
}

export interface TopicContent {
  title: string;
  sections: ContentSection[];
}

const baseTopicsContent: Record<string, TopicContent> = {
  'intro-c': {
    title: 'Introduction to C',
    sections: [
      {
        heading: 'History of C',
        content: 'C was developed by Dennis Ritchie at Bell Labs between 1972-1973. It was created to develop the UNIX operating system. C is considered a middle-level language as it combines features of both high-level and low-level languages.',
      },
      {
        heading: 'Features of C',
        points: [
          'Simple and Efficient: C has a small set of keywords and is easy to learn',
          'Portable: Programs written in C can run on different machines with little or no modification',
          'Fast: C programs are compiled and execute quickly',
          'Structured: Supports structured programming with functions',
          'Rich Library: Provides many built-in functions',
          'Low-level Access: Can manipulate bits, bytes, and memory addresses',
        ],
      },
      {
        heading: 'Applications of C',
        points: [
          'Operating Systems (UNIX, Linux, Windows)',
          'Embedded Systems',
          'System Software',
          'Database Systems',
          'Compilers and Interpreters',
          'Network Drivers',
        ],
      },
      {
        heading: 'Structure of a C Program',
        content: 'A basic C program consists of preprocessor directives, main function, variable declarations, and statements.',
        code: `#include <stdio.h>

int main() {
    // Variable declaration
    int num = 10;
    
    // Print statement
    printf("Hello, World!\\n");
    printf("Number: %d\\n", num);
    
    return 0;
}`,
        language: 'c',
      },
      {
        heading: 'Compilation Process',
        content: 'The C compilation process involves four stages:',
        points: [
          'Preprocessing: Handles directives like #include, #define',
          'Compilation: Converts source code to assembly code',
          'Assembly: Converts assembly code to object code',
          'Linking: Links object files and libraries to create executable',
        ],
        note: 'Use gcc compiler: gcc program.c -o program',
      },
      {
        heading: 'C Standards',
        points: [
          'C89/C90 (ANSI C): First standardized version',
          'C99: Added inline functions, variable-length arrays, new data types',
          'C11: Added multi-threading support, improved Unicode support',
          'C17/C18: Bug fixes and clarifications to C11',
        ],
      },
    ],
  },
  'data-types': {
    title: 'Data Types & Variables',
    sections: [
      {
        heading: 'Keywords & Identifiers',
        content: 'Keywords are reserved words in C that have special meaning. Identifiers are names given to variables, functions, and other user-defined items.',
        points: [
          'Keywords: int, float, if, else, while, for, return, etc.',
          'Identifiers: Must start with letter or underscore, can contain letters, digits, and underscores',
          'C has 32 keywords that cannot be used as identifiers',
        ],
      },
      {
        heading: 'Basic Data Types',
        subsections: [
          {
            subheading: 'int (Integer)',
            content: 'Used to store whole numbers. Size: typically 4 bytes (32 bits)',
            code: `int age = 25;
int marks = 95;
printf("Age: %d, Marks: %d\\n", age, marks);`,
          },
          {
            subheading: 'float (Floating Point)',
            content: 'Used to store decimal numbers. Size: 4 bytes, precision: 6 decimal places',
            code: `float price = 99.99;
float pi = 3.14159;
printf("Price: %.2f, Pi: %.5f\\n", price, pi);`,
          },
          {
            subheading: 'double',
            content: 'Used to store double precision floating point numbers. Size: 8 bytes, precision: 15 decimal places',
            code: `double distance = 384400.5;
printf("Distance: %.2lf km\\n", distance);`,
          },
          {
            subheading: 'char (Character)',
            content: 'Used to store single characters. Size: 1 byte',
            code: `char grade = 'A';
char initial = 'J';
printf("Grade: %c, Initial: %c\\n", grade, initial);`,
          },
        ],
      },
      {
        heading: 'Data Type Modifiers',
        content: 'Modifiers change the meaning of base data types to fit various situations.',
        code: `// Signed and Unsigned
signed int num1 = -100;      // Can store negative values
unsigned int num2 = 100;     // Only positive values

// Short and Long
short int small = 32000;     // 2 bytes
long int big = 2147483647;   // 4 or 8 bytes
long long huge = 9223372036854775807LL;  // 8 bytes

// Size examples
printf("Size of int: %zu bytes\\n", sizeof(int));
printf("Size of short: %zu bytes\\n", sizeof(short));
printf("Size of long: %zu bytes\\n", sizeof(long));`,
      },
      {
        heading: 'Constants & Literals',
        subsections: [
          {
            subheading: 'Constants using const',
            code: `const int MAX_SIZE = 100;
const float PI = 3.14159;
// MAX_SIZE = 200;  // Error: cannot modify const`,
          },
          {
            subheading: 'Using #define',
            code: `#define MAX_VALUE 1000
#define GREETING "Hello"

int main() {
    printf("%s, Max value: %d\\n", GREETING, MAX_VALUE);
    return 0;
}`,
          },
          {
            subheading: 'Types of Literals',
            code: `// Integer literals
int decimal = 100;
int octal = 0144;      // Prefix with 0
int hex = 0x64;        // Prefix with 0x

// Floating point literals
float f1 = 3.14;
float f2 = 3.14e2;     // Scientific notation: 314.0

// Character literals
char c1 = 'A';
char c2 = '\\n';       // Escape sequence

// String literals
char str[] = "Hello, World!";`,
          },
        ],
      },
      {
        heading: 'Type Conversion & Casting',
        subsections: [
          {
            subheading: 'Implicit Conversion',
            content: 'Automatic conversion by compiler from lower to higher data type.',
            code: `int x = 10;
float y = 5.5;
float result = x + y;  // x is converted to float
printf("Result: %.2f\\n", result);`,
          },
          {
            subheading: 'Explicit Casting',
            content: 'Manual conversion using cast operator.',
            code: `float f = 9.7;
int i = (int)f;  // Explicit cast: i = 9

int a = 10, b = 3;
float division = (float)a / b;  // Result: 3.333333
printf("Division: %.2f\\n", division);`,
          },
        ],
      },
      {
        heading: 'sizeof Operator',
        content: 'Returns the size of a data type or variable in bytes.',
        code: `printf("Size of char: %zu byte\\n", sizeof(char));
printf("Size of int: %zu bytes\\n", sizeof(int));
printf("Size of float: %zu bytes\\n", sizeof(float));
printf("Size of double: %zu bytes\\n", sizeof(double));

int arr[10];
printf("Size of array: %zu bytes\\n", sizeof(arr));`,
      },
    ],
  },
  'operators': {
    title: 'Operators',
    sections: [
      {
        heading: 'Arithmetic Operators',
        content: 'Used to perform basic mathematical operations.',
        code: `int a = 10, b = 3;

printf("Addition: %d + %d = %d\\n", a, b, a + b);      // 13
printf("Subtraction: %d - %d = %d\\n", a, b, a - b);   // 7
printf("Multiplication: %d * %d = %d\\n", a, b, a * b); // 30
printf("Division: %d / %d = %d\\n", a, b, a / b);      // 3
printf("Modulus: %d %% %d = %d\\n", a, b, a % b);      // 1`,
      },
      {
        heading: 'Relational Operators',
        content: 'Used to compare two values. Returns 1 (true) or 0 (false).',
        code: `int x = 10, y = 20;

printf("x == y: %d\\n", x == y);  // Equal to: 0
printf("x != y: %d\\n", x != y);  // Not equal to: 1
printf("x > y: %d\\n", x > y);    // Greater than: 0
printf("x < y: %d\\n", x < y);    // Less than: 1
printf("x >= y: %d\\n", x >= y);  // Greater than or equal: 0
printf("x <= y: %d\\n", x <= y);  // Less than or equal: 1`,
      },
      {
        heading: 'Logical Operators',
        content: 'Used to combine conditional statements.',
        code: `int a = 1, b = 0;

printf("a && b: %d\\n", a && b);  // Logical AND: 0
printf("a || b: %d\\n", a || b);  // Logical OR: 1
printf("!a: %d\\n", !a);          // Logical NOT: 0

// Example with conditions
int age = 25;
if (age >= 18 && age <= 60) {
    printf("Eligible for work\\n");
}`,
      },
      {
        heading: 'Assignment Operators',
        code: `int x = 10;

x += 5;   // x = x + 5; x becomes 15
x -= 3;   // x = x - 3; x becomes 12
x *= 2;   // x = x * 2; x becomes 24
x /= 4;   // x = x / 4; x becomes 6
x %= 4;   // x = x % 4; x becomes 2

printf("Final value of x: %d\\n", x);`,
      },
      {
        heading: 'Increment & Decrement Operators',
        subsections: [
          {
            subheading: 'Post-increment and Post-decrement',
            code: `int a = 5;
printf("a = %d\\n", a);       // 5
printf("a++ = %d\\n", a++);   // 5 (use then increment)
printf("a = %d\\n", a);       // 6`,
          },
          {
            subheading: 'Pre-increment and Pre-decrement',
            code: `int b = 5;
printf("b = %d\\n", b);       // 5
printf("++b = %d\\n", ++b);   // 6 (increment then use)
printf("b = %d\\n", b);       // 6`,
          },
        ],
      },
      {
        heading: 'Bitwise Operators',
        content: 'Operate on bits and perform bit-by-bit operations.',
        code: `int a = 5;   // Binary: 0101
int b = 3;   // Binary: 0011

printf("a & b = %d\\n", a & b);   // AND: 1 (0001)
printf("a | b = %d\\n", a | b);   // OR: 7 (0111)
printf("a ^ b = %d\\n", a ^ b);   // XOR: 6 (0110)
printf("~a = %d\\n", ~a);         // NOT: -6
printf("a << 1 = %d\\n", a << 1); // Left shift: 10 (1010)
printf("a >> 1 = %d\\n", a >> 1); // Right shift: 2 (0010)`,
      },
      {
        heading: 'Ternary Operator',
        content: 'A shorthand for if-else statement. Syntax: condition ? expression1 : expression2',
        code: `int a = 10, b = 20;
int max = (a > b) ? a : b;
printf("Maximum: %d\\n", max);

// Multiple ternary operators
int num = 0;
char* result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
printf("Number is %s\\n", result);`,
      },
      {
        heading: 'Operator Precedence & Associativity',
        content: 'Determines the order in which operators are evaluated in an expression.',
        code: `int result = 10 + 20 * 3;  // Multiplication first: 70

// Use parentheses to change precedence
int result2 = (10 + 20) * 3;  // Addition first: 90

// Precedence order (highest to lowest):
// 1. () [] -> .
// 2. ! ~ ++ -- + - * & (unary) sizeof
// 3. * / %
// 4. + -
// 5. << >>
// 6. < <= > >=
// 7. == !=
// 8. &
// 9. ^
// 10. |
// 11. &&
// 12. ||
// 13. ?:
// 14. = += -= *= /= etc.`,
        note: 'When in doubt, use parentheses to make your intention clear.',
      },
    ],
  },
  'control-statements': {
    title: 'Control Statements',
    sections: [
      {
        heading: 'if Statement',
        content: 'Executes a block of code if a specified condition is true.',
        code: `int age = 18;

if (age >= 18) {
    printf("You are eligible to vote\\n");
}`,
      },
      {
        heading: 'if-else Statement',
        code: `int number = -5;

if (number >= 0) {
    printf("Number is positive\\n");
} else {
    printf("Number is negative\\n");
}`,
      },
      {
        heading: 'Nested if-else',
        code: `int marks = 85;

if (marks >= 90) {
    printf("Grade: A+\\n");
} else if (marks >= 80) {
    printf("Grade: A\\n");
} else if (marks >= 70) {
    printf("Grade: B\\n");
} else if (marks >= 60) {
    printf("Grade: C\\n");
} else {
    printf("Grade: F\\n");
}`,
      },
      {
        heading: 'switch Statement',
        content: 'Allows a variable to be tested for equality against a list of values.',
        code: `int day = 3;

switch (day) {
    case 1:
        printf("Monday\\n");
        break;
    case 2:
        printf("Tuesday\\n");
        break;
    case 3:
        printf("Wednesday\\n");
        break;
    case 4:
        printf("Thursday\\n");
        break;
    case 5:
        printf("Friday\\n");
        break;
    case 6:
        printf("Saturday\\n");
        break;
    case 7:
        printf("Sunday\\n");
        break;
    default:
        printf("Invalid day\\n");
}`,
        note: 'Always use break to prevent fall-through unless intentional.',
      },
      {
        heading: 'while Loop',
        content: 'Repeats a block of code as long as the condition is true.',
        code: `int i = 1;

while (i <= 5) {
    printf("%d ", i);
    i++;
}
// Output: 1 2 3 4 5`,
      },
      {
        heading: 'do-while Loop',
        content: 'Executes the code block once before checking the condition.',
        code: `int i = 1;

do {
    printf("%d ", i);
    i++;
} while (i <= 5);
// Output: 1 2 3 4 5

// Example: Menu-driven program
int choice;
do {
    printf("\\n1. Add\\n2. Subtract\\n3. Exit\\n");
    printf("Enter choice: ");
    scanf("%d", &choice);
    
    if (choice != 3) {
        printf("Processing...\\n");
    }
} while (choice != 3);`,
      },
      {
        heading: 'for Loop',
        content: 'Used when the number of iterations is known.',
        code: `// Basic for loop
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
// Output: 1 2 3 4 5

// Nested for loop - multiplication table
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("%d * %d = %d\\n", i, j, i * j);
    }
}`,
      },
      {
        heading: 'break Statement',
        content: 'Terminates the loop or switch statement immediately.',
        code: `// Finding first even number
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        printf("First even number: %d\\n", i);
        break;  // Exit loop
    }
}`,
      },
      {
        heading: 'continue Statement',
        content: 'Skips the current iteration and continues with the next iteration.',
        code: `// Print only odd numbers
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    printf("%d ", i);
}
// Output: 1 3 5 7 9`,
      },
      {
        heading: 'goto Statement',
        content: 'Transfers control to a labeled statement. Generally discouraged.',
        code: `int num = 10;

if (num < 0) {
    goto error;
}

printf("Number is valid\\n");
goto end;

error:
    printf("Error: Number is negative\\n");

end:
    printf("Program finished\\n");`,
        note: 'Use goto sparingly. It can make code difficult to read and maintain.',
      },
    ],
  },
  'functions': {
    title: 'Functions',
    sections: [
      {
        heading: 'Function Basics',
        content: 'A function is a block of code that performs a specific task. Functions help in code reusability and organization.',
        code: `// Function declaration (prototype)
int add(int a, int b);

int main() {
    int result = add(10, 20);
    printf("Sum: %d\\n", result);
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`,
      },
      {
        heading: 'Function Components',
        points: [
          'Return Type: Data type of value returned (int, float, void, etc.)',
          'Function Name: Identifier for the function',
          'Parameters: Input values (optional)',
          'Function Body: Block of code to execute',
          'Return Statement: Sends value back to caller (optional for void)',
        ],
      },
      {
        heading: 'Types of Functions',
        subsections: [
          {
            subheading: 'Function with no arguments and no return value',
            code: `void greet() {
    printf("Hello, World!\\n");
}

int main() {
    greet();
    return 0;
}`,
          },
          {
            subheading: 'Function with arguments but no return value',
            code: `void printSum(int a, int b) {
    printf("Sum: %d\\n", a + b);
}

int main() {
    printSum(5, 10);
    return 0;
}`,
          },
          {
            subheading: 'Function with arguments and return value',
            code: `int multiply(int a, int b) {
    return a * b;
}

int main() {
    int result = multiply(4, 5);
    printf("Product: %d\\n", result);
    return 0;
}`,
          },
          {
            subheading: 'Function with no arguments but return value',
            code: `int getNumber() {
    return 42;
}

int main() {
    int num = getNumber();
    printf("Number: %d\\n", num);
    return 0;
}`,
          },
        ],
      },
      {
        heading: 'Call by Value',
        content: 'In call by value, a copy of the actual parameter is passed to the function. Changes made to the parameter inside the function do not affect the original value.',
        code: `void modify(int x) {
    x = 100;
    printf("Inside function: %d\\n", x);  // 100
}

int main() {
    int num = 10;
    modify(num);
    printf("After function: %d\\n", num);  // 10 (unchanged)
    return 0;
}`,
      },
      {
        heading: 'Recursion',
        content: 'A function that calls itself is called a recursive function.',
        subsections: [
          {
            subheading: 'Factorial using Recursion',
            code: `int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive call
}

int main() {
    int num = 5;
    printf("Factorial of %d is %d\\n", num, factorial(num));
    // Output: 120
    return 0;
}`,
          },
          {
            subheading: 'Fibonacci using Recursion',
            code: `int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    printf("Fibonacci series: ");
    for (int i = 0; i < 10; i++) {
        printf("%d ", fibonacci(i));
    }
    // Output: 0 1 1 2 3 5 8 13 21 34
    return 0;
}`,
          },
        ],
        note: 'Recursion needs a base case to stop, otherwise it will result in infinite recursion.',
      },
      {
        heading: 'Function Examples',
        code: `// Check if number is prime
int isPrime(int num) {
    if (num <= 1) return 0;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return 0;
    }
    return 1;
}

// Find maximum of three numbers
int max(int a, int b, int c) {
    int maximum = a;
    if (b > maximum) maximum = b;
    if (c > maximum) maximum = c;
    return maximum;
}

// Swap two numbers (call by reference using pointers)
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}`,
      },
    ],
  },
  'arrays': {
    title: 'Arrays',
    sections: [
      {
        heading: 'Introduction to Arrays',
        content: 'An array is a collection of elements of the same data type stored in contiguous memory locations. Arrays allow you to store multiple values in a single variable.',
      },
      {
        heading: 'One-Dimensional Arrays',
        subsections: [
          {
            subheading: 'Declaration and Initialization',
            code: `// Declaration
int numbers[5];

// Initialization during declaration
int marks[5] = {85, 90, 78, 92, 88};

// Partial initialization (rest are 0)
int arr[5] = {1, 2, 3};  // {1, 2, 3, 0, 0}

// Without size (compiler determines size)
int values[] = {10, 20, 30, 40};  // Size is 4`,
          },
          {
            subheading: 'Accessing Array Elements',
            code: `int arr[5] = {10, 20, 30, 40, 50};

// Access using index (0-based)
printf("First element: %d\\n", arr[0]);   // 10
printf("Third element: %d\\n", arr[2]);   // 30

// Modify elements
arr[1] = 25;
printf("Modified second element: %d\\n", arr[1]);  // 25`,
          },
          {
            subheading: 'Traversing an Array',
            code: `int numbers[5] = {1, 2, 3, 4, 5};

// Using for loop
for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}

// Calculate sum
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += numbers[i];
}
printf("\\nSum: %d\\n", sum);`,
          },
        ],
      },
      {
        heading: 'Two-Dimensional Arrays',
        content: 'A 2D array is an array of arrays, often used to represent matrices or tables.',
        subsections: [
          {
            subheading: 'Declaration and Initialization',
            code: `// Declaration
int matrix[3][3];

// Initialization
int mat[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Alternative initialization
int mat2[2][3] = {1, 2, 3, 4, 5, 6};`,
          },
          {
            subheading: 'Accessing 2D Array Elements',
            code: `int mat[2][3] = {{1, 2, 3}, {4, 5, 6}};

// Access element at row 1, column 2
printf("Element: %d\\n", mat[1][2]);  // 6

// Nested loop to traverse
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", mat[i][j]);
    }
    printf("\\n");
}`,
          },
        ],
      },
      {
        heading: 'Multi-Dimensional Arrays',
        code: `// 3D Array
int cube[2][3][4];

// Initialize 3D array
int arr3d[2][2][2] = {
    {{1, 2}, {3, 4}},
    {{5, 6}, {7, 8}}
};

// Access element
printf("%d\\n", arr3d[1][0][1]);  // 6`,
      },
      {
        heading: 'Passing Arrays to Functions',
        code: `// Pass 1D array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// Pass 2D array
void print2DArray(int arr[][3], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\\n");
    }
}

int main() {
    int arr1d[5] = {1, 2, 3, 4, 5};
    int arr2d[2][3] = {{1, 2, 3}, {4, 5, 6}};
    
    printArray(arr1d, 5);
    print2DArray(arr2d, 2);
    
    return 0;
}`,
        note: 'Arrays are passed by reference (address) to functions, so modifications affect the original array.',
      },
      {
        heading: 'Common Array Operations',
        code: `// Find maximum element
int findMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Reverse an array
void reverseArray(int arr[], int size) {
    for (int i = 0; i < size / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = temp;
    }
}

// Linear search
int linearSearch(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            return i;  // Return index
        }
    }
    return -1;  // Not found
}`,
      },
    ],
  },
  'strings': {
    title: 'Strings',
    sections: [
      {
        heading: 'Introduction to Strings',
        content: 'In C, a string is an array of characters terminated by a null character (\\0). Strings are used to store and manipulate text.',
        code: `// String declaration and initialization
char str1[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
char str2[] = "Hello";  // Automatically adds \\0
char str3[20] = "World";  // Size 20, but stores "World\\0"

printf("%s\\n", str2);  // Output: Hello`,
      },
      {
        heading: 'String Input/Output',
        code: `char name[50];

// Using scanf (reads until whitespace)
printf("Enter your first name: ");
scanf("%s", name);
printf("Hello, %s!\\n", name);

// Using gets (deprecated, unsafe)
// gets(name);

// Using fgets (safer alternative)
printf("Enter your full name: ");
fgets(name, sizeof(name), stdin);
printf("Hello, %s", name);

// Clear input buffer
while (getchar() != '\\n');`,
        note: 'Use fgets() instead of gets() as it prevents buffer overflow.',
      },
      {
        heading: 'String Handling Functions',
        subsections: [
          {
            subheading: 'strlen() - String Length',
            code: `#include <string.h>

char str[] = "Hello";
int len = strlen(str);
printf("Length: %d\\n", len);  // 5`,
          },
          {
            subheading: 'strcpy() - String Copy',
            code: `#include <string.h>

char source[] = "Hello";
char destination[20];

strcpy(destination, source);
printf("Copied string: %s\\n", destination);`,
          },
          {
            subheading: 'strcat() - String Concatenation',
            code: `#include <string.h>

char str1[50] = "Hello ";
char str2[] = "World";

strcat(str1, str2);
printf("Concatenated: %s\\n", str1);  // Hello World`,
          },
          {
            subheading: 'strcmp() - String Comparison',
            code: `#include <string.h>

char str1[] = "Apple";
char str2[] = "Banana";
char str3[] = "Apple";

int result1 = strcmp(str1, str2);  // Negative (str1 < str2)
int result2 = strcmp(str1, str3);  // 0 (equal)
int result3 = strcmp(str2, str1);  // Positive (str2 > str1)

if (strcmp(str1, str3) == 0) {
    printf("Strings are equal\\n");
}`,
          },
          {
            subheading: 'Other String Functions',
            code: `#include <string.h>

// strncpy - Copy n characters
char dest[20];
strncpy(dest, "Hello World", 5);
dest[5] = '\\0';
printf("%s\\n", dest);  // Hello

// strncat - Concatenate n characters
char str[20] = "Hello";
strncat(str, " World!", 6);

// strstr - Find substring
char text[] = "Hello World";
char *ptr = strstr(text, "World");
if (ptr != NULL) {
    printf("Found at: %ld\\n", ptr - text);
}

// strchr - Find character
char *ch = strchr(text, 'W');
if (ch != NULL) {
    printf("Character found: %c\\n", *ch);
}`,
          },
        ],
      },
      {
        heading: 'String Manipulation Examples',
        code: `// Convert string to uppercase
void toUpper(char str[]) {
    for (int i = 0; str[i] != '\\0'; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            str[i] = str[i] - 32;
        }
    }
}

// Reverse a string
void reverseString(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        char temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
}

// Check if palindrome
int isPalindrome(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            return 0;
        }
    }
    return 1;
}

// Count vowels
int countVowels(char str[]) {
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        char ch = tolower(str[i]);
        if (ch == 'a' || ch == 'e' || ch == 'i' || 
            ch == 'o' || ch == 'u') {
            count++;
        }
    }
    return count;
}`,
      },
      {
        heading: 'Array of Strings',
        code: `// 2D character array
char names[3][20] = {
    "Alice",
    "Bob",
    "Charlie"
};

// Print all names
for (int i = 0; i < 3; i++) {
    printf("%d. %s\\n", i + 1, names[i]);
}

// Array of pointers to strings
char *fruits[] = {
    "Apple",
    "Banana",
    "Orange"
};

for (int i = 0; i < 3; i++) {
    printf("%s\\n", fruits[i]);
}`,
      },
    ],
  },
  'pointers': {
    title: 'Pointers',
    sections: [
      {
        heading: 'Pointer Basics',
        content: 'A pointer is a variable that stores the memory address of another variable. Pointers are powerful features of C that allow direct memory manipulation.',
        code: `int num = 10;
int *ptr;  // Pointer declaration

ptr = &num;  // Store address of num

printf("Value of num: %d\\n", num);
printf("Address of num: %p\\n", &num);
printf("Value of ptr: %p\\n", ptr);
printf("Value at address stored in ptr: %d\\n", *ptr);`,
      },
      {
        heading: 'Pointer Operations',
        subsections: [
          {
            subheading: 'Address Operator (&)',
            code: `int x = 5;
printf("Address of x: %p\\n", &x);`,
          },
          {
            subheading: 'Dereference Operator (*)',
            code: `int y = 10;
int *p = &y;

printf("Value through pointer: %d\\n", *p);  // 10
*p = 20;  // Change value at address
printf("New value of y: %d\\n", y);  // 20`,
          },
        ],
      },
      {
        heading: 'Pointer Arithmetic',
        code: `int arr[5] = {10, 20, 30, 40, 50};
int *ptr = arr;  // Points to first element

printf("First element: %d\\n", *ptr);      // 10
printf("Second element: %d\\n", *(ptr+1)); // 20
printf("Third element: %d\\n", *(ptr+2));  // 30

// Increment pointer
ptr++;
printf("After increment: %d\\n", *ptr);  // 20

// Pointer subtraction
int *p1 = &arr[4];
int *p2 = &arr[1];
printf("Difference: %ld\\n", p1 - p2);  // 3`,
      },
      {
        heading: 'Pointers and Arrays',
        content: 'Array name is a constant pointer to the first element.',
        code: `int numbers[5] = {1, 2, 3, 4, 5};
int *p = numbers;

// Access using array notation
printf("numbers[0]: %d\\n", numbers[0]);

// Access using pointer notation
printf("*p: %d\\n", *p);
printf("*(p+2): %d\\n", *(p+2));

// Array traversal using pointer
for (int i = 0; i < 5; i++) {
    printf("%d ", *(p + i));
}`,
      },
      {
        heading: 'Pointers and Functions',
        subsections: [
          {
            subheading: 'Call by Reference',
            code: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before: x=%d, y=%d\\n", x, y);
    
    swap(&x, &y);
    
    printf("After: x=%d, y=%d\\n", x, y);
    return 0;
}`,
          },
          {
            subheading: 'Returning Multiple Values',
            code: `void calculate(int a, int b, int *sum, int *product) {
    *sum = a + b;
    *product = a * b;
}

int main() {
    int s, p;
    calculate(5, 3, &s, &p);
    printf("Sum: %d, Product: %d\\n", s, p);
    return 0;
}`,
          },
        ],
      },
      {
        heading: 'Pointer to Pointer (Double Pointer)',
        code: `int num = 10;
int *ptr = &num;
int **pptr = &ptr;

printf("Value of num: %d\\n", num);
printf("Value using pointer: %d\\n", *ptr);
printf("Value using double pointer: %d\\n", **pptr);

printf("Address of num: %p\\n", &num);
printf("Value of ptr: %p\\n", ptr);
printf("Address of ptr: %p\\n", &ptr);
printf("Value of pptr: %p\\n", pptr);`,
      },
      {
        heading: 'NULL Pointer',
        content: 'A pointer that doesn\'t point to any valid memory location.',
        code: `int *ptr = NULL;

if (ptr == NULL) {
    printf("Pointer is NULL\\n");
}

// Always check before dereferencing
if (ptr != NULL) {
    printf("%d\\n", *ptr);
} else {
    printf("Cannot dereference NULL pointer\\n");
}`,
      },
      {
        heading: 'Dangling Pointer',
        content: 'A pointer that points to memory that has been freed or deallocated.',
        code: `int *ptr;
{
    int x = 10;
    ptr = &x;
}  // x goes out of scope, ptr is now dangling

// Avoid using dangling pointers
// Set to NULL after freeing
ptr = NULL;`,
        note: 'Always initialize pointers and set them to NULL after freeing memory.',
      },
      {
        heading: 'Pointer to Array',
        code: `int arr[3] = {10, 20, 30};
int (*ptr)[3] = &arr;  // Pointer to entire array

printf("First element: %d\\n", (*ptr)[0]);
printf("Second element: %d\\n", (*ptr)[1]);

// Difference between int *p and int (*p)[3]
int *p1 = arr;      // Pointer to first element
int (*p2)[3] = &arr; // Pointer to entire array`,
      },
    ],
  },
  'structures': {
    title: 'Structures & Unions',
    sections: [
      {
        heading: 'Introduction to Structures',
        content: 'A structure is a user-defined data type that groups related variables of different data types under a single name.',
        code: `// Define a structure
struct Student {
    int rollNo;
    char name[50];
    float marks;
};

// Declare structure variables
struct Student s1, s2;

// Initialize during declaration
struct Student s3 = {101, "John", 85.5};`,
      },
      {
        heading: 'Accessing Structure Members',
        code: `struct Student s1;

// Using dot operator
s1.rollNo = 101;
strcpy(s1.name, "Alice");
s1.marks = 92.5;

printf("Roll No: %d\\n", s1.rollNo);
printf("Name: %s\\n", s1.name);
printf("Marks: %.2f\\n", s1.marks);`,
      },
      {
        heading: 'Nested Structures',
        code: `struct Date {
    int day;
    int month;
    int year;
};

struct Employee {
    int id;
    char name[50];
    struct Date joinDate;
    float salary;
};

struct Employee emp1;
emp1.id = 1001;
strcpy(emp1.name, "Bob");
emp1.joinDate.day = 15;
emp1.joinDate.month = 3;
emp1.joinDate.year = 2020;
emp1.salary = 50000.0;

printf("Join Date: %d/%d/%d\\n", 
    emp1.joinDate.day, 
    emp1.joinDate.month, 
    emp1.joinDate.year);`,
      },
      {
        heading: 'Array of Structures',
        code: `struct Student {
    int rollNo;
    char name[50];
    float marks;
};

struct Student students[3] = {
    {101, "Alice", 85.5},
    {102, "Bob", 90.0},
    {103, "Charlie", 78.5}
};

// Access array of structures
for (int i = 0; i < 3; i++) {
    printf("Roll: %d, Name: %s, Marks: %.2f\\n",
        students[i].rollNo,
        students[i].name,
        students[i].marks);
}`,
      },
      {
        heading: 'Pointers to Structures',
        code: `struct Student {
    int rollNo;
    char name[50];
    float marks;
};

struct Student s1 = {101, "Alice", 85.5};
struct Student *ptr = &s1;

// Access using arrow operator
printf("Roll No: %d\\n", ptr->rollNo);
printf("Name: %s\\n", ptr->name);
printf("Marks: %.2f\\n", ptr->marks);

// Alternative: using dereference
printf("Roll No: %d\\n", (*ptr).rollNo);`,
      },
      {
        heading: 'Structures and Functions',
        code: `struct Rectangle {
    int length;
    int width;
};

// Pass structure by value
int calculateArea(struct Rectangle r) {
    return r.length * r.width;
}

// Pass structure by reference
void modifyRectangle(struct Rectangle *r) {
    r->length = 20;
    r->width = 15;
}

int main() {
    struct Rectangle rect = {10, 5};
    
    printf("Area: %d\\n", calculateArea(rect));
    
    modifyRectangle(&rect);
    printf("New dimensions: %d x %d\\n", rect.length, rect.width);
    
    return 0;
}`,
      },
      {
        heading: 'Unions',
        content: 'A union is similar to a structure but all members share the same memory location. Only one member can hold a value at any given time.',
        code: `union Data {
    int intVal;
    float floatVal;
    char charVal;
};

union Data d;

d.intVal = 10;
printf("Integer: %d\\n", d.intVal);

d.floatVal = 3.14;  // Overwrites intVal
printf("Float: %.2f\\n", d.floatVal);

d.charVal = 'A';    // Overwrites floatVal
printf("Char: %c\\n", d.charVal);

printf("Size of union: %zu bytes\\n", sizeof(d));`,
      },
      {
        heading: 'Structure vs Union',
        points: [
          'Structure: Each member has its own memory location',
          'Union: All members share the same memory location',
          'Structure size: Sum of all member sizes (plus padding)',
          'Union size: Size of largest member',
          'Structure: All members can be accessed simultaneously',
          'Union: Only one member can be accessed at a time',
        ],
        code: `struct TestStruct {
    int a;
    float b;
    char c;
};

union TestUnion {
    int a;
    float b;
    char c;
};

printf("Size of structure: %zu\\n", sizeof(struct TestStruct));
printf("Size of union: %zu\\n", sizeof(union TestUnion));`,
      },
      {
        heading: 'typedef with Structures',
        code: `// Using typedef
typedef struct {
    int rollNo;
    char name[50];
    float marks;
} Student;

// Now we can declare without 'struct' keyword
Student s1, s2;
s1.rollNo = 101;
strcpy(s1.name, "Alice");
s1.marks = 85.5;

// typedef with existing structure
struct Point {
    int x;
    int y;
};
typedef struct Point Point;

Point p1 = {10, 20};`,
      },
    ],
  },
  'enums': {
    title: 'Enumerations & Typedef',
    sections: [
      {
        heading: 'Enumeration (enum)',
        content: 'An enumeration is a user-defined data type consisting of named integer constants.',
        code: `// Define enum
enum Days {
    MONDAY,     // 0
    TUESDAY,    // 1
    WEDNESDAY,  // 2
    THURSDAY,   // 3
    FRIDAY,     // 4
    SATURDAY,   // 5
    SUNDAY      // 6
};

enum Days today = WEDNESDAY;

if (today == WEDNESDAY) {
    printf("It's Wednesday!\\n");
}`,
      },
      {
        heading: 'Custom Enum Values',
        code: `enum Status {
    SUCCESS = 1,
    FAILURE = 0,
    PENDING = 2,
    ERROR = -1
};

enum Status result = SUCCESS;

switch (result) {
    case SUCCESS:
        printf("Operation successful\\n");
        break;
    case FAILURE:
        printf("Operation failed\\n");
        break;
    case PENDING:
        printf("Operation pending\\n");
        break;
    case ERROR:
        printf("Error occurred\\n");
        break;
}`,
      },
      {
        heading: 'Enum in Switch Statement',
        code: `enum Color {RED, GREEN, BLUE, YELLOW};

void printColor(enum Color c) {
    switch(c) {
        case RED:
            printf("Red color\\n");
            break;
        case GREEN:
            printf("Green color\\n");
            break;
        case BLUE:
            printf("Blue color\\n");
            break;
        case YELLOW:
            printf("Yellow color\\n");
            break;
    }
}

int main() {
    enum Color myColor = GREEN;
    printColor(myColor);
    return 0;
}`,
      },
      {
        heading: 'typedef Keyword',
        content: 'typedef is used to create an alias name for data types.',
        subsections: [
          {
            subheading: 'typedef with Basic Types',
            code: `// Create alias for existing type
typedef unsigned long ulong;
typedef int integer;

ulong population = 1000000000UL;
integer age = 25;

printf("Population: %lu\\n", population);
printf("Age: %d\\n", age);`,
          },
          {
            subheading: 'typedef with Structures',
            code: `typedef struct {
    int x;
    int y;
} Point;

Point p1 = {10, 20};
Point p2 = {30, 40};

printf("P1: (%d, %d)\\n", p1.x, p1.y);
printf("P2: (%d, %d)\\n", p2.x, p2.y);`,
          },
          {
            subheading: 'typedef with Pointers',
            code: `typedef int* IntPtr;

IntPtr p1, p2;  // Both are int pointers
int x = 10, y = 20;

p1 = &x;
p2 = &y;

printf("*p1 = %d, *p2 = %d\\n", *p1, *p2);`,
          },
          {
            subheading: 'typedef with Arrays',
            code: `typedef int IntArray[10];

IntArray arr1, arr2;  // Both are int arrays of size 10

arr1[0] = 100;
arr2[0] = 200;

printf("arr1[0] = %d\\n", arr1[0]);
printf("arr2[0] = %d\\n", arr2[0]);`,
          },
          {
            subheading: 'typedef with Enums',
            code: `typedef enum {
    NORTH,
    SOUTH,
    EAST,
    WEST
} Direction;

Direction playerDirection = NORTH;

if (playerDirection == NORTH) {
    printf("Moving north\\n");
}`,
          },
        ],
      },
      {
        heading: 'Practical Use Cases',
        code: `// File operations status
typedef enum {
    FILE_SUCCESS,
    FILE_NOT_FOUND,
    FILE_READ_ERROR,
    FILE_WRITE_ERROR
} FileStatus;

// Function using enum
FileStatus readFile(const char *filename) {
    // File reading logic
    return FILE_SUCCESS;
}

// Boolean type (before C99)
typedef enum {
    FALSE = 0,
    TRUE = 1
} Boolean;

Boolean isValid = TRUE;

if (isValid) {
    printf("Data is valid\\n");
}

// Complex data structure
typedef struct {
    int id;
    char name[50];
    enum {ACTIVE, INACTIVE, SUSPENDED} status;
} Account;

Account acc1 = {1001, "John Doe", ACTIVE};`,
      },
    ],
  },
  'intro-cpp': {
    title: 'Introduction to C++',
    sections: [
      {
        heading: 'C++ vs C',
        points: [
          'C++ is an extension of C with object-oriented features',
          'C++ supports both procedural and OOP paradigms',
          'C++ has classes, objects, inheritance, polymorphism',
          'C++ has function and operator overloading',
          'C++ has references in addition to pointers',
          'C++ has better type checking and error handling',
        ],
      },
      {
        heading: 'Basic C++ Program Structure',
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Input/Output in C++',
        code: `#include <iostream>
using namespace std;

int main() {
    int age;
    string name;
    
    // Output
    cout << "Enter your name: ";
    
    // Input
    cin >> name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Hello, " << name << "! You are " << age << " years old." << endl;
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Namespaces',
        content: 'Namespaces prevent name conflicts by grouping related entities.',
        code: `#include <iostream>

// Define namespace
namespace MyNamespace {
    int value = 10;
    void display() {
        std::cout << "Value: " << value << std::endl;
    }
}

int main() {
    // Access using scope resolution
    std::cout << MyNamespace::value << std::endl;
    MyNamespace::display();
    
    // Using namespace
    using namespace MyNamespace;
    std::cout << value << std::endl;
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'References',
        content: 'A reference is an alias for an existing variable.',
        code: `#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int &ref = num;  // Reference to num
    
    cout << "num: " << num << endl;   // 10
    cout << "ref: " << ref << endl;   // 10
    
    ref = 20;  // Modifies num through reference
    cout << "num: " << num << endl;   // 20
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Function Overloading',
        content: 'Multiple functions can have the same name with different parameters.',
        code: `#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

int main() {
    cout << add(5, 3) << endl;         // Calls first function
    cout << add(5.5, 3.2) << endl;     // Calls second function
    cout << add(1, 2, 3) << endl;      // Calls third function
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Default Arguments',
        code: `#include <iostream>
using namespace std;

void display(int a, int b = 10, int c = 20) {
    cout << "a: " << a << ", b: " << b << ", c: " << c << endl;
}

int main() {
    display(5);           // a: 5, b: 10, c: 20
    display(5, 15);       // a: 5, b: 15, c: 20
    display(5, 15, 25);   // a: 5, b: 15, c: 25
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Inline Functions',
        code: `#include <iostream>
using namespace std;

inline int square(int x) {
    return x * x;
}

int main() {
    cout << "Square of 5: " << square(5) << endl;
    return 0;
}`,
        language: 'cpp',
        note: 'Inline functions are expanded at the point of call, reducing function call overhead.',
      },
    ],
  },
  'oop-concepts': {
    title: 'OOP Concepts',
    sections: [
      {
        heading: 'Classes and Objects',
        content: 'A class is a blueprint for creating objects. An object is an instance of a class.',
        code: `#include <iostream>
using namespace std;

class Student {
public:
    int rollNo;
    string name;
    float marks;
    
    void display() {
        cout << "Roll: " << rollNo << endl;
        cout << "Name: " << name << endl;
        cout << "Marks: " << marks << endl;
    }
};

int main() {
    Student s1;  // Create object
    s1.rollNo = 101;
    s1.name = "Alice";
    s1.marks = 85.5;
    
    s1.display();
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Access Specifiers',
        points: [
          'public: Members accessible from outside the class',
          'private: Members accessible only within the class',
          'protected: Members accessible within class and derived classes',
        ],
        code: `class Example {
private:
    int privateVar;  // Only accessible within class
    
protected:
    int protectedVar;  // Accessible in derived classes
    
public:
    int publicVar;  // Accessible from anywhere
    
    void setPrivateVar(int val) {
        privateVar = val;
    }
    
    int getPrivateVar() {
        return privateVar;
    }
};`,
        language: 'cpp',
      },
      {
        heading: 'Constructors',
        content: 'A constructor is a special member function that initializes objects.',
        code: `#include <iostream>
using namespace std;

class Rectangle {
private:
    int length, width;
    
public:
    // Default constructor
    Rectangle() {
        length = 0;
        width = 0;
    }
    
    // Parameterized constructor
    Rectangle(int l, int w) {
        length = l;
        width = w;
    }
    
    // Copy constructor
    Rectangle(const Rectangle &rect) {
        length = rect.length;
        width = rect.width;
    }
    
    int area() {
        return length * width;
    }
};

int main() {
    Rectangle r1;           // Default constructor
    Rectangle r2(10, 5);    // Parameterized constructor
    Rectangle r3(r2);       // Copy constructor
    
    cout << "Area: " << r2.area() << endl;
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Destructors',
        content: 'A destructor is called when an object is destroyed to free resources.',
        code: `#include <iostream>
using namespace std;

class Demo {
public:
    Demo() {
        cout << "Constructor called" << endl;
    }
    
    ~Demo() {
        cout << "Destructor called" << endl;
    }
};

int main() {
    Demo obj;  // Constructor called
    
    return 0;  // Destructor called automatically
}`,
        language: 'cpp',
      },
      {
        heading: 'this Pointer',
        content: 'this pointer points to the current object.',
        code: `class Example {
private:
    int value;
    
public:
    void setValue(int value) {
        this->value = value;  // Disambiguate parameter and member
    }
    
    Example* getPointer() {
        return this;  // Return pointer to current object
    }
};`,
        language: 'cpp',
      },
      {
        heading: 'Encapsulation',
        content: 'Bundling data and methods that operate on that data within a class.',
        code: `class BankAccount {
private:
    double balance;
    
public:
    BankAccount(double initialBalance) {
        balance = initialBalance;
    }
    
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
    
    double getBalance() {
        return balance;
    }
};`,
        language: 'cpp',
      },
      {
        heading: 'Abstraction',
        content: 'Hiding implementation details and showing only essential features.',
        code: `class AbstractCalculator {
public:
    // Public interface
    int add(int a, int b) {
        return performAddition(a, b);
    }
    
private:
    // Hidden implementation
    int performAddition(int x, int y) {
        return x + y;
    }
};`,
        language: 'cpp',
      },
    ],
  },
};

// Merge all content
export const topicsContent: Record<string, TopicContent> = {
  ...baseTopicsContent,
  ...extendedTopicsContent,
  ...cppTopicsContent,
};
