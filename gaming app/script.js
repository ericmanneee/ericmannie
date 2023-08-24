const canvas = document.getElementById('myCanvas')
ctx = canvas.getContext('2d')
ctx.fillStyle = '#000'
ctx.fillRect(0,0,1028,768)

function loadAsset(path){
    return new Promise((resolve) => {
        const img = new Image()
        img.src = path
        img.onload = () =>{
            resolve(img)
        }
    })
}

async function run(){
    const heroImg = await loadAsset('big player.png')
    const monsterImg = await loadAsset('monster.png')
    ctx.drawImage(heroImg, canvas.width/2 - 45, canvas.height - canvas.height/4,30,30)
    ctx.drawImage(monsterImg, 0,0,30,30)
}
run()


function createEnemies(enemyImage){
    const monsters = 5
    const monsterWidth = monsters * 98
    const startX = (canvas.width - monsterWidth) / 2
    const stopX = startX + monsterWidth

    for (let x = startX; x < stopX; x+= 98) {
        for (let y = 0; y < 50 * 5; y+= 50) {
            ctx.drawImage(enemyImage, x, y)     
        }
        
    }
}

createEnemies()