// MODUL_2_WEEK_1

const auto = {
    manufacturer:'Kia',
    model:'Rio',
    year: 2022 ,
    speed: 90
}

function showInfo(auto){
    document.getElementById('manufacturer').innerText = (`Производитель: ${auto.manufacturer}`)
    document.getElementById('model').innerText = (`Модель : ${auto.model}`)
    document.getElementById('year').innerText = (`Год выпуска: ${auto.year} год`)
    document.getElementById('speed').innerText = (`Средняя скорость : ${auto.speed} км/ч`)
}

showInfo(auto)

function timeRoad(distance){
    let hours = 0
    let time = distance /`${auto.speed}`
    for( let i = 0;i < time;i++){
        if( i % 4 == 0){
            hours++
        }
    }
    let result = Math.round(hours + time)
    document.getElementById('distance').innerText = (`Для преодаления ${distance} киллометров потребутеся ${result} часов`)
    return result
}

timeRoad(1000)


// ТРЕТЬЕ ЗАДАНИЕ 

const time = {
    hours: 5,
    minutes: 10,
    seconds: 20
}

function showTime(a){
    document.getElementById('time').innerHTML = `Время 
${String(a.hours).padStart(2,'0')}:${a.minutes.toString().padStart(2,'0')}:${a.seconds.toString().padStart(2,'0')}`
}

// showTime(time)

function changeSeconds(b){
    let result = time.seconds + b
    let min = 0
    for(let i = 0;i < result;i++){
        if( i % 60 == 0 && i != 0){
            min++
        }
    }
    if(time.seconds = 60){
        min++
        time.seconds = 0
    }
    time.minutes += min
    time.seconds = result - (60 * min)
    showTime(time)
}

// changeSeconds(200)

function addSeconds(s) {
    const seconds = time.seconds + s
    const minutes = time.minutes + Math.floor(seconds/60) 
    const hours = time.hours + Math.floor(minutes/60)
    time.seconds = seconds%60
    time.minutes = minutes%60
    time.hours = hours%24
    showTime(time)
}
function addMinutes(m) {
    addSeconds(m*60)
}
function addHours(h) {
    addMinutes(h*60)
}
showTime(time)



// MODUL_1_WEEK_5

function degree(x,y){
    if(y == 1){
        return x
    }else{
        return x * degree(x, y-1)
    }
}

console.log(degree(2,2))


function maxDivider(a,b, div=Math.min(a,b)){
    if( a%div==0 && b%div==0 ){
        return div
    }else{
        return maxDivider(a,b, div-1)
    }
}

console.log(maxDivider(56,98))



function maxNumber(num){
    if(num < 10){
        return num
    }else{
        return Math.max(num % 10,maxNumber(parseInt(num/10))) 
        Math.max(6,3,4,2,3) 
    }
}



console.log(maxNumber(32436))
console.log(Math.max(...String(32436).split('')))


function simpleNumber(n, a=n-1){
    if(a == 1){
        return true
    }else{
        return  n % a == 0 ? false : simpleNumber(n, a - 1)
    }
}
console.log(simpleNumber(2))

function allFactor(f,l = 2){
    if(l == 1){
        return f
    }else{
        const fac = 
    }
}