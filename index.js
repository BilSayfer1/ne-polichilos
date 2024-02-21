let inputs = document.querySelectorAll('.main, .maint');
let error = true



function saveChanges() {
    let chel = {}
    inputs.forEach(input => {
        if (input.classList.contains('main') && !input.value.trim()) {
            error = false
            input.classList.add('oshibka')
        } else {
            input.classList.remove('oshibka')
        }
    });
    if (error) {
        inputs.forEach(input => {
            chel[input.name] = input.value
        });
        console.log(chel);
    } else {
        console.log('телефон хизмат корсатиш дойрасидан ташкарида');
    }
}