# 🚒 Hydrantenkarte Feuerwehr Hamberg

Progressive Web App zur Darstellung von Feuerwehr-Hydranten und Rettungspunkten mit Echtzeit-Navigation und Wetterdaten.

**Live-Demo:** [GitHub Pages URL einfügen]

## 🌟 Features

### Navigation & Orientierung
- 📍 **Interaktive 2D-Karte** mit Leaflet.js
- 🧭 **Kompass** mit Himmelsrichtungen (N, NO, O, SO, S, SW, W, NW)
- 🎯 **Richtungskegel** zeigt Blickrichtung auf der Karte (60° FOV)
- � **Pulsierender Standortmarker** für bessere Sichtbarkeit
- 📏 **Genauigkeitskreis** um aktuelle GPS-Position

### Hydranten-Navigation
- 🔍 **Top 3 nächste Hydranten** mit farbigen Routen (Grün, Lila, Rot)
- 📊 **Entfernungsanzeige** in Metern (Luftlinie)
- 🗺️ **Direkte Navigation** zu Apple Maps & Google Maps
- 💾 **Icon-Größen** basierend auf Nenndurchmesser (DN 50-150mm)
- ⚡ **Live-Update** der Routen bei Positionsänderung

### Wetter & Umgebung
- 💨 **Wind-Daten** von Open-Meteo API (Geschwindigkeit, Richtung, Böen)
- 🌬️ **Wind-Vektor** auf Karte mit Länge proportional zur Windgeschwindigkeit
- 🌐 **16-Punkt Kompass** für präzise Windrichtung
- 🔄 **Automatisches Update** alle 15 Minuten

### Karten & Darstellung
- 🗺️ **5 Kartentypen** (alle Open Source, ohne API-Keys):
  - OpenStreetMap Standard
  - OpenTopoMap (mit Höhenlinien)
  - CyclOSM (hoher Detailgrad)
  - OSM Humanitarian (Einsatz-optimiert)
  - ESRI World Imagery (Satellit)
- 🎨 **Filterbare Kategorien** (Über-/Unterflur, Rettungspunkte, etc.)
- 📱 **Ein-/ausklappbare UI** für maximale Kartensicht

### Teilen & Kommunikation
- � **Smart Share** Funktion mit:
  - Aktuellen GPS-Koordinaten
  - Link mit Auto-Navigation zur Position
  - Top 3 nächste Hydranten mit Details
  - Direkt-Links zu Apple/Google Maps
- � **Automatisches Kopieren** in Zwischenablage (Fallback)

### Offline & Performance
- 📡 **Offline-Funktionalität** durch Service Worker
- ⚡ **PWA-Installation** als native App
- 🔒 **Kein Tracking** - alle Daten bleiben lokal
- 🚀 **Schnelle Ladezeiten** durch Caching

## 📱 Installation

### Als PWA installieren (empfohlen)

**iOS (Safari):**
1. Öffne die App in Safari
2. Tippe auf "Teilen" Symbol
3. Scrolle zu "Zum Home-Bildschirm"
4. Tippe "Hinzufügen"

**Android (Chrome/Edge):**
1. Öffne die App in Chrome/Edge
2. Tippe auf das Menü (⋮)
3. Wähle "App installieren" oder "Zum Startbildschirm hinzufügen"
4. Bestätige die Installation

**Desktop (Chrome/Edge):**
1. Klicke auf das ⊕ Symbol in der Adressleiste
2. Oder: Menü → "Installieren..."

### Lokal testen

```bash
# Wechsel ins dist-Verzeichnis
cd dist

# Starte lokalen Server
python -m http.server 8000

# Öffne im Browser
# http://localhost:8000
```

## 🗺️ Kategorien

| Icon | Farbe | Typ | Beschreibung |
|------|-------|-----|--------------|
| 🔴 | Rot | Überflurhydrant | Oberirdischer Hydrant |
| 🔵 | Blau | Unterflurhydrant | Unterirdischer Hydrant |
| 🟢 | Grün | Rettungspunkt | Rettungspunkt |
| 🟡 | Gelb | Wasserbehälter | Löschwasserbehälter |

**Icon-Größen** zeigen Nenndurchmesser (DN):
- 24px: DN < 80mm
- 28px: DN 80-99mm
- 32px: DN 100-124mm
- 40px: DN 125-149mm
- 48px: DN ≥ 150mm

## 🛠️ Technologie-Stack

### Frontend
- **Kartendarstellung:** Leaflet.js 1.9.4
- **JavaScript:** Vanilla ES6+ (kein Framework)
- **CSS:** Modern CSS3 mit Animationen
- **PWA:** Service Worker mit Cache-First Strategie

### APIs & Daten
- **Wetterdaten:** Open-Meteo API (kostenlos, kein API-Key)
- **Kartenkacheln:** OSM, OpenTopoMap, CyclOSM, ESRI
- **Datenformat:** GeoJSON aus CSV-Konvertierung
- **Build-System:** Python 3.x

### Geräte-Sensoren
- GPS/Location API
- Device Orientation API (Kompass)
- Geolocation API (Position & Genauigkeit)

## 🔧 Build-System

Diese App wird mit einem Python-Build-Script generiert:

```bash
python build_hydrantenkarte.py
```

Das Script:
- Lädt Hydrantendaten aus `Hydrantenkarte_FF_Hamberg.csv`
- Konvertiert zu GeoJSON
- Generiert optimiertes HTML/CSS/JavaScript
- Erstellt Service Worker für Offline-Nutzung
- Kopiert Icons und Assets
- Generiert diese README und LICENSE

## 📄 Lizenz

**MIT License** - Copyright (c) 2025 Feuerwehr Hamberg

Siehe [LICENSE](./LICENSE) Datei für Details.

## 🗺️ Datenquellen & Attribution

### Kartendaten
- **OpenStreetMap:** © [OpenStreetMap](© OpenStreetMap contributors) contributors  
  Lizenz: ODbL 1.0 ([Open Database License](https://opendatacommons.org/licenses/odbl/))
- **OpenTopoMap:** © OpenTopoMap (CC-BY-SA)
- **CyclOSM:** © CyclOSM contributors
- **ESRI World Imagery:** © Esri

### Bibliotheken
- **Leaflet.js:** BSD-2-Clause License
- **Open-Meteo API:** CC BY 4.0 License (kostenlos, keine Attribution erforderlich)

### Hydrantendaten
- **Quelle:** Feuerwehr Hamberg
- **Format:** CSV → GeoJSON Konvertierung
- **Aktualisierung:** Manuell über CSV-Update

## 📱 Browser-Kompatibilität

| Browser | Desktop | Mobile | PWA | Offline |
|---------|---------|--------|-----|---------|
| Chrome  | ✅ | ✅ | ✅ | ✅ |
| Edge    | ✅ | ✅ | ✅ | ✅ |
| Firefox | ✅ | ✅ | ✅ | ✅ |
| Safari  | ✅ | ✅ | ✅ | ✅ |

**Anforderungen:**
- JavaScript aktiviert
- GPS-Zugriff für Standort
- Kamerazugriff NICHT erforderlich (AR-Modus entfernt)
- Kompass/Orientierung für Richtungskegel (optional)

## 🔒 Datenschutz & Sicherheit

### Keine Datenübertragung
- ✅ GPS-Position bleibt lokal auf dem Gerät
- ✅ Keine Nutzer-Tracking
- ✅ Keine Analytics
- ✅ Keine Cookies

### Externe API-Aufrufe
- 🌐 **Open-Meteo API:** Nur für Wetterdaten (Wind)
  - Keine persönlichen Daten übertragen
  - Nur allgemeine Koordinaten (Hamberg)
  - Kein API-Key erforderlich

### Service Worker
- 💾 Cached Assets für Offline-Nutzung
- 🔄 Automatisches Update bei neuer Version
- 🗺️ Kartenkacheln werden on-demand geladen

## � Deployment

### GitHub Pages (empfohlen)

1. Pushe den `dist/` Ordner zu GitHub
2. Aktiviere GitHub Pages:
   - Settings → Pages
   - Source: Branch `main`, Ordner `/dist`
3. App ist verfügbar unter: `https://username.github.io/repository`

### Eigener Server

Einfach den `dist/` Ordner hochladen. Anforderungen:
- HTTPS für PWA-Funktionen
- Statischer Webserver (nginx, Apache, etc.)

## 🆘 Support & Kontakt

**Technische Fragen:** [GitHub Issues](https://github.com/plankl/ff-hamberg/issues)  
**Feuerwehr Hamberg:** [Kontakt über Website]

## 📝 Changelog

### Version 2.0 (Oktober 2025)
- ✅ AR-Modus entfernt für besseren Fokus auf 2D-Navigation
- ✅ Wind-Daten Integration (Open-Meteo)
- ✅ Richtungskegel auf Karte
- ✅ Top 3 nächste Hydranten mit Routen
- ✅ Himmelsrichtungen beim Kompass
- ✅ 5 verschiedene Kartentypen
- ✅ Smart-Share Funktion
- ✅ Pulsierender Standort-Marker
- ✅ Ein-/ausklappbare UI-Elemente
- ✅ Icon-Größen nach Nenndurchmesser

---

**Build-Datum:** 26.10.2025  
**Build-System:** Python 3.9.1  
**Erstellt mit ❤️ für die Feuerwehr Hamberg**
