using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    { 
      const string breakLine = "\n=============================================================================\n";

      /* String interpolation */
      string Str1 = "John Denver";
      Console.WriteLine($"Hello there, Mr. {Str1}");

      const int speedOfLight = 299792458;
      Console.WriteLine($"The speed of light, c is assigned as {speedOfLight} m/s.");

      // int myNum = 5;               // Integer (whole number) -> int, long
      // double myDoubleNum = 5.99D;  // Floating point number -> float, double
      // char myLetter = 'D';         // Character
      // bool myBool = true;          // Boolean
      // string myText = "Hello";     // String


      /* Type Casting */
      // Implicit casting - From small to big
      int cast_num1 = 1;
      double cast_num2 = cast_num1;

      Console.WriteLine($"{cast_num1} {cast_num2}");

      // Explicit casting - From big to small
      double cast_num3 = 566;
      int cast_num4 = (int) cast_num3;

      Console.WriteLine($"{cast_num3} {cast_num4}");

      // Can also use built in converter
      Console.WriteLine(Convert.ToString(cast_num1)+"2");

      Console.WriteLine(breakLine);


      /* User Inputs */
      Console.Write("Please enter your name: ");
      string? username = Console.ReadLine(); // The ? depicts nullable string

      Console.Write("Please enter your ID: ");
      int? userid = Convert.ToInt32(Console.ReadLine());
      Console.WriteLine($"Welcome, {username} - {userid}");
      Console.WriteLine(breakLine);


      /* Operators */
      // Common operators are skipped

      // Bitwise operator - Flip/reverse each bit
      uint a = 0b_0000_1111_0000_1111_0000_1111_0000_1100;
      uint b = ~a;
      Console.WriteLine(Convert.ToString(b, toBase: 2));      

      // Shift operators
      // Different data type produces different shifts result
      a = 0b_1100_1001_0000_0000_0000_0000_0001_0001;
      b = a << 4; // Shifts 4 units to left
      Console.WriteLine(Convert.ToString(b, toBase: 2)); 
      b = a >> 4; // Shifts 4 units to right
      Console.WriteLine(Convert.ToString(b, toBase: 2)); 

      // Logical operators
      a = 0b_0101;
      b = 0b_0011;
      Console.WriteLine(Convert.ToString(a&b, toBase: 2)); // AND
      Console.WriteLine(Convert.ToString(a|b, toBase: 2)); // OR  
      Console.WriteLine(Convert.ToString(a^b, toBase: 2)); // XOR
      Console.WriteLine(breakLine);
      

      /* Math Libraries */
      // Math.[method] -> Max, Min, Sqrt, Abs, Round

      /* String Comprehension */
      // Methods -> ToUpper(), ToLower(), Concat(), IndexOf(), Substring()


      /* Conditions */
      // Ternary operator exist!
      int value_1 = 530;
      int? checker = (value_1 > 500) ? null : value_1;


      /* Loops */
      // For of loop exist as foreach loop
      string[] nameArr = {"Marcel", "Eren", "Reiner", "Samir", "Hector"};
      foreach(string element in nameArr) {
        Console.WriteLine(element);
      }

      /* Methods */
      // Order of params doesn't matter as you can use named
      Console.WriteLine(isPrime(num: 57));   

      //Method Overloading
      Console.WriteLine(calX((int)5));
      Console.WriteLine(calX((double)5));
    }

    static Boolean isPrime(int num) {
      int i = 2;
      int primeCheck = 0;
      while(i <= num) {
        if(num % i == 0) {
          primeCheck++;
        }
        i++;
      }
      return (primeCheck == 2) ? true : false;
    }

    static int calX(int x) {
      return x * 10 - 5;
    }

    static double calX(double x) {
      return x / 7.5 - 5;
    }
  }
}
