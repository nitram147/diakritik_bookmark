# diakritik_bookmark
Javascript browser bookmark to simplify use of diakritik_api

[EN] Browser "plugin" for adding diacritic to non-diacritic text. (Work only for Slovak language)

[SK] "Plugin" do prehliadača pre prídavanie diakritiky do bez interpunkcie textu. (Funguje iba pre Slovenčinu)

I'm writing this README file bilingual (English / Slovak) so each paragraph will be written first in English (taged with EN), than in Slovak (taged with SK).

Tento README (ČÍTAJ MA) súbor píšem dvojjazyčne (Angličtina / Slovenčina) takže každý paragraf bude napísaný naprv v angličtine (označený [EN], potom v Slovenčine (označený [SK]).

# [EN] Description
This plugin works as javascript bookmark. After you click on bookmark you will be asked for inserting text without diacritics. Then you press enter and you will get back message box with result - text with added diacritics.

## How to use:
### 1.) Install [diakritik_api](https://github.com/nitram147/diakritik_api/) to your server.
Simply create directory on your server with name for example "diacritic". Then copy index.php file (api file) from my repository.
Make sure that your server have allowed "allow_url_fopen".

### 2.) Create new bookmark
Create bookmark with name "Add diacritic". As the bookmark url paste text from bookmark_en.txt file.
Don't forget to change "*****" in bookmark_en.txt file to urlencoded link to your website directory with [diakritik_api](https://github.com/nitram147/diakritik_api/). 
Save bookmark.

### 3.) Use it
When you want to add diacritic to any slovak text click on "Add diacritic" bookmark and fill text without diacritic. Press enter and copy result (text with added diacritic) from message box.

# [SK] Popis
Tento plugin funguje ako javascriptová záložka. Po kliknutí na ňu zadáte text bez diakritiky, potvrdíte a zobrazí sa vám okno s textom v ktorom je pridaná diakritika.

## Návod na použitie
### 1.) Inštalácia [diakritik_api](https://github.com/nitram147/diakritik_api/) na Váš server.
Vytvorte na servery priečinok s názvom napríklad "diakritik". Okopírujte súbor index.php z môjho repozitáru.
Uistite sa že máte na servery povolené "allow_url_fopen".

### 2.) Vytvorte záložku
Vytvorte novú záložku s názvom "Pridaj Diakritiku" alebo "Diakritika" ... Ako url adresu záložky vložte text zo súboru bookmark_sk.txt.
Nezabudnite zameniť "*****" v súbore bookmark_sk.txt za link na Vašu stránku s [diakritik_api](https://github.com/nitram147/diakritik_api/).
Uložte záložku

### 3.) Použite plugin
Kedykoľvek budete potrebovať pridať do nejakého textu diakritiku jednoducho kliknite na záložku, vyplnte text bez diakritiky, stlačte enter a skopírujte text s pridanou diakritikou z okna, ktoré sa Vám zobrazí.

