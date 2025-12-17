import { TopicContent } from './content';

export const cppTopicsContent: Record<string, TopicContent> = {
  'inheritance': {
    title: 'Inheritance',
    sections: [
      {
        heading: 'Introduction to Inheritance',
        content: 'Inheritance allows a class to inherit properties and methods from another class.',
      },
      {
        heading: 'Single Inheritance',
        code: `#include <iostream>
using namespace std;

// Base class
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

int main() {
    Dog d;
    d.eat();   // Inherited from Animal
    d.bark();  // Own method
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Multiple Inheritance',
        code: `#include <iostream>
using namespace std;

class Father {
public:
    void showFather() {
        cout << "Father class" << endl;
    }
};

class Mother {
public:
    void showMother() {
        cout << "Mother class" << endl;
    }
};

class Child : public Father, public Mother {
public:
    void showChild() {
        cout << "Child class" << endl;
    }
};

int main() {
    Child c;
    c.showFather();
    c.showMother();
    c.showChild();
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Multilevel Inheritance',
        code: `class GrandParent {
public:
    void show1() {
        cout << "GrandParent" << endl;
    }
};

class Parent : public GrandParent {
public:
    void show2() {
        cout << "Parent" << endl;
    }
};

class Child : public Parent {
public:
    void show3() {
        cout << "Child" << endl;
    }
};`,
        language: 'cpp',
      },
      {
        heading: 'Hierarchical Inheritance',
        code: `class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

class Cat : public Animal {
public:
    void meow() {
        cout << "Meowing..." << endl;
    }
};`,
        language: 'cpp',
      },
      {
        heading: 'Virtual Base Classes',
        content: 'Solves the diamond problem in multiple inheritance.',
        code: `class Base {
public:
    int value;
};

class Derived1 : virtual public Base {
};

class Derived2 : virtual public Base {
};

class Final : public Derived1, public Derived2 {
    // Only one copy of Base
};`,
        language: 'cpp',
      },
    ],
  },
  'polymorphism': {
    title: 'Polymorphism',
    sections: [
      {
        heading: 'Function Overloading',
        code: `#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
};

int main() {
    Calculator calc;
    cout << calc.add(5, 3) << endl;
    cout << calc.add(5.5, 3.2) << endl;
    cout << calc.add(1, 2, 3) << endl;
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Operator Overloading',
        code: `#include <iostream>
using namespace std;

class Complex {
private:
    float real, imag;
    
public:
    Complex(float r = 0, float i = 0) {
        real = r;
        imag = i;
    }
    
    // Overload + operator
    Complex operator + (const Complex& obj) {
        Complex temp;
        temp.real = real + obj.real;
        temp.imag = imag + obj.imag;
        return temp;
    }
    
    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3.5, 2.5), c2(1.5, 4.5);
    Complex c3 = c1 + c2;  // Using overloaded operator
    c3.display();  // 5 + 7i
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Virtual Functions',
        content: 'Enable runtime polymorphism through function overriding.',
        code: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() {
        cout << "Drawing Shape" << endl;
    }
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
};

class Rectangle : public Shape {
public:
    void draw() override {
        cout << "Drawing Rectangle" << endl;
    }
};

int main() {
    Shape* shape;
    Circle circle;
    Rectangle rectangle;
    
    shape = &circle;
    shape->draw();  // Drawing Circle
    
    shape = &rectangle;
    shape->draw();  // Drawing Rectangle
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Pure Virtual Functions and Abstract Classes',
        code: `class AbstractShape {
public:
    virtual void draw() = 0;  // Pure virtual function
    virtual double area() = 0;
};

class Circle : public AbstractShape {
private:
    double radius;
    
public:
    Circle(double r) : radius(r) {}
    
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
    
    double area() override {
        return 3.14159 * radius * radius;
    }
};`,
        language: 'cpp',
      },
      {
        heading: 'Virtual Destructor',
        code: `class Base {
public:
    Base() {
        cout << "Base Constructor" << endl;
    }
    
    virtual ~Base() {
        cout << "Base Destructor" << endl;
    }
};

class Derived : public Base {
public:
    Derived() {
        cout << "Derived Constructor" << endl;
    }
    
    ~Derived() {
        cout << "Derived Destructor" << endl;
    }
};

int main() {
    Base* ptr = new Derived();
    delete ptr;  // Calls both destructors
    return 0;
}`,
        language: 'cpp',
      },
    ],
  },
  'cpp-pointers': {
    title: 'Pointers & References',
    sections: [
      {
        heading: 'Pointers in C++',
        code: `int num = 10;
int* ptr = &num;

cout << "Value: " << *ptr << endl;
cout << "Address: " << ptr << endl;`,
        language: 'cpp',
      },
      {
        heading: 'References',
        code: `int x = 5;
int& ref = x;  // Reference must be initialized

ref = 10;  // Changes x to 10
cout << x << endl;  // 10`,
        language: 'cpp',
      },
      {
        heading: 'Pass by Reference',
        code: `void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(x, y);
    cout << "x: " << x << ", y: " << y << endl;
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'new and delete Operators',
        code: `// Allocate single variable
int* ptr = new int;
*ptr = 10;
delete ptr;

// Allocate array
int* arr = new int[5];
for (int i = 0; i < 5; i++) {
    arr[i] = i + 1;
}
delete[] arr;`,
        language: 'cpp',
      },
      {
        heading: 'Shallow vs Deep Copy',
        code: `class Array {
private:
    int* data;
    int size;
    
public:
    // Constructor
    Array(int s) : size(s) {
        data = new int[size];
    }
    
    // Deep copy constructor
    Array(const Array& other) : size(other.size) {
        data = new int[size];
        for (int i = 0; i < size; i++) {
            data[i] = other.data[i];
        }
    }
    
    // Deep copy assignment operator
    Array& operator=(const Array& other) {
        if (this != &other) {
            delete[] data;
            size = other.size;
            data = new int[size];
            for (int i = 0; i < size; i++) {
                data[i] = other.data[i];
            }
        }
        return *this;
    }
    
    ~Destructor() {
        delete[] data;
    }
};`,
        language: 'cpp',
      },
    ],
  },
  'stl-overview': {
    title: 'STL Overview',
    sections: [
      {
        heading: 'Vector',
        code: `#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3, 4, 5};
    
    v.push_back(6);  // Add element
    v.pop_back();    // Remove last element
    
    cout << "Size: " << v.size() << endl;
    cout << "Front: " << v.front() << endl;
    cout << "Back: " << v.back() << endl;
    
    for (int x : v) {
        cout << x << " ";
    }
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'List',
        code: `#include <list>
using namespace std;

list<int> l = {1, 2, 3, 4, 5};

l.push_front(0);  // Add to front
l.push_back(6);   // Add to back
l.pop_front();    // Remove from front
l.pop_back();     // Remove from back

for (int x : l) {
    cout << x << " ";
}`,
        language: 'cpp',
      },
      {
        heading: 'Map',
        code: `#include <map>
using namespace std;

map<string, int> m;

m["Alice"] = 25;
m["Bob"] = 30;
m["Charlie"] = 35;

cout << m["Alice"] << endl;  // 25

for (auto pair : m) {
    cout << pair.first << ": " << pair.second << endl;
}`,
        language: 'cpp',
      },
      {
        heading: 'Set',
        code: `#include <set>
using namespace std;

set<int> s = {3, 1, 4, 1, 5, 9};  // Duplicates removed, sorted

s.insert(6);
s.erase(1);

for (int x : s) {
    cout << x << " ";  // 3 4 5 6 9
}`,
        language: 'cpp',
      },
      {
        heading: 'Algorithms',
        code: `#include <algorithm>
#include <vector>
using namespace std;

vector<int> v = {5, 2, 8, 1, 9};

// Sort
sort(v.begin(), v.end());

// Find
auto it = find(v.begin(), v.end(), 8);
if (it != v.end()) {
    cout << "Found at position: " << distance(v.begin(), it) << endl;
}

// Count
int count = count(v.begin(), v.end(), 5);

// Binary search
bool found = binary_search(v.begin(), v.end(), 8);`,
        language: 'cpp',
      },
    ],
  },
  'exception-handling': {
    title: 'Exception Handling',
    sections: [
      {
        heading: 'try-catch Block',
        code: `#include <iostream>
using namespace std;

int main() {
    try {
        int age;
        cout << "Enter age: ";
        cin >> age;
        
        if (age < 0) {
            throw "Age cannot be negative";
        }
        
        cout << "Age: " << age << endl;
    }
    catch (const char* msg) {
        cout << "Error: " << msg << endl;
    }
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Multiple Catch Blocks',
        code: `try {
    // Code that may throw exceptions
}
catch (int e) {
    cout << "Integer exception: " << e << endl;
}
catch (const char* e) {
    cout << "String exception: " << e << endl;
}
catch (...) {
    cout << "Unknown exception" << endl;
}`,
        language: 'cpp',
      },
      {
        heading: 'Custom Exceptions',
        code: `#include <exception>
using namespace std;

class MyException : public exception {
public:
    const char* what() const throw() {
        return "My custom exception occurred";
    }
};

int main() {
    try {
        throw MyException();
    }
    catch (MyException& e) {
        cout << e.what() << endl;
    }
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Standard Exceptions',
        code: `#include <stdexcept>
using namespace std;

try {
    throw runtime_error("Runtime error occurred");
}
catch (runtime_error& e) {
    cout << e.what() << endl;
}

// Other standard exceptions:
// logic_error, out_of_range, invalid_argument,
// overflow_error, underflow_error`,
        language: 'cpp',
      },
    ],
  },
  'templates': {
    title: 'Templates',
    sections: [
      {
        heading: 'Function Templates',
        code: `#include <iostream>
using namespace std;

template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maximum(10, 20) << endl;      // int
    cout << maximum(10.5, 20.3) << endl;  // double
    cout << maximum('a', 'z') << endl;    // char
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Class Templates',
        code: `template <typename T>
class Array {
private:
    T* data;
    int size;
    
public:
    Array(int s) : size(s) {
        data = new T[size];
    }
    
    void set(int index, T value) {
        data[index] = value;
    }
    
    T get(int index) {
        return data[index];
    }
    
    ~Array() {
        delete[] data;
    }
};

int main() {
    Array<int> intArr(5);
    Array<double> doubleArr(5);
    
    intArr.set(0, 10);
    cout << intArr.get(0) << endl;
    
    return 0;
}`,
        language: 'cpp',
      },
      {
        heading: 'Template Specialization',
        code: `template <typename T>
class MyClass {
public:
    void display() {
        cout << "General template" << endl;
    }
};

// Specialization for int
template <>
class MyClass<int> {
public:
    void display() {
        cout << "Specialized for int" << endl;
    }
};`,
        language: 'cpp',
      },
    ],
  },
  'modern-cpp': {
    title: 'Modern C++ Features',
    sections: [
      {
        heading: 'auto Keyword',
        code: `auto x = 5;           // int
auto y = 3.14;        // double
auto z = "Hello";     // const char*

vector<int> v = {1, 2, 3};
auto it = v.begin();  // vector<int>::iterator`,
        language: 'cpp',
      },
      {
        heading: 'nullptr',
        code: `int* ptr = nullptr;  // Better than NULL

if (ptr == nullptr) {
    cout << "Pointer is null" << endl;
}`,
        language: 'cpp',
      },
      {
        heading: 'Range-based For Loop',
        code: `vector<int> v = {1, 2, 3, 4, 5};

for (int x : v) {
    cout << x << " ";
}

// With reference
for (int& x : v) {
    x *= 2;  // Modify elements
}`,
        language: 'cpp',
      },
      {
        heading: 'Smart Pointers',
        subsections: [
          {
            subheading: 'unique_ptr',
            code: `#include <memory>
using namespace std;

unique_ptr<int> ptr(new int(10));
cout << *ptr << endl;

// Transfer ownership
unique_ptr<int> ptr2 = move(ptr);`,
          },
          {
            subheading: 'shared_ptr',
            code: `shared_ptr<int> ptr1(new int(10));
shared_ptr<int> ptr2 = ptr1;  // Shared ownership

cout << ptr1.use_count() << endl;  // 2`,
          },
          {
            subheading: 'weak_ptr',
            code: `shared_ptr<int> sptr(new int(10));
weak_ptr<int> wptr = sptr;

if (auto locked = wptr.lock()) {
    cout << *locked << endl;
}`,
          },
        ],
        language: 'cpp',
      },
      {
        heading: 'Lambda Expressions',
        code: `auto add = [](int a, int b) {
    return a + b;
};

cout << add(5, 3) << endl;  // 8

// With capture
int x = 10;
auto addX = [x](int a) {
    return a + x;
};

cout << addX(5) << endl;  // 15`,
        language: 'cpp',
      },
    ],
  },
};