namespace class1 {
  class Person {
    public string name;
    public int age;
    protected private string DOB;
    
    public Person(string name, int age, string DOB) {
      this.name = name;
      this.age = age;
      this.DOB = DOB;
    }

    public string dob {
      get {return this.DOB;}
      set {this.DOB = value;}
    }

    public virtual void getDetails() {
      // Verbatim string literal
      string details = $@"
        Name: {this.name}
        Age:  {this.age}
        DOB:  {this.DOB}
      ";
      Console.WriteLine(details);
    }
  }

  class StandardMember: Person {
    private string role;
    private string access_level;

    public StandardMember(string name, int age, string DOB, string role, string acc) : base(name, age, DOB){
      this.role = role;
      this.access_level = acc;
    }

    public override void getDetails() {
      // Verbatim string literal
      string details = $@"
        Name: {this.name}
        Age:  {this.age}
        DOB:  {this.DOB}
        ===================
        Role: {this.role}
        Acc:  {this.access_level}
      ";
      Console.WriteLine(details);
    }
  }

  sealed class DirectorMember: Person {
    private string role;
    private string access_level;

    public DirectorMember(string name, int age, string DOB, string role, string acc) : base(name, age, DOB) {
      this.role = role;
      this.access_level = acc;
    }

    public override void getDetails() {
      // Verbatim string literal
      string details = $@"
        Name: {this.name}
        Age:  {this.age}
        DOB:  {this.DOB}
        ===================
        Role: {this.role}
        Acc:  {this.access_level}
        ===================
        Pass: {Convert.ToString(this.age)+"90441"}
      ";
      Console.WriteLine(details);
    }
  }

  abstract class Core {
    protected private string? name;
    protected private string? property;
    protected private double fissureRating;

    // Abstract method
    public abstract void CoreMeasure();

    // Regular method
    public void CoreDetails() {
      Console.WriteLine($@"
        Core name: {this.name}
        Property:  {this.property}
        FR:        {this.fissureRating}
      ");
    }
  }

  class Osmium: Core {
    public const double threshold = 0.75;

    public Osmium (string name, string property, double fissureRating) {
      this.name = name;
      this.property = property;
      this.fissureRating = fissureRating;
    }

    public override void CoreMeasure() {
      string message = (this.fissureRating > threshold) ? "Critical Mass alert!" : "Normal status.";
      Console.WriteLine(message);
    }
  }

  interface standardEV {    
    double EV_discharge_rate(double voltage, int sec);
  }

  class EVGen1: standardEV {
    public double EV_rate;

    public EVGen1(double EV_rate) {
      this.EV_rate = EV_rate;
    }

    public double EV_discharge_rate(double voltage, int sec) {
      return this.EV_rate * voltage * sec;
    }
  }
}

