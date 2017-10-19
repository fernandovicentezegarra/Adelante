// questions array (below) is numbered 0-end
// but exam questions are numbered 1 - (end - 1)        
function checkAnswer() {
    
    var numOfQs = 0;
    
    var choices = [];
    var chosen = [];
    
    for (var i = 0; i < pos; i++ ) {
        numOfQs += qNum[i];
    }
    
    firstQ = numOfQs - qNum[pos - 1];
    //document.write(questions[pos].Correct);
    for (var j = firstQ; j < numOfQs; j++) {
    choices.push(document.getElementsByName("choices" + j));
    for (var i=0; i < choices[j -firstQ].length; i++) {
        if (choices[j - firstQ][i].checked) {
            chosen.push(choices[j - firstQ][i].value);
            //document.write("if");
        }
    }
    }
        
    //document.write(questions[pos].Correct);
    //document.write(choices.length);
    //document.write("Holass");
    for (var i=0; i < chosen.length; i++) {

        if (chosen[i] == questions[pos].Correct) {
            score++;
        }
    }
    
    //document.write("Hola");
    if (pos == test.length) {
        document.write("<h1>Te sacaste " + score + " de " + numOfQs + " preguntas</h1><br>");
        document.write(qNum);
    } else {
    renderQuestion();
    }
}


// will create array of htmls that make up
// ONE/SINGLE test
function testIntegrator() {
    var len = questions.length;
    var num = 0;
    var test = [];
    while (num < len) {
        
        var text = '<html lang="en">\
        <head></head>\
        <body>';
        if (questions[num].name.includes("-")) {
            var index = questions[num].name.indexOf("-");
            var z = parseInt(questions[num].name.substring(index+1));
            qNum.push(parseInt(z - num));
            for (; num < z; num++) {
                text += display(num+1);
            }
            text += '</body>\
            </html>'
            test.push(text);
        } else {
            text += '</body>\
            </html>'
            test.push(display(num+1));
            qNum.push(1);
            num++;
        }
    }
    
    return test;
}

// Like distill but w/ a test
function testtill(num) {
    num = num - 1;
    if (questions[num].name.includes("-")) {
        var i = questions[num].name.indexOf("-");
        document.write(i);
        var a = parseInt(questions[num].name[i-1]);
        document.write("<br>" +a);
        var z = parseInt(questions[num].name.substring(i+1));
        var text = "";
        for (j = a; j <= z; j++) {
            text += display(j);
        }
        return text;
    }
    else {
        return display(num + 1);
    }
}

//displays individual question (from array object below)
// display INPUT: # of Question
function display(num) {
    num = num - 1;
    choices = "'choices" + num + "'";
    var text = "";
    if (questions[num].prompt && questions[num].prompt.includes(" ")) {
        text += "<p>" + questions[num].prompt + "</p>";
    }
    text += "<p>" + questions[num].question +"</p>";
    text += "<input type='radio' name=" + choices + " value='A'> " + questions[num].A + "<br>";
    text += "<input type='radio' name=" + choices + " value='B'> " + questions[num].B + "<br>";
    text += "<input type='radio' name=" + choices + " value='C'> " + questions[num].C + "<br>";
    text += "<input type='radio' name=" + choices + " value='D'> " + questions[num].D + "<br>";
    text += "<input type='radio' name=" + choices + " value='E'> " + questions[num].E + "<br>";
    /*
    text += "<input type='radio' name='choices1' value='A'>" + questions[num].A + "<br>";
    text += "<input type='radio' name='choices' value='B'>" + questions[num].B + "<br>";
    text += "<input type='radio' name='choices' value='C'>" + questions[num].C + "<br>";
    text += "<input type='radio' name='choices' value='D'>" + questions[num].D + "<br>";
    text += "<input type='radio' name='choices' value='E'>" + questions[num].E + "<br>";
    */
    return text;  
}

var questions = [
	{
		name: "SM2016iiADF1-2",
		subject: "VA",
		sub_subject: "Series",
		prompt: " Después de identificar y analizar la relación semántica de la serie de cada ítem, seleccione la respuesta más adecuada",
		image: false,
		question: "Suceder, ocurrir, acontecer,",
		A: "generar",
		B: "acaecer",
		C: "causar",
		D: "iniciar",
		E: "pender",
		Correct: "B"
	},
	{
		name: "SM2016iiADF2",
		subject: "VA",
		sub_subject: "Series",
		prompt: "SM2016iiADF1-2",
		image: false,
		question: "Atisbar, divisar; descubrir, revelar;",
		A: "segregar, emerger",
		B: "contemplar, extasiar",
		C: "menguar, espaciar",
		D: "incautar, inquirir",
		E: "destellar, refulgir",
		Correct: "E"
	},
	{
		name: "SM2016iiADF3-5",
		subject: "VA",
		sub_subject: "Sentence Elimination",
		prompt: "Lea atentamente cada conjunto oracional y determine el enunciado que debe eliminarse por no corresponder al tema o por ser de índole tangencial.",
		image: false,
		question: "(I) La homeopatía, medicina alternativa creada en 1796 por Samuel Hahnemann, se basa en la doctrina de que lo similar cura lo similar, es decir, una sustancia que cause los síntomas de una enfermedad en personas sanas curará algo parecido en personas enfermas. (II) La homeopatía es considerada una pseudociencia, dado que se ha descubierto que sus remedios no son más efectivos que los placebos, razón por la cual los científicos dudan de su eficacia y la consideran como una pseudoexplicación. (III) Hahnemann creía que las causas subyacentes de las enfermedades eran fenómenos que llamó miasmas y que los remedios homeopáticos actuaban sobre ellas. (IV) Según la doctrina homeopática de Hahnemann, se debe considerar la totalidad de los síntomas de los pacientes, rasgos de personalidad, estado físico e historia de vida. (V) Originalmente, el creador de la homeopatía postuló solo tres miasmas, de las cuales la más importante era la psora (“picazón” en griego), descrita como relacionada a cualquier enfermedad picante de la piel.",
		A: "V",
		B: "I",
		C: "II",
		D: "III",
		E: "IV",
		Correct: "II"
	},
	{
		name: "SM2016iiADF4",
		subject: "VA",
		sub_subject: "Sentence Elimination",
		prompt: "SM2016iiADF3-5",
		image: false,
		question: "(I) La máscara es una figura que representa un rostro humano, de animal o puramente imaginario. (II) La máscara le permite a la persona tomar el aspecto de otra o practicar ciertas actividades escénicas o rituales. (III) Desde los tiempos más remotos, el uso de máscaras ha estado vinculado a la religión y todavía está presente en los ritos mágicos de muchos pueblos. (IV) Por medio de las máscaras, se intentaba controlar a los espíritus y demonios, asustar a los enemigos o tener suerte en la caza. (V) La máscara empleada para protegerse de gases tóxicos consiste en una careta para protegerse contra determinados agentes agresivos mediante filtrado del aire que se respira.",
		A: "V",
		B: "II",
		C: "I",
		D: "IV",
		E: "III",
		Correct: "A"
	},
	{
		name: "SM2016iiADF5",
		subject: "VA",
		sub_subject: "Sentence Elimination",
		prompt: "SM2016iiADF3-5",
		image: false,
		question: "(I) Desde un punto de vista tradicional, la falacia se define como un razonamiento incorrecto, pero que, dadas ciertas condiciones, puede tener un gran efecto persuasivo. (II) Definida de esa manera, se puede entender que las falacias sean empleadas en las contiendas políticas, en las discusiones de los foros judiciales y hasta en los asuntos cotidianos. (III) En efecto, en la vida diaria, en los ámbitos de la ciencia y en los círculos del pensamiento político siempre se recurre a los razonamientos con el fin de convencer o de persuadir. (IV) Asimismo, en los contextos especializados de la polémica, se usan falacias en ciencia y en filosofía; por ejemplo, cuando se recurre al argumento de la autoridad para zanjar una cuestión intrincada. (V) Las falacias también se aplican, con rédito, en el utilitario mundo de la publicidad al momento de persuadir recurriendo a factores emocionales o a imágenes impactantes.",
		A: "V",
		B: "II",
		C: "I",
		D: "IV",
		E: "III",
		Correct: "E"
	},
	{
		name: "SM2016iiADF6-10",
		subject: "",
		sub_subject: "",
		prompt: 'El objetivo de entender el estrés no es evitarlo a toda costa. Una emoción de intensidad y duración adecuadas (un recorrido en la montaña rusa, ver una película de horror, enfrentar a un aguerrido oponente de ajedrez) libera dopamina en las vías cerebrales del placer. Esta sensación agradable o buen estrés es lo que conocemos como estimulación y hasta pagamos por experimentarla.<br>Sin embargo, hay otra forma de estrés: el llamado estrés crónico. Las formas de contrarrestar sus efectos adversos son los fármacos en el nivel biológico y, en el personal, con técnicas de control, como meditación, oración, ejercicio, psicoterapia, pasatiempos y reuniones sociales. Algunas de estas estrategias suprimen directamente la respuesta del cuerpo a este tipo de estrés; por ejemplo, la respiración pausada y profunda de la meditación reduce la liberación de hormonas del estrés, mientras que el ejercicio regular disminuye los niveles de dichas hormonas en estado de reposo. Otras actividades contribuyen elevando el sentimiento de control y previsibilidad, como sucede con numerosas prácticas religiosas que proporcionan respuestas a lo absolutamente inexplicable. Y el ámbito social también puede aportar muchos beneficios, incluido el caso muy particular de sentirnos necesarios cuando ayudamos a otros.<br>Otra buena noticia contra el estrés crónico tiene que ver con la distancia que podemos asumir acerca de nuestras condiciones y hábitos de vida. No solo es improbable que los lectores de este texto sufran de disentería, sino que también es poco probable que pierdan sus viviendas, padezcan hambruna o se vean amenazados por leones. Mientras lidiamos con embotellamientos, fechas de entrega, hipotecas e inversiones fallidas, vale la pena recordar que todo es parte del mundo que hemos construido; son agentes estresantes incomprensibles para cualquier venado o incluso para algunos humanos. Así como somos lo bastante inteligentes para inventar preocupaciones, ambiciones y celos —y lo suficientemente tontos para caer en sus trampas—, todos tenemos el potencial de ser lo bastante sabios para darles la perspectiva correcta.<br><font size="2">Adaptado de Sapolsky, Robert. “Bajo estrés”. National Geographic en español. Enero de 2010.</font>',
		image: false,
		question: "El texto trata, principalmente,",
		A: "de los peligros que hoy enfrenta el hombre.",
		B: "de las estrategias para combatir todo estrés.",
		C: "de la utilidad de la meditación y el ejercicio.",
		D: "del estrés crónico y de cómo contrarrestarlo.",
		E: "de la necesidad de promover el buen estrés.",
		Correct: "D"
	},
	{
		name: "SM2016iiADF7",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iiADF6-10",
		image: false,
		question: "En el texto, el término AGUERRIDO adquiere el significado de",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF8",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF9",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF10",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF11",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF12",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF13",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF14",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF15",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF16",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF17",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF18",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF19",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF20",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF21",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF22",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF23",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF24",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF25",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF26",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF27",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF28",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF29",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF30",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF31",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF32",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF33",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF34",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF35",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF36",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF37",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF38",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF39",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF40",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF41",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF42",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF43",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF44",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF45",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF46",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF47",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF48",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF49",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF50",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF51",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF52",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF53",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF54",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF55",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF56",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF57",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF58",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF59",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF60",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF61",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF62",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF63",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF64",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF65",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF66",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF67",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF68",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF69",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF70",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF71",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF72",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF73",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF74",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF75",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF76",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF77",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF78",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF79",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF80",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF81",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF82",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF83",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF84",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF85",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF86",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF87",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF88",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF89",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF90",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF91",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF92",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF93",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF94",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF95",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF96",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF97",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF98",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF99",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF100",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF101",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF102",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF103",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF104",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF105",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF106",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF107",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF108",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF109",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF110",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF111",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF112",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF113",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF114",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF115",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF116",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF117",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF118",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF119",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF120",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF121",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF122",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF123",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF124",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF125",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF126",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF127",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF128",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF129",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	},
	{
		name: "SM2016iiADF130",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "",
		A: "",
		B: "",
		C: "",
		D: "",
		E: "",
		Correct: ""
	}
]