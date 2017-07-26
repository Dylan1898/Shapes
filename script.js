document.addEventListener('DOMContentLoaded', function(){
    console.log('dom')
});
class Shape {
  constructor(width, height) {
        this.width = width;
    this.height = height;
  }
};

class Square extends Shape{
    constructor(sideLength){
        this.sideLength=sideLength
    }
};

class Circle extends Shape{
    constructor(radius){
        this.radius=radius
    }
};

class Triangle extends Shape{
    constructor(height){
        this.height=height;
        this.base=height;
        this.width=height;
    }
};

class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
};