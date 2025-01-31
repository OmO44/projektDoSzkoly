// Importowanie wymaganych bibliotek
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

// Klasa reprezentująca użytkownika
class User {
    private String name;
    private String email;
    private String message;

    // Konstruktor klasy User
    public User(String name, String email, String message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    // Getter dla imienia
    public String getName() {
        return name;
    }

    // Setter dla imienia
    public void setName(String name) {
        this.name = name;
    }

    // Getter dla adresu e-mail
    public String getEmail() {
        return email;
    }

    // Setter dla adresu e-mail
    public void setEmail(String email) {
        this.email = email;
    }

    // Getter dla wiadomości
    public String getMessage() {
        return message;
    }

    // Setter dla wiadomości
    public void setMessage(String message) {
        this.message = message;
    }

    // Metoda do wyświetlania danych użytkownika
    public void displayUserData() {
        System.out.println("Imię i Nazwisko: " + name);
        System.out.println("Email: " + email);
        System.out.println("Wiadomość: " + message);
    }
}

// Główna klasa aplikacji
public class Main {
    private static List<User> users = new ArrayList<>();  // Lista użytkowników

    // Funkcja do walidacji danych
    public static boolean validateUserData(String name, String email, String message) {
        if (name == null || name.isEmpty()) {
            System.out.println("Imię i nazwisko jest wymagane.");
            return false;
        }
        if (email == null || !email.contains("@")) {
            System.out.println("Niepoprawny adres e-mail.");
            return false;
        }
        if (message == null || message.isEmpty()) {
            System.out.println("Wiadomość jest wymagana.");
            return false;
        }
        return true;
    }

    // Funkcja do dodawania użytkownika
    public static void addUser(String name, String email, String message) {
        if (validateUserData(name, email, message)) {
            User newUser = new User(name, email, message);
            users.add(newUser);
            System.out.println("Dane użytkownika zostały zapisane.");
        }
    }

    // Funkcja do wyświetlania wszystkich użytkowników
    public static void displayAllUsers() {
        if (users.isEmpty()) {
            System.out.println("Brak zapisanych użytkowników.");
        } else {
            for (User user : users) {
                user.displayUserData();
                System.out.println("------------");
            }
        }
    }

    // Funkcja do edytowania danych użytkownika
    public static void editUser(int index, String name, String email, String message) {
        if (index >= 0 && index < users.size()) {
            User user = users.get(index);
            user.setName(name);
            user.setEmail(email);
            user.setMessage(message);
            System.out.println("Dane użytkownika zostały zaktualizowane.");
        } else {
            System.out.println("Nie znaleziono użytkownika.");
        }
    }

    // Funkcja do usuwania użytkownika
    public static void removeUser(int index) {
        if (index >= 0 && index < users.size()) {
            users.remove(index);
            System.out.println("Użytkownik został usunięty.");
        } else {
            System.out.println("Nie znaleziono użytkownika.");
        }
    }

    // Funkcja główna
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  // Inicjalizacja skanera do wejścia z klawiatury
        int choice;

        do {
            // Wyświetlanie menu
            System.out.println("Wybierz opcję:");
            System.out.println("1. Dodaj użytkownika");
            System.out.println("2. Wyświetl wszystkich użytkowników");
            System.out.println("3. Edytuj dane użytkownika");
            System.out.println("4. Usuń użytkownika");
            System.out.println("5. Wyjście");
            System.out.print("Twój wybór: ");
            choice = scanner.nextInt();  // Odczytanie wyboru użytkownika
            scanner.nextLine();  // Konsumowanie nowej linii po wprowadzeniu liczby

            switch (choice) {
                case 1:
                    // Dodawanie użytkownika
                    System.out.print("Podaj imię i nazwisko: ");
                    String name = scanner.nextLine();
                    System.out.print("Podaj adres e-mail: ");
                    String email = scanner.nextLine();
                    System.out.print("Podaj wiadomość: ");
                    String message = scanner.nextLine();
                    addUser(name, email, message);
                    break;

                case 2:
                    // Wyświetlanie wszystkich użytkowników
                    displayAllUsers();
                    break;

                case 3:
                    // Edytowanie użytkownika
                    System.out.print("Podaj indeks użytkownika do edycji (rozpoczynając od 0): ");
                    int editIndex = scanner.nextInt();
                    scanner.nextLine();  // Konsumowanie nowej linii
                    System.out.print("Podaj nowe imię i nazwisko: ");
                    name = scanner.nextLine();
                    System.out.print("Podaj nowy adres e-mail: ");
                    email = scanner.nextLine();
                    System.out.print("Podaj nową wiadomość: ");
                    message = scanner.nextLine();
                    editUser(editIndex, name, email, message);
                    break;

                case 4:
                    // Usuwanie użytkownika
                    System.out.print("Podaj indeks użytkownika do usunięcia (rozpoczynając od 0): ");
                    int removeIndex = scanner.nextInt();
                    scanner.nextLine();  // Konsumowanie nowej linii
                    removeUser(removeIndex);
                    break;

                case 5:
                    // Wyjście z programu
                    System.out.println("Dziękujemy za skorzystanie z aplikacji.");
                    break;

                default:
                    System.out.println("Niepoprawny wybór. Spróbuj ponownie.");
                    break;
            }
        } while (choice != 5);  // Program działa do momentu, gdy użytkownik wybierze opcję wyjścia

        scanner.close();  // Zamknięcie skanera
    }
}
