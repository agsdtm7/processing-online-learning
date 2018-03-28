int totalEmployees;
int totalSalary;
void setup(){
baseSalary = 3000;
tip = 1000;
totalEmployees = 5;
// totalSalary = baseSalary + tip/totalEmployees
totalSalary = countTotalSalary(baseSalary, tip, totalEmployees);
println(totalSalary);
}

int countTotalSalary(int bs, int tp, int te){
  return bs+tp/te;
  //return baseSalary + tip/totalEmployees
}
