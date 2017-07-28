document.addEventListener('DOMContentLoaded', function () {
    console.log('dom')
});
var q = document.createElement("div")
class Shape {
    constructor(name, width, height, sideLength, radius, base) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.sideLength = sideLength;
        this.radius = radius;
        this.base = base;
        // deleteShapes()
        Describe()
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super()
        this.sideLength = sideLength
        // Describe()
    }
};

class Circle extends Shape {

    constructor(radius) {
        super()
        this.radius = radius
        this.height = (radius * 2)
        this.width = this.height     
        // Describe()
    }
};

class Triangle extends Shape {
    constructor(height) {
        super()
        this.height = height;
        this.base = height;
        this.width = height;
        // Describe()
    }
};

class Rectangle {
    constructor(width, height) {
        // super()
        this.width = width;
        this.height = height;
        // Describe()
    }
};





function squareCre() {
    var a = document.getElementById('sideLength').value;
    console.log(a)
    var w = new Square(
        this.name = 'Square',
        this.width = a,
        this.height = a,
        this.area = (a * a),
        this.perimeter = (a * 4),
        this.radius = 'NA',
        console.log(this.area)
    )
    var p = document.createElement("div");
    document.getElementById('field').appendChild(p).setAttribute("class", "square shape");
    (p).style.height = a + 'px';
    (p).style.width = a + 'px';
    var availW = document.getElementById('field').offsetWidth - 60;
    var availH = document.getElementById('field').offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px'
    p.style.left = randomX;
    p.style.top = randomY;
}







function circleCre() {
    var b = document.getElementById('circRadius').value;
    var w = new Circle(
        this.name = 'Circle',
        this.width = (b * 2),
        this.height = (b * 2),
        this.radius = b,
        this.area = (Math.PI * this.radius * this.radius),
        this.perimeter = (2 * Math.PI * this.radius),
        // Describe()
    )
    var q = document.createElement("div");
    ;
    // console.log(b)

    q.style.height = b + 'px';
    q.style.width = b + 'px';
    q.style.borderRadius = (b / 2) + 'px';
    var availW = document.getElementById('field').offsetWidth - 60;
    var availH = document.getElementById('field').offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px'
    q.style.left = randomX;
    q.style.top = randomY;
    console.log(randomY)
    document.getElementById('field').appendChild(q).setAttribute("class", "circle shape")

}





function triangleCre() {
    var c = document.getElementById('triangleHeight').value;
    console.log(c)
    var x = new Triangle(
        this.name = 'Triangle',
        this.radius = 'NA',
        this.height = c,
        this.width = c,
        this.perimeter = (c * 3),
        this.area = ((c * c) / 2),
        // document.getElementsByClassName('shape').onclick = Describe
    )
    var p = document.createElement("div")
    p.style.borderTop = c + 'px solid transparent';
    p.style.borderBottom = c + 'px solid yellow';
    p.style.borderLeft = c + 'px solid transparent';
    var availW = document.getElementById('field').offsetWidth - 100;
    var availH = document.getElementById('field').offsetHeight - 100;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px'
    p.style.left = randomX;
    p.style.top = randomY;
    document.getElementById('field').appendChild(p).setAttribute("class", "triangle shape");

}




function rectangleCre() {
    var d = document.getElementById('recHeight').value;
    var e = document.getElementById('recWidth').value;
    var x = new Rectangle(
        this.height = d,
        this.width = e,
        this.area = (e * d),
        this.perimeter = (e * 2) + (d * 2),
        this.radius = 'NA'
    )
    var p = document.createElement("div")
    p.style.height = d + 'px';
    p.style.width = e + 'px';
    var availW = document.getElementById('field').offsetWidth - 60;
    var availH = document.getElementById('field').offsetHeight - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px'
    p.style.left = randomX;
    p.style.top = randomY;
    console.log(d)

    document.getElementById('field').appendChild(p).setAttribute("class", "rectangle shape")
}



function Describe() {
    addEventListener('click', function () {
        console.log('clicked')
        document.getElementById('areaFeed').innerHTML = ('Area:  ')
        document.getElementById('heightFeed').innerHTML = ('Height:  ')
        document.getElementById('widthFeed').innerHTML = ('Width:  ')
        document.getElementById('PerimeterFeed').innerHTML = ('Perimeter:  ')
        document.getElementById('nameFeed').innerHTML = ('Name:  ')
        document.getElementById('radiusFeed').innerHTML = ('Radius:  ')

        document.getElementById('areaFeed').append(this.area)
        document.getElementById('heightFeed').append(this.height)
        document.getElementById('widthFeed').append(this.width)
        document.getElementById('PerimeterFeed').append(this.perimeter)
        document.getElementById('nameFeed').append(this.name)
        document.getElementById('radiusFeed').append(this.radius)
    })
}
function deleteShapes() {
// //     var x= document.getElementsByClassName('shape')
// //     x.addEventListener('dblclick', function (e) {
// //         this.remove()
// //     // addEventListener('dblclick', function () {
// //     //     document.getElementById('field').removeChild(this)
// //     })
// var parent = document.getElementById("field")
// var child = document.
// // function randPosition() {
}
// // }
