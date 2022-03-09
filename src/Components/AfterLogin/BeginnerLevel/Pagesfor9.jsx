import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn how to use the words some and any
          correctly .
        </p>
        <p>
          First of all, it is important that we remember how to use the
          countable and uncountable nouns that we already saw in lesson 7 .
          Let's give a brief review:
        </p>
        <b>
          Countable nouns are things, animals, ideas, places and people that can
          be counted, that is, they have singular and plural. Some examples are:
          books, oranges, hamburgers and desks. We say they can be counted
          because we can say:
        </b>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "One  hamburger" })}>
            One hamburger
          </span>
          <br />
          <h1>A hamburger</h1>
          <span onClick={() => speak({ text: "  three  desks" })}>
            three desks
          </span>
          <br />
          <h1>three desks</h1>
        </div>
        <b>Uncountable nouns are nouns that cannot be counted like:</b>
        <div className="greybox mx-auto">
          <span onClick={() => speak({ text: "Salt" })}>Salt</span>
          <br />

          <p>Salt </p>
          <span onClick={() => speak({ text: "Sugar" })}>Sugar</span>
          <br />

          <p>Sugar </p>
          <span onClick={() => speak({ text: "Toilet" })}>Toilet</span>
          <br />

          <p>Toilet </p>
          <span onClick={() => speak({ text: "Pepper" })}>Pepper</span>
          <br />

          <p>Pepper </p>
          <span onClick={() => speak({ text: "Money" })}>Money</span>
          <br />

          <p>Money </p>
          <span onClick={() => speak({ text: "Rain" })}>Rain</span>
          <br />

          <p>Rain </p>
        </div>
        <p>
          For example, we cannot say "one salt" or "three salts", we must say: a
          little salt, some salt, a lot of salt, a lot of salt or salt.
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
        <p>
          We can use <span onClick={() => speak({ text: "Some" })}>Some</span>{" "}
          and <span onClick={() => speak({ text: "Any" })}>any</span> with
          uncountable and countable nouns.
        </p>
        <p>
          When we use some and any with countable nouns, they mean “ some, some,
          some, some ”. Let's look at some examples:
        </p>
        <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I have  some  oranges" })}>
            I have some oranges
          </span>
          <br />
          <h1>I have some oranges</h1>
          <span onClick={() => speak({ text: "We need  some  apples" })}>
            We need some apples
          </span>
          <br />
          <h1>We need some apples</h1>
          <span onClick={() => speak({ text: "Do you have  any  questions?" })}>
            {" "}
            Do you have any questions?
          </span>
          <br />
          <h1> Do you have any questions?</h1>
        </div>
        <p>
          When we use some and any with uncountable nouns, they mean “ some of,
          some of ”. Let's look at some examples:
        </p>
        <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I need  some  water" })}>
            I need some water
          </span>
          <br />
          <h1>I need some water</h1>
          <span onClick={() => speak({ text: "Let's drink  some  juice" })}>
            Let's drink some juice
          </span>
          <br />
          <h1>Let's drink some juice</h1>
          <span onClick={() => speak({ text: "I don't have  any  money" })}>
            {" "}
            I don't have any money
          </span>
          <br />
          <h1> I don't have any money</h1>
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
          We can use <span onClick={() => speak({ text: "Some" })}>Some</span>{" "}
          and <span onClick={() => speak({ text: "Any" })}>any</span> with
          uncountable and countable nouns.
        </p>
        <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Can I have  some  oranges?" })}>
            Can I have some oranges?
          </span>
          <br />
          <h1>Can I have some oranges?</h1>
          <span onClick={() => speak({ text: " Do We need  some  apples?" })}>
            Do We need some apples?
          </span>
          <br />
          <h1>Do We need some apples?</h1>
          <span onClick={() => speak({ text: "Do you have  any  questions?" })}>
            {" "}
            Do you have any questions?
          </span>
          <br />
          <h1> Do you have any questions?</h1>
        </div>
        <p>
          We use <span onClick={() => speak({ text: "some" })}> some</span> in
          interrogative sentences when we want to offer or ask for something:
        </p>
        <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Do I need  some  water?" })}>
            Do I need some water?
          </span>
          <br />
          <h1>Do I need some water?</h1>
          <span onClick={() => speak({ text: "Can I drink  some  juice?" })}>
            can I drink some juice?
          </span>
          <br />
          <h1>Can I drink some juice?</h1>
          <span onClick={() => speak({ text: "Do You  have  some  money?" })}>
            {" "}
            Do You have some money?
          </span>
          <br />
          <h1> Do you have some money?</h1>
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
        <p>
          We use <span onClick={() => speak({ text: "any" })}>any</span> after
          the word <span onClick={() => speak({ text: "if" })}>if</span> .{" "}
          <span onClick={() => speak({ text: "if" })}>if</span> is a conditional
          and means “if”: we use it when we want to express some condition.
          Let's look at these examples:
        </p>
        <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "Let me know if you need  any  help" })
            }
          >
            Let me know if you need any help
          </span>
          <br />
          <h1>Let me know if you need any help</h1>
        </div>
        <p>
          We can use <span onClick={() => speak({ text: "any" })}> any</span> to
          say “anything (anywhere, anyone, etc.)”.
        </p>
        <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "Which song do you want? -Any  song _" })
            }
          >
            Which song do you want? -Any song _
          </span>
          <br />
          <h1>Which song do you want? -Any song _</h1>
        </div>
        <p>
          Also, we can use the word any in negative sentences to mean “ none of
          ” when talking about uncountable nouns, and “ none(s), none(s) ” when
          talking about countable nouns. Let's look at these examples:
        </p>
        <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I don't have  any  money now" })}>
            I don't have any money now
          </span>
          <br />
          <h1>I don't have any money now</h1>
          <span onClick={() => speak({ text: "She doesn't have  any  shoes" })}>
            She doesn't have any shoes
          </span>
          <br />
          <h1>She doesn't have any shoes</h1>
        </div>
        <p>
          Finally, we can use the words some and any alone, that is, without
          accompanying them with any noun. Here are some examples to understand
          perfectly:
        </p>
        <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: "Do you want  some  sugar? - Yes, let me have  some",
              })
            }
          >
            Do you want some sugar? - Yes, let me have some
          </span>
          <br />
          <h1>Do you want some sugar? - Yes, let me have little</h1>
          <span
            onClick={() =>
              speak({ text: "Can I have  some  ketchup? - Sure, have  some" })
            }
          >
            Can I have some ketchup? - Sure, have some{" "}
          </span>
          <br />
          <h1>Can I have some ketchup? - Sure, have some</h1>

          <span
            onClick={() =>
              speak({ text: "Which of these two cars do you want? -  any" })
            }
          >
            Which of these two cars do you want? - any{" "}
          </span>
          <br />
          <h1>Which of these two cars do you want? - Anyone</h1>
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
          In today's video, we talk about study and school. For this reason, we
          will learn some very useful sentences for the school environment:
        </p>
        <br />
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I can play soccer " })}>
            I can play soccer{" "}
          </span>
          <p>I can play soccer</p>{" "}
          <span
            onClick={() =>
              speak({ text: "When I was young, I could eat 2 entire pizzas" })
            }
          >
            When I was young, I could eat 2 entire pizzas
          </span>
          <br />
          <p>When I was young, I could eat 2 entire pizzas</p>
          <span onClick={() => speak({ text: "I would love to go with you" })}>
            I would love to go with you
          </span>
          <br />
          <p>I would love to go with you)</p>
          <span
            onClick={() =>
              speak({ text: "I 'm able to play guitar with my feet" })
            }
          >
            I 'm able to play guitar with my feet
          </span>
          <br />
          <p>I 'm able to play guitar with my feet</p>
          <span onClick={() => speak({ text: "You should be nice to her" })}>
            You should be nice to her
          </span>
          <br />
          <p>You should be nice to her </p>
          <span onClick={() => speak({ text: "You ought to be nice to her" })}>
            You ought to be nice to her
          </span>
          <br />
          <p>You ought to be nice to her</p>
          <span onClick={() => speak({ text: "You must go to class" })}>
            You must go to class
          </span>
          <br />
          <p>You must go to class</p>
          <span onClick={() => speak({ text: "You have to go to class" })}>
            You have to go to class
          </span>
          <br />
          <p>You have to go to class</p>
          <span onClick={() => speak({ text: "I may go to England" })}>
            I may go to England
          </span>
          <br />
          <p>I may go to England</p>
          <span onClick={() => speak({ text: "I might go to Italy" })}>
            I might go to Italy
          </span>
          <br />
          <p>I might go to Italy</p>
          <span onClick={() => speak({ text: "I will go next week" })}>
            WilI will go next weekl
          </span>
          <br />
          <p>I will go next week</p>
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
          Since we are talking about{" "}
          <span onClick={() => speak({ text: "Some" })}>some</span> and{" "}
          <span onClick={() => speak({ text: "any" })}>any</span> and about
          nouns, it is important that we know that there are some nouns like
          <span onClick={() => speak({ text: "scissors" })}>scissors</span> ,
          <span onClick={() => speak({ text: "trousers" })}>trousers</span> ,
          <span onClick={() => speak({ text: "glassess" })}>glassess</span> ,
          which are made up of two parts. For example, glasses have 2 parts (the
          2 glasses). For this reason, when we use these types of nouns in
          English, they are always followed by{" "}
          <span onClick={() => speak({ text: "are" })}>are</span> , .
        </p>
        <p>Let's look at these examples:</p>
        <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: "My  trousers  are on the table" })}
          >
            My trousers are on the table
          </span>
          <br />
          <h1>my pants are on the table</h1>
          <span
            onClick={() => speak({ text: "Your  glasses  are on the couch" })}
          >
            Your glasses are on the couch
          </span>
          <br />
          <h1>your glasses are on the sofa</h1>
          <span
            onClick={() => speak({ text: "Her  scissors  are under the bed" })}
          >
            Her scissors are under the bed
          </span>
          <br />
          <h1>Her scissors are under the bed</h1>
        </div>
      </div>
    </div>
  );
};
