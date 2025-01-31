<?php
// Rozpoczęcie sesji
session_start();

// Inicjalizacja zmiennej dla formularza
$name = "";
$email = "";
$message = "";

// Funkcja do walidacji formularza
function validateForm($name, $email, $message) {
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Imię i nazwisko są wymagane.";
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Podaj poprawny adres e-mail.";
    }
    
    if (empty($message)) {
        $errors[] = "Wiadomość jest wymagana.";
    }
    
    return $errors;
}

// Sprawdzenie, czy formularz został wysłany
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobieranie danych z formularza
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Walidacja formularza
    $errors = validateForm($name, $email, $message);
    
    // Jeśli brak błędów, zapisujemy dane do sesji
    if (empty($errors)) {
        $_SESSION['name'] = $name;
        $_SESSION['email'] = $email;
        $_SESSION['message'] = $message;
        $_SESSION['success'] = "Formularz został pomyślnie wysłany!";
    } else {
        $_SESSION['errors'] = $errors;
    }
}

// Funkcja do wyświetlania komunikatów o błędach
function displayErrors() {
    if (isset($_SESSION['errors'])) {
        echo '<ul>';
        foreach ($_SESSION['errors'] as $error) {
            echo "<li>$error</li>";
        }
        echo '</ul>';
        unset($_SESSION['errors']);
    }
}

// Funkcja do wyświetlania komunikatu o sukcesie
function displaySuccess() {
    if (isset($_SESSION['success'])) {
        echo "<p>{$_SESSION['success']}</p>";
        unset($_SESSION['success']);
    }
}

?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Strona kontaktowa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Nagłówek strony -->
    <header>
        <h1>Formularz Kontaktowy</h1>
    </header>

    <main>
        <!-- Wyświetlanie komunikatów o błędach lub sukcesie -->
        <section id="messages">
            <?php displayErrors(); ?>
            <?php displaySuccess(); ?>
        </section>

        <!-- Formularz kontaktowy -->
        <section id="contact-form">
            <form action="index.php" method="POST">
                <!-- Pole na imię i nazwisko -->
                <label for="name">Imię i nazwisko:</label>
                <input type="text" id="name" name="name" value="<?= htmlspecialchars($name) ?>" required>
                
                <!-- Pole na adres e-mail -->
                <label for="email">Adres e-mail:</label>
                <input type="email" id="email" name="email" value="<?= htmlspecialchars($email) ?>" required>
                
                <!-- Pole na wiadomość -->
                <label for="message">Wiadomość:</label>
                <textarea id="message" name="message" rows="4" required><?= htmlspecialchars($message) ?></textarea>
                
                <!-- Przycisk do wysłania formularza -->
                <button type="submit">Wyślij</button>
            </form>
        </section>

        <!-- Sekcja z dynamicznym wyświetlaniem danych -->
        <section id="info">
            <h2>Ostatnia wysłana wiadomość:</h2>
            <?php
            // Sprawdzenie, czy istnieją zapisane dane w sesji
            if (isset($_SESSION['name']) && isset($_SESSION['email']) && isset($_SESSION['message'])) {
                echo "<p><strong>Imię i Nazwisko:</strong> {$_SESSION['name']}</p>";
                echo "<p><strong>Email:</strong> {$_SESSION['email']}</p>";
                echo "<p><strong>Wiadomość:</strong> {$_SESSION['message']}</p>";
            } else {
                echo "<p>Brak danych do wyświetlenia. Wyślij formularz, aby je zobaczyć.</p>";
            }
            ?>
        </section>

        <!-- Sekcja z dodatkową informacją -->
        <section id="about">
            <h2>O nas</h2>
            <p>Jesteśmy firmą specjalizującą się w tworzeniu nowoczesnych aplikacji webowych i mobilnych. Naszym celem jest dostarczenie klientom najlepszych rozwiązań technologicznych.</p>
        </section>

        <!-- Link do innej strony -->
        <section id="links">
            <h3>Przejdź do naszej strony głównej</h3>
            <a href="https://www.example.com">Strona główna</a>
        </section>
    </main>

    <!-- Stopka strony -->
    <footer>
        <p>&copy; 2025 Nasza Firma. Wszystkie prawa zastrzeżone.</p>
    </footer>
</body>
</html>
