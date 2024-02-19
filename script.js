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
    document.getElementById('time').innerText = (`Время ${a.hours}:${a.minutes}:${a.seconds}`)
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

changeSeconds(200)




// MODUL_1_WEEK_5

function degree(x,y){
    if(y == 1){
        return x
    }else{
        return x * degree(x, y-1)
    }
}

console.log(degree(2,2))


function maxDivider(a,b){
    if( a = 1 || b = 1){
        return Math.min(a,b)
    }else{
        let c = a % b
        return c = 0 ? b :maxDivider(b,c)
    }
}

console.log(maxDivider(56,98))