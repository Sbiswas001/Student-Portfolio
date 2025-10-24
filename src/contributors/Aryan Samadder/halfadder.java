import java.util.*;
class HalfAdder
{
    int n1,n2,sum;
    HalfAdder()
    {
        n1=0;
        n2=0;
        sum=0;
    }
    void input()
    {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the numbers");
        n1=in.nextInt();
        n2=in.nextInt();
    } 
    String adder(int n1,int n2,int carry)
    {
        int sum=(n1%10)+(n2%10)+carry;
        if((n1%10)>1||(n2%10)>1)
        return "2";
        if(n1==0&&n2==0)
        {
            if(carry==0)
            return "0";
            else
            return "1";
        }
        else
        switch(sum)
        {
            case 0:
                return adder(n1/10,n2/10,0)+"0";
            case 1:
                return adder(n1/10,n2/10,0)+"1";
            case 2:
                return adder(n1/10,n2/10,1)+"0";
            case 3:
                return adder(n1/10,n2/10,1)+"1";
            default:
                return "2";
        }
    }
    void display()
    {
        String res=adder(n1,n2,0);
        if(res.indexOf("2")==-1)
        System.out.println("The result is : "+res);
        else
        System.out.println("The number is not in binary");
    }
    public static void main(String args[])
    {
        HalfAdder ob = new HalfAdder();
        ob.input();
        ob.display();
    }
}
