// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length,width,height) {
      this.length = length;
      this.width = width;
      this.height = height;  
    }
    
    volume() {
      return `The Cuboid Volume is ${this.length * this.width * this.height} sqf`; 
    }
    
    surfaceArea() {
      return `The Cuboid surface Area is ${2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))} sqf`;
    } 
  }
  
  const my_cuboid_instance = new CuboidMaker(4, 5, 5);
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(my_cuboid_instance.volume()); // 100
  console.log(my_cuboid_instance.surfaceArea()); // 130
  
  
//---------------------STRETCH-------------------------------------------------------

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
//   class CubeMaker extends CuboidMaker {
//     constructor(length,width,height) {
//       super(length,width,height);
//     }

//      volume_() {
//       return `The Cuboid Volume is ${this.length * this.width * this.height} sqf`; 
//     }
    
//     surfaceArea_() {
//       return `The Cuboid surface Area is ${2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))} sqf`;
//     } 
//   }
  
//   const my_cuboid_STRETCH = new CuboidMaker(5, 6, 6); //STRETCH
  
//   console.log(my_cuboid_STRETCH.volume_()); //STRETCH
//   console.log(my_cuboid_STRETCH.surfaceArea_()); //STRETCH






