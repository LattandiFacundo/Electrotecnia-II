const articles = {
    "6": {
        "title": "Campo magnético creado por una carga móvil",

        "article": "<h2>Campo magnético creado por un carga móvil en un <i>conductor</i></h2>\
        <img src=\"./dist/src/img-1.png\"></img>\
        <p>Las líneas del campo magnético de una carga en movimiento son circunferencias en torno al movimiento de la carga, ya que el campo va en la dirección acimutal. En los puntos del eje el campo magnético es nulo, excepto en la carga.</p>\
        <h2>Campo magnetico creado por una carga móvil en una <i>espira</i></h2>\
        <p>Los campos magnéticos pueden ser generados por cargas en movimiento. Tan solo una carga en movimiento puede crear un campo magnético. Su sentido va a depender de la <b>regla de la mano derecha</b>.</p>\
        <img src=\"./dist/src/img-2.png\"></img>\
        <h2>Campo magnetico creado por una carga móvil en una <i>solenoide</i></h2>\
        <p>El campo magentico esta concentrado en un campo uniforme en el centro de un solenoide. El campo afuera de este es mas débil por eso las líneas están mas separadas.</p>\
        <img src=\"./dist/src/img-3.png\"></img>\
        ",

        "formulas": "<h2>Fórmulas</h2>\
        <h3>En un conductor</h3>\
        <p>$B = frac{mu_0*I}{2pi*d}$</p>\
        <p class=\"data\">d = Distancia entre el punto y el centro</p>\
        <h3>En una espira</h3>\
        <p>$B_p=frac{mu_0*I}{2*d}$</p>\
        <h3>En una solenoide</h3>\
        <p>$B_p=frac{mu_0*I*N}{l}$</p>\
        <p class=\"data\">N = Número de vueltas<br>l = Logitud de la solenoide</p>\
        <h3>En una bobina</h3>\
        <p>$B_p=frac{mu_0*I*N}{2*d}$</p>\
        "
    },

    "0": {
        "title": "Capacitancia y capacitores",

        "article": "<p>Un capacitor o condensador es un objeto construido para almacenar cargas eléctricas. Se utiliza mucho en circuitos eléctricos para retardar señales o como filtros de secuencia.<br>La forma más difundida o común es el capacitor plano, formado por 2 placas conductoras paralelas separadas por un material aislante, donde se almacenan las cargas gracias a la atracción electromagnética que hay entre las mismas, ya que el dialéctrico, permite el paso del campo magnético pero no de la electricidad.</p>\
        <img src=\"./dist/src/img-4.jpeg\"></img>\
        <p>En los circuitos se representa de la siguiente manera:</p>\
        <img src=\"./dist/src/img-5.jpeg\"></img>\
        <p>Después está la capacitancia que es la capacidad de un capacitor o se puede decir también que es el consciente entre la carga y la tensión eléctrica entre sus placas.</p>\
        ",

        "formulas": "<h2>Fórmulas</h2>\
        <h3>Capacitancia de un capacitor</h3>\
        <p>$Q/V = [C/V] = [F]$</p>\
        <p class=\"data\">Q = Carga = [C]</p>\
        <p class=\"doble\">$frac {epsilon_0 * k * A} {d} = [F]$</p>\
        <p class=\"data\">$epsilon_0 = 8,854*10^-12 frac{F} {m}$<br>d = Logitud del dialéctrico</p>\
        <h3>Capacitancia en serie</h3>\
        <p>$C=frac{1}{frac {1} {C_1} +  frac {1} {C_2} + frac {1} {C_n}}$</p>\
        <h3>Capacitancia en paralelo</h3>\
        <p>$C_1 + C_2 + C_n$</p>\
        "
    },

    "3": {
        "title": "Ley de Hopkinson",

        "article": "<p>Esta ley explica las bases de los circuitos magnéticos; se puede entender como una analogía a la ley de Ohm, donde la fuerza magnetomotriz es la tensión, el flujo magnético la corriente eléctrica y la reluctancia la resistencia.</p>\
        <img class=\"bigger\" src=\"./dist/src/img-6.jpg\"></img>\
        ",

        "formulas": "<p>$Fmm = Phi * cc \"R\"$</p>\
        <p class=\"data\">$Phi$ = Flujo magnético<br>$cc \"R\"$ = Reluctancia magnética</p>\
        "
    },

    "7": {
        "title": "Inductancia magnética",

        "article": "<p>La inductancia es la propiedad de un circuito eléctrico para resistir el cambio de corriente. Una corriente que fluye a través de un cable tiene un campo magnético a su alrededor. El flujo magnético depende de la corriente y cuando esta varía, el flujo magnético también varía con ella.</p>\
        <img src=\"./dist/src/img-7.png\"></img>\
        ",

        "formulas": "<h2>Fórmulas</h2>\
        <h3>Inductancia</h3>\
        <p>$L = frac {e * Delta t} {Delta i} = [frac {V*s} {A}] = [H]$</p>\
        <h3>Inductancia de una bobina</h3>\
        <p>$L = frac {N * Phi} {I}$</p>\
        <h3>Inductancia de una solenoide</h3>\
        <p>$L = frac {N^2 * mu * A} {l}$</p>\
        <p class=\"data\">l = Longitud de la solenoide</p>\
        "
    },
    
    "x": {
        "title": "",

        "article": "<h2></h2>\
        <p></p>\
        <img src=\"./dist/src/img-6.png\"></img>\
        ",

        "formulas": "<h2>Fórmulas</h2>\
        <h3></h3>\
        <p>$$</p>\
        <p class=\"data\"></p>\
        "
    },

    "4": {
        "title": "Inducción magnética",

        "article": "<p>Es el proceso mediante el cual un campo magnético induce a un material, generando movimientos o, si esta es variable, electricidad (Ver ley de faraday). La permeabilidad es la capacidad de un material de conducir el campo magnético.</p>\
        <img class=\"bigger\" src=\"./dist/src/img-induccion.jpg\"></img>\
        ",

        "formulas": "<h2>Fórmulas</h2>\
        <p>$vecB = mu*vecH$</p>\
        <p class=\"data\">$vecH$ = Intensidad del campo magnético<br>$mu$ = Permeabilidad del material</p>\
        "
    },

    "8": {
        "title": "Corrientes de Foucault",

        "article": "<p>Cuando un campo magnetico atraviesa un conductor eléctrico, debido al fenómeno de la inducción, se producen corrientes llamadas \"corrientes de Foucault\" que circulan en forma de torbellino, estas producen pérdida de carga y también calor.</p>\
        <img class=\"bigger\" src=\"./dist/src/img-9.png\"></img>",

        "formulas": ""
    },

    "9": {
        "title": "Ciclo de histéresis",

        "article": "<p>Cuando se magnetiza en una dirección un material ferromagnético, no vuelve de nuevo a magnetización cero cuando cesa el campo magnético impulsor. Debe ser impulsado hacia atrás de nuevo a cero mediante un campo con dirección opuesta. Si se aplica al material un campo magnético alterno, su magnetización trazará un bucle llamado ciclo de histéresis.</p>\
        <img class=\"bigger\" src=\"./dist/src/img-10.png\"></img>\
        <p>Primera imagen: Retiene una gran fracción del campo de saturación cuando se elimina el campo de conducción (se usa para imanes permanentes y dispositivos magnéticos de memoria y grabación).<br>Segunda imagen: Magnetizacion media.<br>Tercera imagen: Un bucle estrecho de histéresis implica una pequña cantidad de energía disipada al invertir repetidamente la magnetización (se usa para el nucleo de transformadores y motores, para minimizar la disipación de energía).</p>",

        "formulas": ""
    },

    "10": { 
        "title": "Circuitos magnéticos", 
 
        "article": "<p>En las máquinas eléctricas se utilizan circuitos de materiales ferromagnéticos para conducir los campos magnéticos necesarios para su funcionamiento. Esto hace necesario saber calcular la inducción magnética que ocasiona una corriente dada, en un arrollamiento determinado y sobre un núcleo de forma, material y dimensiones conocidas; o al revés, saber dimensionar un núcleo y un arrollamiento para producir una inducción magnética determinada. Podemos decir que existe cierta analogía entre un circuito magnético y un circuito eléctrico. En un circuito magnético, el flujo que se genera en el interior de una bobina puede ser transportado por un material ferromagnético. Debe tenerse en cuenta que para calcular la reluctancia de un circuito magnético se tiene que conocer la permeabilidad y esta depende de la inducción magnética, se calcula la reluctancia con ese valor de la permeabilidad y se obtiene una fuerza magneto motriz. Si la inducción obtenida con esa fuerza magnetomotriz es la supuesta, el problema está resuelto, y si no es la supuesta, se reitera el proceso hasta dar con el valor correcto.</p>\
        <img class=\"bigger\" src=\"./dist/src/img-circuitomag.jpg\"></img>\
        <h2>Fuerza magnetomotriz</h2>\
        <p>La fuerza magneto motriz $F_\"mm\"$ es aquella capaz de producir un flujo magnético entre dos puntos de un circuito magnético.</p>\
        <h2>Reluctancia magnética</h2>\
        <p>La reluctancia magnética o resistencia magnética es la oposición que un medio presenta al paso del flujo magnético: a mayor reluctancia, más difícil es establecer el flujo magnético.</p>\
        <h2>Flujo magnético</h2>\
        <p>El flujo magnético es una de medir el magnetismo, midiendolo a partir del campo magnético, la superficie sobre la cual actúa y el ángulo de incidencia formado entre las líneas de campo magnético y dicha superficie.</p>\
        <img class=\"bigger\" src=\"./dist/src/img-8.svg\"></img>\
        ", 
 
        "formulas": "<h2>Fórmulas</h2>\
        <h3>Reluctancia magnética</h3>\
        <p>$cc \"R\" = frac{d}{mu*A} = [A/\"Wb\"]$</p>\
        <p class=\"doble\">$cc \"R\" = frac{F_\"mm\"}{Phi}$</p>\
        <h3>Fuerza magnetomotriz</h3>\
        <p>$F_\"mm\" = N*I = [A*v]$</p>\
        <p class=\"doble\">$F_\"mm\" = cc \"R\" * Phi$</p>\
        <h3>Flujo magnético</h3>\
        <p>$Phi = B*A*cos(theta) = [Wb]$</p>\
        <p class=\"doble\">$Phi = frac{Fmm} {cc \"R\"}$</p>\
        \
        <p class=\"data\"></p>\
        " 
    },


    "11": {
        "title": "Corriente alterna",

        "article": "<p>La corriente alterna es un tipo de corriente eléctrica, en la cual la dirección del flujo de electrones va y viene a intervalos regulares o en ciclos. La corriente que fluye por las líneas eléctricas y la electricidad disponible normalmente en las casas procedente de los enchufes de la pared es corriente alterna.</p>\
        <img class=\"bigger whited\" src=\"./dist/src/img-11.png\"></img>\
        <h2>Frecuencia</h2>\
        <p>Es una magnitud periódica en la que el tiempo es la variable independiente al número de veces que la señal completa un ciclo en la unidad de tiempo.</p>\
        <h2>Periodo</h2>\
        <p>El periodo es el inverso de la frecuencia, es el tiempo en el que transcurre un ciclo.</p>\
        <h2>Velocidad Angular</h2>\
        <p>Es una medida de la velocidad de rotación. Se define como el ángulo girado por una unidad de tiempo, osea, $omega = frac{Deltatheta}{Deltat}$, y se designa mediante la letra griega $omega$.</p>\
        <h2>Valor instantaneo</h2>\
        <p>El valor instantáneo es el que tiene la señal en cualquier instante de tiempo. El valor instantáneo de una onda senoidal es el que toma la ordenada en cierto punto de las abscisas.</p>\
        <h2>Valor medio</h2>\
        <p>El valor medio de una onda senoidal simétrica se define como la media algebraica de los valores instantáneos durante un semiperiodo.</p>\
        <h2>Valor eficaz</h2>\
        <p>Se corresponde con el valor de lectura de los instrumentos de medición cuándo medimos valor de corriente o tensión alterna. El valor eficaz de una corriente alterna es el valor, que llevado a corriente continua produce los mismos efectos caloríficos en las resistencias.</p>\
        ",

        "formulas": "<h2>Fórmulas</h2>\
        <h3>Frecuencia</h3>\
        <p class=\"smaller\">$f = frac {ciclos} {\"tiempo\"} = frac {omega} {2*pi} = [frac{\"vueltas\"} {s}] = [Hz]$</p>\
        <p class=\"data\">$omega$ = velocidad angular</p>\
        <h3>Periodo</h3>\
        <p class=\"smaller\">$T = 1/f = frac {2*pi} {omega} = [s]$</p>\
        <h3>Valor instanteneo</h3>\
        <p>$e = E_max*sin(omega*t)$</p>\
        <h3>Valor medio</h3>\
        <p class=\"smaller\">$E_\"medio\"=2/pi*E_\"max\"$</p>\
        <h3>Valor eficaz</h3>\
        <p class=\"smaller\">$E_\"eficaz\" = E_\"max\"/sqrt(2)$</p>\
        <p class=\"doble smaller\">$I_\"eficaz\" = I_\"max\"/sqrt(2)$</p>\
        \
        "
    },

    "1": { 
        "title": "Ley de Faraday - Lenz", 
 
        "article": "<p>La ley de Faraday nos indica que la fuerza electromotriz inducida (femi) se produce exclusivamente por las variaciones de flujo magnético, es decir, no necesariamente se tiene que producir un movimiento en el conductor, si no que basta con provocar un aumento o disminución del flujo magnético para producir una femi. Según la ley de Lenz, la femi que se genera causa efectos contrarios a la causa que lo origina.</p>\
        <img src=\"https://www.lookandlearn.com/history-images/preview/M/M520/M520703_Faradays-first-Experiment.jpg\"></img>\
        ", 
 
        "formulas": "<h2>Fórmulas</h2>\
        <h3>Ley de Faraday - Lenz</h3>\
        <p>$e = - frac{DeltaPhi}{Deltat} = [V] = [frac {T*m^2} {s}]$</p>"
    },

    "x": {
        "title": "",

        "article": "<h2></h2>\
        <p></p>\
        <img src=\"./dist/src/img-6.png\"></img>\
        ",

        "formulas": "<h2>Fórmulas</h2>\
        <h3></h3>\
        <p>$$</p>\
        <p class=\"data\"></p>\
        "
    },
};

reload = function(){};

document.addEventListener("DOMContentLoaded", () => {
    reload = async function (){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        let article = urlParams.get("id");
        let mainContainer = document.getElementById("mainContainer");
        let temasContainer = document.getElementById("temasContainer");
        let articleContainer = document.getElementById("article-container");
        let errorContainer = document.getElementById("error");

        if(article === null){
            continueToMain();
        }
        else if(article == "temas"){
            continueToTemas();
        }
        else{
            getArticle(article);
        }

        function continueToMain(){
            mainContainer.classList.remove("hidden");
            articleContainer.classList.add("hidden");
            temasContainer.classList.add("hidden");
            errorContainer.classList.add("hidden");
        }

        function continueToTemas(){
            temasContainer.classList.remove("hidden");
            articleContainer.classList.add("hidden");
            mainContainer.classList.add("hidden");
            errorContainer.classList.add("hidden");
        }

        async function getArticle(id){
            mainContainer.classList.add("hidden");
            articleContainer.classList.remove("hidden");
            temasContainer.classList.add("hidden");
            errorContainer.classList.add("hidden");

            let title = document.getElementById("title");
            let article = document.getElementById("article");
            let formulas = document.getElementById("formulas");
            
            title.innerHTML = articles[id].title;
            article.innerHTML = articles[id].article;
            formulas.innerHTML = articles[id].formulas;
            
            try{
                MathJax.startup.document.state(0);
                MathJax.typeset();
            }
            catch (e){
                console.log(e);
            }
        }

        if(document.body.clientWidth <= 768){
            console.log("test");
            errorContainer.classList.remove("hidden");
            mainContainer.classList.add("hidden");
            articleContainer.classList.add("hidden");
            temasContainer.classList.add("hidden");
        }
    }
    reload();

    backButton = document.getElementById("back");
    backButton.addEventListener("click", () => {
        location.search="id=temas";
    });

    back2Button = document.getElementById("back2");
    back2Button.addEventListener("click", () => {
        location.search="";
    });

    temasButton = document.getElementById("temasButton");
    temasButton.addEventListener("click", () => {
        location.search="id=temas";
    });
});

function updateArticle(article){
    window.location.search = "id=" + article;
    reload(article);
}