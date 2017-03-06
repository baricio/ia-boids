var ctx = document.getElementById("canvas").getContext("2d");
var boids = [];
//Create Var

boids.push(new Circle(30, 30, 5));
boids.push(new Circle(40, 20, 5));
boids.push(new Circle(20, 20, 5));

boids.forEach(function(boid){
    console.log(boid);
    boid.fill(ctx);
})
