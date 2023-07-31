var points = []
var speed
var r1, r2, g1, g2, b1, b2


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0, 0)
    angleMode(DEGREES)
    noiseDetail(1)

    speed = random(0.002, 0.01)

    var density = 50
    var space = width / density
    var rand = random(-10, 10)

    for (var x = 0; x < width; x += space){
        for (var y = 0; y < innerHeight; y += space){
            var p = createVector(x + rand, y + rand)
            points.push(p)
        }
    }

    shuffle(points, true)

    r1 = random(255)
    r2 = random(255)
    g1 = random(255)
    g2 = random(255)
    b1 = random(255)
    b2 = random(255)

}

function draw() {
    noStroke()

    var frSpd = frameCount * 7

    if (frSpd<= points.length){
        var max = frSpd
    } else {
        var max = points.length
    }

    for (var i = 0; i < max; i++){

        var r = map(points[i].x, 0, width, r1, r2)
        var g = map(points[i].y, 0, height, g1, g2)
        var b = map(points[i].x, 0, width, b1, b2)
        var a = map(dist(width/2, height/2, points[i].x, points[i].y), 0, 1900, 50, 0)

        fill(r,g,b,a)

        var angle = map(noise(points[i].x * speed, points[i].y * speed), 0, 1, 0, 720)

        points[i].add(createVector(cos(angle), sin(angle)))

        ellipse(points[i].x, points[i].y, 1)

        // if (dist(width/2, height/2, points[i].x, points[i].y) < 400){
        //     ellipse(points[i].x, points[i].y, 1)
        // }
    }
}