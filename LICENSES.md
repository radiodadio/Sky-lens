# Credits and licences

Sky Lens is a personal, non-commercial project.

## Sky-culture figures (`skycultures.js`)

Adapted from the [Stellarium sky cultures collection](https://github.com/Stellarium/stellarium/tree/master/skycultures).
Changes made: each culture was reduced to its line figures and names and converted to this app's format; illustrations and descriptions are not included.
Each culture remains under its own licence:

| Culture | Credit | Licence |
|---|---|---|
| Chinese | Karrie Berglund (Digitalis Education Solutions); Sun Shuwei; Stellarium contributors | CC BY-SA 4.0 |
| Indian Vedic | Tanmoy Saha; sanskrit-coders community (Vishvas Vasuki) | CC BY-SA 4.0 |
| Egyptian | Karrie Berglund, after Juan Antonio Belmonte | GNU GPL v2.0 |
| Norse | Jonas Persson | CC BY-SA 4.0 |
| Sami | Jonas Persson | CC BY-SA 4.0 |
| Belarusian | Tsimafei Avilin (research); Alexander Wolf; Johan Meuris | CC BY-SA 4.0 (text and data) |
| Potawatomi | Neshnabé Nengosêk Kenomagéwen project: Blaire Morseau (PI), Aaron Martin, advisory board; John Foerch | CC BY-SA 4.0 (sky culture data; artwork not used) |
| Navajo | Karrie Berglund, after Don Childrey | GNU GPL v2.0 |
| Inuit | Karrie Berglund, after John MacDonald | GNU GPL v2.0 (text and data) |
| Maya | Eduardo Rodas-Quito and Javier Mejuto, UNAH Honduras | CC BY-NC-SA 4.0 |
| Aztec | Enrique Gómez Candelario and collaborators | GNU GPL v2.0 |
| Maori | Dan Smale | CC BY-SA 4.0 |
| Hawaiian Starlines | Nainoa Thompson, after Mau Piailug | CC BY-SA 4.0 |
| Boorong | John Morieson and Alex Cherney | CC BY-SA 4.0 |
| Northern Andes | Clan Quinatoa; Andrés Alejandro Ayala | GNU GPL v2.0 |

The adapted data for each culture is offered under that culture's licence.
Cultures published under no-derivatives licences (Arabic, Babylonian, Kamilaroi/Euahlayi) are not included.

## Star positions

Hipparcos positions and magnitudes; fainter figure stars from the [HYG database](https://github.com/astronexus/HYG-Database) (CC BY-SA 4.0).

## Sun, Moon and planets (`ephem.js`)

Positions use the low-precision method published by Paul Schlyter ("Computing planetary positions"); precession follows Meeus, *Astronomical Algorithms*. Checked against PyEphem to within about 3 arc-minutes.

## Tales (`tales.js`)

The tale texts are original, written for this app. Facts were checked against the Stellarium sky-culture descriptions and figure data listed above, plus web sources consulted in November 2026: the IAU star-name etymology wiki (Caph, Vega, Wangliang); R. H. Allen's *Star Names* (Cassiopeia); StarDate (Arabic star names, Osiris); Wikipedia's "Inuit astronomy" (drawing on John MacDonald, *The Arctic Sky*) and Inuit Heritage Greenland; Native Skywatchers' Diné booklet and the Heard Museum's Diné labels; Malleefowl Victoria, Museums Victoria and the University of Melbourne on the Boorong sky; *Magyar Néprajz* (mek.oszk.hu) and the Prince Csaba chronicle tradition; World History Encyclopedia on Matariki. Greek, Egyptian, Chinese, Indian, Maya and Aztec tales follow standard reference accounts; where tellings differ, the tale says so.

## Constellation artwork (`art/`, `art.js`)

Drawings of the 85 classical figures by Johan Meuris, from Stellarium's "Modern" sky culture, under the Free Art License 1.3 (https://artlibre.org/licence/lal/en/). Changes: converted from grey-on-black to transparent line art, reduced to 320 px and tinted in the app. The modified images remain under the Free Art License.

## Hand-plotted figure sets (`handfigs.js`)

Arabic, Hungarian, Anishinaabe/Ojibwe, Lakota, Haudenosaunee, Cherokee, Welsh and Hebrew figures were plotted by hand for Sky Lens from published identifications of which stars each figure uses. They are simplified stand-ins, not reproductions of any published star map. Sources: Danielle Adams, "Two Deserts, One Sky" (onesky.arizona.edu) and BBC Sky at Night Magazine; IAU star-name etymology wiki; Magyar Néprajz and Magyar Néprajzi Lexikon; the Ojibwe Sky Star Map (A. Lee, W. Wilson, C. Gawboy, Native Skywatchers) as described by Sky & Telescope and Space.com; Ronald Goodman, *Lakota Star Knowledge*, as summarised by KVNF, the WoLakota Project and Windows to the Universe; James Mooney, *Myths of the Cherokee* (1900); Wikipedia on Dôn and Arianrhod; Job 9:9, 38:31-32 and Amos 5:8 (King James Version).
