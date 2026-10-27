# Zonas de renta alta en España para anuncios de Meta

*Investigación del 27-10-2026 · producto: masajeador de cuello en T (59,95 € / pack 2 a 79,95 €)*

## Fuentes y cómo se hizo

| Fuente | Qué mide | Año | Cómo se consultó |
|---|---|---|---|
| **INE · Atlas de distribución de renta de los hogares (ADRH)** | Renta **neta** media por hogar y por persona, por municipio, distrito y sección censal | 2024 (publicado el 19-10-2026) | La red bloquea ine.es. Se descargaron los ficheros completos de la copia pública [ineAtlas.data](https://github.com/pablogguz/ineAtlas.data) (versión del 19-10-2026). Comprobación: la renta media nacional por persona sale en 15.936 €, frente a los 15.948 € de la nota del INE. Cuadra. |
| **AEAT · Estadística de los declarantes del IRPF por municipios y por código postal** | Renta **bruta** media por declarante | Ejercicio 2024 (publicado entre sept. y oct. de 2026) | La red bloquea agenciatributaria.gob.es. Las cifras salen de la prensa que cita la AEAT ([Forbes](https://forbes.es/ultima-hora/1033801/pozuelo-de-alarcon-madrid-repite-como-el-municipio-con-mayor-renta-bruta-media-de-espana-con-92-564-euros/), [COPE](https://www.cope.es/programas/la-linterna/clases-de-economia/audios/mapa-municipios-mayor-renta-pozuelo-alarcon-sigue-siendo-primero-segundo-benahavis-puesto-56-ultimo-informe-20261002_3449023.html), [El Debate](https://www.eldebate.com/espana/madrid/20260930/cual-municipio-rico-espana-esta-madrid-esta-renta-bruta-media_464706.html), [moncloa.com](https://www.moncloa.com/2026/10/09/renta-codigo-postal-madrid-moraleja-3445300), [Hoy Aragón](https://www.hoyaragon.es/bolsillo/renta-media-codigo-postal-hacienda/20261009132344148793.html)). La AEAT no incluye País Vasco ni Navarra. |
| **Renta por código postal (estimación propia)** | Se cruzan las secciones censales del INE de 2024 con los polígonos de códigos postales del CNIG ([ds-codigos-postales](https://github.com/inigoflores/ds-codigos-postales), de 2017) y se calcula la renta media ponderada por hogares | 2024 | Es una **estimación**: el INE no publica datos por código postal. Los CP que han cambiado desde 2017 pueden quedar mal asignados. |
| **Meta · ayuda oficial** | Países con segmentación por código postal | Consultado el 27-10-2026 | [Countries that support postal code ad targeting](https://www.facebook.com/business/help/1544670369157045): **España (ES) sigue en la lista**. |

Referencias: renta neta media nacional ≈ **40.600 €/hogar** y **15.950 €/persona** (INE 2024). Renta bruta media por declarante en España: **33.239 €** (AEAT 2024).

## 1. Municipios de mayor renta (INE 2024, municipios de más de 5.000 habitantes)

| # | Municipio | Prov. | CP | Hab. | Renta neta/hogar | Renta neta/pers. | AEAT bruta/declarante 2024 |
|---|---|---|---|---|---|---|---|
| 1 | Pozuelo de Alarcón | M | 28223, 28224 | 87.666 | 102.629 € | 32.612 € | 92.564 € (1.º de España) |
| 2 | Boadilla del Monte | M | 28660, 28669 | 65.472 | 94.762 € | 28.382 € | 76.478 € (3.º) |
| 3 | Matadepera | B | 08230 | 9.672 | 90.206 € | 28.607 € | 76.238 € |
| 4 | Torrelodones | M | 28250 | 24.622 | 84.592 € | 26.573 € | top 10, sin cifra |
| 5 | Majadahonda | M | 28220, 28221, 28222 | 72.704 | 80.332 € | 25.878 € | sin dato |
| 6 | Las Rozas de Madrid | M | 28231, 28232, 28290 | 98.244 | 79.636 € | 26.014 € | sin dato |
| 7 | Sant Cugat del Vallès | B | 08172-08174, 08195, 08197 (Valldoreix), 08198 | 95.607 | 78.406 € | 26.306 € | 69.096 € |
| 8 | Villanueva de la Cañada | M | 28691, 28692 | 23.158 | 76.569 € | 22.561 € | sin dato |
| 9 | Cabrils | B | 08348 | 7.723 | 73.502 € | 24.720 € | sin dato |
| 10 | Alella | B | 08328 | 9.977 | 73.452 € | 25.772 € | top 10, sin cifra |
| 11 | Villaviciosa de Odón | M | 28670 | 29.245 | 73.270 € | 23.949 € | sin dato |
| 12 | Tres Cantos | M | 28760 | 53.842 | 71.548 € | 24.454 € | sin dato |
| 13 | Sant Just Desvern | B | 08960 | 20.623 | 71.320 € | 26.434 € | 69.706 € |
| 14 | Tiana | B | 08391 | 9.250 | 71.282 € | 25.265 € | sin dato |
| 15 | Alcobendas (con La Moraleja) | M | 28100, 28108, 28109 | 121.324 | 70.503 € | 23.325 € | top 10, sin cifra |
| 16 | Sant Vicenç de Montalt | B | 08394 | 6.632 | 69.390 € | 24.637 € | sin dato |
| 17 | Teià | B | 08329 | 6.768 | 68.968 € | 24.883 € | sin dato |
| 18 | Paracuellos de Jarama | M | 28860 | 27.035 | 68.220 € | 21.457 € | sin dato |
| 19 | Cabrera de Mar | B | 08349 | 5.019 | 67.855 € | 24.168 € | sin dato |
| 20 | L'Ametlla del Vallès | B | 08480 | 9.389 | 66.695 € | 22.765 € | sin dato |
| 21 | Begues | B | 08859 | 7.414 | 66.155 € | 22.970 € | sin dato |
| 22 | Sant Quirze del Vallès | B | 08192 (compartido con Sabadell) | 19.911 | 66.099 € | 23.491 € | sin dato |
| 23 | Rocafort | V | 46111 | 7.665 | 65.680 € | 22.778 € | sin dato |
| 24 | Getxo | BI | 48930, 48991, 48992, 48993 | 75.271 | 65.399 € | 26.472 € | no aplica (régimen foral) |

**Suma: 894.233 habitantes.**

Por renta por persona, el orden del INE coincide con la nota oficial: Pozuelo (32.612 €), Matadepera (28.607 €) y Boadilla (28.382 €).

**Marbella y Benahavís:** la AEAT pone a Benahavís 2.º de España en 2024 (79.041 €, cuando en 2023 tenía 43.159 €). Sin embargo, para el INE es un municipio de renta baja: Benahavís 29.769 €/hogar, Marbella 39.540 €/hogar y Nueva Andalucía (29660) unos 36.700 €/hogar estimados. La riqueza está muy concentrada y muchos residentes extranjeros no tributan en España, así que **no entra en el conjunto principal**. Como mucho, merece una prueba aparte.

## 2. Distritos de renta alta en grandes ciudades (INE 2024, distrito censal)

| Ciudad | Distrito | CP principales | Hab. | Renta neta/hogar | Renta neta/pers. |
|---|---|---|---|---|---|
| Madrid | Chamartín | 28002, 28016, 28036, 28046 | 145.167 | 84.608 € | 34.254 € |
| Madrid | Moncloa-Aravaca | 28023 (Aravaca), 28008, 28035, 28039, 28040 | 121.897 | 78.023 € | 30.198 € |
| Madrid | Salamanca | 28001, 28006, 28009, 28028 | 145.395 | 73.257 € | 31.558 € |
| Madrid | Chamberí | 28003, 28010, 28015 | 139.022 | 69.554 € | 31.130 € |
| Madrid | Retiro | 28007, 28009, 28014 | 118.283 | 68.718 € | 28.611 € |
| Barcelona | Sarrià-Sant Gervasi | 08017, 08021, 08022, 08034, 08006, 08023 | 147.871 | 85.131 € | 32.927 € |
| Barcelona | Les Corts | 08034, 08028, 08029, 08014 | 81.222 | 67.001 € | 27.533 € |
| Bilbao | Abando | 48001, 48008, 48009, 48010, 48011, 48013 | 51.281 | 76.565 € | 32.874 € |
| Valencia | Pla del Real | 46010, 46021, 46023 | 30.851 | 64.550 € | 24.861 € |
| Valencia | L'Eixample | 46004, 46005, 46006 | 44.820 | 59.551 € | 24.719 € |
| Sevilla | Los Remedios | 41011 | 25.398 | 61.171 € | 23.355 € |
| Sevilla | Nervión | 41005, 41018, 41003 | 50.131 | 54.725 € | 22.336 € |
| Málaga | Este (Limonar, Pedregalejo, El Palo) | 29016, 29017, 29018 | 65.557 | 61.160 € | 22.048 € |

**Suma: 1.166.895 habitantes.** Media de cada ciudad entera para comparar: Madrid 53.213 €/hogar, Barcelona 49.915 €, Bilbao 47.550 €, Sevilla 40.115 € y Málaga 38.950 €.

AEAT 2024 por código postal (prensa): La Moraleja 28109 con **235.556 €**, la más alta de España. Del 2.º al 10.º puesto: dos zonas de San Sebastián de los Reyes (Ciudalcampo y Fuente del Fresno, con 145.046 € y 139.369 €), Muntaner 08021, Pedralbes-Sarrià 08034, Vallvidrera-Tibidabo, el centro de A Coruña, Aravaca 28023 (117.360 €), Salamanca-Goya y Somosaguas-Humera (Pozuelo). **Coincide con la estimación propia del INE por CP**, lo que da confianza a la lista de abajo.

## 3. Lista final para el conjunto de anuncios «Renta alta»

### Núcleo: 41 CP con renta neta estimada de al menos 75.000 €/hogar (casi el doble de la media)

| CP | Zona | Renta/hogar est. | Hab. |
|---|---|---|---|
| 28109 | Alcobendas · La Moraleja | 112.200 € | 19.234 |
| 28708 | S. S. de los Reyes (zona Ciudalcampo/Fuente del Fresno) | 112.200 € | 2.558 |
| 08193 | Cerdanyola · Bellaterra | 112.200 € | 3.013 |
| 28669 | Boadilla del Monte | 107.200 € | 20.034 |
| 28706 | S. S. de los Reyes | 103.100 € | 3.086 |
| 28221 | Majadahonda | 101.600 € | 20.481 |
| 28036 | Madrid · Chamartín | 99.500 € | 30.790 |
| 08197 | Sant Cugat · Valldoreix | 97.900 € | 8.291 |
| 08017 | Barcelona · Sant Gervasi/Les Corts | 97.200 € | 33.183 |
| 08195 | Sant Cugat | 96.400 € | 10.932 |
| 28692 | Villanueva de la Cañada | 95.500 € | 3.829 |
| 28023 | Madrid · Aravaca | 94.300 € | 37.844 |
| 28224 | Pozuelo de Alarcón | 92.000 € | 42.989 |
| 08021 | Barcelona · Sant Gervasi-Galvany | 90.700 € | 22.608 |
| 08230 | Matadepera | 90.200 € | 9.672 |
| 28290 | Las Rozas · Las Matas | 90.100 € | 16.729 |
| 28223 | Pozuelo de Alarcón | 89.900 € | 44.677 |
| 08034 | Barcelona · Pedralbes/Sarrià | 89.000 € | 28.794 |
| 28049 | Madrid · Fuencarral-El Pardo | 88.200 € | 27.254 |
| 48001 | Bilbao · Abando | 88.100 € | 5.393 |
| 28001 | Madrid · Salamanca | 87.900 € | 23.645 |
| 48011 | Bilbao · Abando/Indautxu | 87.800 € | 6.755 |
| 48009 | Bilbao · Abando | 87.100 € | 11.372 |
| 28232 | Las Rozas | 87.000 € | 41.075 |
| 28108 | Alcobendas | 86.400 € | 10.591 |
| 28222 | Majadahonda | 86.000 € | 19.080 |
| 28055 | Madrid · Hortaleza/Barajas (Valdebebas) | 86.000 € | 32.705 |
| 28016 | Madrid · Chamartín | 84.700 € | 40.271 |
| 28250 | Torrelodones | 84.200 € | 24.622 |
| 46004 | Valencia · L'Eixample | 83.400 € | 9.331 |
| 48992 | Getxo | 82.500 € | 12.201 |
| 08022 | Barcelona · Sant Gervasi | 82.100 € | 29.383 |
| 28006 | Madrid · Salamanca | 81.300 € | 45.421 |
| 20007 | Donostia/San Sebastián | 80.800 € | 4.079 |
| 28660 | Boadilla del Monte | 80.500 € | 44.316 |
| 35310 | Santa Brígida | 79.200 € | 4.110 |
| 35005 | Las Palmas de G. C. | 78.600 € | 4.268 |
| 08174 | Sant Cugat | 77.900 € | 7.843 |
| 08173 | Sant Cugat | 77.700 € | 39.779 |
| 08198 | Sant Cugat | 75.500 € | 6.980 |
| 48008 | Bilbao · Abando | 75.000 € | 5.069 |

**Total del núcleo: unos 814.000 habitantes.**

Para copiar y pegar:
```
28109,28708,08193,28669,28706,28221,28036,08197,08017,08195,28692,28023,28224,08021,08230,28290,28223,08034,28049,48001,28001,48011,48009,28232,28108,28222,28055,28016,28250,46004,48992,08022,28006,20007,28660,35310,35005,08174,08173,08198,48008
```

### Ampliación opcional (+15 CP, de 70.000 a 75.000 €/hogar, unos 379.000 hab., total unos 1,19 M)
```
28420,07012,28003,08328,08348,28670,31190,08391,28010,28009,08960,28760,28050,29016,25199
```

## 4. ¿Hay público suficiente?

- El núcleo suma unos **814.000 habitantes**. Si en Meta están entre el 60 % y el 75 %, salen unas **500.000-600.000 personas**. Es una estimación: hay que confirmarla con el tamaño de público que muestra el Administrador de anuncios. Con ese tamaño se pueden gastar 10 €/día holgadamente, porque supera con mucho las 200.000 personas.
- Si se añade un filtro de edad (por ejemplo, de 30 a 65 años), el público baja a la mitad aproximadamente, pero sigue pasando de 200.000. Si se queda corto, se añade la ampliación.

## 5. Recomendación

1. **Segmentar por código postal, no por radio.** En España, Meta solo deja poner radio alrededor de una ciudad a partir de unos 17 km. Un radio de 17 km alrededor de Pozuelo o de Sant Cugat se come media Madrid o media Barcelona y diluye la renta. Con los CP se apunta solo a los barrios ricos, como Aravaca, Pedralbes o Abando, que un radio no puede separar del resto de la ciudad.
2. **Cómo cargarlo:** en el conjunto de anuncios, ir a Ubicaciones → Añadir ubicaciones en bloque → Códigos postales, con país España, y pegar la lista. Después, guardarla como «Renta alta ES» ([guía de Meta](https://www.facebook.com/business/help/2414189205268366)).
3. Con público Advantage+, la ubicación sigue siendo un límite fijo, así que no hace falta poner intereses. En España no existe la segmentación por nivel de ingresos de Meta: los CP son la forma de acercarse.
4. **Prueba:** este conjunto «Renta alta» frente al conjunto de toda España, con el mismo creativo, durante 7 días. Comparar el coste por compra y la proporción de pedidos del pack de 2 a 79,95 €.
5. Marbella, Benahavís y Nueva Andalucía quedan fuera por los datos del INE. Si se quiere, se prueban aparte.

*Datos intermedios (CSV con la renta de todos los CP) en el directorio temporal de la sesión; no se versionan.*
