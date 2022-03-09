import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In previous lessons, we learned how to use the first, second, and
          third conditionals (as well as the zero conditional). In this lesson,
          we will learn to use conditional sentences by mixing all the ones we
          learned before. It's not as difficult as it sounds!
        </p>
        <p>
          If we recall, the zero conditional is used with the present simple
          like this:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: "If you study harder, you can pass your final exam",
              })
            }
          >
            If you study harder, you can pass your final exam
          </span>
          <p> If you study harder, you can pass your final exam</p>
        </div>
        <p>
          As we could see, both parts of the previous sentence are in the
          present simple:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p>
            <span onClick={() => speak({ text: " If you study harder " })}>
              If you study harder{" "}
            </span>{" "}
            (this sentence is in the present simple because the verb{" "}
            <span onClick={() => speak({ text: " study" })}> study</span>
            is in the present simple){" "}
          </p>
          <p>
            {" "}
            <span
              onClick={() => speak({ text: " you can pass your final exam " })}
            >
              {" "}
              you can pass your final exam
            </span>
            (this sentence is in the present simple because the verb{" "}
            <span onClick={() => speak({ text: " pass " })}> pass</span>
            is in the present simple)
          </p>
        </div>
        <p>
          However, sometimes we can mix the conditionals. Let's look at these
          examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p>
            <span onClick={() => speak({ text: "  If your were tired" })}>
              If your were tired{" "}
            </span>
            (it is a sentence with the second conditional, because the verb is
            in the past simple =
            <span onClick={() => speak({ text: "were " })}> were</span> )
          </p>
          <p>
            <span
              onClick={() =>
                speak({ text: " You would havehave stay in bed " })
              }
            >
              {" "}
              You would havehave stay in bed
            </span>
            (it is a sentence with the third conditional, because the second
            part of the sentence has{" "}
            <span onClick={() => speak({ text: " would " })}>would </span>+{" "}
            <span onClick={() => speak({ text: " jhave " })}>have </span>+ verb
            in the past participle ({" "}
            <span onClick={() => speak({ text: "stayed" })}>stayed</span>){" "}
          </p>
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
          We can also mix the other conditionals that we have seen. Let's see
          several examples mixing the tenses of the conditionals:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " If I had a stronger arm, I would hit you " })
            }
          >
            {" "}
            If I had a stronger arm, I would hit you
          </span>
          <p>If I had a stronger arm, I'd hit you</p>
          <span
            onClick={() =>
              speak({ text: "If I were you, I would have punched that guy" })
            }
          >
            If I were you, I would have punched that guy
          </span>
          <p>If I were you I would have hit that guy</p>
          <span
            onClick={() =>
              speak({
                text: " If I didn´t speak Spanish, I wouldn´t have got this job",
              })
            }
          >
            If I didn´t speak Spanish, I wouldn´t have got this job
          </span>
          <p>If I didn't speak Spanish, I wouldn't have gotten this job.</p>
          <span
            onClick={() =>
              speak({
                text: "If I didn't have a guitar, I wouldn't have played in the band",
              })
            }
          >
            {" "}
            If I didn't have a guitar, I wouldn't have played in the band
          </span>
          <p>If I didn't have a guitar, I wouldn't have played in the band.</p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p></p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p></p>
        </div>
      </div>
    </div>
  );
};
