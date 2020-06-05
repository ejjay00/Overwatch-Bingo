
// Alert box for switching Daubers, can probably use something else later.
alert("Press H to switch Hero Daubers.");

window.canvas = document.getElementById('menu-highlight');
window.ctx = canvas.getContext('2d');
var start = new Date().getTime() - 5000;
var gradients = [-1];
var offsetTop = -100;

var isHighlightActive = false;

// Particle function for the reroll button that appears when hovering
var Particle = function() {
  this.radius = (Math.random() * 1) + 0.5;
  this.top = (Math.random() * 20) - 20;
  this.left = Math.random() * 100;
  this.speed = 1 / this.radius;
  this.opacity = 1;
  this.disintegrateRate = (Math.random() * 0.005) + 0.001;
}

// Array to hold particles
var particles = [];

// Populate the particles array here
for(var i = 0; i < 10; i++) {
  particles.push(new Particle());
}

function drawHiglight() {
  /* rect */
  var currentTime = new Date().getTime();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  var grH = ctx.createLinearGradient(0, 0, 600, 0);
  
  if (currentTime - start > 5000 && gradients[0] < 0.1) {
    start = new Date().getTime();
    gradients = [1,1,0.9,0.7,0.6,0.5,0.5,0.4,0.3,0];  
  }
  
  for(var i = 0; i < gradients.length; i++) {
    grH.addColorStop('0.' + i, 'rgba(146, 186, 244,' + gradients[i] + ')');

    if (gradients[i] > 0.1) {
      gradients[i] -= 0.01;
    }
  }

  ctx.fillStyle = grH;
  ctx.fillRect(0, offsetTop, 600, 10);
  /* end of rect */
  
  /* particles */
  for(var i = 0; i < particles.length; i++) {
    ctx.beginPath();
    ctx.arc(particles[i].left, offsetTop + 15 + particles[i].top, particles[i].radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = 'rgba(146, 186, 244,' + particles[i].opacity + ')';
    ctx.fill();
    
    particles[i].left += particles[i].speed;
    particles[i].opacity -= particles[i].disintegrateRate;
    
    if (particles[i].opacity < 0 || particles[i].left > 700) {
      particles[i] = new Particle();
    }
  }
  /* end of particles */
  
  if (isHighlightActive === true) {
    requestAnimationFrame(drawHiglight);  
  }
}

  function highlight(element, event) {
  event.stopImmediatePropagation();
  offsetTop = element.offsetTop + 25;
  start = new Date().getTime();
  gradients = [1,1,0.9,0.7,0.6,0.5,0.5,0.4,0.3,0];
  
  if (isHighlightActive === false) {
    isHighlightActive = true;
    requestAnimationFrame(drawHiglight);
  }

  console.log("ping");
}

document.getElementById('rerollButton').onmouseover = function() {
  if (offsetTop !== -100) offsetTop = -100;
  isHighlightActive = false;
}

document.body.focus();
