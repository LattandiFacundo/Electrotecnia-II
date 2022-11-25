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
        <img src=\"./dist/src/img-6.jpg\"></img>\
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

    "5": {
        "title": "Flujo magnético",

        "article": "<p>El flujo magnético es una de medir el magnetismo, midiendolo a partir del campo magnético, la superficie sobre la cual actúa y el ángulo de incidencia formado entre las líneas de campo magnético y dicha superficie.</p>\
        <img class=\"bigger\" src=\"./dist/src/img-8.svg\"></img>\
        ",

        "formulas": "<h2>Fórmulas</h2>\
        <p>$Phi = B*A*cos(theta)$</p>\
        <p class=\"doble\">$Phi = frac{Fmm} {cc \"R\"}$</p>\
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