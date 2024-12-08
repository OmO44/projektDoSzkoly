<?php

// Ustawienie nagłówka strony na kodowanie UTF-8

header('Content-Type: text/html; charset=UTF-8');


// Funkcja do obliczenia sumy dwóch liczb

function sum($a, $b) {
   
    return $a + $b; // Zwracamy sumę dwóch liczb

}


// Sprawdzamy, czy formularz został wysłany

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
    // Pobieramy dane z formularza
  
    $num1 = $_POST['number1'];
    $num2 = $_POST['number2'];
    
    // Wyświetlamy wynik sumy
   
    echo "Suma wynosi: " . sum($num1, $num2);
}

?>

<!-- Formularz do wpisania dwóch liczb -->

<form method="POST">
    
    <label for="number1">Liczba 1:</label>
    <input type="number" id="number1" name="number1"><br><br>
    
    <label for="number2">Liczba 2:</label>
    <input type="number" id="number2" name="number2"><br><br>
    
    <button type="submit">Oblicz sume</button>

</form>
