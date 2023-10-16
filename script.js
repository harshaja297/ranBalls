const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const particles = [];
let hue = 0;//hsl(0-360 in numbers , saturation in percentage,lightness in percentage )
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    // Particle.draw();
})
const mouse = {
    x: 0,
    y: 0
}


window.addEventListener("click", (event) => {
    // console.log(event);
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
    // particles.push(new Particle());//this is to create 'n' particle for 'n' mouse move


    //this loop creates 2 particles for each mousemove
    for (let i = 0; i < 20; i++){
                particles.push(new Particle())//Particle Constructor is called 'n' times
            }
    //draw(mouse.x, mouse.y);
    hue = hue + 10;
    
})

window.addEventListener("mousemove", (event) => {
    // console.log(event);
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
    // particles.push(new Particle());//this is to create 'n' particle for 'n' mouse move


    //this loop creates 10 particles for each mousemove
    for (let i = 0; i < 10; i++){
                particles.push(new Particle())//Particle Constructor is called 'n' times
            }
    //draw(mouse.x, mouse.y);
    hue = hue + 10;
    
})
class Particle{
    constructor() {//constructor is called everytime object is created
        this.x = mouse.x;
        this.y = mouse.y;

        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;

        this.radius = Math.random() * 10 + 1;//random bet 1 to 6
        this.speedX = Math.random() * 3 - 1.5;//random between -1.5 to +1.5
        this.speedY = Math.random() * 3 - 1.5;//random between -1.5 to +1.5
        this.color = `hsl(${hue},100%,50%)`;
    }
    update() {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        //this, if statement reduces the the radius of particle
        if (this.radius >0.1) {
            this.radius = this.radius - 0.1;
        }
        this.draw();
     }
    draw() {
        ctx.fillStyle = this.color;
        // ctx.strokeStyle = "blue";
        // ctx.lineWidth = 10;
        ctx.beginPath();//its like paint brush kept on canvas
        ctx.arc(this.x,this.y, this.radius, 0, 90);
        ctx.fill();//imp
        // ctx.stroke();//imp
        console.log(hue);
    }

}

// function randomParticles() {
//     for (let i = 0; i < 1000; i++){
//         particles.push(new Particle())//Particle Constructor is called 'n' times
//     }
// }
// randomParticle();
function initialise() {
    for (let i = 0; i < particles.length;i++){
        particles[i].update();
        // particles[i].draw();
        // console.log(particles[0].update());

        // this for loop is for constellation effect where pythegorean theorem is used
        // for (let j = i; i < particles.length; j++) { 
        //     const dx = particles[i].x - particles[j].x;
        //     const dy = particles[i].y - particles[j].y;
        //     const distanceBetweeniAndj = Math.sqrt(dx * dx + dy * dy);
        //     // if (distanceBetweeniAndj < 100) {
        //     //     ctx.beginPath();//keeps the paint brush on canvas
        //     //     ctx.strokeStyle = particles[i].color;
        //     //     ctx.moveTo(particles[i].x,particles[i].y);//begining cordinate
        //     //     ctx.lineTo(particles[j].x, particles[j].y);//ending cordinate
        //     //     ctx.stroke();
        //     // }
        // }
        //
        if ( particles[i].radius<=0.3) {
            particles.splice(i, 1);//splice(index,numberofelements)
            i--;//i dont know why this step made
        }
    }
}

console.log(particles);
function animate() { 
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);//clears every frame
    // ctx.fillStyle = "rgba(0,0,0,0.02)";//for every frame adds a transparent layer
    // ctx.fillRect(0, 0, canvas.width, canvas.height);//for every frame adds a transparent layer
    initialise();
    // console.log(particles);
    requestAnimationFrame(animate);
}
animate()
