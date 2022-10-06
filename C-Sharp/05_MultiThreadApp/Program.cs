using System;
using System.Threading;

namespace program {
  class program {
    public static void Process() {
      try {
        Console.WriteLine("Running thread...");

        int sleepMs = 1500;
      
        int count = 0;

        Console.WriteLine("Thread sleeping...");
        do {
          Thread.Sleep(sleepMs);
          Console.WriteLine("...");
        }while(count++ < 10);
        Console.WriteLine("Thread resumes...");
      } catch(ThreadAbortException e) {
        Console.WriteLine(e);
      }
    }
    public static void Main(string[] args) {
      // In a process, a thread is a single execution flow for that program
      // Thread state:
      // Unstart -> Ready -> non-runnable(sleep, wait block) -> Dead

      Thread th = Thread.CurrentThread;
      th.Name = "MainThread";
      
      Console.WriteLine("This is {0}", th.Name);

      // Creation
      ThreadStart ts1 = new ThreadStart(Process);
      Thread flow1 = new Thread(ts1);
      flow1.Start();

      // Destroy
      Thread.Sleep(2500);
      flow1.Abort();

      // Join of thread allows one thread to wait for another during execution
    }
  }
}
