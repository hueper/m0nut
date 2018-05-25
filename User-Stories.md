# m0nut

## User Stories:

### Besucher
Ein Besucher sieht zwei Buttons, die gedrückt werden können.

### (Arcade) Buttons
Ein Button ist über usb an einen Computer angeschlossen.
Wird der Button (A) gedrückt, spielt ein Programm mit Hilfe von [sox](https://en.wikipedia.org/wiki/SoX) eine Sounddatei ab.
Wird der Button (B) gedrückt, spielt ein Programm mit Hilfe von [mpv](https://github.com/mpv-player/mpv) eine Videodatei im ASCII-Mode ab.

### Programm
Auf dem Computer läuft ein Programm (bash), dass darauf wartet, bis die Buttons gedrückt werden.
Das Programm wartet auf Eingabe oder spielt die Datei ab. Nicht beides gleichzeitig.
