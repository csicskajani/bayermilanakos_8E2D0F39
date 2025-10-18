# ⚽ FootballStats Live – Premier League 2025/26

**Készítette:** Bayer Milán Ákos  
**Dátum:** 2025. október  
**Projekt típusa:** Interaktív futball statisztikai weboldal  
**Használt nyelvek:** HTML, CSS, JavaScript  

---

## 🧩 Projekt áttekintése

A FootballStats Live egy **Premier League statisztikai weboldal**,  
amely megjeleníti a:
- **bajnoki tabellát**,  
- **legutóbbi és élő meccseket**,  
- valamint általános **idény-statisztikákat** (gólok, meccsek száma, átlagos gólátlag stb.).  

A célom egy **modern, angol nyelvű, animált, dinamikus futballoldal** létrehozása volt,  
amely kizárólag **frontend technológiákkal** (HTML, CSS, JavaScript) működik.

---

## 💻 Felhasznált technológiák

| Technológia | Felhasználás |
|--------------|--------------|
| **HTML5** | Az oldal szerkezete és tartalma |
| **CSS3** | Stílus, reszponzív megjelenés, animációk |
| **JavaScript** | Dinamikus tartalom és animációk megjelenítése |
| **JSON-szerű adatok (`data.js`)** | A csapatok, meccsek és játékosok adatainak tárolása |
| **Visual Studio Code** | Fejlesztői környezet |

---

## ⚙️ Fő funkciók

### 1️⃣ Premier League tabella
Megjeleníti mind a 20 csapatot:
- helyezés, formamutató (W/D/L),  
- pontszám, gólkülönbség,  
- vizuális jelölések (▲ vagy ▼).  

Az adatok a `data.js` fájlból töltődnek be,  
és a `renderLeagueTable()` függvény generálja őket dinamikusan.

---

### 2️⃣ Meccsek (Live & Recent)
A legutóbbi Premier League-meccsek listája:
- teljes eredmények,  
- gólszerzők és stadionnevek,  
- animált „LIVE” jelzés élő meccsekhez.  

A megjelenítésért a `renderMatches()` függvény felel.

---

### 3️⃣ Statisztikai kártyák (felső rész)
A főoldal tetején találhatók az animált statisztikai kártyák:
- Összes gól  
- Lejátszott meccsek  
- Élő meccsek száma  
- Átlagos gól/meccs  

A számok fokozatosan „felszámolódnak”,  
amit a `animateCounters()` függvény vezérel.

---

## 🧠 A `data.js` fájl magyarázata

A projektben szereplő adatok (csapatok, meccsek, játékosok)  
**nem közvetlenül HTML-ben vannak beírva**,  
hanem egy külön **JavaScript fájlban (`data.js`)**, amely JSON-szerű adatstruktúrát használ.

Ezt a megoldást **nem én találtam ki egyedül** —  
az ötletet és a működését a jó öreg haverom, **Mr. GPT** magyarázta el nekem 😄  
Ő mutatta meg, hogy így a kód **átláthatóbb, könnyebben frissíthető**,  
és elválasztható az adat a megjelenítéstől.

Így működik:
- Az adatok JavaScript tömbökben és objektumokban vannak eltárolva.  
- Ezeket globálisan elérhetővé tesszük a `window` objektum segítségével.  
- A `script.js` innen olvassa ki őket és generálja le dinamikusan a táblákat és listákat.  

Tehát gyakorlatilag ez egy **„mini adatbázis”** a frontend számára.

---

## 🎨 Design és UI

- **Sötét, zöld akcentusos téma**, ami a Premier League stílusára épül.  
- **Forgó logóanimáció** az oldal tetején (SVG + CSS keyframes).  
- **Reszponzív megjelenés** (működik telefonon és PC-n is).  
- **Hover animációk** minden interaktív elemen.  
- **Fix navigációs sáv** halvány áttetszőséggel és fényes hatással.  

---

## 🔧 Fájlszerkezet


---

## ⚠️ Eltávolított részek

A projekt elején volt egy **Players (Játékosok)** oldal is,  
de később eltávolítottam, mert feleslegessé vált és hibákat okozott.  

A végleges verzióban három fő oldal maradt:
- **Leagues** (tabella)  
- **Matches** (meccsek)  
- **Teams** (csapatok nézete)

Így az oldal stabilabb és átláthatóbb lett.

---

## 🚀 További fejlesztési ötletek

A jövőben szeretném hozzáadni:
- **Valódi Premier League API** használatát, hogy élő adatok is legyenek.  
- **Keresőmezőt** a csapatok és meccsek gyors megkereséséhez.  
- **Szűrőket** dátum és csapat alapján.  
- **Interaktív diagramokat** (Recharts vagy Chart.js segítségével).

---

## 💬 Személyes megjegyzés

Ez a projekt egyszerre volt tanulás és kihívás.  
Először nem tudtam, hogyan kezeljem a nagyobb adatmennyiséget JavaScriptben,  
de **Mr. GPT** segített megérteni az adat- és megjelenítés szétválasztását.  

Most már nem csak működik az oldal, de **élettel teli, animált és modern** is lett. ⚽🔥  

---
