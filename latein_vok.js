class vokabel {
    constructor(latein, deutsch, grammatik) {
        this.deutsch = deutsch;
        this.latein = latein;
        this.grammatik = grammatik;
    }
}

var fabeln1_1w1 = new vokabel('Plasmodesmen', 'schaffen Verbindungen zu benachbarten Zellen für Stofftransport und Informationsaustausch', 'Pflanzenzelle');
var fabeln1_1w2 = new vokabel('Mittellamelle', 'verklebt benachbarte Zellen miteinander', 'Pflanzenzelle');
var fabeln1_1w3 = new vokabel('Zellwand', 'stabilisiert die Zelle nach außen, für alle Stoffe durchlässig', 'Pflanzenzelle');
var fabeln1_1w4 = new vokabel('Desmosom', 'stellt Verbindung zwischen benachbarten Zellen her', 'Tierzelle');
var fabeln1_1w5 = new vokabel('Lysosom', 'Orte des Stoffabbaus', 'Tierzelle');
var fabeln1_1w6 = new vokabel('Zellmembran / Biomembran', 'grenzt Zelle / Zellorganellen voneinander ab, selektivpermeabel', 'Tier- und Pflanzenzelle');
var fabeln1_1w7 = new vokabel('Vakuole', 'enthält im Zellsaft gelöste Stoffe, die für z.B. Farbe / Geschmack von Früchten verantowrtlich ist, enthält Zelltugor und damit die Spannung pflanzlicher Gewebe', 'Pflanzenzelle');
var fabeln1_1w8 = new vokabel('Chloroplast', 'Ort der Fotosynthese', 'Pflanzenzelle');
var fabeln1_1w9 = new vokabel('Centriol', 'an Bildung der MTOC beteiligt (für Zellteilung)', 'Tierzelle');
var fabeln1_1w10 = new vokabel ('Dictysom mit GOLGI-Versikeln', 'Umwandlung und Verteilung von Zellsekreten, Mitwirkung beim Bau der Zellwand (bei Planzenzelle)', 'Tier- und Pflanzenzelle');
var fabeln1_1w11 = new vokabel ('Cytoplasma', 'enthält Zellorganellen, Ort vieler vieler enzymatischer Prozesse, Cytoskelett bewegt Chromosomen während der Zellteilung und stabilisiert die Zelle', 'vulpis f.');
var fabeln1_1w12 = new vokabel ('Ribosom', 'Ort der Proteinbiosynthese (Bilung von Proteinen)', 'Tier- und Pflanzenzelle');
var fabeln1_1w13 = new vokabel ('raues endoplasmatische Reticulum', 'Eiweißsynthese an den Ribosomen, Stofftransport', 'Tier- und Pflanzenzelle');
var fabeln1_1w14 = new vokabel ('endoplasmatische Reticulum', 'Bildungsort der Zellmembran, Stofftransport', 'Tier- und Pflanzenzelle');
var fabeln1_1w15 = new vokabel ('Zellkern (Nukleus)', 'Träger der Erbinformationen, steuert den Stoffwechsel, besteht aus Kernhülle, Kernporen, Chromatin und Nukleolus', 'Tier- und Pflanzenzelle');
var fabeln1_1w16 = new vokabel ('Mitochondrium', 'Kraftwerk der Zelle, liefert Energie durch den Abbaue energiereicher Stoffe', 'Tier- und Pflanzenzelle');
var fabeln1_1w17 = new vokabel ('Microbody', 'Entgiftung der Zelle', 'Tier- und Pflanzenzelle');
var fabeln1_1w18 = new vokabel ('Lipidtropfen', 'Energiespeicher', 'Tier- und Pflanzenzelle');

var konjunktionen_w1 = new vokabel ('an?', 'oder (etwa)?', 'Konjunktion');
var konjunktionen_w2 = new vokabel ('at', 'aber', 'Konjunktion');
var konjunktionen_w3 = new vokabel ('atque', 'und', 'Konjunktion');
var konjunktionen_w4 = new vokabel ('aut', 'oder', 'Konjunktion');
var konjunktionen_w5 = new vokabel ('autem', 'aber', 'Konjunktion');
var konjunktionen_w6 = new vokabel ('cum', '+ Indikativ Imperfekt: (jedes Mal) wenn <br>+ Indikativ Perfekt: als (plötzlich) <br>+ Indikativ Präsens/Perfekt: (zu dem Zeitpunkt) wenn, als; sobald <br>+ Konjunktiv: als, nachdem; weil; obwohl', 'Konjunktion');
var konjunktionen_w7 = new vokabel ('dum', '+ Präsens: während', 'Konjunktion');
var konjunktionen_w8 = new vokabel ('enim', 'nämlich', 'Konjunktion');
var konjunktionen_w9 = new vokabel ('ergo', 'deshalb, also', 'Konjunktion');
var konjunktionen_w10 = new vokabel ('etiam', 'auch, sogar', 'Konjunktion');
var konjunktionen_w11 = new vokabel ('igitur', 'also', 'Konjunktion');
var konjunktionen_w12 = new vokabel ('nam', 'denn', 'Konjunktion');
var konjunktionen_w13 = new vokabel ('ne', '+ Konjunktiv: dass nicht; damit nicht', 'Konjunktion');
var konjunktionen_w14 = new vokabel ('neque', 'und nicht, aber nicht, auch nicht', 'Konjunktion');
var konjunktionen_w15 = new vokabel ('nisi', 'wenn nicht, außer', 'Konjunktion');
var konjunktionen_w16 = new vokabel ('postquam', '+ Indikativ Perfekt: nachdem', 'Konjunktion');
var konjunktionen_w17 = new vokabel ('-que', 'und', 'Konjunktion');
var konjunktionen_w18 = new vokabel ('quia', 'weil', 'Konjunktion');
var konjunktionen_w19 = new vokabel ('quod', 'weil', 'Konjunktion');
var konjunktionen_w20 = new vokabel ('quotiens', 'wie oft; sooft', 'Konjunktion');
var konjunktionen_w21 = new vokabel ('sed', 'aber, sondern', 'Konjunktion');
var konjunktionen_w22 = new vokabel ('si', 'wenn', 'Konjunktion');
var konjunktionen_w23 = new vokabel ('tamen', 'dennoch, trotzdem', 'Konjunktion');
var konjunktionen_w24 = new vokabel ('ubi', 'als, sobald', 'Konjunktion');
var konjunktionen_w25 = new vokabel ('ut', '+ Indikativ: wie<br>+ Konjunktiv: (so) dass; damit; (um...) zu', 'Konjunktion');

var fabeln2_1w1 = new vokabel('lupus', 'Wolf', 'lupi m.');
var fabeln2_1w2 = new vokabel('agnus', 'Lamm', 'agnus m.');
var fabeln2_1w3 = new vokabel('sitis', 'Durst', 'sitis f.');
var fabeln2_1w4 = new vokabel('fames', 'Hunger', 'famis f.');
var fabeln2_1w5 = new vokabel('superior', 'weiter oben', '-');
var fabeln2_1w6 = new vokabel('latro', 'Räuber', 'latronis m.');
var fabeln2_1w7 = new vokabel('bibere', 'trinken', 'bibo, bibi, -');
var fabeln2_1w8 = new vokabel('qui?', 'wie?', '-');
var fabeln2_1w9 = new vokabel('queri', 'sich beklagen', 'queror, questus sum');
var fabeln2_1w10 = new vokabel('ait', 'er/sie/es sagt(e)', '-');
var fabeln2_1w11 = new vokabel('maledicere', 'beleidigen', 'maledico, maledixi, maledictum (+Dat)');
var fabeln2_1w12 = new vokabel('corripere', 'packen, gewaltsam an sich reißen', 'corripio, corripi, correptum');
var fabeln2_1w13 = new vokabel('iniustus', 'ungerecht', '-a, -um');
var fabeln2_1w14 = new vokabel('nex', 'Mord', 'necis f.');
var fabeln2_1w15 = new vokabel('fingere', 'erdichten, ersinnen', 'fingo, finxi, fictum');
var fabeln2_1w16 = new vokabel('innocens', 'unschuldig', 'innocentis');
var fabeln2_1w17 = new vokabel('opprimere', 'unterdrücken, knechten', 'opprimo, oppressi, oppressum');
var fabeln2_1w18 = new vokabel ('inferior', 'weiter unten', '-');

var fabeln3_1w1 = new vokabel('rana', 'Frosch', 'ranae f.');
var fabeln3_1w2 = new vokabel('bos', 'Ochse', 'bovis m.');
var fabeln3_1w3 = new vokabel('inops', 'mittellos, arm', 'inopis');
var fabeln3_1w4 = new vokabel('inopia', 'Not, Mangel', 'inopiae f.');
var fabeln3_1w5 = new vokabel('quondam', 'einst', 'Adv.');
var fabeln3_1w6 = new vokabel('invidia', 'Neid', 'invidiae f.');
var fabeln3_1w7 = new vokabel('invidere', 'beneiden', 'invideo, invidi, invisum');
var fabeln3_1w8 = new vokabel('natus', 'Sohn', 'nati m.');
var fabeln3_1w9 = new vokabel('nata', 'Tochter', 'natae f.');
var fabeln3_1w10 = new vokabel('similis', 'ähnlich, gleich(artig)', 'simile');
var fabeln3_1w11 = new vokabel('indignari', 'böse werden', 'indignaror, indignatus sum');
var fabeln3_1w12 = new vokabel('validus', 'kräftig', '-a, um');
var fabeln3_1w13 = new vokabel('rumpere', 'brechen, bersten', 'rumpo, rupi, ruptum');

var fabeln3_2w1 = new vokabel('frangere', '(zer)brechen', 'frango, fregi, fractum');

var fabeln4w1 = new vokabel('pati', 'erdulden, ertragen', 'patior, passus sum');

var fabeln8w1 = new vokabel('callidus', 'schlau', '-a, -um');
var fabeln8w2 = new vokabel('effugium', 'Fluchtweg', 'effugii n.');
var fabeln8w3 = new vokabel('maulum', 'Leid, Schaden', 'mali n.');
var fabeln8w4 = new vokabel('decidere','hinunterfallen', 'decido, decidi, decisum');
var fabeln8w5 = new vokabel('inscius', 'unwissend, ahnungslos', '-a, -um');
var fabeln8w6 = new vokabel('hircus', 'Ziegenbock', 'hirci m.');
var fabeln8w7 = new vokabel('sitire', 'durstig sein', 'sitio, sitivi, -');
var fabeln8w8 = new vokabel('sitis', 'Durst', 'sitis f.');
var fabeln8w9 = new vokabel('simul', 'zugleich, gleichzeitig', 'Adverb');
var fabeln8w10 = new vokabel('copiosus', 'reichlich', '-a ,-um');
var fabeln8w11 = new vokabel('fraus', 'Betrug', 'fraudis f.');
var fabeln8w12 = new vokabel('bonitas', 'Güte, gute Qualität', 'bonitatis f.');
var fabeln8w13 = new vokabel('copia', 'Menge', 'copiae f.');
var fabeln8w14 = new vokabel('voluptas', 'Lust, Freude', 'voluptatis f.');
var fabeln8w15 = new vokabel('satiare', 'stillen, sättigen', 'satio, satiavi, satiatum');
var fabeln8w16 = new vokabel('evadere', 'entkommen, entrinnen', 'evado, evasi, evasum');
var fabeln8w17 = new vokabel('niti', '(+ Abl.) sich stützen (auf etw.)', 'nitor, nixus sum');
var fabeln8w18 = new vokabel('celsus', 'hoch(ragend)', '-a, -um');
var fabeln8w19 = new vokabel('cornu', 'Horn', 'cornus n.');
var fabeln8w20 = new vokabel('haerere', 'hängen bleiben, stecken bleiben', 'haereo, haesi, haesurus');
var fabeln8w21 = new vokabel('dulcis', 'süß', 'dulce');
var fabeln8w22 = new vokabel('devenire', 'hingelangen', 'devenio, deveni, deventum');

//hier neue dazu
var fabeln1_1 = [fabeln1_1w1, fabeln1_1w2, fabeln1_1w3, fabeln1_1w4, fabeln1_1w5, fabeln1_1w6, fabeln1_1w7, fabeln1_1w8, fabeln1_1w9, fabeln1_1w10, fabeln1_1w11, fabeln1_1w12, fabeln1_1w12, fabeln1_1w13, fabeln1_1w14, fabeln1_1w15, fabeln1_1w16, fabeln1_1w17, fabeln1_1w18]
var konjunktionen = [konjunktionen_w1, konjunktionen_w2, konjunktionen_w3, konjunktionen_w4, konjunktionen_w5, konjunktionen_w6, konjunktionen_w7, konjunktionen_w8, konjunktionen_w9, konjunktionen_w10, konjunktionen_w11, konjunktionen_w12, konjunktionen_w13, konjunktionen_w14, konjunktionen_w15, konjunktionen_w16, konjunktionen_w17, konjunktionen_w18, konjunktionen_w19, konjunktionen_w20, konjunktionen_w21, konjunktionen_w22, konjunktionen_w23, konjunktionen_w24, konjunktionen_w25]
var fabeln2_1 = [fabeln2_1w1, fabeln2_1w2, fabeln2_1w3, fabeln2_1w4, fabeln2_1w5, fabeln2_1w6, fabeln2_1w7, fabeln2_1w8, fabeln2_1w9, fabeln2_1w10, fabeln2_1w11, fabeln2_1w12, fabeln2_1w13, fabeln2_1w14, fabeln2_1w15, fabeln2_1w16, fabeln2_1w17, fabeln2_1w18]
var fabeln3_1 = [fabeln3_1w1, fabeln3_1w2, fabeln3_1w3, fabeln3_1w4, fabeln3_1w5, fabeln3_1w6, fabeln3_1w7, fabeln3_1w8, fabeln3_1w9, fabeln3_1w10, fabeln3_1w11, fabeln3_1w12, fabeln3_1w13]
var fabeln3_2 = [fabeln3_2w1]
var fabeln4 = [fabeln4w1]
var fabeln8 = [fabeln8w1, fabeln8w2, fabeln8w3, fabeln8w4, fabeln8w5, fabeln8w6, fabeln8w7, fabeln8w8, fabeln8w9, fabeln8w10, fabeln8w11, fabeln8w12, fabeln8w13, fabeln8w14, fabeln8w15, fabeln8w16, fabeln8w17, fabeln8w18, fabeln8w19, fabeln8w20, fabeln8w21, fabeln8w22]


//deutsch-latein latein-deutsch
var deutsch_latein_wert = 0
var latein_deutsch_wert = 0

var richtung = 0

function deutsch_latein(){
    if (deutsch_latein_wert == 0){
        deutsch_latein_wert = 1;
        latein_deutsch_wert = 0;
        frage = "deutsch"
        antwort = "latein"
        document.getElementById("button_deutsch-latein").style.backgroundColor = "rgb(185, 79, 227)";
        document.getElementById("button_latein-deutsch").style.backgroundColor = "rgb(203, 147, 225)";
        farbe_start_button();
    }else{
        deutsch_latein_wert = 0
        document.getElementById("button_deutsch-latein").style.backgroundColor = "rgb(203, 147, 225)";
        farbe_start_button();
    }
    richtung = 1;
}
//greift auf farbe_start_button zu

function latein_deutsch(){
    if(latein_deutsch_wert == 0){
        latein_deutsch_wert = 1;
        deutsch_latein_wert = 0;
        frage = "latein";
        antwort = "deutsch";
        document.getElementById("button_deutsch-latein").style.backgroundColor = "rgb(203, 147, 225)";
        document.getElementById("button_latein-deutsch").style.backgroundColor = "rgb(185, 79, 227)";
        farbe_start_button();
    }else{
        latein_deutsch_wert = 0;
        document.getElementById("button_latein-deutsch").style.backgroundColor = "rgb(203, 147, 225)";
        farbe_start_button();
    }
    richtung = 0;
}
//greift auf farbe_start_button zu


//neue vok anzeigen

var auswahl = 0

function neue_vok_anzeigen(){
    if (zu_bearbeiten.length >= 1){
        grammatik_wert = 0;
        uebersetzung_wert = 0;
        document.getElementById("button_grammatik").innerHTML = "Tierzelle / Pflanzenzelle";
        document.getElementById("grammatik").style.display = "none";
        document.getElementById("button_uebersetzung").innerHTML = "Funktion / Erklärung zeigen";
        document.getElementById("uebersetzung").style.display = "none";
        var anzahl_übrige = zu_bearbeiten.length;
        document.getElementById("array_length").innerHTML= anzahl_übrige;
        auswahl = Math.floor(Math.random() * anzahl_übrige);
        if (richtung == 0){
            document.getElementById("vokabel").innerHTML = zu_bearbeiten[auswahl].latein;
            document.getElementById("uebersetzung").innerHTML = zu_bearbeiten[auswahl].deutsch;
            document.getElementById("grammatik").innerHTML = zu_bearbeiten[auswahl].grammatik;
        }else{
            document.getElementById("vokabel").innerHTML = zu_bearbeiten[auswahl].deutsch;
            document.getElementById("uebersetzung").innerHTML = zu_bearbeiten[auswahl].latein;
            document.getElementById("grammatik").innerHTML = zu_bearbeiten[auswahl].grammatik;
        }
    }else{
        document.getElementById("array_length").innerHTML = "";
        vokabel_abfrag_modus_beenden();
        document.getElementById("button_start").style.backgroundColor = "rgb(147, 147, 197)";
    }
}
//greift auf vokabel_abfrag_modus_beenden zu

function neue_vok_anzeigen_richtig(){
    zu_bearbeiten.splice(auswahl,1);
    neue_vok_anzeigen ();
}
//greift auf neue vok anzeigen zu

function neue_vok_anzeigen_falsch(){
    neue_vok_anzeigen ();
}
//greift auf neue vok anzeigen zu


//grammatik zeigen
var grammatik_wert = 0

function grammatik_anzeigen(){
    if(grammatik_wert == 0){
        document.getElementById("grammatik").style.display = "block";
        grammatik_wert = 1;
    }else{
        document.getElementById("grammatik").style.display = "none";
        grammatik_wert = 0;
    }
}


//übersetzung zeigen
uebersetzung_wert = 0

function uebersetzung_anzeigen(){
    if(uebersetzung_wert == 0){
        document.getElementById("uebersetzung").style.display = "block";
        document.getElementById("button_uebersetzung").innerHTML = "Funktion / Erklärung verbergen";
        uebersetzung_wert = 1;
    }else{
        document.getElementById("uebersetzung").style.display = "none";
        document.getElementById("button_uebersetzung").innerHTML = "Funktion / Erklärung zeigen";
        uebersetzung_wert = 0;
    }
}


//abfrage modus
function vokabel_abfrag_modus_starten(){
    variablen_für_buttons_zurücksetzen();
    neue_vok_anzeigen();
    for (let element of document.getElementsByClassName("einstellungen")){
        element.style.display = "none";
    }
    for (let element of document.getElementsByClassName("abfrage")){
        element.style.display = "inline-block";
    }
    document.getElementById("uebersetzung").style.display = "none";
    document.getElementById("grammatik").style.display = "none";
    for (let element of document.getElementsByClassName("richtung")){
        element.style.backgroundColor = "rgb(203, 147, 225)";
    }
    document.getElementById("button_fabeln").innerHTML = "Auswahl +";
    document.getElementById("button_andere").innerHTML = "Andere +";
    for (let element of document.getElementsByClassName("vokabeln")){
        element.style.backgroundColor = "rgb(180, 180, 180)";
    }
}
//greif auf varablen_für_buttons_zurücksetzten zu
//greif auf neue vok anzeigen zu


//einstellungs modus
function vokabel_abfrag_modus_beenden(){
    for (let element of document.getElementsByClassName("abfrage")){
        element.style.display = "none";
    }
    for (let element of document.getElementsByClassName("kategorie")){
        element.style.display = "inline-block";
    }
    for (let element of document.getElementsByClassName("zeigen")){
        element.style.display = "inline-block";
    }
    document.getElementById("button_start").style.backgroundColor = "rgb(147, 147, 197)";
}

//start button
//hier neues dazu
function farbe_start_button(){
    let summe_button_werte = vok_fabeln1_1_button_wert + vok_konjunktionen_button_wert + vok_fabeln2_1_button_wert + vok_fabeln3_1_button_wert + vok_fabeln8_button_wert + vok_fabeln3_2_button_wert + vok_fabeln4_button_wert;
    if (summe_button_werte >= 1 && deutsch_latein_wert + latein_deutsch_wert == 1){
        document.getElementById("button_start").style.backgroundColor = "rgb(82, 82, 193)";
    }else{
        document.getElementById("button_start").style.backgroundColor = "rgb(147, 147, 197)";
    }
}

/*so eins neu

für blabla einsetzen

function farbe_button_blabla(){
    if (vok_blabla_button_wert == 0){
        document.getElementById("button_blabla").style.backgroundColor = "rgb(88, 88, 88)";
        vok_blabla_button_wert = 1;
        farbe_start_button();
    }else{
        document.getElementById("button_blabla").style.backgroundColor = "rgb(180, 180, 180)";
        vok_blabla_button_wert = 0;
        farbe_start_button();
    }
}

*/


//fabeln3_1
vok_fabeln3_1_button_wert = 0

function farbe_button_fabeln3_1(){
    if (vok_fabeln3_1_button_wert == 0){
        document.getElementById("button_fabeln3_1").style.backgroundColor = "rgb(88, 88, 88)";
        vok_fabeln3_1_button_wert = 1;
        farbe_start_button();
    }else{
        document.getElementById("button_fabeln3_1").style.backgroundColor = "rgb(180, 180, 180)";
        vok_fabeln3_1_button_wert = 0;
        farbe_start_button();
    }
}
//greif auf farbe_start_button_zu


//fabeln3_2
vok_fabeln3_2_button_wert = 0

function farbe_button_fabeln3_2(){
    if (vok_fabeln3_2_button_wert == 0){
        document.getElementById("button_fabeln3_2").style.backgroundColor = "rgb(88, 88, 88)";
        vok_fabeln3_2_button_wert = 1;
        farbe_start_button();
    }else{
        document.getElementById("button_fabeln3_2").style.backgroundColor = "rgb(180, 180, 180)";
        vok_fabeln3_2_button_wert = 0;
        farbe_start_button();
    }
}
//greif auf farbe_start_button_zu


//fablen4
vok_fabeln4_button_wert = 0

function farbe_button_fabeln4(){
    if (vok_fabeln4_button_wert == 0){
        document.getElementById("button_fabeln4").style.backgroundColor = "rgb(88, 88, 88)";
        vok_fabeln4_button_wert = 1;
        farbe_start_button();
    }else{
        document.getElementById("button_fabeln4").style.backgroundColor = "rgb(180, 180, 180)";
        vok_fabeln4_button_wert = 0;
        farbe_start_button();
    }
}
//greif auf farbe_start_button_zu


//fabeln8
vok_fabeln8_button_wert = 0

function farbe_button_fabeln8(){
    if (vok_fabeln8_button_wert == 0){
        document.getElementById("button_fabeln8").style.backgroundColor = "rgb(88, 88, 88)";
        vok_fabeln8_button_wert = 1;
        farbe_start_button();
    }else{
        document.getElementById("button_fabeln8").style.backgroundColor = "rgb(180, 180, 180)";
        vok_fabeln8_button_wert = 0;
        farbe_start_button();
    }
}
//greif auf farbe_start_button_zu


//fabeln2_1
vok_fabeln2_1_button_wert = 0

function farbe_button_fabeln2_1(){
    if (vok_fabeln2_1_button_wert == 0){
        document.getElementById("button_fabeln2_1").style.backgroundColor = "rgb(88, 88, 88)";
        vok_fabeln2_1_button_wert = 1;
        farbe_start_button();
    }else{
        document.getElementById("button_fabeln2_1").style.backgroundColor = "rgb(180, 180, 180)";
        vok_fabeln2_1_button_wert = 0;
        farbe_start_button();
    }
}
//greif auf farbe_start_button_zu


//fabeln 1_1
vok_fabeln1_1_button_wert = 0

function farbe_button_fabeln1_1(){
    if (vok_fabeln1_1_button_wert == 0){
        document.getElementById("button_fabeln1_1").style.backgroundColor = "rgb(88, 88, 88)";
        vok_fabeln1_1_button_wert = 1;
        farbe_start_button();
    }else{
        document.getElementById("button_fabeln1_1").style.backgroundColor = "rgb(180, 180, 180)";
        vok_fabeln1_1_button_wert = 0;
        farbe_start_button();
    }
}
//greif auf farbe_start_button_zu


//konjunktionen
vok_konjunktionen_button_wert = 0

function farbe_button_konjunktionen(){
    if (vok_konjunktionen_button_wert == 0){
        document.getElementById("button_konjunktionen").style.backgroundColor = "rgb(88, 88, 88)";
        vok_konjunktionen_button_wert = 1;
        farbe_start_button();
    }else{
        document.getElementById("button_konjunktionen").style.backgroundColor = "rgb(180, 180, 180)";
        vok_konjunktionen_button_wert = 0;
        farbe_start_button();
    }
}
//greif auf farbe_start_button_zu


//variablen für button farbe zurück
//hier neues dazu
function variablen_für_buttons_zurücksetzen(){
    vok_fabeln1_1_button_wert = 0;
    vok_konjunktionen_button_wert = 0;
    vok_fabeln2_1_button_wert = 0;
    vok_fabeln3_1_button_wert = 0;
    vok_fabeln3_2_button_wert = 0;
    vok_fabeln4_button_wert = 0;
    deutsch_latein_wert = 0;
    latein_deutsch_wert = 0;
    vok_fabeln8_button_wert = 0;
    fabeln_button_wert = 0
    andere_button_wert = 0
}

//starte
//hier neues dazu 1. bei let summe_button_werte 2. if
var zu_bearbeiten = []

function starte(){
    let summe_button_werte = vok_fabeln1_1_button_wert + vok_konjunktionen_button_wert + vok_fabeln2_1_button_wert + vok_fabeln3_1_button_wert + vok_fabeln8_button_wert + vok_fabeln3_2_button_wert + vok_fabeln4_button_wert
    if (summe_button_werte >= 1 && deutsch_latein_wert + latein_deutsch_wert == 1){
        if (vok_fabeln1_1_button_wert == 1){
            zu_bearbeiten = zu_bearbeiten.concat(fabeln1_1);
        }
        if (vok_konjunktionen_button_wert == 1){
            zu_bearbeiten = zu_bearbeiten.concat(konjunktionen);
        }
        if (vok_fabeln2_1_button_wert == 1){
            zu_bearbeiten = zu_bearbeiten.concat(fabeln2_1);
        }
        if (vok_fabeln3_1_button_wert == 1){
            zu_bearbeiten = zu_bearbeiten.concat(fabeln3_1);
        }
        if (vok_fabeln8_button_wert == 1){
            zu_bearbeiten = zu_bearbeiten.concat(fabeln8);
        }
        if (vok_fabeln4_button_wert == 1){
            zu_bearbeiten = zu_bearbeiten.concat(fabeln4);
        }
        if (vok_fabeln3_2_button_wert == 1){
            zu_bearbeiten = zu_bearbeiten.concat(fabeln3_2);
        }
        vokabel_abfrag_modus_starten();
    }
}
//greif auf vokabel_afrag_modus_starten zu


//fabeln +/-
fabeln_button_wert = 0

function fabeln_ausklappen_einklappen(){
    if(fabeln_button_wert == 0){
        for (let element of document.getElementsByClassName("fabeln")){
            element.style.display="inline-block";
        }
        fabeln_button_wert = 1
        document.getElementById("button_fabeln").innerHTML = "Auswahl -";
    }else{
        for (let element of document.getElementsByClassName("fabeln")){
            element.style.display="none";
         }
        fabeln_button_wert = 0
        document.getElementById("button_fabeln").innerHTML = "Auswahl +";
    }
}


//andere +/-
andere_button_wert = 0

function andere_ausklappen_einklappen(){
    if(andere_button_wert == 0){
        document.getElementById("button_konjunktionen").style.display = "inline-block";
        andere_button_wert = 1
        document.getElementById("button_andere").innerHTML = "Andere -";
    }else{
        document.getElementById("button_konjunktionen").style.display = "none";
        andere_button_wert = 0
        document.getElementById("button_andere").innerHTML = "Andere +";
    }
}