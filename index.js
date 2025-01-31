// Inicjalizacja zmiennych globalnych
let currentTheme = 'light'; // Domyślny motyw to "jasny"
const themes = ['light', 'dark']; // Lista dostępnych motywów
const themeButton = document.getElementById('themeButton'); // Przycisk zmiany motywu

// Funkcja do zmiany motywu strony
function toggleTheme() {
    if (currentTheme === 'light') {
        setDarkTheme(); // Jeśli obecny motyw to 'light', ustaw motyw 'dark'
    } else {
        setLightTheme(); // Jeśli obecny motyw to 'dark', ustaw motyw 'light'
    }
}

// Funkcja do ustawienia jasnego motywu
function setLightTheme() {
    document.body.style.backgroundColor = '#ffffff'; // Zmiana tła na biały
    document.body.style.color = '#000000'; // Zmiana koloru tekstu na czarny
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease'; // Animacja płynnego przejścia
    currentTheme = 'light'; // Zaktualizowanie zmiennej motywu
    localStorage.setItem('theme', 'light'); // Zapisywanie wybranego motywu w localStorage
    console.log('Motyw ustawiony na jasny');
}

// Funkcja do ustawienia ciemnego motywu
function setDarkTheme() {
    document.body.style.backgroundColor = '#2e2e2e'; // Zmiana tła na ciemne
    document.body.style.color = '#ffffff'; // Zmiana koloru tekstu na biały
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease'; // Animacja płynnego przejścia
    currentTheme = 'dark'; // Zaktualizowanie zmiennej motywu
    localStorage.setItem('theme', 'dark'); // Zapisywanie wybranego motywu w localStorage
    console.log('Motyw ustawiony na ciemny');
}

// Funkcja do załadowania motywu z localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme'); // Pobieranie zapisanego motywu
    if (savedTheme) {
        // Jeśli zapisano motyw, ustaw go
        currentTheme = savedTheme;
        if (currentTheme === 'light') {
            setLightTheme(); // Ustaw motyw jasny
        } else {
            setDarkTheme(); // Ustaw motyw ciemny
        }
    } else {
        // Jeśli nie zapisano motywu, ustaw domyślny motyw
        setLightTheme(); // Domyślnie ustaw motyw jasny
    }
}

// Funkcja inicjująca wydarzenia po załadowaniu strony
function init() {
    // Ładowanie motywu z localStorage
    loadTheme();

    // Przypisanie funkcji toggleTheme do przycisku
    themeButton.addEventListener('click', toggleTheme);
    console.log('Skrypt inicjalizowany');
}

// Ustawienie zegara na stronie
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date(); // Pobieranie bieżącej daty
    const hours = now.getHours(); // Pobieranie godziny
    const minutes = now.getMinutes(); // Pobieranie minut
    const seconds = now.getSeconds(); // Pobieranie sekund

    // Formatowanie godziny, minut i sekund
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Wyświetlanie zegara na stronie
    clockElement.textContent = formattedTime;
}

// Funkcja, która uruchamia zegar co sekundę
function startClock() {
    updateClock(); // Uruchamiamy aktualizację zegara po załadowaniu
    setInterval(updateClock, 1000); // Aktualizowanie zegara co 1000 ms (1 sekunda)
}

// Funkcja do walidacji formularza kontaktowego
function validateForm(event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let valid = true;

    // Sprawdzanie, czy pole imienia nie jest puste
    if (nameInput.value.trim() === '') {
        alert('Imię i nazwisko są wymagane.');
        valid = false;
    }

    // Sprawdzanie, czy adres e-mail jest poprawny
    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        alert('Podaj poprawny adres e-mail.');
        valid = false;
    }

    // Sprawdzanie, czy pole wiadomości nie jest puste
    if (messageInput.value.trim() === '') {
        alert('Wiadomość jest wymagana.');
        valid = false;
    }

    // Jeśli formularz jest niepoprawny, zapobiegamy jego wysłaniu
    if (!valid) {
        event.preventDefault();
    }
}

// Funkcja obsługująca wysyłanie formularza
function handleSubmit(event) {
    alert('Formularz wysłany!'); // Informacja po wysłaniu formularza
}

// Inicjalizacja formularza
function initForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', validateForm); // Walidacja formularza
    form.addEventListener('submit', handleSubmit); // Obsługa wysyłania formularza
    console.log('Formularz gotowy do użycia');
}

// Funkcja do przewijania strony do góry
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log('Strona przewinięta na górę');
}

// Funkcja inicjująca elementy strony
function initializePage() {
    init(); // Inicjalizowanie motywu
    startClock(); // Rozpoczęcie zegara
    initForm(); // Inicjalizacja formularza
    const scrollButton = document.getElementById('scrollTopButton');
    scrollButton.addEventListener('click', scrollToTop); // Ustawienie przycisku do przewijania
    console.log('Strona została zainicjowana');
}

// Uruchamianie skryptu po załadowaniu strony
window.addEventListener('load', initializePage);
