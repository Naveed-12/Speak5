import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will have fun learning to use nouns and articles.
        </p>
        <p>
          A <span onClick={() => speak({ text: "noun" })}>noun</span> noun is a
          "noun".
        </p>
        <p>A noun is anything, animal, idea, place or person. For example:</p>
        <b>"Ball" is a noun because it is a thing.</b>
        <br />
        <b>"Cat" is a noun because it is an animal.</b>
        <br />
        <b>"Australia" is a noun because it is a place.</b>
        <br />
        <b>"Man" is a noun because it is a person.</b>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <b>Singular:</b>
            <p>Ball</p>
            <p>Cat</p>
            <p>Dog</p>
            <p>Window</p>
          </div>
          <div className="col-md-3 greybox">
            <b>Plural:</b>
            <p>Balls</p>
            <p>Cats</p>
            <p>Dogs</p>
            <p>Windows</p>
          </div>
        </div>
        <p>
          In English it is exactly the same, but in some cases slightly
          different rules apply that we will see next.
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
          In English, a noun is usually made plural by adding the letter "{" "}
          <b> s </b> " to the end, unless there are one of the following
          exceptions:
        </p>
        <b>
          When a noun ends with "s, sh, ch, o, x" add the letters "es" to the
          end to make it plural. Let's look at these examples:
        </b>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <p>Singular:</p>
            <span onClick={() => speak({ text: "wish" })}>wish</span>
            <p>desire</p>
            <span onClick={() => speak({ text: "bus" })}>bus</span>
            <p>Bus</p>
            <span onClick={() => speak({ text: "Crun ch" })}>Crun ch</span>
            <p>Abdominal </p>
            <span onClick={() => speak({ text: "volcano or" })}>
              volcano or
            </span>
            <p>Volcano </p>
            <span onClick={() => speak({ text: "my x" })}>my x</span>
            <p>mix</p>
          </div>
          <div className="col-md-3 greybox">
            <p>Plural:</p>
            <span onClick={() => speak({ text: "wish is" })}>wish is</span>
            <p>wishes</p>
            <span onClick={() => speak({ text: "bus" })}>bus</span>
            <p>Bus</p>
            <span onClick={() => speak({ text: "bus is" })}>bus is</span>
            <p>buses </p>
            <span onClick={() => speak({ text: "crunch is" })}>crunch is</span>
            <p>ABS </p>
            <span onClick={() => speak({ text: "volcano is" })}>
              volcano is
            </span>
            <p>volcanoes</p>
          </div>
        </div>

        <b>
          When the letters "fe" or "f" are found at the end of the noun, all we
          have to do to make it plural is drop the "f" (or the letters "fe") and
          add the letters "see". Here are a couple of nice examples :
        </b>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <p>Singular:</p>
            <span onClick={() => speak({ text: "Thie f" })}>Thie f</span>
            <p>Thief</p>
            <span onClick={() => speak({ text: "wife" })}>wife</span>
            <p>wife</p>
          </div>
          <div className="col-md-3 greybox">
            <p>Plural:</p>
            <span onClick={() => speak({ text: "Thie see" })}>Thie see</span>
            <p>Burglars</p>
            <span onClick={() => speak({ text: "you see" })}>you see</span>
            <p>Wives</p>
          </div>
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
        <b>
          When the final letter of the noun is "y", we just need to omit the
          "y", and change it to the letters "ies". Let's look at some examples:
        </b>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <p>Singular:</p>
            <span onClick={() => speak({ text: "Activity and" })}>
              Activity and
            </span>
            <p>Exercise</p>
            <span onClick={() => speak({ text: "Enem and" })}>Enem and</span>
            <p>Enemy</p>
            <span onClick={() => speak({ text: "Bunn and" })}>Bunn and</span>
            <p>Rabbit </p>
            <span onClick={() => speak({ text: "Blackberry and" })}>
              Blackberry and
            </span>
            <p>Blackberry </p>
          </div>
          <div className="col-md-3 greybox">
            <p>Plural:</p>
            <span onClick={() => speak({ text: "Activities " })}>
              Activities{" "}
            </span>
            <p>Activities</p>
            <span onClick={() => speak({ text: "enemy is" })}>enemy is</span>
            <p>Enemies</p>
            <span onClick={() => speak({ text: "bus is" })}>bus is</span>
            <p>buses </p>
            <span onClick={() => speak({ text: "Bunnies _" })}>Bunnies </span>
            <p>rabbits </p>
            <span onClick={() => speak({ text: "Blackberries _" })}>
              Blackberries
            </span>
            <p>blackberries</p>
          </div>
        </div>

        <b>
          However, if the letter "y" is found at the end of the noun, but after
          a vowel, then we just add the letter "s" to the end to make the noun
          plural. For example:
        </b>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <p>Singular:</p>
            <span onClick={() => speak({ text: "I hear you" })}>
              I hear you
            </span>
            <p>Toy</p>
            <span onClick={() => speak({ text: "day " })}>day </span>
            <p>day </p>
          </div>
          <div className="col-md-3 greybox">
            <p>Plural:</p>
            <span onClick={() => speak({ text: "toys " })}>toys </span>
            <p>toys </p>
            <span onClick={() => speak({ text: "days _" })}>days</span>
            <p>days </p>
          </div>
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
        <b>
          If we don't find any of the above exceptions, we can convert a noun to
          a plural just by adding the letter "s" to the end. Let's look at these
          examples:
        </b>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <p>Singular:</p>
            <span onClick={() => speak({ text: "Activity and" })}>
              Activity and
            </span>
            <p>Exercise</p>
            <span onClick={() => speak({ text: "Enem and" })}>Enem and</span>
            <p>Enemy</p>
            <span onClick={() => speak({ text: "Bunn and" })}>Bunn and</span>
            <p>Rabbit </p>
            <span onClick={() => speak({ text: "Blackberry and" })}>
              Blackberry and
            </span>
            <p>Blackberry </p>
          </div>
          <div className="col-md-3 greybox">
            <p>Plural:</p>
            <span onClick={() => speak({ text: "Activities " })}>
              Activities{" "}
            </span>
            <p>Activities</p>
            <span onClick={() => speak({ text: "enemy is" })}>enemy is</span>
            <p>Enemies</p>
            <span onClick={() => speak({ text: "bus is" })}>bus is</span>
            <p>buses </p>
            <span onClick={() => speak({ text: "Bunnies _" })}>Bunnies </span>
            <p>rabbits </p>
            <span onClick={() => speak({ text: "Blackberries _" })}>
              Blackberries
            </span>
            <p>blackberries</p>
          </div>
        </div>

        <p>
          There are some nouns that change a bit when converted from plural to
          singular (ie they don't follow any of the above rules). But we should
          not be scared, all we have to do is memorize them. It is not so
          difficult!
        </p>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <p>Singular:</p>
            <span onClick={() => speak({ text: "I hear you" })}>
              I hear you
            </span>
            <p>Toy</p>
            <span onClick={() => speak({ text: "day " })}>day </span>
            <p>day </p>
          </div>
          <div className="col-md-3 greybox">
            <p>Plural:</p>
            <span onClick={() => speak({ text: "toys " })}>toys </span>
            <p>toys </p>
            <span onClick={() => speak({ text: "days _" })}>days</span>
            <p>days </p>
          </div>
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
        <b>
          If we use singular nouns with the verb{" "}
          <span onClick={() => speak({ text: "to be" })}> to be</span> , it must
          be in its singular form ({" "}
          <span onClick={() => speak({ text: "is" })}>is</span> ). This is
          because the singular noun can usually be replaced by the personal
          pronouns{" "}
          <span onClick={() => speak({ text: "he she or it" })}>
            {" "}
            he , she , or it{" "}
          </span>
          . Let's look at these examples:
        </b>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <span onClick={() => speak({ text: "My dog ​​is  obedient" })}>
              My dog ​​is obedient
            </span>
            <p>My dog ​​is obedient</p>
            <span onClick={() => speak({ text: "My friend is  quarrelsome" })}>
              My friend is quarrelsome
            </span>
            <p>My friend is fighter</p>
            <span onClick={() => speak({ text: "My brother is  abhorrent" })}>
              My brother is abhorrent
            </span>
            <p>My brother is obnoxious</p>
          </div>
          <div className="col-md-3 greybox">
            <span onClick={() => speak({ text: "It is  obedient " })}>
              It is obedient{" "}
            </span>
            <p>(That) is obedient</p>
            <span onClick={() => speak({ text: "She is  quarrelsome" })}>
              She is quarrelsome
            </span>
            <p>(She) is a fighter</p>
            <span onClick={() => speak({ text: "He is  abhorrent" })}>
              He is abhorrent
            </span>
            <p>(He) is abhorrent </p>
          </div>
        </div>

        <p>
          If we use plural nouns with the verb{" "}
          <span onClick={() => speak({ text: "to be" })}> to be</span> , this
          verb must be in its plural form ({" "}
          <span onClick={() => speak({ text: "are" })}>are</span> ). This is
          because these plural nouns can be replaced by the personal pronoun{" "}
          <span onClick={() => speak({ text: "they" })}>they</span> they , which
          we know is followed by are . Let's look at these examples:
        </p>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <span onClick={() => speak({ text: "Lice are  horrible" })}>
              Lice are horrible
            </span>
            <p>lice are horrible</p>
            <span onClick={() => speak({ text: "My  feet are  big " })}>
              My feet are big{" "}
            </span>
            <p>My feet are big </p>
            <span onClick={() => speak({ text: "Many  women are  nice" })}>
              Many women are nice{" "}
            </span>
            <p>Many women are nice</p>
          </div>
          <div className="col-md-3 greybox">
            <span onClick={() => speak({ text: "they are  horrible " })}>
              they are horrible{" "}
            </span>
            <p>they are horrible </p>
            <span onClick={() => speak({ text: "They are  big" })}>
              They are big
            </span>
            <p>They are big </p>
            <span onClick={() => speak({ text: "They are  nice" })}>
              They are nice
            </span>
            <p>They are nice </p>
          </div>
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
          Nouns are usually accompanied by an adjective. An adjective is a word
          that gives some quality to a noun. Some examples of adjectives are:
          <span onClick={() => speak({ text: "horrible" })}>horrible</span>{" "}
          â€‹â€‹â€‹â€‹â€‹â€‹ (horrible) ,{" "}
          <span onClick={() => speak({ text: "Noble" })}> noble</span>{" "}
          â€‹â€‹â€‹â€‹â€‹â€‹ (noble ),â€‹â€‹â€‹â€‹â€‹â€‹{" "}
          <span onClick={() => speak({ text: "blue" })}>blue</span>{" "}
          â€‹â€‹â€‹â€‹â€‹â€‹(blue). Let's look at some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "awful  man _" })}>
            awful man _
          </span>
          <p>
            A horrible man (the adjective “ horrible ” is the quality of the
            man)
          </p>
          <span onClick={() => speak({ text: "A  noble  woman" })}>
            A noble woman
          </span>
          <p>
            A noble woman (the adjective “ noble ” is the quality of the woman)
          </p>
          <span onClick={() => speak({ text: "A  blue  car " })}>
            A blue car
          </span>
          <p>A blue car (the adjective “ blue ” is the quality of the car)</p>
        </div>
      </div>
      <p>We will learn much more about adjectives in lesson 22 .</p>
    </div>
  );
};

export const Page7 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          Now that we know the nouns thoroughly, it's time to classify them in
          two ways: countable and uncountable.
        </p>
        <p>
          Countable nouns ({" "}
          <span onClick={() => speak({ text: "countable nouns" })}>
            {" "}
            countable nouns
          </span>{" "}
          ) are nouns (things, animals, ideas, places or people) that can be
          counted, that is, they have singular and plural. Some examples are:
          books, oranges, hamburgers, desks.
        </p>
        <p>We say they can be counted because we can say:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "One hamburger" })}>
            One hamburger
          </span>
          <p>A hamburger</p>
          <span onClick={() => speak({ text: "three desks" })}>
            three desks
          </span>
          <p>three desks</p>
          <span onClick={() => speak({ text: "five oranges" })}>
            five oranges
          </span>
          <p>five oranges</p>
        </div>
      </div>
      <p>
        Uncountable <span onClick={() => speak({ text: "nouns" })}>nouns </span>{" "}
        are nouns that cannot be counted as: .
      </p>
      <div className="greybox" style={{ marginLeft: "30%" }}>
        <span onClick={() => speak({ text: "Salt " })}>Salt</span>
        <p>Salt </p>
        <span onClick={() => speak({ text: "Sugar " })}>Sugar </span>
        <p>Sugar </p>
        <span onClick={() => speak({ text: "Pepper " })}>Pepper</span>
        <p>Pepper </p>
        <span onClick={() => speak({ text: "Toilet  " })}>Toilet</span>
        <p>Toilet </p>

        <span onClick={() => speak({ text: "Water  " })}>Water</span>
        <p>Water </p>
        <span onClick={() => speak({ text: "Money   " })}>Money</span>
        <p>Money </p>

        <span onClick={() => speak({ text: "Rain    " })}>Rain</span>
        <p>Rain </p>
      </div>
      <p>
        For example, we cannot say "a salt" or "three salts", we must say: "a
        little salt", "some salt", "a lot of salt" or "the salt".
      </p>
      <p>
        The words that we will see next are used with uncountable nouns very
        frequently:
      </p>
      <div className="greybox" style={{ marginLeft: "30%" }}>
        <span onClick={() => speak({ text: "Some  " })}>Some </span>
        <p>A little of, some of, some of, some of </p>
        <span onClick={() => speak({ text: "a lot of  " })}>a lot of </span>
        <p>a lot(s), a lot(s) </p>
        <span onClick={() => speak({ text: "lots of " })}>lots of</span>
        <p>a lot(s), a lot(s) </p>
        <span onClick={() => speak({ text: "much   " })}>much </span>
        <p>A lot(s), a lot(s)â€‹â€‹â€‹ </p>
      </div>
    </div>
  );
};
