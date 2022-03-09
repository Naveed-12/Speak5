import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>In this lesson we will know the cardinal and ordinal numbers:</p>
        <p>
          Cardinal{" "}
          <span onClick={() => speak({ text: "numbers" })}> numbers</span> are
          the ones we use every day to count anything, like one, two, three,
          four , etc. Let's see and learn the following cardinal numbers:
        </p>
        <div className="row">
          <div className="col-md-2 greybox mx-auto">
            <span onClick={() => speak({ text: "Zero" })}>
              Zero <b>(0)</b>
            </span>
            <p>Zero</p>
            <span onClick={() => speak({ text: "One" })}>
              One <b>(1)</b>
            </span>
            <p>One</p>
            <span onClick={() => speak({ text: "Two" })}>
              Two <b>(2)</b>
            </span>
            <p>Two</p>
            <span onClick={() => speak({ text: "Three" })}>
              Three<b>(3)</b>
            </span>
            <p>Three</p>
            <span onClick={() => speak({ text: "Four" })}>
              Four <b>(4)</b>
            </span>
            <p>Four</p>
            <span onClick={() => speak({ text: "Five" })}>
              Five <b>(5)</b>
            </span>
            <p>Five</p>
            <span onClick={() => speak({ text: "Six" })}>
              Six <b>(6)</b>
            </span>
            <p>Six</p>
            <span onClick={() => speak({ text: "Seven" })}>
              Seven <b>(7)</b>
            </span>
            <p>Seven</p>
            <span onClick={() => speak({ text: "Eight" })}>
              Eight <b>(8)</b>
            </span>
            <p>Eight</p>
            <span onClick={() => speak({ text: "Nine" })}>
              Nine <b>(9)</b>
            </span>
            <p>Nine</p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <span onClick={() => speak({ text: "Ten" })}>
              Ten <b>(10)</b>
            </span>
            <p>Ten</p>
            <span onClick={() => speak({ text: "Eleven" })}>
              Eleven <b>(11)</b>
            </span>
            <p>Eleven</p>
            <span onClick={() => speak({ text: "Twelve" })}>
              Twelve <b>(12)</b>
            </span>
            <p>Twelve</p>
            <span onClick={() => speak({ text: "Thirteen" })}>
              Thirteen<b>(13)</b>
            </span>
            <p>Thirteen</p>
            <span onClick={() => speak({ text: "Fourteen" })}>
              Fourteen <b>(14)</b>
            </span>
            <p>Fourteen</p>
            <span onClick={() => speak({ text: "Fifteen" })}>
              Fifteen <b>(15)</b>
            </span>
            <p>Fifteen</p>
            <span onClick={() => speak({ text: "Sixteen" })}>
              Sixteen <b>(16)</b>
            </span>
            <p>Sixteen</p>
            <span onClick={() => speak({ text: "Seventeen" })}>
              Seventeen <b>(17)</b>
            </span>
            <p>Seventeen</p>
            <span onClick={() => speak({ text: "Eighteen" })}>
              Eighteen <b>(18)</b>
            </span>
            <p>Eighteen</p>
            <span onClick={() => speak({ text: "Nineteen" })}>
              Nineteen <b>(19)</b>
            </span>
            <p>Nineteen</p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <span onClick={() => speak({ text: "Twenty" })}>
              Twenty <b>(20)</b>
            </span>
            <p>Twenty</p>
            <span onClick={() => speak({ text: "TwentyOne" })}>
              TwentyOne <b>(21)</b>
            </span>
            <p>TwentyOne</p>
            <span onClick={() => speak({ text: "TwentyTwo" })}>
              TwentyTwo <b>(22)</b>
            </span>
            <p>TwentyTwo</p>
            <span onClick={() => speak({ text: "TwentyThree" })}>
              TwentyThree<b>(23)</b>
            </span>
            <p>TwentyThree</p>
            <span onClick={() => speak({ text: "TwentyFour" })}>
              TwentyFour <b>(24)</b>
            </span>
            <p>TwentyFour</p>
            <span onClick={() => speak({ text: "TwentyFive" })}>
              TwentyFive <b>(25)</b>
            </span>
            <p>TwentyFive</p>
            <span onClick={() => speak({ text: "TwentySix" })}>
              TwentySix <b>(26)</b>
            </span>
            <p>TwentySix</p>
            <span onClick={() => speak({ text: "TwentySeven" })}>
              TwentySeven <b>(27)</b>
            </span>
            <p>TwentySeven</p>
            <span onClick={() => speak({ text: "TwentyEight" })}>
              TwentyEight <b>(28)</b>
            </span>
            <p>TwentyEight</p>
            <span onClick={() => speak({ text: "TwentyNine" })}>
              TwentyNine <b>(29)</b>
            </span>
            <p>TwentyNine</p>
          </div>
        </div>
        <p>
          As we could see, from the number 21 ({" "}
          <span onClick={() => speak({ text: "twentyone" })}>twenty-one</span>{" "}
          twenty-one â€‹â€‹â€‹â€‹â€‹â€‹), we form the numbers by combining some
          ten ( <span onClick={() => speak({ text: "twenty" })}>twenty</span>{" "}
          (twenty), thirt and (thirty) , forty (forty), etc.), plus a hyphen,
          plus some number from one to nine ( one (one), two (two), three
          (three), etc.). Let's look at the following examples:
        </p>
      </div>
    </div>
  );
};

export const Page2 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>Now we have to see the numbers from twenty to ninety:</p>
        <div className="col-md-2 greybox mx-auto">
          <span onClick={() => speak({ text: "Twenty" })}>
            Twenty <b>(20)</b>
          </span>
          <p>Twenty</p>
          <span onClick={() => speak({ text: "TwentyOne" })}>
            TwentyOne <b>(21)</b>
          </span>
          <p>TwentyOne</p>
          <span onClick={() => speak({ text: "TwentyTwo" })}>
            TwentyTwo <b>(22)</b>
          </span>
          <p>TwentyTwo</p>
          <span onClick={() => speak({ text: "TwentyThree" })}>
            TwentyThree<b>(23)</b>
          </span>
          <p>TwentyThree</p>
          <span onClick={() => speak({ text: "TwentyFour" })}>
            TwentyFour <b>(24)</b>
          </span>
          <p>TwentyFour</p>
          <span onClick={() => speak({ text: "TwentyFive" })}>
            TwentyFive <b>(25)</b>
          </span>
          <p>TwentyFive</p>
          <span onClick={() => speak({ text: "TwentySix" })}>
            TwentySix <b>(26)</b>
          </span>
          <p>TwentySix</p>
          <span onClick={() => speak({ text: "TwentySeven" })}>
            TwentySeven <b>(27)</b>
          </span>
          <p>TwentySeven</p>
          <span onClick={() => speak({ text: "TwentyEight" })}>
            TwentyEight <b>(28)</b>
          </span>
          <p>TwentyEight</p>
          <span onClick={() => speak({ text: "TwentyNine" })}>
            TwentyNine <b>(29)</b>
          </span>
          <p>TwentyNine</p>
        </div>
        <p>
          As we could see, from the number 21 ({" "}
          <span onClick={() => speak({ text: "twentyone" })}>twenty-one</span>{" "}
          twenty-one â€‹â€‹â€‹â€‹â€‹â€‹), we form the numbers by combining some
          ten ( <span onClick={() => speak({ text: "twenty" })}>twenty</span>{" "}
          (twenty), thirt and (thirty) , forty (forty), etc.), plus a hyphen,
          plus some number from one to nine ( one (one), two (two), three
          (three), etc.). Let's look at the following examples:
        </p>
      </div>
    </div>
  );
};

export const Page3 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>Now we have to see the numbers from Hundred:</p>
        <div className="col-md-2 greybox mx-auto">
          <span onClick={() => speak({ text: "One hundred" })}>
            One hundred <b>(100)</b>
          </span>
          <p>One hundred</p>
          <span onClick={() => speak({ text: "Two hundred" })}>
            Two hundred <b>(200)</b>
          </span>
          <p>Two hundred</p>
          <span onClick={() => speak({ text: "Three hundred" })}>
            Three hundred <b>(300)</b>
          </span>
          <p>Three hundred</p>
          <span onClick={() => speak({ text: "Four hundred" })}>
            Four hundred<b>(400)</b>
          </span>
          <p>Four hundred</p>
          <span onClick={() => speak({ text: "Five hundred" })}>
            Five hundred <b>(500)</b>
          </span>
          <p>Five hundred</p>
          <span onClick={() => speak({ text: "Six hundred" })}>
            Six hundred <b>(600)</b>
          </span>
          <p>Six hundred</p>
        </div>
        <p>Here are some examples with the numbers we just learned:</p>
        <div className="col-md-2 greybox mx-auto">
          <span
            onClick={() => speak({ text: "One hundred  and  twenty-five" })}
          >
            One hundred and twenty-five <b>(125)</b>
          </span>
          <p>One hundred and twenty-five</p>
          <span
            onClick={() => speak({ text: "Five hundred  and  forty-four" })}
          >
            Five hundred and forty-four <b>(544)</b>
          </span>
          <p>Five hundred and forty-four</p>
          <span
            onClick={() => speak({ text: "Seven hundred  and  twenty-one" })}
          >
            Seven hundred and twenty-one <b>(721)</b>
          </span>
          <p>Seven hundred and twenty-one</p>
          <span onClick={() => speak({ text: "Nine hundred  and  eleven" })}>
            Nine hundred and eleven<b>(911)</b>
          </span>
          <p>FNine hundred and eleven</p>
        </div>
      </div>
    </div>
  );
};

export const Page4 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>Now we have to see the numbers from Thousands:</p>
        <div className="col-md-2 greybox mx-auto">
          <span onClick={() => speak({ text: "One hundred" })}>
            One Thousand <b>(1000)</b>
          </span>
          <p>One Thousand</p>
          <span onClick={() => speak({ text: "Two Thousand" })}>
            Two Thousand <b>(2000)</b>
          </span>
          <p>Two Thousand</p>
          <span onClick={() => speak({ text: "Three Thousand" })}>
            Three Thousand <b>(3000)</b>
          </span>
          <p>Three Thousand</p>
          <span onClick={() => speak({ text: "Four Thousand" })}>
            Four Thousand<b>(4000)</b>
          </span>
          <p>Four Thousand</p>
          <span onClick={() => speak({ text: "Five Thousand" })}>
            Five Thousand <b>(5000)</b>
          </span>
          <p>Five Thousand</p>
          <span onClick={() => speak({ text: "Six Thousand" })}>
            Six Thousand <b>(6000)</b>
          </span>
          <p>Six Thousand</p>
        </div>
        <p>Here are some examples with the numbers we just learned:</p>
        <div className="col-md-2 greybox mx-auto">
          <span
            onClick={() => speak({ text: "One Thousand  and  twenty-five" })}
          >
            One Thousand and twenty-five <b>(1025)</b>
          </span>
          <p>One Thousand and twenty-five</p>
          <span
            onClick={() => speak({ text: "Five Thousand  and  forty-four" })}
          >
            Five Thousand and forty-four <b>(5044)</b>
          </span>
          <p>Five Thousand and forty-four</p>
          <span
            onClick={() => speak({ text: "Seven Thousand  and  twenty-one" })}
          >
            Seven Thousand and twenty-one <b>(7021)</b>
          </span>
          <p>Seven Thousand and twenty-one</p>
          <span onClick={() => speak({ text: "Nine Thousand  and  eleven" })}>
            Nine Thousand and eleven<b>(9011)</b>
          </span>
          <p>Nine Thousand and eleven</p>
        </div>
      </div>
    </div>
  );
};

export const Page5 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>Let's see these examples of how to use numbers from a thousand:</p>
        <div className="col-md-2 greybox mx-auto">
          <span
            onClick={() => speak({ text: "One Thousand  and  twenty-five" })}
          >
            One Thousand and twenty-five <b>(1025)</b>
          </span>
          <p>One Thousand and twenty-five</p>
          <span
            onClick={() => speak({ text: "Five Thousand  and  forty-four" })}
          >
            Five Thousand and forty-four <b>(5044)</b>
          </span>
          <p>Five Thousand and forty-four</p>
          <span
            onClick={() => speak({ text: "Seven Thousand  and  twenty-one" })}
          >
            Seven Thousand and twenty-one <b>(7021)</b>
          </span>
          <p>Seven Thousand and twenty-one</p>
          <span onClick={() => speak({ text: "Nine Thousand  and  eleven" })}>
            Nine Thousand and eleven<b>(9011)</b>
          </span>
          <p>Nine Thousand and eleven</p>
        </div>
        <p>Now let's look at much larger numbers:</p>
        <div className="col-md-2 greybox mx-auto">
          <span onClick={() => speak({ text: "One hundred" })}>
            One Thousand <b>(1000)</b>
          </span>
          <p>One Thousand</p>
          <span onClick={() => speak({ text: "Two Thousand" })}>
            Two Thousand <b>(2000)</b>
          </span>
          <p>Two Thousand</p>
          <span onClick={() => speak({ text: "Three Thousand" })}>
            Three Thousand <b>(3000)</b>
          </span>
          <p>Three Thousand</p>
          <span onClick={() => speak({ text: "Four Thousand" })}>
            Four Thousand<b>(4000)</b>
          </span>
          <p>Four Thousand</p>
          <span onClick={() => speak({ text: "Five Thousand" })}>
            Five Thousand <b>(5000)</b>
          </span>
          <p>Five Thousand</p>
          <span onClick={() => speak({ text: "Six Thousand" })}>
            Six Thousand <b>(6000)</b>
          </span>
          <p>Six Thousand</p>
        </div>
      </div>
    </div>
  );
};

export const Page6 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          Now that we know and have mastered{" "}
          <span onClick={() => speak({ text: "cardinal numbers" })}>
            {" "}
            cardinal numbers{" "}
          </span>
          , it's time to learn{" "}
          <span onClick={() => speak({ text: "ordinal numbers" })}>
            {" "}
            ordinal numbers
          </span>{" "}
          . The ordinal numbers are:
        </p>
        <div className="col-md-2 greybox mx-auto">
          <span onClick={() => speak({ text: "First" })}>First</span>
          <p>First</p>
          <span onClick={() => speak({ text: "Second" })}>Second</span>
          <p>Second</p>
          <span onClick={() => speak({ text: "Fourth" })}>Fourth</span>
          <p>Fourth</p>
          <span onClick={() => speak({ text: "Fifth" })}>Fifth</span>
          <p>Fifth</p>
          <span onClick={() => speak({ text: "Sixth" })}>Sixth</span>
          <p>Sixth</p>
          <span onClick={() => speak({ text: "Seventh" })}>Seventh</span>
          <p>Seventh</p>
          <span onClick={() => speak({ text: "Eighth" })}>Eighth</span>
          <p>Eighth</p>
          <span onClick={() => speak({ text: "Ninth" })}>Ninth</span>
          <p>Ninth</p>
          <span onClick={() => speak({ text: "Tenth" })}>Tenth</span>
          <p>Ninth</p>
          <span onClick={() => speak({ text: "Eleventh" })}>Eleventh</span>
          <p>Eleventh</p>
          <span onClick={() => speak({ text: "Twelfth" })}>Twelfth</span>
          <p>Twelfth</p>
          <span onClick={() => speak({ text: "Thirteenth" })}>Thirteenth</span>
          <p>Thirteenth</p>
        </div>
      </div>
    </div>
  );
};

export const Page7 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          Starting with the{" "}
          <span onClick={() => speak({ text: "twentieth" })}>twentieth</span>{" "}
          number , we must add a hyphen after the first ordinal number, followed
          by the second ordinal number. For example, if we wanted to say
          “thirty-second”, we would say{" "}
          <span onClick={() => speak({ text: "thirty-second" })}>
            thirty-second
          </span>{" "}
          . Let's see more examples:
        </p>
        <div className="col-md-2 greybox mx-auto">
          <span onClick={() => speak({ text: "twenty-first" })}>
            twenty-first
          </span>
          <p>twenty-first</p>
          <span onClick={() => speak({ text: "Thirty-second" })}>
            Thirty-second
          </span>
          <p>Thirty-second</p>
          <span onClick={() => speak({ text: "forty-third" })}>
            forty-third
          </span>
          <p>forty-third</p>
          <span onClick={() => speak({ text: "Fifty-fourth" })}>
            Fifty-fourth
          </span>
          <p>Fifty-fourth</p>
          <span onClick={() => speak({ text: "Sixtyfifth" })}>Sixtyfifth</span>
          <p>Sixtyfifth</p>
          <span onClick={() => speak({ text: "Seventy-sixth" })}>
            Seventy-sixth
          </span>
          <p>Seventy-sixth</p>
          <span onClick={() => speak({ text: "Seventy Sixth" })}>
            Seventy Sixth
          </span>
          <p>Seventy Sixth</p>
          <span onClick={() => speak({ text: "eighty-seventh" })}>
            eighty-seventh
          </span>
          <p>eighty-seventh</p>
          <span onClick={() => speak({ text: "ninety-eighth" })}>
            ninety-eighth
          </span>
          <p>ninety-eighth</p>
        </div>
        <p>
          Here are some examples of how we can use ordinal numbers in everyday
          life:
        </p>
        <div className="col-md-2 greybox mx-auto">
          <span
            onClick={() => speak({ text: "Are you on the  first  grade?" })}
          >
            Are you on the first grade?
          </span>
          <p>Are you on the first grade?</p>
          <span
            onClick={() =>
              speak({ text: "It's my  twenty-first  anniversary" })
            }
          >
            It's my twenty-first anniversary
          </span>
          <p>It's my twenty-first anniversary</p>
        </div>
        <p>Finally, we will learn a very useful phrase:</p>
        <div className="col-md-2 greybox mx-auto">
          <span onClick={() => speak({ text: "I mean" })}>I mean</span>
          <p>I want to say that)</p>
        </div>
        <p>Let's see an example of this phrase in action:</p>
        <div className="col-md-2 greybox mx-auto">
          <span
            onClick={() => speak({ text: "You know  what I mean , dad" })}
          >
          You know  what I mean , dad
          </span>
          <p>You know  what I mean , dad</p>
          <span
            onClick={() =>
              speak({ text: "I mean  you're the best girlfriend" })
            }
          >
          I mean  you're the best girlfriend
          </span>
          <p>I mean  you're the best girlfriend</p>
        </div>
      </div>
    </div>
  );
};
