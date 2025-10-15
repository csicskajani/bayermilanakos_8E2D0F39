# Dokumentáció

## Téma: Football Stats – Foci statisztika weboldal

A weboldalam témája a labdarúgás, azon belül is a csapatok és játékosok statisztikáinak bemutatása.  
A célom, hogy egy áttekinthető, látványos és informatív weboldalt készítsek, ahol a látogatók megismerhetik néhány ismert futballcsapat adatait és teljesítményét.  
A projekt célja nemcsak az, hogy megjelenítsem az adatokat, hanem hogy JavaScript segítségével dinamikus számításokat és interaktív funkciókat is megvalósítsak.

A weboldal három fő részből fog állni:
1. **Főoldal (index.html)** – rövid bemutató a fociról és a weboldal céljáról.  
   Itt lesz néhány látványos kép és egy bevezető szöveg a statisztikai oldalakhoz.  
   A navigációs menüből el lehet majd érni a többi oldalt.
2. **Csapatok oldal (teams.html)** – itt egy táblázatban jelennek meg a csapatok adatai (név, lejátszott meccsek száma, rúgott és kapott gólok, győzelmek, vereségek stb.).  
   Ezeket JavaScript tömbből töltöm be, és függvények segítségével fogom feldolgozni.
3. **Statisztika oldal (stats.html)** – itt a JavaScript segítségével különböző számításokat végzek:  
   például összegzem az összes rúgott gólt, megkeresem a legtöbb gólt rúgó csapatot, és kiszámolom az átlagos gólkülönbséget.  
   Az eredményeket dinamikusan, a felhasználó által is frissíthető módon jelenítem meg.

A weboldalt **HTML**, **CSS** és **JavaScript** technológiák felhasználásával készítem.  
A HTML a tartalom szerkezetét, a CSS a megjelenést biztosítja, míg a JavaScript felel az interaktív működésért és az adatok feldolgozásáért.  
A célom az, hogy a weboldal mobilon és számítógépen is jól nézzen ki, ezért reszponzív elrendezést fogok alkalmazni.

### JavaScript funkciók

A weboldalban legalább **négy különböző JavaScript függvény** lesz, amelyek mind eltérő feladatot látnak el.  
Lesz közöttük **paraméteres függvény** is.  
A tervezett funkciók:

1. **Összegzés függvény:**  
   Összeadja a csapatok által rúgott gólokat (→ *összegzés tétel*).  
   Eredmény: az összes csapat összes gólja.
2. **Maximumkeresés függvény:**  
   Megkeresi, melyik csapat rúgta a legtöbb gólt (→ *maximum tétel*).  
   Eredmény: a legjobb támadósorral rendelkező csapat neve.
3. **Keresés függvény:**  
   A felhasználó beír egy csapatnevet, és a program megkeresi, hogy szerepel-e az adatbázisban.  
   (→ *elágazás, logika, ciklus*)
4. **Átlagkalkulátor függvény (paraméteres):**  
   Kiszámolja, hány gólt rúg átlagosan egy csapat egy meccsen.  
   (→ *aritmetikai műveletek*)

Ezen kívül tervezek egy **logikai függvényt**, amely megvizsgálja, hogy egy csapat több gólt rúgott-e, mint amennyit kapott, és ennek alapján „jó formában” vagy „rossz formában” címkét ad neki.

### Alkalmazott programozási elemek

A projekt során az alábbi programozási alapfogalmakat alkalmazom:
- **Aritmetikai műveletek:** összeadás, kivonás, osztás (átlag, gólkülönbség stb.)
- **Logikai műveletek:** összehasonlítások (>, <, ==, &&, ||)
- **Elágazás:** `if-else` szerkezetek a feltételek ellenőrzésére
- **Tömb:** a csapatok adatait tartalmazó lista (pl. név, gólok, meccsek)
- **Ciklus:** `for` vagy `forEach` ciklus a tömbök bejárásához
- **Függvény:** több különböző, saját készítésű függvény, köztük paraméteres is

### Összegzés

A weboldal fő célja, hogy gyakorlati példán keresztül mutassa be a JavaScript alapvető funkcióit, és ezzel fejlessze a programozói tudásomat.  
A focis téma egyszerre szórakoztató és informatív, így könnyen bemutatható az iskolában.  
A projekt végére egy teljes, háromoldalas, működő weboldal jön létre, amelyben minden előírt programozási elem szerepelni fog, és a GitHubra is feltöltöm dokumentálva a napi előrehaladást és az AI-segítség felhasználását.
