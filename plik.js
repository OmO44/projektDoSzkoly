// Funkcja do zmiany koloru tła strony

function changeBackgroundColor(color) {
   
    document.body.style.backgroundColor = color; // Zmienia kolor tła strony na wybrany

}


// Ustawienie nasłuchu na kliknięcie przycisku

document.getElementById('colorButton').addEventListener('click', function() {
    
    changeBackgroundColor('lightblue'); // Zmiana tła na jasno-niebieski po kliknięciu

});


// Funkcja do dodania elementu listy


function addListItem() {
    
    let newItem = document.createElement('li'); // Tworzymy nowy element listy
    
    newItem.textContent = 'Nowy element listy'; // Ustawiamy tekst nowego elementu
    document.querySelector('ul').appendChild(newItem); // Dodajemy nowy element do istniejącej listy
}

// Ustawienie nasłuchu na kliknięcie przycisku dodawania elementu listy

document.getElementById('addItemButton').addEventListener('click', addListItem); // Nasłuchujemy na kliknięcie i dodajemy element listy
