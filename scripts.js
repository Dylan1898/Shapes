let field
    sideLength
    Radius
    triangleHeight
    recHeight
    recWidth
    

document.addEventListener('DOMContentLoaded', function () {
    console.log('dom')
    field= document.getElementById('field')
    sideLength= document.getElementById('sideLength')
    Radius= document.getElementById('Radius')
    recHeight= document.getElementById('recHeight')
    recWidth= document.getElementById('recWidth')
    triangleHeight= document.getElementById('triangleHeight')
});
class Shape {
    constructor(type, name, width, height, sideLength, radius, base) {
        this.shape= document.createElement('div')
        this.shape.className = type
        this.width = width;
        this.height = height;
        this.sideLength = sideLength;
        this.radius = radius;
        this.base = base;
        
    }
}

class Square extends Shape {
    constructor() {
        super('Square')
        
        
    }
};

class Circle extends Shape {

    constructor() {
        super('Circle')
        
        
    }
};

class Triangle extends Shape {
    constructor() {
        super('Triangle')
        
        
        
    }
};

class Rectangle {
    constructor() {
        super('Rectangle')
       
        
    }
};

