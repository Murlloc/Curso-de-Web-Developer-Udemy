const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response =>{
    var funcionarios = response.data
    const chineses = funcionarios.filter(find_chinese).reduce(get_lower_salary)
    print(chineses)
})

find_chinese = function (array) {
    return array.pais === "China" && array.genero === "F"
}

get_lower_salary = function (acumulador, atual) {
    return acumulador.salario < atual.salario ? acumulador : atual; //se a condição for vdd
                                                                    //pega o valor do acumulador
                                                                    //se não, pega do atual
}

function print(e){
    console.log(e)
}