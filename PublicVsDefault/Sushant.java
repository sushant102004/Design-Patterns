import users_package.UserDetails;

class Sushant {
    public static void main(String[] args){
        UserDetails userDetails = new UserDetails();

        // userDetails.showName(); // It will not work as it is not public.
        userDetails.showAge();
    }
}