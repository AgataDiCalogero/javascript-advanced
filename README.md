# 📰 Hacker News NewsApp
**Aggregatore di notizie Hacker News – Progetto JavaScript Advanced**

---

## 📋 Descrizione
Applicazione web per consultare le ultime notizie da **Hacker News**, con caricamento progressivo e interfaccia accessibile. Destinata a chi desidera un'esperienza di lettura ordinata, responsiva e moderna.

---

## ✨ Features principali
- **Visualizzazione notizie** con paginazione ("Load More")
- **Loader animato** accessibile durante il caricamento
- **Scroll-to-top button** ↑ per navigazione rapida
- **Gestione fine notizie** e messaggi di stato
- **Accesso sicuro** alle proprietà degli oggetti tramite Lodash
- **Layout responsive** adattivo su mobile e desktop NewsApp  
Aggregatore di notizie Hacker News – Progetto JavaScript Advanced

## Descrizione
Applicazione web che consente di consultare le ultime notizie da Hacker News, con caricamento progressivo e interfaccia accessibile. Destinata a chi desidera un’esperienza di lettura ordinata, responsiva e moderna.

## Features principali
- Visualizzazione delle notizie Hacker News con paginazione (“Carica altre notizie”)
- Loader animato accessibile durante il caricamento
- Pulsante flottante “Torna su” per navigazione rapida
- Gestione fine notizie e messaggi di stato
- Accesso sicuro alle proprietà degli oggetti tramite Lodash
- Layout responsive e adattivo su mobile e desktop

## 🗂️ Struttura del progetto

```
    📁 javascript-advanced/
    └── 📁src
        └── 📁css
            └── 📁components
                ├── 📄 button.css
                ├── 📄 card.css
                ├── 📄 loader.css
            └── 📁layout
                ├── 📄 footer.css
                ├── 📄 header.css
                ├── 📄 main.css
            ├── 📄 _utilities.css
            ├── 📄 _variables.css
            ├── 📄 style.css
        └── 📁img
            ├── 📄 favicon.png
        └── 📁js
            ├── 📄 api.js
            ├── 📄 app.js
            ├── 📄 helpers.js
        ├── 📄 index.html
    ├── 📄 .gitignore
    ├── 📄 eslint.config.mjs
    ├── 📄 package-lock.json
    ├── 📄 package.json
    ├── 📄 README.md
    └── 📄 webpack.config.js
```
## Setup e installazione
1. Clonare la repository
2. Installare le dipendenze con `npm install`
3. Avviare l’ambiente di sviluppo con `npm run start`
4. Per la build di produzione, eseguire `npm run build`
5. Aprire `dist/index.html` per visualizzare la versione buildata

## Tech stack
- JavaScript ES6+ per la logica applicativa
- Webpack per bundling e gestione asset
- Lodash (`get`) per accesso sicuro alle proprietà degli oggetti
- CSS modulare con BEM e variabili custom
- HTML semantico per accessibilità

Le tecnologie sono state scelte per garantire modularità, sicurezza nell’accesso ai dati e facilità di manutenzione.

## 🎨 Scelte di design e accessibilità

- **Palette navy/gold soft**, design minimal e ordinato
- **Layout responsive** mobile-first con media queries
- **Focus visibile** per la navigazione da tastiera
- **Attributi ARIA** e ruoli semantici per screen reader
- **Componenti UI coerenti**, nessuno stile inline

## Gestione errori e loading
- Loader animato accessibile durante le chiamate API
- Messaggi di errore user-friendly in caso di problemi di rete, dati incompleti o API non raggiungibile
- Stato UI sempre coerente, nessun dato parziale visualizzato
- Fine notizie gestita con messaggio dedicato e disabilitazione del pulsante

## Screenshots

<div align="center">

### 🖥️ Desktop View
<img src="image.png" alt="Desktop view - Hacker News App with responsive grid layout" width="600">

*Vista desktop: layout responsive a griglia con card organizzate e design navy/gold*

### 📱 Mobile View  
<img src="image-1.png" alt="Mobile view - Hacker News App with vertical stack layout" width="300">

*Vista mobile: layout verticale ottimizzato con pulsante scroll-to-top e design adattivo*

</div>

## Deploy
La demo online è disponibile al seguente link:  
[Link alla demo pubblica]

La pubblicazione è avvenuta tramite Netlify.
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->


## Credits e riferimenti
- API Hacker News: https://github.com/HackerNews/API
- Documentazione Lodash: https://lodash.com/docs
- Progetto realizzato per Start2Impact – JavaScript Advanced

## Idee extra e sviluppi futuri
- Implementazione di ricerca e filtri sulle notizie
- Salvataggio delle notizie preferite in locale
- Modalità dark/light
- Miglioramento SEO