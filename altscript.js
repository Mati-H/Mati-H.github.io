var displayBox = document.getElementById("artDisplay")

// Getting Correct Description and Creating String Variable

function getDesc() {
    if (window.localStorage.getItem("imgNum") == 1) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Self-Portrait</div><div>Charlotte Salomon (1917–1943)</div><div>Charlotte Salomon was a German-Jewish artist born in Berlin. She is primarily remembered as the creator of an autobiographical series of paintings 'Leben? oder Theater?: Ein Singspiel' (Life? or Theater?: A Song-play) consisting of 769 individual works painted between 1941 and 1943 in the south of France, while Salomon was in hiding from the Nazis. In October 1943 she was captured and deported to Auschwitz, where she was gassed to death by the Nazis soon after her arrival. She was five months pregnant.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 2) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Self-portrait</div><div>Josef Kowner (1895–1967)</div><div>Josef Kowner moved to Lodz with his family as a child. After the German occupation, he was interned in the Lodz ghetto, where he was one of the few painters who were granted financial support. Kowner made designs for the ghetto carpet workshop and even secretly exhibited his works in his apartment, where he also hosted clandestine concerts. Deported to Auschwitz-Birkenau in 1944, he was then transferred to the Wöbbelin camp near Ludwigslust, Germany, where he was liberated in May 1945. Ill and wounded, he immigrated to Sweden. He settled in Kalmar and continued as a prolific artist.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 3) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Portrait of a Young Woman</div><div>Esther Lurie (1913–1998)</div><div>In June 1941, Esther Lurie was caught by the German occupation while visiting her sister in Kovno, and was deported to the ghetto. There, under orders from the Germans, Lurie began painting landscapes and portraits. At the request of the Ältestenrat, she documented ghetto scenes. In July of 1944, Lurie was transported from the Kovno Ghetto to the Stutthof Concentration Camp in Germany, and from there to the Leibitsch Camp, where she was assigned to write numbers on cloth strips. After her liberation, she reached Italy, whence she returned to Israel in July 1945. She married and had two children.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 4) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>The Refugee</div><div>Felix Nussbaum (1904-1944)</div><div>Felix Nussbaum was born in Osnabrueck, Germany, and studied in Hamburg, Berlin and Rome. He and his companion, Felka Platek, settled in Belgium in 1935. In 1940, he was arrested with all other aliens and sent to the camps of Saint Cyprien and Gurs in southern France. Nussbaum managed to escape, and lived in hiding in Brussels until he and his family were caught in 1944 and sent to Auschwitz, where Nussbaum perished. Within one year, the entire Nussbaum family had been murdered.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 5) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Girls in the Field</div><div>Nelly Toll (b. 1935)</div><div>Following the German occupation of Lvov, in 1941, Nelly and her family were expelled to the ghetto. Her five-year-old brother was seized during an Aktion and was murdered. With her mother, Rozia, she joined a group that tried, without success, to flee to Hungary. In 1943 her father convinced friends of the family, a Christian couple in the city, to provide refuge for eight-year-old Nelly and her mother. He intended to join them later. In order to pass the long hours in hiding, her mother encouraged her to paint, write stories, and keep a diary. After Lvov was eventually liberated, in 1944, the two realized that they were the family's sole survivors. They remained in Europe for several years while Nelly studied art. She finally immigrated to the United States, where she continued painting.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 6) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Beaten (My Brother Gedalyahu)</div><div>Jacob Lipschitz (1903–1945)</div><div>In June 1941 Jacob Lipschitz was interned in the Kovno ghetto with his wife, Lisa, and daughter, Pepa. He was assigned to a forced labor brigade, worked in the ghetto workshops, and painted secretly at night in the attic. He later joined the artist Esther Lurie and a group of other artists, who documented ghetto life. When the ghetto was liquidated in the summer of 1944, Lipschitz was transported to the Dachau camp and from there to forced labor in the Kaufering camp. Due to his poor health and the inhuman conditions in the camp, Lipschitz died in March 1945.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 7) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>The Song is Over</div><div>Pavel Fantl (1903–1945)</div><div>In 1935 Pavel Fantl married and was inducted into the Czechoslovak Army as a medical officer. In 1939 he was dismissed for being a Jew. In June 1942 Fantl was transported to the Theresienstadt ghetto with his mother, Ida, his wife, Marie, and their son, Tomas. He directed the hospital for quarantined typhus patients and chaired the underground group of Jewish doctors. He used his position to relay information to the outside world, thus arousing the Germans’ suspicions. He was imprisoned in the Small Fortress, where he was interrogated and tortured. In October 1944 Fantl was deported to Auschwitz with his wife and by then seven-year-old son, who were murdered upon arrival; Fantl was sent to the Schwarzheide camp in Germany. He was shot to death on a death march in January 1945.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 8) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Path between the Barracks</div><div>Leo Breuer (1893–1975)</div><div>Leo Breuer was born to a Catholic mother and a Jewish father. He was conscripted into the German Army during World War I and was taken prisoner by the Russians. Upon his return to Germany in 1919, he studied at the Art Academies of Cologne and Kassel. In May 1940 he was arrested and sent to the Saint Cyprien camp in southern France, where he contracted typhus. After his recovery he was transferred to the Gurs camp. There Breuer was a member of the Catholic Relief Organization and captured scenes of the reality of camp life in drawings. He was released in late 1941 with another fifty-seven prisoners and found refuge at the La Roche reception center in Chansaye, where political prisoners and Jews were hidden. He lived under a false identity until liberation. After the war, he settled in Paris and later in his birthplace, Bonn, where he continued to paint.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 9) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Transport Arrival</div><div>Leo (Lev) Haas (1901-1983)</div><div>Haas graduated from the art academies of Karlsruhe and of Berlin. Due to his affiliation to the Communist Party, he was arrested in 1939, and deported to the Nisko Labor Camp. In September, 1942, he was deported to the Theresienstadt Ghetto. There, he was assigned to the Technical Department, where artists were forced to illustrate propaganda material for the Germans. Along with other artists, he secretly painted life in the ghetto. Following the Red Cross visit, in the summer of 1944, the artists were accused of smuggling out of the ghetto their 'gruesome' art. Haas was arrested with a group of artists and imprisoned in the 'Small Fortress', where he was brutally tortured. In October 1944, he was transported to Auschwitz and a month later to Sachsenhausen. There, he was assigned to counterfeiting currency as part of 'Operation Bernhard', a scheme to crash the Allied economies. In February 1945, the group of counterfeiters were transported to Mauthausen and then to Ebensee, where they were liberated.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 10) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>One Spring</div><div>Karl Robert Bodek (1905–1942) and Kurt Conrad Löw (1914–1980)</div><div>DESCRIPTION COMING SOON</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 11) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Threesome</div><div>Felix Nussbaum (1904-1944)</div><div>Felix Nussbaum was born in Osnabrueck, Germany, and studied in Hamburg, Berlin and Rome. He and his companion, Felka Platek, settled in Belgium in 1935. In 1940, he was arrested with all other aliens and sent to the camps of Saint Cyprien and Gurs in southern France. Nussbaum managed to escape, and lived in hiding in Brussels until he and his family were caught in 1944 and sent to Auschwitz, where Nussbaum perished. Within one year, the entire Nussbaum family had been murdered.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 12) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Laufen</div><div>Josef Nassy (1904-1976)</div><div>DESCRIPTION COMING SOON</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 13) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Im Lager (Gefangenenlager)</div><div>Felix Nussbaum (1904-1944)</div><div>Felix Nussbaum was born in Osnabrueck, Germany, and studied in Hamburg, Berlin and Rome. He and his companion, Felka Platek, settled in Belgium in 1935. In 1940, he was arrested with all other aliens and sent to the camps of Saint Cyprien and Gurs in southern France. Nussbaum managed to escape, and lived in hiding in Brussels until he and his family were caught in 1944 and sent to Auschwitz, where Nussbaum perished. Within one year, the entire Nussbaum family had been murdered.</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 14) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Lama Sabachthani [Why have you forsaken me?]</div><div>Morris Kestelman (1905-1998)</div><div>DESCRIPTION COMING SOON</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 15) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Women with Boulders</div><div>George Mayer-Marton (1897-1960)</div><div>DESCRIPTION COMING SOON</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 16) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Death March (Czechowice-Bielsko, January 1945)</div><div>Jan Hartman (1926-2009)</div><div>DESCRIPTION COMING SOON</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 17) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Belsen 1945</div><div>Edgar Ainsworth (1905-1975)</div><div>DESCRIPTION COMING SOON</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 18) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>One of the Death Pits, Belsen</div><div>Leslie Cole (1910-1977)</div><div>DESCRIPTION COMING SOON</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 19) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>Human Laundry</div><div>Doris Zinkeisen (1898-1991)</div><div>DESCRIPTION COMING SOON</div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 20) {
        return "<div class='col-md-4 col-sm-6 open-sans bot-buffer-small'><div class='bold-subtitle bot-buffer-tiny'>The Death Cart – Lodz Ghetto</div><div>Edith Birkin (1927-2018)</div><div>DESCRIPTION COMING SOON</div></div>"
    }
}

// Displaying Unique Image Layout and Description

function imgDisplay(imgDesc) {
    if (window.localStorage.getItem("imgNum") == 2 ||
        window.localStorage.getItem("imgNum") == 3 ||
        window.localStorage.getItem("imgNum") == 4 ||
        window.localStorage.getItem("imgNum") == 5 ||
        window.localStorage.getItem("imgNum") == 1 ||
        window.localStorage.getItem("imgNum") == 13 ||
        window.localStorage.getItem("imgNum") == 15 ||
        window.localStorage.getItem("imgNum") == 17 ||
        window.localStorage.getItem("imgNum") == 19 ||
        window.localStorage.getItem("imgNum") == 9) {

        displayBox.innerHTML = "<div class='col-md-8 col-sm-6 bot-buffer-small'><img class='img-fluid' src='" + window.localStorage.getItem("imgDat") + "'></div>" + imgDesc

    }
    else {

        displayBox.innerHTML = imgDesc + "<div class='col-md-8 col-sm-6 bot-buffer-small'><img class='img-fluid' src='" + window.localStorage.getItem("imgDat") + "'></div>"

    }
}

// Page Loads and Executes Function

window.onload = function() {
    imgDisplay(getDesc())
}
