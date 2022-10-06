#define DEBUG
using System;
using System.Diagnostics;
using System.Reflection;
using System.Collections;

delegate int NumChanger(int x);

namespace program {
  class program {
    public static void Main(string[] args) {

      // Attribute 
      // Declarative tags that is used to convey runtime info, metadata sort of stuff
      // Ex: Obsolete tag gives error on obsolete method functions
      OldClass old1 = new OldClass();
      // old1.methodCall();

      // Ex: Conditional tag traces/gives debug message
      traceClass.Message("Processing main function!");

      // Reflections
      // Used for obtaining type information in runtime, metadata sort of stuff

      // Indexers
      // Allows object to be indexed as arrays
      // It can also be overloaded!
      Album PostMalone = new Album();
      PostMalone[0] = "Circles";
      PostMalone[1] = "Undead"; 
      PostMalone[2] = "Rockstar";
      for (int i = 0; i < 10; i++) {
        Console.WriteLine(PostMalone[i]);
      }
      Console.WriteLine(PostMalone["Rockstar"]);

      // Delegate
      // A reference type variable
      NumChanger nc1 = new NumChanger(TestDelegate.AddNum);
      NumChanger nc2 = new NumChanger(TestDelegate.MultNum);

      nc1(25);
      Console.WriteLine("Value of Num: {0}", TestDelegate.getNum());
      nc2(5);
      Console.WriteLine("Value of Num: {0}", TestDelegate.getNum());

      // Events
      // Together with delegate, is used for inter-process communication
      publisher pb1 = new publisher();
      Console.WriteLine(pb1.build("Subsriber"));

      // Collections
      // Specialized storage for access and manipulations

      // ArrayList - nuff said
      ArrayList al1 = new ArrayList();
      al1.Add(41);
      al1.Add(56);
      al1.Add(33);
      al1.Add(13);
      al1.Add(56);

      Console.WriteLine($@"
        {al1.Capacity}
        {al1.Count}
      ");

      foreach(int i in al1) {
        Console.Write($"{i} ");
      }

      // Hashtable
      // Array with key mapping
      Hashtable hb1 = new Hashtable();
      hb1.Add("ACA", 689);
      hb1.Add("TCG", 411);
      hb1.Add("CGT", 567);
      hb1.Add("AGG", 999);

      ICollection key = hb1.Keys;
         
      foreach (string k in key) {
        Console.WriteLine("\n" + k + ": " + hb1[k]);
      }

      // Sorted List
      // Combination of hash and arraylist, but sorted

      // Stack and Queue - nuff said

      // BitArray - ahhh smth to do with binary representation?

      // Generics
      // Allow non-specification of data-type on variable

      GenericArray<int> intArr = new GenericArray<int>(5);
      GenericArray<string> stringArr = new GenericArray<string>(5);

      // Anon methods -> methods with name, just body
      isPrime iP = delegate(int x) {
        int i = 2;
        int primeCount = 0;
        while(i <= x) {
          if(x % i == 0) primeCount++;
          i++;
        }
        return !(primeCount > 2);
      };

      Console.WriteLine(iP(56));
      Console.WriteLine(iP(19));

      // Unsafe -> keyword specifies which a file uses a pointer (goddamn)
      // int    *ip;    /* pointer to an integer */
      // double *dp;    /* pointer to a double */
      // float  *fp;    /* pointer to a float */
      // char   *ch;     /* pointer to a character */

      // *(ptr+iter) -> index of a array: value
    }
  } 
}
public delegate bool isPrime(int n);

public class GenericArray<T> {
  private T[] array;

  public GenericArray(int size) {
    array = new T[size + 1];
  }
  public T getItem(int index) {
    return array[index];
  }
  public void setItem(int index, T value) {
    array[index] = value;
  }
}

public delegate string publishHandler(string msg);

public class publisher {
  event publishHandler publishMsg;

  public publisher() {
    this.publishMsg += new publishHandler(this.processMessage);
  }

  public string processMessage(string msg) {
    return "Processing event: " + msg;
  }

  public string build(string msg) {
     return this.publishMsg(msg);
  }
}

public static class TestDelegate {
  static int num = 10;
  public static int AddNum(int p) {
        num += p;
        return num;
  }
  public static int MultNum(int q) {
      num *= q;
      return num;
  }
  public static int getNum() {
      return num;
  }
}

public class OldClass{
  [Obsolete("This class would be depreceted soon.", true)]
  
  public void methodCall() {
    Console.WriteLine("Hello there!");
  }
}

public class traceClass {
  [Conditional("DEBUG")]
  public static void Message(string msg) {
    Console.WriteLine(msg);
  }
}

public class Album {
  public static int size = 10;
  private string[] namelist = new string[size];

  public Album() {
      for (int i = 0; i < size; i++)
      namelist[i] = "TBA";
  }

  public string this[int index] {
    get {
      string tmp;
    
      if( index >= 0 && index <= size-1 ) {
          tmp = namelist[index];
      } else {
          tmp = "";
      }
      
      return ( tmp );
    }
    set {
      if( index >= 0 && index <= size-1 ) {
          namelist[index] = value;
      }
    }
  }

  public int this[string song] {
    get {
      int index = 0;
      
      while(index < size) {
          if (namelist[index] == song) {
          return index;
          }
          index++;
      }
      return index;
    }
  }
}
