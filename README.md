# TODO-App

## Automatische Builds für's Developing

basierend auf dem Abschnitt "[Developing without cfx run](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_started)"


### Installation

```sh
npm install
```

Außerdem wird die FF-Extension [Extension Auto-Installer](https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/)
benötigt.

### Watcher starten

```sh
./node_modules/.bin/grunt
```

Jede Änderung im`lib`-Verzeichnis führt nun dazu, dass das XPI neu gebaut und im FF aktualisiert wird.

## Grunt-Tasks

* Default-Task: Erstellt `todo.xpi` und lädt diese nach `http://localhost:8888/`
* `build`: Erstellt `todo.xpi`

### Credits

* [the wonderful Metro UI CSS](http://metroui.org.ua/)
