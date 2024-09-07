const pantalla = document.querySelector('#display')
const buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calcular)

}


function calcular() {
    let pv = pantalla.value;
    
    if (this.value === 'X') {
        pantalla.value = pv.slice(0, pv.length - 1)
        return;
    } /* Tecla de borrar todo */
    if (this.value === 'AC') {
        pantalla.value = pv.slice(0, - pv.length )
        return;
    }
    if (this.value === '=') {
        pantalla.value = eval(pv)
        return;
    }
    /* Aqui falta colocar el signo de "=", tener en cuenta en el final de la operacion */
    if (( this.value === '/' || this.value === '*' || this.value === '+' || this.value === '-' || this.value === '=') && pv === '') {
        return;

    }
    if ((this.value === '/' || this.value === '*' || this.value === '+' || this.value === '-') && (pv.slice(-1) === '/' || pv.slice(-1) === '*' || pv.slice(-1) === '+' || pv.slice(-1) === '-')) {
        pantalla.value = pv.slice(0, pv.length - 1) + this.value;
        return;
    }
    pantalla.value += this.value
}

