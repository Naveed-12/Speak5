import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          Utilizamos los pronombres y adjetivos demostrativos para señalar o
          hablar de personas, cosas, animales e ideas, y son los siguientes:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "This " })}> This </span>
          <p> This / This / This</p>
          <span onClick={() => speak({ text: "That  " })}> That </span>
          <p> That / That / That / That </p>
          <span onClick={() => speak({ text: "These" })}> These</span>
          <p> These/ These/These/These</p>
          <span onClick={() => speak({ text: "Those " })}> Those </span>
          <p> Those/ Those/Those/Those</p>
        </div>
      </div>
    </div>
  );
};

export const Page2 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          The words <span onClick={() => speak({ text: "this" })}>this</span> ,{" "}
          <span onClick={() => speak({ text: "that" })}>that</span> ,{" "}
          <span onClick={() => speak({ text: "these" })}>these</span> and{" "}
          <span onClick={() => speak({ text: "those" })}>those</span>
          act as demonstrative adjectives when they are accompanied by a noun
          (person, thing, animal, idea, etc.).
        </p>
        <p>
          We use <span onClick={() => speak({ text: "this" })}>this</span> and
          <span onClick={() => speak({ text: "that" })}>that</span> with
          singular nouns; we use{" "}
          <span onClick={() => speak({ text: "these" })}>these</span> and{" "}
          <span onClick={() => speak({ text: "those" })}>those</span>
          with plural nouns. Here are some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "This apartment is beautiful " })}>
            {" "}
            This apartment is beautiful{" "}
          </span>
          <p> This apartment is beautiful</p>
          <span onClick={() => speak({ text: " Do you like this song?" })}>
            {" "}
            Do you like this song?{" "}
          </span>
          <p>Do you like this song? </p>
          <span onClick={() => speak({ text: "That teacher isn´t friendly " })}>
            {" "}
            That teacher isn´t friendly{" "}
          </span>
          <p> That teacher isn´t friendly</p>
          <span
            onClick={() => speak({ text: "Where can you see that show? " })}
          >
            Where can you see that show?{" "}
          </span>
          <p>Where can you see that show? </p>
          <span onClick={() => speak({ text: "These tickets are expensive " })}>
            {" "}
            These tickets are expensive
          </span>
          <p> These tickets are expensive</p>
          <span onClick={() => speak({ text: "Are these women noisy? " })}>
            {" "}
            Are these women noisy?
          </span>
          <p>Are these women noisy? </p>
          <span onClick={() => speak({ text: " Those apples look amazing" })}>
            {" "}
            Those apples look amazing
          </span>
          <p>Those apples look amazing </p>
          <span onClick={() => speak({ text: " Can you buy me those shoes?" })}>
            Can you buy me those shoes?
          </span>
          <p>Can you buy me those shoes? </p>
        </div>
      </div>
    </div>
  );
};

export const Page3 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          <span onClick={() => speak({ text: "this" })}>this</span> ,{" "}
          <span onClick={() => speak({ text: "that" })}>that</span> ,{" "}
          <span onClick={() => speak({ text: "these" })}>these</span> and{" "}
          <span onClick={() => speak({ text: "those" })}>those</span>
          function as demonstrative pronouns when they are not accompanied by a
          noun. In this case, these words ({" "}
          <span onClick={() => speak({ text: "this" })}>this</span> ,{" "}
          <span onClick={() => speak({ text: "that" })}>that</span> ,{" "}
          <span onClick={() => speak({ text: "these" })}>these</span> and{" "}
          <span onClick={() => speak({ text: "those" })}>those</span> ) are
          substituting for the noun, and for this reason they do not have it.
          Here are some great examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " This is my garage" })}>This is my garage</span>
          <p> This is my garage</p>
          <span onClick={() => speak({ text: "I love this  " })}>I love this !</span>
          <p>I love this ! </p>
          <span onClick={() => speak({ text: " This is the girl for me" })}>This is the girl for me</span>
          <p> This is the girl for me </p>
          <span onClick={() => speak({ text: " I don't like that" })}>I don't like that</span>
          <p> I don't like that</p>
          <span onClick={() => speak({ text: " That is my car" })}>That is my car</span>
          <p> That is my car</p>
          <span onClick={() => speak({ text: " These are my best friends" })}>These are my best friends</span>
          <p>These are my best friends </p>
          <span onClick={() => speak({ text: "Where can I place these ? " })}>Where can I place these ?</span>
          <p>Where can I place these ? </p>
          <span onClick={() => speak({ text: "Those are my girlfriends " })}>Those are my girlfriends</span>
          <p> Those are my girlfriends  </p>
          <span onClick={() => speak({ text: " Those are my kids" })}>Those are my kids</span>
          <p> Those are my kids</p>
         
        </div>
      </div>
    </div>
  );
};
