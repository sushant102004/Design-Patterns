interface MyInterface {
    void add(int a, int b);
}

class MyClass implements MyInterface {
    public void add(int a, int b){
        System.out.println(a + b);
    }
}

abstract class MyAbstract {
    abstract void absFunc();
    void showData(){
        System.out.println("Something from abstract class");
    }
}

class AbsChild {
    void absFunc(){
        System.out.println("Described abstract class");
    }
}

public class App {
    public static void main(String[] args){
        MyClass myClass = new MyClass();
        myClass.add(5, 6);

        AbsChild absChild = new AbsChild();
        absChild.absFunc();
    }
}