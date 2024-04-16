var s1
var s2
function setup() {
  createCanvas(400,400);

  s1= new Student("Bhumi", 7, "boy" , 1)
  s2= new Student("mike",12,"boy",6)
}

function draw() 
{
  background(30);

  s1.display()
  s2.display()
} 