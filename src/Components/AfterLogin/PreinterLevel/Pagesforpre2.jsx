import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          As its name implies, qualifying adjectives " qualify " the noun, that
          is, they give it qualities. Some examples of adjectives are:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Beautiful " })}> Beautiful </span>
          <p> Beautiful</p>
          <span onClick={() => speak({ text: "Horrible " })}> Horrible </span>
          <p> Horrible</p>
          <span onClick={() => speak({ text: "yummy" })}> yummy</span>
          <p> yummy</p>
          <span onClick={() => speak({ text: "Nice " })}> Nice </span>
          <p> Nice</p>
        </div>
        <p>
          As we could see, in English, we usually use the same adjective to talk
          about a feminine or a masculine noun. For example, in Spanish we can
          say beautiful or beautiful ‹, but in English we just say
          <span onClick={() => speak({ text: "Beautiful" })}>Beautiful</span> .
        </p>
        <p>Let's see the above adjectives in action:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "A beautiful girl " })}>
            {" "}
            A beautiful girl{" "}
          </span>
          <p> A beautiful girl</p>
          <span onClick={() => speak({ text: "a horrible ship " })}>
            {" "}
            a horrible ship{" "}
          </span>
          <p> a horrible ship</p>
        </div>
        <p>
          In the two previous sentences, beautiful and horrible are qualifying
          adjectives because they give their quality to the nouns girl and boat
          .
        </p>
        <p>
          In English, we usually put the adjective right before the noun. Here
          are some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " A beautiful home" })}>
            A beautiful home
          </span>
          <p>A beautiful home </p>
          <span onClick={() => speak({ text: " a horrible person" })}>
            a horrible person
          </span>
          <p> a horrible person</p>
          <span onClick={() => speak({ text: "a delicious meal " })}>
            a delicious meal
          </span>
          <p> a delicious meal</p>
          <span onClick={() => speak({ text: " A nice woman" })}>
            A nice woman
          </span>
          <p> A nice woman</p>
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
        <p>There are two types of adjectives:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Fact adjectives " })}>
            {" "}
            Fact adjectives{" "}
          </span>
          <p> factual adjectives</p>
          <span onClick={() => speak({ text: "Opinion adjectives  " })}>
            {" "}
            Opinion adjectives{" "}
          </span>
          <p> Opinion adjectives </p>
        </div>
        <p>
          Fact adjectives express qualities that are objective, that is,
          qualities that are facts, and not mere opinions. Here are some
          examples of factual adjectives:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " New" })}>New</span>
          <p> New</p>
          <span onClick={() => speak({ text: " Round" })}>Round</span>
          <p>Round </p>
          <span onClick={() => speak({ text: "wooden " })}>wooden</span>
          <p>wooden </p>
          <span onClick={() => speak({ text: "Large " })}>Large</span>
          <p>Large </p>
          <span onClick={() => speak({ text: "Net " })}>Net</span>
          <p>Red </p>
        </div>
        <p>
          We use opinion adjectives to talk about subjective qualities such as
          beauty, goodness, etc. Here are some examples of opinion adjectives:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " Beaufitul" })}>Beaufitul</span>
          <p> Beaufitul</p>
          <span onClick={() => speak({ text: " Nice" })}>Nice</span>
          <p> Nice</p>
          <span onClick={() => speak({ text: " Delicious" })}>yummy</span>
          <p> Delicious</p>
          <span onClick={() => speak({ text: " Beaufitul" })}>Beaufitul</span>
          <p> Beaufitul</p>
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
          On some occasions, there may be two or more adjectives together. Let's
          look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "An ugly old man " })}>
            {" "}
            An ugly old man
          </span>
          <p> An ugly old man</p>
          <span
            onClick={() => speak({ text: "You have beautiful blue eyes  " })}
          >
            {" "}
            You have beautiful blue eyes
          </span>
          <p>You have beautiful blue eyes </p>
        </div>
        <p>
          As we could see, we always place opinion adjectives before fact
          adjectives:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " She wears a nice red dress" })}>
            She wears a nice red dress
          </span>
          <p>
            {" "}
            She is wearing a pretty red dress (in the English sentence, nice is
            an adjective of opinion, and comes before the adjective of fact red
            )
          </p>
          <span
            onClick={() =>
              speak({ text: " Sarah is an interesting young girl" })
            }
          >
            Sarah is an interesting young girl
          </span>
          <p>
            Sarah is an interesting young girl (in the English sentence,
            interesting is an adjective of opinion and comes before the
            adjective of fact young )
          </p>
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
        <p>We can classify factual adjectives into 5 categories:</p>
        <p>
          {" "}
          <span onClick={() => speak({ text: "Size adjectives " })}>
            {" "}
            Size adjectives
          </span>{" "}
          <b>- Adjectives of size</b>{" "}
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "big  " })}> big</span>
          <p>Big </p>
          <span onClick={() => speak({ text: "small  " })}> small</span>
          <p>small </p>
        </div>
        <p>
          {" "}
          <span onClick={() => speak({ text: "Age adjectives " })}>
            {" "}
            Age adjectives
          </span>{" "}
          <b>- Adjectives of age</b>{" "}
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Young  " })}> Young</span>
          <p>Young </p>
          <span onClick={() => speak({ text: "Old  " })}> Old</span>
          <p>Old </p>
        </div>
        <p>
          {" "}
          <span onClick={() => speak({ text: "Color adjectives " })}>
            {" "}
            Color adjectives
          </span>{" "}
          <b>- Adjectives of Color</b>{" "}
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Net  " })}> Net</span>
          <p>Red </p>
          <span onClick={() => speak({ text: "Blue  " })}> Blue</span>
          <p>Blue </p>
        </div>
        <p>
          {" "}
          <span onClick={() => speak({ text: "Origing adjectives " })}>
            {" "}
            Origing adjectives
          </span>{" "}
          <b>- Adjectives of origing</b>{" "}
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Russian  " })}> Russian</span>
          <p>Russian </p>
          <span onClick={() => speak({ text: "Mexican  " })}> Mexican</span>
          <p>Mexican </p>
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
          When we use two or more factual adjectives together, they must follow
          a specific order. The order is as follows:
        </p>
        <b>1. Adjectives of size</b>
        <br />
        <b>2. Adjectives of age</b>
        <br />
        <b>3. Adjectives of color</b>
        <br />
        <b>4. Adjectives of origin </b>
        <br />
        <b>5. Adjectives of material.</b>
        <br />
        <p>Let's look at the following examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "She is a tall young woman  " })}>
            {" "}
            She is a tall young woman
          </span>
          <p>
            She is a tall and young woman (first we put the adjective of size
            tall (tall) and then the adjective of age young (young))
          </p>
          <span onClick={() => speak({ text: "You have big brown eyes  " })}>
            {" "}
            You have big brown eyes
          </span>
          <p>
            You have big brown eyes (first we put the size adjective big and
            then the color adjective brown ){" "}
          </p>
          <span
            onClick={() =>
              speak({ text: "This is a small white leather bag  " })
            }
          >
            {" "}
            This is a small white leather bag
          </span>
          <p>
            This is a small white leather bag (first we put the adjective for
            size small , then the adjective for color white and then the
            adjective for material leather ){" "}
          </p>
        </div>
        <p>Size adjectives are separated into 2:</p>
        <p>
          {" "}
          <span onClick={() => speak({ text: "Adjectives size and lenght" })}>
            {" "}
            Adjectives size and lenght
          </span>{" "}
          <b>Adjectives size and lenght</b>{" "}
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Big  " })}> Big</span>
          <p>Big </p>
          <span onClick={() => speak({ text: "Small  " })}> Small</span>
          <p>Small </p>
          <span onClick={() => speak({ text: "Tall  " })}> Tall</span>
          <p>Tall </p>
          <span onClick={() => speak({ text: "Shorts  " })}> Shorts</span>
          <p>Shorts </p>
        </div>
        <p>
          {" "}
          <span onClick={() => speak({ text: "Shapes adjectives " })}>
            {" "}
            shapes adjectives
          </span>{" "}
          <b>- Adjectives of Shapes</b>{" "}
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Round  " })}> Round</span>
          <p>Round </p>
          <span onClick={() => speak({ text: "Round  " })}> Round</span>
          <p>Round </p>
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
          If they go together, the size and length adjectives come before the
          shape adjectives. Let's look at some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "She is a tall young woman  " })}>
            {" "}
            She is a tall young woman
          </span>
          <p>She is a tall young woman</p>
          <span onClick={() => speak({ text: "You have big brown eyes  " })}>
            {" "}
            You have big brown eyes
          </span>
          <p>You have big brown eyes</p>
          <span
            onClick={() =>
              speak({ text: "This is a small white leather bag  " })
            }
          >
            {" "}
            This is a small white leather bag
          </span>
          <p>This is a small white leather bag</p>
        </div>
        <p>
          When there are more than two ADJECTIVES OF COLOR together, we separate
          them by commas and the word and . Let's look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "A black and white jacket  " })}>
            {" "}
            A black and white jacket
          </span>
          <p>A black and white jacket </p>
          <span
            onClick={() =>
              speak({ text: "A blue, orange, green and white shirt  " })
            }
          >
            {" "}
            A blue, orange, green and white shirt
          </span>
          <p>A blue, orange, green and white shirt </p>
          <span
            onClick={() => speak({ text: "A blue, white and black suit  " })}
          >
            {" "}
            A blue, white and black suit
          </span>
          <p>A blue, white and black suit </p>
        </div>
        <p>
          But ALL other types of adjectives are not separated by commas. Let's
          look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "A new black cotton shirt" })}>
            {" "}
            A new black cotton shirt
          </span>
          <p>A new black cotton shirt</p>
          <span
            onClick={() => speak({ text: "A beautiful young Russian woman  " })}
          >
            {" "}
            A beautiful young Russian woman
          </span>
          <p>A beautiful young Russian woman </p>
        </div>
        <p>
          Although we usually put an adjective before a noun, we can put the
          adjective AFTER the following verbs:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "to be " })}>
          to be
          </span>
          <p>to be </p>
          <span onClick={() => speak({ text: "To get " })}>
          To get
          </span>
          <p> To get</p>
          <span onClick={() => speak({ text: " to become" })}>
          to become
          </span>
          <p> to become</p>
          <span onClick={() => speak({ text: " to seem" })}>
          to seem
          </span>
          <p> to seem</p>
          
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
            As its name implies, qualifying adjectives " qualify " the noun, that
            is, they give it qualities. Some examples of adjectives are:
          </p>
          <div className="greybox" style={{ marginLeft: "30%" }}>
            <span onClick={() => speak({ text: "Beautiful " })}> Beautiful </span>
            <p> Beautiful</p>
            <span onClick={() => speak({ text: "Horrible " })}> Horrible </span>
            <p> Horrible</p>
            <span onClick={() => speak({ text: "yummy" })}> yummy</span>
            <p> yummy</p>
            <span onClick={() => speak({ text: "Nice " })}> Nice </span>
            <p> Nice</p>
          </div>
          <p>
            As we could see, in English, we usually use the same adjective to talk
            about a feminine or a masculine noun. For example, in Spanish we can
            say beautiful or beautiful ‹, but in English we just say
            <span onClick={() => speak({ text: "Beautiful" })}>Beautiful</span> .
          </p>
          <p>Let's see the above adjectives in action:</p>
          <div className="greybox" style={{ marginLeft: "30%" }}>
            <span onClick={() => speak({ text: "A beautiful girl " })}>
              {" "}
              A beautiful girl{" "}
            </span>
            <p> A beautiful girl</p>
            <span onClick={() => speak({ text: "a horrible ship " })}>
              {" "}
              a horrible ship{" "}
            </span>
            <p> a horrible ship</p>
          </div>
          <p>
            In the two previous sentences, beautiful and horrible are qualifying
            adjectives because they give their quality to the nouns girl and boat
            .
          </p>
          <p>
            In English, we usually put the adjective right before the noun. Here
            are some examples:
          </p>
          <div className="greybox" style={{ marginLeft: "30%" }}>
            <span onClick={() => speak({ text: " A beautiful home" })}>
              A beautiful home
            </span>
            <p>A beautiful home </p>
            <span onClick={() => speak({ text: " a horrible person" })}>
              a horrible person
            </span>
            <p> a horrible person</p>
            <span onClick={() => speak({ text: "a delicious meal " })}>
              a delicious meal
            </span>
            <p> a delicious meal</p>
            <span onClick={() => speak({ text: " A nice woman" })}>
              A nice woman
            </span>
            <p> A nice woman</p>
          </div>
        </div>
      </div>
    );
  };
  
  export const Page8 = () => {
    const { speak } = useSpeechSynthesis();
    return (
      <div>
        <div className="container kk">
          <p>There are two types of adjectives:</p>
          <div className="greybox" style={{ marginLeft: "30%" }}>
            <span onClick={() => speak({ text: "Fact adjectives " })}>
              {" "}
              Fact adjectives{" "}
            </span>
            <p> factual adjectives</p>
            <span onClick={() => speak({ text: "Opinion adjectives  " })}>
              {" "}
              Opinion adjectives{" "}
            </span>
            <p> Opinion adjectives </p>
          </div>
          <p>
            Fact adjectives express qualities that are objective, that is,
            qualities that are facts, and not mere opinions. Here are some
            examples of factual adjectives:
          </p>
          <div className="greybox" style={{ marginLeft: "30%" }}>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " New" })}>New</span>
            <p> New</p>
            <span onClick={() => speak({ text: " Round" })}>Round</span>
            <p>Round </p>
            <span onClick={() => speak({ text: "wooden " })}>wooden</span>
            <p>wooden </p>
            <span onClick={() => speak({ text: "Large " })}>Large</span>
            <p>Large </p>
            <span onClick={() => speak({ text: "Net " })}>Net</span>
            <p>Red </p>
          </div>
          <p>
            We use opinion adjectives to talk about subjective qualities such as
            beauty, goodness, etc. Here are some examples of opinion adjectives:
          </p>
          <div className="greybox" style={{ marginLeft: "30%" }}>
            <span onClick={() => speak({ text: " Beaufitul" })}>Beaufitul</span>
            <p> Beaufitul</p>
            <span onClick={() => speak({ text: " Nice" })}>Nice</span>
            <p> Nice</p>
            <span onClick={() => speak({ text: " Delicious" })}>yummy</span>
            <p> Delicious</p>
            <span onClick={() => speak({ text: " Beaufitul" })}>Beaufitul</span>
            <p> Beaufitul</p>
          </div>
        </div>
      </div>
    );
  };
  
  export const Page9 = () => {
    const { speak } = useSpeechSynthesis();
    return (
      <div>
        <div className="container kk">
          <p>
            On some occasions, there may be two or more adjectives together. Let's
            look at these examples:
          </p>
          <div className="greybox" style={{ marginLeft: "30%" }}>
            <span onClick={() => speak({ text: "An ugly old man " })}>
              {" "}
              An ugly old man
            </span>
            <p> An ugly old man</p>
            <span
              onClick={() => speak({ text: "You have beautiful blue eyes  " })}
            >
              {" "}
              You have beautiful blue eyes
            </span>
            <p>You have beautiful blue eyes </p>
          </div>
          <p>
            As we could see, we always place opinion adjectives before fact
            adjectives:
          </p>
          <div className="greybox" style={{ marginLeft: "30%" }}>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " She wears a nice red dress" })}>
              She wears a nice red dress
            </span>
            <p>
              {" "}
              She is wearing a pretty red dress (in the English sentence, nice is
              an adjective of opinion, and comes before the adjective of fact red
              )
            </p>
            <span
              onClick={() =>
                speak({ text: " Sarah is an interesting young girl" })
              }
            >
              Sarah is an interesting young girl
            </span>
            <p>
              Sarah is an interesting young girl (in the English sentence,
              interesting is an adjective of opinion and comes before the
              adjective of fact young )
            </p>
          </div>
        </div>
      </div>
    );
  };