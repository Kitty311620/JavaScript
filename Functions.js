//function is just a group of code.
//method is the alternative of method.
function Intro()
{
console.log("Welcome to my Treehouse!")
console.log("Would you like some tea or coffee?")
}
Intro()
function Leaving()
{
    console.log("Thank you for coming. Bye!")
}
Leaving()
//_______________________________________________________________________________________________
function soundAlarm()
{
console.log("WARNING: ZOMBIES AT THE GATE!")
console.log("RUN TAKE YOUR BAGS!")
}
soundAlarm()
//________________________________________________________________________________________________
function Victorydance()
{
    console.log("Slide to the left!")
    console.log("Spin around!")
    console.log("Moonwalk!")
}
Victorydance()
//_________________________________________________________________________________________________
//Functions with arguments.
function Add (num1,num2)
{
    console.log(num1+num2)
}
Add(600000,70000)

function Subtract (a,b)
{
    console.log(a-b)
}
Subtract(87,20)

function Multiply (A,B,C)
{
    console.log(A*B*C)
}
Multiply(98,67,76)
//___________________________________________________________________________________________________
function identifySupply(item)
{
    console.log("Scanning.... Found one!",item)
}
identifySupply("Medkit")
identifySupply("Crossbow")
//____________________________________________________________________________________________________
function distractZombies(direction,speed)
{
    console.log("Robot Dog is sprinting ",direction," at ",speed," miles per hour!")
}
distractZombies("North",25)
