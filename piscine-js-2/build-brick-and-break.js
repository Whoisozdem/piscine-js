export function build(bricksize) {
    let body = document.getElementsByTagName("body")[0];
    
    let bricks = 1;
  
    let interval = setInterval(function() {
      let brick = document.createElement("div");
  
      brick.setAttribute("id", "brick-" + bricks);
  
      if ((bricks - 2) % 3 === 0) {
        brick.dataset.foundation = "true";
      }
  
      body.appendChild(brick);
        bricks++;
  
      if (bricks > bricksize) {
        clearInterval(interval);
      }
    }, 100);
  }

export function repair() {
    let brickids = Array.from(arguments);
  
    for (let i = 0; i < brickids.length; i++) {
      let brick = document.getElementById(brickids[i]);
      
      if (brick.getAttribute("data-foundation") === "true") {
        brick.dataset.repaired = "in progress";
      } else {
        brick.dataset.repaired = "true";
      }
    }
  }
  
  export function destroy() {
    let bricks = document.getElementsByTagName("div");
        bricks[bricks.length - 1].remove();
  }
  