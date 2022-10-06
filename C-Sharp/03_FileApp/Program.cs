using System;
using System.IO;

namespace program {
  class program {
    public static void Main(string[] args) {
      // Writing and creating a new file
      string output = "Hello text world!";
      File.WriteAllText("example2.txt", output);

      // Reading of file
      string input = File.ReadAllText("example.txt");
      Console.WriteLine(input);

      // Exceptions
      // Even in errors, a code MUST run!
      try {
        int[] myNumbers = { 1, 2, 3 };
        Console.WriteLine(myNumbers[10]);
      } catch (Exception e) {
        // Console.WriteLine(e.Message);
        throw new IndexOutOfRangeException("Array index out of bound.");
      } finally {
        Console.WriteLine("Execution done.");
      }
    }
  }
}
