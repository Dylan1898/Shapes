document.addEventListener('DOMContentLoaded', function(){
    console.log('dom')
});

class Shape {
    constructor(width, height, sideLength, radius, base) {
        this.width = width;
        this.height = height;
        this.sideLength = sideLength;
        this.radius = radius;
        this.base = base;
        addEventListener('click', function(){

            
        })
  }
    get area() {
        return this.calcArea();
  }
    
};
function calcArea() {
        return this.height * this.width;
  }

class Square extends Shape{
    constructor(sideLength){
        super()
            this.sideLength=sideLength
    }
};

class Circle extends Shape{
    constructor(radius){
        super()
            this.radius=radius
    }
};

class Triangle extends Shape{
    constructor(height){
        super()
            this.height=height;
            this.base=height;
            this.width=height;
    }
};

class Rectangle{
    constructor(width, height){
        // super()
            this.width=width;
            this.height=height;
    }
};

function squareCre(){
  var a= document.getElementById('sideLength').value;
    console.log(a)
    var w= new Square(
        this.length= a,
        this.height= a,
        this.area= (a*a),
        this.perimeter = (a*a*a*a),
        console.log(this.area)
    )
    var p = document.createElement("div");
    document.body.appendChild(p).setAttribute("class", "square");
    document.getElementById('#areaFeed').appendChild(this.area)
    document.getElementById('#heightFeed').append(this.height)
    document.getElementById('#widthFeed').append(this.width)
    document.getElementById('#perimeterFeed').append(this.perimeter)
}

function circleCre(){
    var b= document.getElementById('sideLength').value;
    console.log(b)
}

function triangleCre(){
var c= document.getElementById('sideLength').value;
    console.log(c)
}

function rectangleCre(){
var d= document.getElementById('sideLength').value;
    console.log(d)
}
