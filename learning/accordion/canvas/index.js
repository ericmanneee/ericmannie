const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


ctx.font = '24px cursive'
ctx.direction = 'rtl'
ctx.fillStyle = 'red'
ctx.textAlign = 'right'
ctx.textBaseline = "alphabetic"
ctx.fillText('Ericmannie', 150,50)
ctx.strokeText(ctx.measureText('eric').width,300,50)

