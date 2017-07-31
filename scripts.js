let field
sideLength
circRadius
triangleHeight
recHeight
recWidth


document.addEventListener('DOMContentLoaded', function () {
    console.log('dom')
    field = document.getElementById('field')
    sideLength = document.getElementById('sideLength')
    Radius = document.getElementById('Radius')
    recHeight = document.getElementById('recHeight')
    recWidth = document.getElementById('recWidth')
    triangleHeight = document.getElementById('triangleHeight')
    document.getElementById('areaFeed')
    heightFeed = document.getElementById('heightFeed')
    widthFeed = document.getElementById('widthFeed')
    PerimeterFeed = document.getElementById('PerimeterFeed')
    nameFeed = document.getElementById('nameFeed')
    radiusFeed = document.getElementById('radiusFeed')

});
class Shape {
    constructor(type, name, width, height, sideLength, radius, base) {
        this.shape = document.createElement('div')
        this.shape.className = type
        this.width = width;
        this.height = height;
        this.sideLength = sideLength;
        this.radius = radius;
        this.base = base;
        this.shape.addEventListener('click', this.Describe.bind(this));
        this.shape.addEventListener('dblclick', this.Delete.bind(this))
        this.Position()
    }
    draw(){
    field.appendChild(this.shape);
}
Describe(){
    console.log('clicked')
        document.getElementById('areaFeed').innerHTML = ('Area:  ')
        document.getElementById('heightFeed').innerHTML = ('Height:  ')
        document.getElementById('widthFeed').innerHTML = ('Width:  ')
        document.getElementById('PerimeterFeed').innerHTML = ('Perimeter:  ')
        document.getElementById('nameFeed').innerHTML = ('Shape Name:  ')
        document.getElementById('radiusFeed').innerHTML = ('Radius:  ')

        document.getElementById('areaFeed').append(this.area)
    console.log(this.area)
        document.getElementById('heightFeed').append(this.height)
        document.getElementById('widthFeed').append(this.width)
        document.getElementById('PerimeterFeed').append(this.perimeter)
        document.getElementById('nameFeed').append(this.name)
        document.getElementById('radiusFeed').append(this.radius)       
}
Delete(){
    this.shape.remove();
    document.getElementById('areaFeed').innerHTML = ('Area:  ')
        document.getElementById('heightFeed').innerHTML = ('Height:  ')
        document.getElementById('widthFeed').innerHTML = ('Width:  ')
        document.getElementById('PerimeterFeed').innerHTML = ('Perimeter:  ')
        document.getElementById('nameFeed').innerHTML = ('Shape Name:  ')
        document.getElementById('radiusFeed').innerHTML = ('Radius:  ')
}
Position(){
    var availW = field.offsetWidth - 60;
    var availH = field.offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px'
    this.shape.style.left = randomX;
    this.shape.style.top = randomY;
    console.log(randomX)
    console.log(randomY)
}
}

class Square extends Shape {
    constructor() {
        super('Square')
        this.name="Square"
        this.width = sideLength.value,
        this.height = sideLength.value,
        this.area = (sideLength.value * sideLength.value),
        this.perimeter = (sideLength.value * 4),
        this.radius = 'NA',
        this.shape.style.height = sideLength.value + 'px';
        this.shape.style.width = sideLength.value + 'px';
        this.draw()
        // this.Position()
        
    }
};

class Circle extends Shape {

    constructor() {
        super('Circle')
        this.name = 'Circle',
        this.width = (circRadius.value * 2),
        this.height = (circRadius.value * 2),
        this.radius = circRadius.value,
        this.area = (Math.PI * circRadius.value * circRadius.value),
        this.perimeter = (2 * Math.PI * circRadius.value);
        this.shape.style.height = circRadius.value + 'px';
        this.shape.style.width = circRadius.value + 'px';
        this.shape.style.borderRadius = (circRadius.value / 2) + 'px';
        this.draw()
        // this.Position()
    }
};

class Rectangle extends Shape {
    constructor() {
        super('Rectangle')
        this.name = 'Rectangle',
        this.width = recWidth.value,
        this.height = recHeight.value,
        this.area = (recHeight.value * recWidth.value),
        this.perimeter = (recHeight.value * 2) + (recWidth.value * 2),
        this.radius = 'NA',
        this.shape.style.height = recHeight.value + 'px';
        this.shape.style.width = recWidth.value + 'px';
        this.draw()    
        // this.Position()
    }
};

class Triangle extends Shape {
    constructor() {
        super('Triangle')
            this.name = 'Triangle',
        this.radius = 'NA',
        this.height = triangleHeight.value,
        this.width = triangleHeight.value,
        this.perimeter = (triangleHeight.value * 3),
        this.area = ((triangleHeight.value * triangleHeight.value) / 2),
        this.shape.style.borderTop = triangleHeight.value + 'px solid transparent';
        this.shape.style.borderBottom = triangleHeight.value + 'px solid #ffff94';
        this.shape.style.borderLeft = triangleHeight.value + 'px solid transparent';
        this.draw()
        // this.Position()
    }
};





const squareCre= () => {
    new Square();
}   
const rectangleCre= () => {
    new Rectangle();
}   
const circleCre= () => {
    new Circle();
}   
const triangleCre= () => {
    new Triangle();
}   
