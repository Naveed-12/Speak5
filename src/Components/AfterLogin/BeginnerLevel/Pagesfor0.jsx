import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const {speak} = useSpeechSynthesis();
  const Questions = [
    {
      Q: "To",
      Ans: "(ei)",
    },
    {
      Q: "B",
      Ans: "(bi)",
    },
    {
      Q: "C",
      Ans: "(Yes)",
    },
    {
      Q: "D",
      Ans: "(gave)",
    },
    {
      Q: "AND",
      Ans: "(i)",
    },
    {
      Q: "F",
      Ans: "(ff)",
    },
    {
      Q: "G",
      Ans: "(yeah)",
    },
    {
      Q: "H",
      Ans: "(uh)",
    },
    {
      Q: "I",
      Ans: "(ai)",
    },
    {
      Q: "J",
      Ans: "(Yeah)",
    },
    {
      Q: "K",
      Ans: "(kei)",
    },
    {
      Q: "L",
      Ans: "(the)",
    },
    {
      Q: "M",
      Ans: "(em)",
    },
    {
      Q: "N",
      Ans: "(on)",
    },
    {
      Q: "OR",
      Ans: "(ou)",
    },
    {
      Q: "P",
      Ans: "(pi)",
    },
    {
      Q: "Q",
      Ans: "(kiu)",
    },
    {
      Q: "R",
      Ans: "(ar:)",
    },
    {
      Q: "Yes",
      Ans: "(is)",
    },
    {
      Q: "T",
      Ans: "(you)",
    },
    {
      Q: "OR",
      Ans: "(uu)",
    },
    {
      Q: "V",
      Ans: "(saw)",
    },
    {
      Q: "W",
      Ans: "(daboliu)",
    },
    {
      Q: "X",
      Ans: "(former)",
    },
    {
      Q: "AND",
      Ans: "(oops)",
    },
    {
      Q: "Y",
      Ans: "(zed)",
    },
    {
      Q: "Z",
      Ans: "(zi)",
    },
  ];
  return (
    <div className="container kk">
      <p>
        When we learn any language, the first thing we need to do is know its
        alphabet (also known as the alphabet). For this reason, the first topic
        that we will master in this course will be the English alphabet.
      </p>
      <p>We already know that in Spanish, the alphabet has 27 letters.</p>
      <p>
        However, in English, the alphabet has only 26 letters. Next, we will see
        a list of all the letters that compose it, as well as a guide to know
        how to pronounce them:
      </p>
      <div className="container greybox">
        {Questions.map((quest) => (
          <div>
            <span onClick={()=>speak({text:quest.Q})}>{quest.Q}</span>
            <p>{quest.Ans}</p>
          </div>
        ))}
      </div>
      <p>
        <b>As we could see in the alphabet above, we repeat the letter z</b>{" "}
        twice.The reason for this is that in British English, the <span onClick={()=>speak({text:"Z"})}>Z</span>{" "}
        is pronounced <b>" zed "</b> , and in American English the letter{" "}
        <span onClick={()=>speak({text:"Z"})}>Z</span> is pronounced <b>" zi ".</b>
      </p>
      <p>Below each letter, in parentheses, we can see how it is pronounced.</p>
      <p>
        As an exercise, we need to press each letter in English so we can hear
        how it is pronounced correctly.
      </p>
      <p>
        {" "}
        Next, let's hit the microphone icon and record ourselves saying each
        letter, until we get an excellent grade (although there may seem to be
        some redundancy in our explanations, we do it to make things very
        clear).
      </p>
    </div>
  );
};

export const Page2 = () => {
  
  const {speak} = useSpeechSynthesis();
  const Questions = [
    {
      Q: "WHITE",
      Ans: "White",
    },
    {
      Q: "CAR",
      Ans: "Car",
    },
    {
      Q: "SUBWAY",
      Ans: "Subway/Subway",
    },
    {
      Q: "DOG",
      Ans: "Dog",
    },
    {
      Q: "QUESTION",
      Ans: "Ask",
    },
    {
      Q: "JACK",
      Ans: "Jack",
    },
  ];
  const Questions2 = [
    {
      Q: "LOOK",
      Ans: "Look",
    },
    {
      Q: "ZOOM",
      Ans: "Focus",
    },
  ];
  return (
    <div className="container kk">
      <p>
        Now that we know the English alphabet, it's time for us to fully master
        it.
      </p>
      <p>
        The best way to master the alphabet is by spelling words, because in
        this way, we constantly use different letters and learn to pronounce
        them better.
      </p>
      <p>
        In the following examples, press each English word to hear how it is
        spelled; then try to imitate each of the sounds.
      </p>
      <div className="container greybox">
        {Questions.map((quest) => (
          <div>
            <span onClick={()=>speak({text:quest.Q})}>{quest.Q}</span>
            <p>{quest.Ans}</p>
          </div>
        ))}
      </div>
      <p>Now let's look at some more examples:</p>
      <div className="container greybox">
        {Questions2.map((quest) => (
          <div>
            <span onClick={()=>speak({text:quest.Q})}>{quest.Q}</span>
            <p>{quest.Ans}</p>
          </div>
        ))}
      </div>
      <p>
        As we could see in the previous examples, when there is an English word
        where the same letter is repeated twice, we must say double and then the
        letter that is repeated twice. Let's look at one more example:
      </p>
      <div className="container greybox">
        <div>
          <span onClick={()=>speak({text:"Beer"})}>BEER</span>
          <p>Beer</p>
        </div>
      </div>
    </div>
  );
};

export const Page3 = () => {
  
  const {speak} = useSpeechSynthesis();
  const Questions = [
    {
      Q: "I'm American because I'm from the United States . In the United States we speak English",
      Ans: "I am American because I am from the United States. In the United States we speak English",
    },
    {
      Q: "I'm Argentinian because I'm from Argentina . In Argentina we speak Spanish",
      Ans: "I am Argentine because I am from Argentina. In Argentina we speak Spanish",
    },
    {
      Q: "I'm Australian because I'm from Australia . In Australia we speak English",
      Ans: "I am Australian because I am from Australia. In Australia we speak English",
    },
    {
      Q: "I'm Brazilian because I'm from Brazil . In Brazil we speak Portuguese",
      Ans: "I am Brazilian because I am from Brazil. In Brazil we speak Portuguese",
    },
    {
      Q: "I'm British because I'm from the United Kingdom . In the United Kingdom we speak English",
      Ans: "I am British because I am from the UK. In the UK we speak English",
    },
    {
      Q: "I'm Chinese because I'm from China . In China we speak Chinese",
      Ans: "I am Chinese because I am from China. In China we speak Chinese",
    },
    {
      Q: "I'm French because I'm from France . In France we speak French",
      Ans: "I am French because I am from France . In France we speak French",
    },
    {
      Q: "I'm German because I'm from Germany . In Germany we speak German",
      Ans: "I am German because I am from Germany . In Germany we speak German",
    },
  ];
  return (
    <div className="container kk">
      <p>
        In this lesson, we will also learn to say where a person is from, that
        is, we will know how to say someone's nationality. Let's start:
      </p>
      <div className="container greybox2">
        {Questions.map((quest) => (
          <div>
            <span onClick={()=>speak({text:quest.Q})}>{quest.Q}</span>
            <p>{quest.Ans}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export const Page4 = () => {

  
  const {speak} = useSpeechSynthesis();
  const Questions = [
    {
      Q: "I'm Italian because I'm from Italy . In Italy we speak Italian",
      Ans: "I am Italian because I am from Italy . In Italy we speak Italian",
    },
    {
      Q: "I'm Japanese because I'm from Japan . In Japan we speak Japanese",
      Ans: "I am Japanese because I am from Japan . In Japan we speak Japanese",
    },
    {
      Q: "I'm Mexican because I'm from Mexico . In Mexico we speak Spanish",
      Ans: "I am Mexican because I am from Mexico . In Mexico we speak Spanish",
    },
    {
      Q: "I'm Norwegian because I'm from Norway . In Norway we speak Norwegian",
      Ans: "I am Norwegian because I am from Norway . In Norway we speak Norwegian",
    },
    {
      Q: "I'm Polish because I'm from Poland . In Poland we speak Polish",
      Ans: "I am Polish because I am from Poland . In Poland we speak Polish",
    },
    {
      Q: "I'm Russian because I'm from Russia . In Russia we speak R",
      Ans: "I am Russian because I am from Russia . In Russia we speak R",
    },
    {
      Q: "I'm Spanish because I'm from Spain . In Spain we speak Spanish",
      Ans: "Im Spanish because I am from Spain . In Spain we speak Spanish",
    },
    {
      Q: "I'm Turkish because I'm from Turkey . In Turkey we speak Turkish",
      Ans: "I am Turkish because I am from Turkey . In Turkey we speak Turkish",
    },
  ];
  return (
    <div className="container kk">
      <div className="container greybox2">
        {Questions.map((quest) => (
          <div>
            <span onClick={()=>speak({text:quest.Q})}>{quest.Q}</span>
            <p>{quest.Ans}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};
