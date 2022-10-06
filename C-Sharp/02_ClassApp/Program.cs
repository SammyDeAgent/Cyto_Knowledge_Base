using System;
using class1;

namespace program {
  class program {

    enum Charge_Level {
      Extreme,
      High,
      Medium,
      Low,
      None
    };

    static void Main(string[] args) {
      // Static fx can be accessed directly, but public fx requires an object to access it
      Person p1 = new Person("Johnathan Denver", 37, "04-11-1997");
      p1.getDetails();

      /* Access modifiers */
      // Public can be accessed by all, private only be accessed by the same class
      // Protected can only be accessed within the same class or inheritance
      // Internal is only accessible

      // Encapsulation via getter and setter
      p1.dob = "05-06-1989";
      p1.getDetails();

      // Inheritance
      // Use sealed keyword if you don't want a class to be inherited
      StandardMember p2 = new StandardMember("Katherine Cornwell", 23, "08-02-2001", "Office Clerk", "Access-D");
      p2.getDetails();

      // Polymorphism -> Overwrite of methods
      // Virtual keyword in base, and overrides in derived class
      DirectorMember p3 = new DirectorMember("Vogh Quinn", 71, "04-05-1968", "Head of R&D" , "Access-A");
      p3.getDetails();

      // Abstraction
      // Used to hide informations showing only necessary details
      // Abstract class must be inherited
      Osmium core1 = new Osmium("Osmium-C1", "Stable", 0.67);
      core1.CoreDetails();
      core1.CoreMeasure();

      // Interface
      // Another type of abstraction, this time all methods and attribute are templates
      // Interface must be inherited
      EVGen1 ev1 = new EVGen1(0.66);
      Console.WriteLine(ev1.EV_discharge_rate(90, 300));

      // Enum value
      Charge_Level level = Charge_Level.High;

      switch(level) {
        case Charge_Level.Extreme:
          Console.WriteLine("Alert, reactor overload imminent!");
          break;
        case Charge_Level.None:
          Console.WriteLine("Reactor inactive.");
          break;
        default:
          Console.WriteLine("Reactor level normal.");
          break;
      }
     
    }

    static void print(string line) {
      Console.WriteLine(line);
    }
  }
  
}


