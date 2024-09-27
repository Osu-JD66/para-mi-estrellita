const canvas = document.getElementById('girasolCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 500; // Ajuste del tamaño del canvas

function drawTallo() {
    // Tallo largo
    ctx.beginPath();
    ctx.moveTo(200, 500);
    ctx.lineTo(200, 150); // Alargado el tallo
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'green';
    ctx.stroke();
    ctx.closePath();

    // Hojas detalladas
    ctx.beginPath();
    ctx.ellipse(166, 340, 50, 25, Math.PI / 4, 0, Math.PI * 2);
    ctx.ellipse(234, 400, 50, 25, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
}

function drawPetalo(x, y, angle) {
    // Pétalos más detallados
    ctx.beginPath();
    ctx.ellipse(x, y, 60, 40, angle, 0, Math.PI * 2); // Pétalos más grandes
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'orange'; // Borde para mayor detalle
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawCentro() {
    // Centro del girasol
    ctx.beginPath();
    ctx.arc(200, 150, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'brown'; // Borde para el centro
    ctx.stroke();
    ctx.closePath();
}

function drawPetalos() {
    for (let i = 0; i < 14; i++) {
        let angle = (i * Math.PI * 2) / 14;
        let x = 200 + Math.cos(angle) * 90;
        let y = 150 + Math.sin(angle) * 90;

        setTimeout(() => {
            drawPetalo(x, y, angle);
        }, i * 150);
    }
}

function drawGirasol() {
    drawTallo();
    setTimeout(drawPetalos, 1000);
    setTimeout(drawCentro, 3500);
}

window.onload = drawGirasol;
