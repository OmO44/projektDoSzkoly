# Funkcja do obliczania sumy dwóch liczb

def suma(a, b):
    
    return a + b  # Zwracamy wynik dodawania dwóch liczb


# Pobieramy dane wejściowe od użytkownika

num1 = float(input("Podaj pierwszą liczbę: "))  # Wczytujemy pierwszą liczbę
num2 = float(input("Podaj drugą liczbę: "))  # Wczytujemy drugą liczbę

# Obliczamy sumę

result = suma(num1, num2)  # Przechowujemy wynik dodawania w zmiennej result

# Wyświetlamy wynik

print(f"Suma {num1} i {num2} wynosi: {result}")  # Wyświetlamy wynik sumowania

def odejmowanie(a, b):
    
    # Zwracamy wynik odejmowania dwóch liczb

    return a - b  

# Pobieramy dane wejściowe od użytkownika

Num1 = float(input("Podaj pierwszą liczbę: "))  # Wczytujemy pierwszą liczbę
Num2 = float(input("Podaj drugą liczbę: "))  # Wczytujemy drugą liczbę

# Obliczamy sumę

result2 = suma(Num1, Num2)  # Przechowujemy wynik odejmowania w zmiennej result

# Wyświetlamy wynik

print(f"Suma {Num1} i {Num2} wynosi: {result2}")  # Wyświetlamy wynik sumowania
