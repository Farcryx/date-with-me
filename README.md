# Date With Me

**Date With Me** to aplikacja internetowa stworzona przy użyciu React, która prowadzi użytkownika przez interaktywny
proces planowania randki.

## Spis treści

- [Wymagania](#wymagania)
- [Instalacja](#instalacja)
- [Uruchomienie](#uruchomienie)
- [Struktura projektu](#struktura-projektu)
- [Skrypty](#skrypty)
- [Deployment](#deployment)
- [Licencja](#licencja)

## Wymagania

- Node.js
- npm

## Instalacja

Aby zainstalować wszystkie zależności, uruchom:

```bash
npm install
```

## Uruchomienie

Aby uruchomić aplikację w trybie deweloperskim, użyj:

```bash
npm start
```

Lokalnie uruchomiona aplikacja będzie dostępna pod
adresem [http://localhost:3000/date-with-me](http://localhost:3000/date-with-me). <br/>
`UWAGA:` Port może różnić się w zależności od konfiguracji środowiska.

## Struktura projektu

- `src/assets/pages/first.jsx`: Pierwsza strona aplikacji.
- `src/assets/pages/second.jsx`: Druga strona aplikacji.
- `src/assets/pages/third.jsx`: Trzecia strona aplikacji.
- `src/assets/pages/fourth.jsx`: Czwarta strona aplikacji.
- `src/assets/pages/fifth.jsx`: Piąta strona aplikacji.
- `src/assets/pages/sixth.jsx`: Szósta strona aplikacji.
- `src/assets/pages/seventh.jsx`: Siódma strona aplikacji.
- `src/assets/pages/eighth.jsx`: Ósma strona aplikacji.
- `App.css`: Plik stylów dla aplikacji.
- `deploy.yml`: Konfiguracja GitHub Actions do automatycznego wdrażania aplikacji.

## Skrypty

- `npm start`: Uruchamia aplikację w trybie deweloperskim.
- `npm run lint`: Sprawdza poprawność składni kodu.
- `npm run format`: Formatuje kod.
- `npm run dev`: Buduje aplikację w trybie deweloperskim.
- `npm run build`: Buduje aplikację do produkcji.

## Deployment

Aplikacja jest automatycznie wdrażana na GitHub Pages przy każdym pushu do gałęzi `main`. Konfiguracja znajduje się w
pliku `deploy.yml`.

## Licencja

Ten projekt jest licencjonowany na warunkach licencji MIT.
