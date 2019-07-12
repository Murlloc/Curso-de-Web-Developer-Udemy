
function factory (name , char_class, char_name){
    return {
        name: name,
        char_class: char_class,
        char_name: char_name
    }
}
const party = [factory('felipe', 'warrior', 'olaf'),factory('kamilla','barbaro','Helena')]
console.log(party)
