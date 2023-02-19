interface MyInterface {
    void add(int a, int b);
}

class MyClass implements MyInterface {
    public void add(int a, int b){
        System.out.println(a + b);
    }
}

public class App {
    public static void main(String[] args){
        MyClass myClass = new MyClass();
        myClass.add(5, 6);
    }
}