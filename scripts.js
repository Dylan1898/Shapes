let field
sideLength
circRadius
triangleHeight
recHeight
recWidth

document.addEventListener('DOMContentLoaded', function () {
   
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
    areaFeed= document.getElementById('areaFeed')

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
        areaFeed.innerHTML = ('Area:  ')
        heightFeed.innerHTML = ('Height:  ')
        widthFeed.innerHTML = ('Width:  ')
        PerimeterFeed.innerHTML = ('Perimeter:  ')
        nameFeed.innerHTML = ('Shape Name:  ')
        radiusFeed.innerHTML = ('Radius:  ')

        areaFeed.append(this.area)
        heightFeed.append(this.height)
        widthFeed.append(this.width)
        PerimeterFeed.append(this.perimeter)
        nameFeed.append(this.name)
        radiusFeed.append(this.radius)       
}
    
Delete(){
    this.shape.remove();
        areaFeed.innerHTML = ('Area:  ')
        heightFeed.innerHTML = ('Height:  ')
        widthFeed.innerHTML = ('Width:  ')
        PerimeterFeed.innerHTML = ('Perimeter:  ')
        nameFeed.innerHTML = ('Shape Name:  ')
        radiusFeed.innerHTML = ('Radius:  ')
}

Position(){
    var availW = field.offsetWidth - 60;
    var availH = field.offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px'
    this.shape.style.left = randomX;
    this.shape.style.top = randomY;
    }
};

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
        sideLength.value=''
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
        circRadius.value=''    
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
        recHeight.value=''
        recWidth.value=''  
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
        triangleHeight.value = ''
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
