import React from "react";
import { useState, useEffect } from "react";

export default function Helpdata() {
  const [check1, setcheck1] = useState(false);
  const [check2, setcheck2] = useState(false);
  const [check3, setcheck3] = useState(false);
  const [check4, setcheck4] = useState(false);
  const [check5, setcheck5] = useState(false);
  const [check6, setcheck6] = useState(false);
  const [check7, setcheck7] = useState(false);
  const [check8, setcheck8] = useState(false);
  const [check9, setcheck9] = useState(false);
  const [check10, setcheck10] = useState(false);
  const [check11, setcheck11] = useState(false);
  const [check12, setcheck12] = useState(false);
  const [check13, setcheck13] = useState(false);
  const [check14, setcheck14] = useState(false);
  const [check15, setcheck15] = useState(false);
  const [check16, setcheck16] = useState(false);
  const [check17, setcheck17] = useState(false);
  const [check18, setcheck18] = useState(false);
  const [check19, setcheck19] = useState(false);
  return (
    <div className="begin">
      <div className="container slider">
        <div className="sbox">
          <h2 onClick={() => setcheck1(!check1)}>
            <i class="bi bi-caret-down"></i> 1 What is the price of the Speak 5
            course?
          </h2>
          {check1 && (
            <div className="sboxtext">
              <p>
                In Speak 5 we have 3 types of membership to help you master the
                English language:
              </p>
              <p>
                Basic: you have access to 8 lessons, exercises and multimedia
                tools as well as access to 8 chapters of our mini-series and an
                advanced pronunciation corrector, so free.
              </p>
              <p>
                Standard: you have access to our complete course and multimedia
                content online 24/7, as well as unlimited consultations via
                e-mail with your private teacher, for only $99 USD for ONE YEAR
                of access (you make a one-time payment of $99 USD and that
                payment gives you access to the course for a whole year).
              </p>
              <p>
                Premium: You have access to our complete course and multimedia
                content online 24/7, as well as 5 private live classes (1 to 1)
                per week during your subscription, and also 2 live group classes
                per week where you will learn s vocabulary and expressions from
                the real world with movies and series, for only $139 USD per
                month. Each live class lasts 30 minutes.
              </p>
              <p>
                At Speak 5, we're proud to tell you that there will never be any
                hard deadlines or penalties of any kind. You can stay with us as
                long as you want and cancel at ANY time.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck2(!check2)}>
            <i class="bi bi-caret-down"></i> 2 How Long Does My Course
            Subscription last?
          </h2>
          {check2 && (
            <div className="sboxtext">
              <p>
                For the Basic membership, you have indefinite and free access.
                For the Standard membership, a single payment of $99 USD gives
                you access for a full year. For the Premium membership, your
                subscription lasts 30 days, and it automatically renews every
                month. You can cancel at ANY TIME you want.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck3(!check3)}>
            <i class="bi bi-caret-down"></i> 3 Is there some type of forces
            term?
          </h2>
          {check3 && (
            <div className="sboxtext">
              <p>
                Of course not! You can cancel at any time you want. You can take
                the course for one, two, three or as many months as you like,
                without any type of contract or penalty for cancellation
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck4(!check4)}>
            <i class="bi bi-caret-down"></i> 4 How do I cancel my Speak 5
            subscription?
          </h2>
          {check4 && (
            <div className="sboxtext">
              <p>
                It's very easy to unsubscribe: just send us a message at
                help@speak5.com with the subject I WANT TO CANCEL MY
                SUBSCRIPTION. You must send this email at least 24 hours before
                your plan is renewed, since if you do not, you will run the risk
                of being charged for the following month.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck5(!check5)}>
            <i class="bi bi-caret-down"></i> 5 What forms of payment do you
            accept?
          </h2>
          {check5 && (
            <div className="sboxtext">
              <p>
                For your convenience, we accept debit cards, credit cards,
                PayPal, and cash payments at OXXO.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck6(!check6)}>
            <i class="bi bi-caret-down"></i> 6 What is the Content of the
            course?
          </h2>
          {check6 && (
            <div className="sboxtext">
              <p>El curso contiene lo siguiente:</p>
              <p>
                Acceso ilimitado a todas las lecciones y contenido multimedia de
                Speak 5 (100 unidades de aprendizaje del idioma inglÃ©s, cada
                una con 5 secciones multimedia con audio, video, ejercicios y
                correcciÃ³n de pronunciaciÃ³n bajo demanda, que te llevan de
                principiante a experto en el idioma).
              </p>
              <p>
                Acceso ilimitado nuestra exclusiva miniserie animada en inglÃ©s,
                la cual te muestra como se utiliza el vocabulario y la
                gramÃ¡tica en situaciones cotidianas y divertidas.
              </p>
              <p>
                Acceso ilimitado a divertidas explicaciones de la gramÃ¡tica
                inglesa, desde lo mÃ¡s bÃ¡sico hasta lo mÃ¡s avanzado, de
                acuerdo al Marco ComÃºn Europeo de Referencia para las Lenguas.
              </p>
              <p>
                Acceso ilimitado al corrector de pronunciaciÃ³n â€œPerfect
                Pronunciationâ€, el cual estÃ¡ integrado en el contenido
                multimedia de Speak 5. Este corrector de pronunciaciÃ³n te
                permite dar clic en una oraciÃ³n, escucharla y luego grabar tu
                voz. Inmediatamente, el corrector te ofrece retroalimentaciÃ³n
                de la manera en que pronunciaste.
              </p>
              <p>
                Clases privadas, en vivo, con teachers britÃ¡nicos y
                norteamericanos en el horario disponible que mejor se acomode a
                tu dÃ­a (solo en el Plan Premium) .
              </p>
              <p>
                Clases privadas, en vivo, con teachers britÃ¡nicos y
                norteamericanos en el horario disponible que mejor se acomode a
                tu dÃ­a (solo en el Plan Premium) .
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck7(!check7)}>
            <i class="bi bi-caret-down"></i> 7 How many levels does the course
            have?
          </h2>
          {check7 && (
            <div className="sboxtext">
              <p>
                El curso consta de 5 niveles, los cuales estÃ¡n Ã­ntimamente
                ligados al Marco ComÃºn Europeo de Referencia para las Lenguas
                (MCER). El MCER es un estÃ¡ndar europeo que mide el nivel de
                comprensiÃ³n y expresiÃ³n de un idioma. Nuestro curso se
                relaciona al MCER de la siguiente manera:
              </p>
              <p>Principiante (A1)</p>
              <p>Pre-intermedio (A2)</p>
              <p>Intermedio (B1)</p>
              <p>Intermedio-Avanzado (B2)</p>
              <p>Avanzado / Negocios (C1 y C2)</p>
              <p>
                Estos 5 niveles almacenan 100 lecciones interactivas que te
                llevarÃ¡n de ser un completo principiante en el inglÃ©s, con
                cero conocimientos del lenguaje, hasta convertirte en un experto
                en el idioma.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck8(!check8)}>
            <i class="bi bi-caret-down"></i> 8 What is the pronunxiation
            corrector?
          </h2>
          {check8 && (
            <div className="sboxtext">
              <p>
                El corrector de pronunciaciÃ³n lleva como nombre Perfect
                PronunciationÂ®. Esta herramienta te permite grabar y analizar
                tu pronunciaciÃ³n para que en poco tiempo puedas hablar el
                idioma inglÃ©s perfectamente. Utilizarla es muy fÃ¡cil y
                divertido: simplemente oprime el Ã­cono de micrÃ³fono que tiene
                cada ejercicio multimedia del curso, y grÃ¡bate diciendo la
                palabra u oraciÃ³n que se te presenta; automÃ¡ticamente, el
                corrector de pronunciaciÃ³n te arrojarÃ¡ una calificaciÃ³n que
                va de A a F. Las calificaciones significan lo siguiente:
              </p>
              <p>
                A = Excelente: has pronunciado todas las palabras de manera
                correcta.
              </p>
              <p>
                B = Buena: has pronunciado bien la mayorÃ­a de las palabras.
              </p>
              <p>C = Regular: has pronunciado bien solo algunas palabras.</p>
              <p>D = Mala: te hace falta practicar mÃ¡s.</p>
              <p>F = Terrible: sigue practicando</p>
              <p>
                Esta herramienta pone en color azul las palabras que
                pronunciaste correctamente, y en color rojo las que pronunciaste
                incorrectamente.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck9(!check9)}>
            <i class="bi bi-caret-down"></i> 9 How do I subscribe to Speak 5?
          </h2>
          {check9 && (
            <div className="sboxtext">
              <p>
                Suscribirse es muy sencillo: simplemente da clic en el botÃ³n
                INSCRÃBETE, llena el formulario de inscripciÃ³n y da clic en el
                botÃ³n pagar. SerÃ¡s llevado a la pÃ¡gina de pago, protegida por
                PayPal, el lider en ventas seguras y encriptadas en MÃ©xico y el
                mundo (es necesario contar con una tarjeta de dÃ©bito, crÃ©dito
                o con una cuenta PayPal para poder realizar tu pago).
                Adicionalmente, tienes la opciÃ³n de pagar en efectivo en OXXO.{" "}
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck10(!check10)}>
            <i class="bi bi-caret-down"></i> 10 How can I access my account?
          </h2>
          {check10 && (
            <div className="sboxtext">
              <p>
                Si ya eres miembro de Speak 5, solo debes dar clic en el botÃ³n
                INGRESA, el cual se encuentra en la parte superior derecha de la
                pantalla de inicio. DespuÃ©s, proporciona tus datos de inicio de
                sesiÃ³n, y listo. Si no eres miembro de Speak 5, primero debes
                suscribirte a nuestro curso presionando el botÃ³n INSCRÃBETE.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck11(!check11)}>
            <i class="bi bi-caret-down"></i> 11 How Can I recover my password?
          </h2>
          {check11 && (
            <div className="sboxtext">
              <p>
                Si olvidaste tu contraseÃ±a, da clic en el botÃ³n INGRESA en la
                parte superior derecha de la pantalla de inicio. Cuando estÃ©s
                en la pantalla de inicio de sesiÃ³n, da clic en la frase
                â€œÂ¿olvidaste tu contraseÃ±a?â€. Inmediatamente, se te enviarÃ¡
                tu contraseÃ±a a tu correo electrÃ³nico.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck12(!check12)}>
            <i class="bi bi-caret-down"></i> 12 How can I change my personal
            information?
          </h2>
          {check12 && (
            <div className="sboxtext">
              <p>
                Simplemente da clic en la opciÃ³n PERFIL. Cuando estÃ©s ahÃ­,
                cambia cualquier dato que quieras y luego da clic en GUARDAR
                CAMBIOS.
              </p>
            </div>
          )}
        </div>

        <div className="sbox">
          <h2 onClick={() => setcheck13(!check13)}>
            <i class="bi bi-caret-down"></i> 13 How can I see my progress in the
            course?
          </h2>
          {check13 && (
            <div className="sboxtext">
              <p>
                Simplemente da clic en la opciÃ³n PERFIL. Cuando estÃ©s ahÃ­,
                cambia cualquier dato que quieras y luego da clic en GUARDAR
                CAMBIOS.
              </p>
            </div>
          )}
        </div>

        <div className="sbox">
          <h2 onClick={() => setcheck14(!check14)}>
            <i class="bi bi-caret-down"></i> 14 Do You Offer Any Kind of diploma
            or certificate?{" "}
          </h2>
          {check14 && (
            <div className="sboxtext">
              <p>
                Por supuesto que sÃ­. Al terminar cada uno de los 5 niveles de
                tu curso, podrÃ¡s solicitar un elegante diploma que avala el
                nivel de inglÃ©s que has completado.
              </p>
            </div>
          )}
        </div>

        <div className="sbox">
          <h2 onClick={() => setcheck15(!check15)}>
            <i class="bi bi-caret-down"></i> 15 Can I use the Course Offline?
          </h2>
          {check15 && (
            <div className="sboxtext">
              <p>
                Lamentamos decir que no. Necesitas una conexiÃ³n a internet para
                poder disfrutar de todos los beneficios del curso Speak 5, asÃ­
                como para poder tomar tus clases privadas en vivo.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck16(!check16)}>
            <i class="bi bi-caret-down"></i> 16 What are the system requirements
            to use the course correctly?{" "}
          </h2>
          {check16 && (
            <div className="sboxtext">
              <p>
                Lo Ãºnico que necesitas para disfrutar de tu curso sin percances
                es una computadora con altavoces, micrÃ³fono y una conexiÃ³n a
                internet (el micrÃ³fono es necesario para utilizar el corrector
                de pronunciaciÃ³n). Para que tengas la mejor experiencia, te
                recomendamos utilizar el navegador CHROME, con flash habilitado.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck17(!check17)}>
            <i class="bi bi-caret-down"></i> 17 Can I take my course from my
            Smartphone, iPhone or Tablet?
          </h2>
          {check17 && (
            <div className="sboxtext">
              <p>
                Â¡Claro que sÃ­! Puedes tomar tu curso directamente desde tu
                telÃ©fono mÃ³vil o tablet.
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck18(!check18)}>
            <i class="bi bi-caret-down"></i> 18 How can I contact you ?
          </h2>
          {check18 && (
            <div className="sboxtext">
              <p>
                18 How can I contact you? Para tu comodidad, puedes contactarnos
                por correo electrÃ³nico o WhatsApp, y te contestaremos en menos
                de 8 horas hÃ¡biles (o de inmediato por Whatsapp): Correo
                electrÃ³nico: ayuda@speak5.com WhatsApp: 52 1 55 4310 3719
              </p>
            </div>
          )}
        </div>
        <div className="sbox">
          <h2 onClick={() => setcheck19(!check19)}>
            <i class="bi bi-caret-down"></i> 19 How many live 1-on-1 classes can
            I take on the Premium Plan?
          </h2>
          {check19 && (
            <div className="sboxtext">
              <p>
                Puedes tomar una clase de 30 minutos cada dÃ­a, 5 veces por
                semana, con el profesor que mÃ¡s se acomode a tu gusto y
                horario. Las clases no son acumulables, es decir, si el dÃ­a de
                hoy no tomas una clase, no la podrÃ¡s reponer maÃ±ana, lo que
                significa que el dÃ­a de maÃ±ana solo podrÃ¡s tomar una clase (y
                no dos) Â¡Pero eso no es problema ya que sabes que puedes tomar
                una clase en vivo cada dÃ­a, cualquier dÃ­a! TambiÃ©n, con el
                Plan Premium tienes 2 clases en vivo grupales por semana para
                que aprendes expresiones, slang y vocabulario basados en series
                y pelÃ­culas :)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
