class chandrayaan {
    constructor(x, y, z, direction) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.direction = direction;
    }
  
    moveForward() {
      if (this.direction === 'N') {
        this.y++;
      } else if (this.direction === 'S') {
        this.y--;
      } else if (this.direction === 'E') {
        this.x++;
      } else if (this.direction === 'W') {
        this.x--;
      } else if (this.direction === 'Up') {
        this.z++;
      } else if (this.direction === 'Down') {
        this.z--;
      }
    }
  
    moveBackward() {
      if (this.direction === 'N') {
        this.y--;
      } else if (this.direction === 'S') {
        this.y++;
      } else if (this.direction === 'E') {
        this.x--;
      } else if (this.direction === 'W') {
        this.x++;
      } else if (this.direction === 'Up') {
        this.z--;
      } else if (this.direction === 'Down') {
        this.z++;
      }
    }
  
    rotateLeft() {
      if (this.direction === 'N') {
        this.direction = 'W';
      } else if (this.direction === 'S') {
        this.direction = 'E';
      } else if (this.direction === 'E') {
        this.direction = 'N';
      } else if (this.direction === 'W') {
        this.direction = 'S';
      }
    }
  
    rotateRight() {
      if (this.direction === 'N') {
        this.direction = 'E';
      } else if (this.direction === 'S') {
        this.direction = 'W';
      } else if (this.direction === 'E') {
        this.direction = 'S';
      } else if (this.direction === 'W') {
        this.direction = 'N';
      }
    }
  
    rotateUp() {
      if (this.direction === 'N') {
        this.direction = 'Up';
      } else if (this.direction === 'S') {
        this.direction = 'Down';
      }
    }
  
    rotateDown() {
      if (this.direction === 'Up') {
        this.direction = 'N';
      } else if (this.direction === 'Down') {
        this.direction = 'S';
      }
    }
  
    getCurrentPosition() {
      return `(${this.x}, ${this.y}, ${this.z})`;
    }
  
    getCurrentDirection() {
      return this.direction;
    }
  }
  
  module.exports = Spacecraft;
  