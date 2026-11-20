# Credits and licences

Sky Lens is a personal, non-commercial project.

## Sky-culture figures (`skycultures.js`)

Adapted from the [Stellarium sky cultures collection](https://github.com/Stellarium/stellarium/tree/master/skycultures).
Changes made: each culture was reduced to its line figures and names and converted to this app's format; descriptions are not included. Illustrations are included for some cultures (see Constellation artwork below).
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

The longer versions (November 2026) were checked further against: the Polynesian Voyaging Society's star-line pages (Navigator's Triangle names); Simon of Kéza's chronicle and the Magyar Néprajzi Lexikon (Csaba legend); Hamacher and Morieson on the Boorong malleefowl calendar; Nunatsiaq News and John MacDonald on Igloolik's return-of-the-sun customs; CBC and Oneida Nation pages on the Haudenosaunee Midwinter Ceremony and the Seven Dancers; Windows to the Universe and Ronald Goodman, *Lakota Star Knowledge* (1992), on the Lakota Hand; the IAU star-name etymologies for Sulafat and Sheliak; and Chinese star-official references for Xī Zhòng and Tiān Jīn.

## Figure tales and notes (`figtales.js`)

Original text written for Sky Lens. Each tale retells standard accounts in new words, drawing on the notes that accompany each Stellarium sky culture and on the sources those notes cite, among them: John MacDonald, *The Arctic Sky* (Inuit); Nancy Maryboy and David Begay (Diné/Navajo); Snorri Sturluson's *Edda* (Norse); Johan Turi and Bo Lundmark (Sámi); Tsimafei Avilin (Belarusian); the Paris Codex and Bernardino de Sahagún (Maya, Aztec); the Polynesian Voyaging Society's star lines (Hawaiian); William Stanbridge, 1857 (Boorong).

Potawatomi entries give names and Western equivalents only, from the Pokagon Band's Neshnabé Nengosêk Kenomagéwen project; the stories belong to that community and are not retold.

Chinese and Japanese entries are short reference notes generated from the catalogue: name, meaning, Western location, and the enclosure or lunar mansion each figure belongs to (for the Chinese set, grouping follows the traditional Three Enclosures and Twenty-Eight Mansions scheme).

## Constellation artwork (`art/`, `art.js`)

Drawings of the 85 classical figures by Johan Meuris, from Stellarium's "Modern" sky culture, under the Free Art License 1.3 (https://artlibre.org/licence/lal/en/). Changes: converted from grey-on-black to transparent line art, reduced to 320 px and tinted in the app. The modified images remain under the Free Art License.

### Other traditions' artwork (`art/<culture>/`, `art.js` "cult")

Illustrations from the same Stellarium sky cultures, positioned on the sky with Stellarium's own anchor stars. Changes: black backgrounds made transparent, reduced to at most 360 px, tinted in the app (Belarusian drawings keep their colours by day). Each set stays under its culture's licence:

| Culture | Illustrations | Licence |
|---|---|---|
| Aztec | Enrique Gómez Candelario and collaborators | GNU GPL v2.0 |
| Belarusian | Johan Meuris | Free Art License 1.3 |
| Boorong | John Morieson and Alex Cherney | CC BY-SA 4.0 |
| Hawaiian Starlines | Kealoha Kaneakua; reworked by Susanne M. Hoffmann | CC BY-SA 4.0 |
| Inuit | Johan Meuris | Free Art License 1.3 |
| Northern Andes | after Pasto designs researched by Estelina Quinatoa; Clan Quinatoa; Andrés Alejandro Ayala | GNU GPL v2.0 |
| Hindu / Vedic | Tanmoy Saha; sanskrit-coders community (Vishvas Vasuki) — from Stellarium v23.4 | CC BY-SA 4.0 |
| Maya | Eduardo Rodas-Quito and Javier Mejuto, UNAH Honduras, after the Paris Codex — from Stellarium v23.4 | CC BY-NC-SA 4.0 |
| Māori | Dan Smale — from Stellarium v23.4 | CC BY-SA 4.0 |
| Boorong ("Girls") | John Morieson and Alex Cherney — from Stellarium v23.4 | CC BY-SA 4.0 |

Positions for 31 faint anchor stars come from the HYG database (CC BY-SA 4.0); stars fainter than magnitude 6.5 are used only as invisible anchors.

### Al-Sufi drawings (`art/sufi/`, optional style for the Greek sky)

Figures from the Ulugh Beg copy of ʿAbd al-Raḥmān al-Ṣūfī's *Book of Fixed Stars* (Bibliothèque nationale de France, Arabe 5036, 15th century), as extracted by Kutaibaa Akraa for Stellarium's Arabic (al-Sufi) sky culture, which marks the illustrations as public domain. Changes: black ground made transparent, reduced in size. Anchor stars from the same Stellarium data.

### Drawings made for Sky Lens (`art/claude/`, shown in green)

126 line drawings made by Claude (Anthropic's AI model) for this app in November 2026: Egyptian, Norse, Sámi, Navajo, Arabic, Hungarian, Anishinaabe/Ojibwe, Lakota, Haudenosaunee, Cherokee, Welsh, Hebrew and Mi'kmaq figures, plus the Chinese 28 lunar mansions, the Northern Dipper, the Weaving Girl and the Herd Boy (Drum at the River). The same Chinese drawings are reused for the matching Japanese figures. They are new drawings, not traditional artwork: each one is drawn over the figure's own stars from the figure's name and published descriptions. They copy no published star map. Figures of one star, or of a tight group like the Pleiades, are drawn larger than their stars so they can be seen. They are shown in green by day so you can tell them from traditional artwork.

## Hand-plotted figure sets (`handfigs.js`)

Arabic, Hungarian, Anishinaabe/Ojibwe, Lakota, Haudenosaunee, Cherokee, Welsh and Hebrew figures were plotted by hand for Sky Lens from published identifications of which stars each figure uses. They are simplified stand-ins, not reproductions of any published star map. Sources: Danielle Adams, "Two Deserts, One Sky" (onesky.arizona.edu) and BBC Sky at Night Magazine; IAU star-name etymology wiki; Magyar Néprajz and Magyar Néprajzi Lexikon; the Ojibwe Sky Star Map (A. Lee, W. Wilson, C. Gawboy, Native Skywatchers) as described by Sky & Telescope and Space.com; Ronald Goodman, *Lakota Star Knowledge*, as summarised by KVNF, the WoLakota Project and Windows to the Universe; James Mooney, *Myths of the Cherokee* (1900); Wikipedia on Dôn and Arianrhod; Job 9:9, 38:31-32 and Amos 5:8 (King James Version).

## Magnetic declination (`magdecl.js`)

The phone compass points to magnetic north. Sky Lens converts it to true north with the World Magnetic Model 2025 (WMM2025, NOAA National Centers for Environmental Information and the British Geological Survey), a US Government work in the public domain, valid 2025–2030. The coefficients are the published WMM2025 values; the evaluation code was written for Sky Lens.

## Star facts (`stardata.js`)

Distances, spectral types, colours and variability come from the HYG database v4.1 and its AT-HYG v3.2 subset by David Nash (astronexus.com, github.com/astronexus/HYG-Database), licensed CC BY-SA 4.0. Distances are from Gaia DR3 where AT-HYG has them, otherwise from the 2007 Hipparcos reduction. For the 93 stars brighter than magnitude 2.5, distances and spectral types are the published values tabulated in Wikipedia's "List of brightest stars" (CC BY-SA 4.0). Mira's brightness range is its full recorded range.

Temperatures, luminosities and radii are **estimates** made for Sky Lens: temperature from the spectral type for O–A stars (Pecaut & Mamajek 2013, ApJS 208, 9; table maintained by E. Mamajek) or from the B–V colour for F–M stars (Ballesteros 2012, EPL 97, 34008); bolometric corrections from Flower (1996, ApJ 469, 355) with the corrected coefficients of Torres (2010, AJ 140, 1158), taking the Sun's bolometric magnitude as 4.73; L = 10^(−0.4(M_V + BC − 4.73)) and R = √L·(5772 K/T)². They ignore interstellar dust. No estimates are made for large-amplitude variables, and no radius for stars whose catalogued light is the combined light of two or more stars.

The short notes on well-known stars (`SKYSTARNOTES`) were written for Sky Lens and checked against published sources (NASA, ESA, Sky & Telescope, Britannica, Nature and the stars' Wikipedia articles and their references).

## Nebulae, clusters and galaxies (`dso.js`)

The 110 Messier objects (M102 taken as NGC 5866), the 109 Caldwell objects and seven extras (Large and Small Magellanic Clouds, Galactic Centre, Alpha Persei Cluster, Coma Star Cluster, Coathanger, Horsehead Nebula). Positions, sizes, position angles and magnitudes come from the HYG database's deep-sky file `misc/dso.csv` (David Nash, astronexus.com), licensed CC BY-SA 2.5, which takes them from the Historically Corrected NGC (NGC/IC Project) and related catalogues; the Horsehead's position and size are from Barnard 33's published data. Object types and distances come from the tables in Wikipedia's "Messier object" and "Caldwell catalogue" articles (CC BY-SA 4.0), except: the Magellanic Clouds (detached eclipsing binaries: Pietrzyński et al. 2019, Nature 567, 200; Graczyk et al. 2020, ApJ 904, 13), the Helix Nebula (Gaia parallax of its central star) and the Galactic Centre (range of recent measurements). True sizes in light-years are worked out from the catalogued apparent size and the distance.

The short notes on the objects were written for Sky Lens and checked against published sources (ESA/Hubble, the Event Horizon Telescope collaboration, Nature and the objects' Wikipedia articles and their references).
