import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <div className="container kk">
        <p>In this lesson we will learn to use dates and colors.</p>
        <p>
          To be able to talk about dates correctly, we must first learn the days
          of the week ( days of the week ) and the months of the year ( months
          of the year ). As a tip, we must know that both the days of the week
          and the months of the year are capitalized at the beginning:
        </p>
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <p>Days</p>
            <span onClick={() => speak({ text: "Monday" })}>Monday</span>
            <p>Monday</p>
            <span onClick={() => speak({ text: "Tuesday" })}>Tuesday</span>
            <p>Tuesday</p>
            <span onClick={() => speak({ text: "Wednesday" })}>Wednesday</span>
            <p>Wednesday</p>
            <span onClick={() => speak({ text: "Thursday" })}>Thursday</span>
            <p>Thursday</p>
            <span onClick={() => speak({ text: "Friday" })}>Friday</span>
            <p>Friday</p>
            <span onClick={() => speak({ text: "Saturday" })}>Saturday</span>
            <p>Saturday</p>
            <span onClick={() => speak({ text: "Sunday" })}>Sunday</span>
            <p>Sunday</p>
          </div>
          <div className="col-md-3 greybox mx-auto">
            <p>Months</p>
            <span onClick={() => speak({ text: "January" })}>January</span>
            <p>January</p>
            <span onClick={() => speak({ text: "February" })}>February</span>
            <p>February</p>
            <span onClick={() => speak({ text: "March" })}>March</span>
            <p>March</p>
            <span onClick={() => speak({ text: "April" })}>April</span>
            <p>April</p>
            <span onClick={() => speak({ text: "May" })}>May</span>
            <p>May</p>
            <span onClick={() => speak({ text: "June" })}>June</span>
            <p>June</p>
            <span onClick={() => speak({ text: "July" })}>July</span>
            <p>July</p>
            <span onClick={() => speak({ text: "August" })}>August</span>
            <p>August</p>
            <span onClick={() => speak({ text: "September" })}>September</span>
            <p>September</p>
            <span onClick={() => speak({ text: "October" })}>October</span>
            <p>October</p>
            <span onClick={() => speak({ text: "November" })}>November</span>
            <p>November</p>
            <span onClick={() => speak({ text: "Decembe" })}>Decembe</span>
            <p>Decembe</p>
          </div>
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
          Now that we have learned the days of the week and the months of the
          year correctly, it is time to use our knowledge to be able to say
          dates. Firstly, to talk about years and months, we use the preposition
          in (en). Here are some examples:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "We will fly in 2020" })}>
            We will fly in 2020
          </span>
          <p>We will fly in 2020</p>
          <span onClick={() => speak({ text: "Let´s go in October" })}>
            Let´s go in October
          </span>
          <p>we go in October</p>
          <span onClick={() => speak({ text: "I was born in 1992" })}>
            I was born in 1992
          </span>
          <p>I was born in 1992</p>
          <span
            onClick={() => speak({ text: "The world cup will be in 2018" })}
          >
            The world cup will be in 2018
          </span>
          <p>The world cup will be in 2018</p>
        </div>
        <p>
          As we could see, when we pronounce the years in English in the
          sentences above, we usually divide the year into 2 parts, and
          pronounce it that way.
        </p>
        <br />
        <b>
          An exception to that rule is the year 2000. To talk about this year,
          we say two thousand . For the year 2008, we say two thousand and eight
          ; for the year 2002, we say two thousand and two ; and we follow this
          rule until we reach the year 2009 ( two thousand and nine ).
        </b>
        <br />
        <p>
          We can omit the word and when we talk about years, without changing
          the meaning of the number: for example, for the year 2002, we say two
          thousand and two or two thousand two â€‹â€‹â€‹â€‹â€‹â €‹.
        </p>
        <p>
          Starting with the year 2010, we can again halve the numbers and say
          twenty ten (2010), or we can just say two thousand and ten (2010).
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
        <p>
          If we want to talk about decades like the eighties or the nineties, we
          say them in the following way:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "in the twenties" })}>
            in the twenties
          </span>
          <p>in the twenties</p>
          <span onClick={() => speak({ text: "In the thirties" })}>
            In the thirties
          </span>
          <p>In the thirties</p>
          <span onClick={() => speak({ text: "In the forties" })}>
            In the forties
          </span>
          <p>In the forties</p>
          <span onClick={() => speak({ text: "in the fifties" })}>
            in the fifties
          </span>
          <p>in the fifties</p>
          <span onClick={() => speak({ text: "in the sixties" })}>
            in the sixties
          </span>
          <p>in the sixties</p>
          <span onClick={() => speak({ text: "in the seventies" })}>
            in the seventies
          </span>
          <p>in the seventies</p>
          <span onClick={() => speak({ text: "in the eighties" })}>
            in the eighties
          </span>
          <p>in the eighties</p>
          <span onClick={() => speak({ text: "in the nineties" })}>
            in the nineties
          </span>
          <p>in the nineties</p>
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
        <p>To refer to the days of the week, we use the preposition on .</p>
        <p>
          Although the usual meaning of the preposition on is “in/on”, it means
          “the/them” when used with days of the week and dates. Let's look at
          some great examples.
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "On Sunday" })}>On Sunday</span>
          <p>On Sunday</p>
          <span onClick={() => speak({ text: "On Friday's" })}>
            On Friday's
          </span>
          <p>On Friday's</p>
          <span onClick={() => speak({ text: "on monday" })}>on monday</span>
          <p>On Monday</p>
          <span onClick={() => speak({ text: "On Saturday's" })}>
            On Saturday's
          </span>
          <p>On Saturday's</p>
        </div>
        <p>
          We can use the preposition on , together with ordinal numbers, to talk
          about specific dates, that is, dates that include month and day. To
          understand this clearly, let's look at the following examples:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span
            onClick={() =>
              speak({ text: "On Our exam is on the third of June" })
            }
          >
            On Sunday
          </span>
          <p>Our exam is June 3</p>
          <span
            onClick={() =>
              speak({ text: "My test is on the eleventh of November" })
            }
          >
            My test is on the eleventh of November
          </span>
          <p>My test is November eleventhr</p>
          <span
            onClick={() =>
              speak({ text: "Our anniversary is on the third of April" })
            }
          >
            Our anniversary is on the third of April
          </span>
          <p>Our anniversary is April third</p>
          <span
            onClick={() =>
              speak({ text: "My birthday is on the ninth of December" })
            }
          >
            My birthday is on the ninth of December
          </span>
          <p>my birthday is december ninth</p>
        </div>
        <p>
          As we could see, when we talk about dates in English, we use ordinal
          numbers (such as third (third), ninth (ninth), etc). However, when we
          translate those dates into Spanish, we use cardinal numbers (like
          “three”, “nine”, etc.). The only exception is the first of each month,
          which we translate into Spanish with an ordinal number and not with a
          cardinal number: we say “the first of January”, and not “the first of
          January”, but we say “two, three, etc. , January, February, March,
          etc.” Let's look at a couple more examples to fully understand:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span
            onClick={() =>
              speak({ text: "Their date will be on the first of February" })
            }
          >
            Their date will be on the first of February
          </span>
          <p>Your appointment will be the first of February</p>
          <span
            onClick={() =>
              speak({ text: "Our math exam is on the second of July" })
            }
          >
            Our math exam is on the second of July
          </span>
          <p>Our math test is on the second of July</p>
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
        <p>
          The following are the most important colors. Learning them is very
          easy and fun:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "Blue" })}>Blue</span>
          <p>Blue</p>
          <span onClick={() => speak({ text: "Red" })}>Red</span>
          <p>Red</p>
          <span onClick={() => speak({ text: "Green" })}>Green</span>
          <p>Green</p>
          <span onClick={() => speak({ text: "Yellow" })}>Yellow</span>
          <p>Yellow</p>
          <span onClick={() => speak({ text: "Purple" })}>Purple</span>
          <p>Purple</p>
          <span onClick={() => speak({ text: "Black" })}>Black</span>
          <p>Black</p>
          <span onClick={() => speak({ text: "White" })}>White</span>
          <p>White</p>
        </div>
        <p>
          As a fun fact, we will learn a fun little writing rule that
          differentiates British from American English: when a word ends with
          the letters “ or ” in American English, we must add the letter “ u ”
          between the “ o ” and the “ r ”. ” to spell it correctly in British
          English. Let's look at these examples:
        </p>
      </div>
    </div>
  );
};
