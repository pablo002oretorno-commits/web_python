function calcular(operacao) {
    let campo1 = document.querySelector('num1');
    let campo2 = document.querySelector('num2');    
    let resultado;
    if(campo1.value === '' || campo2.value ==='') {
        alert('preencha os dois números.');
        return;
    }

    let num1 = number(campo1.value);
    let num2 = number(campo2.value);
}