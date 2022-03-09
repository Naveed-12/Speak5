import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We use the future perfect to express the idea that something will end
          at some point in the future. The structure of the future perfect in
          its affirmative form is as follows:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <b>
            Subject + <span onClick={() => speak({ text: "will" })}>will</span>+
            <span onClick={() => speak({ text: "have" })}>have</span>+ past
            participle verb + complement
          </b>
          <br />
        </div>
        <p>
          It is important to remember that because the sentence has{" "}
          <span onClick={() => speak({ text: "will" })}>will</span> , we use
          <span onClick={() => speak({ text: "have" })}>have</span> even with{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            he , she , it
          </span>{" "}
          . Let's look at these examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>No shrinkage:</p>
            <span
              onClick={() =>
                speak({ text: " I will have sung this song ten times" })
              }
            >
              I will have sung this song ten times
            </span>
            <p>I will have sung this song ten times </p>
            <span
              onClick={() =>
                speak({ text: " You will have achieved your goal by then" })
              }
            >
              You will have achieved your goal by then
            </span>
            <p>You will have achieved your goal by then </p>
            <span
              onClick={() =>
                speak({
                  text: " He will have seen all the movies in your library by the end of this year",
                })
              }
            >
              He will have seen all the movies in your library by the end of
              this year
            </span>
            <p>
              {" "}
              He will have seen all the movies in your library by the end of
              this year
            </p>
            <span
              onClick={() =>
                speak({
                  text: " She will have kissed him like a hundred times this weekend",
                })
              }
            >
              She will have kissed him like a hundred times this weekend
            </span>
            <p>She will have kissed him like a hundred times this weekend </p>
            <span
              onClick={() =>
                speak({ text: " We will have run a hundred miles" })
              }
            >
              We will have run a hundred miles
            </span>
            <p>We will have run a hundred miles </p>
            <span
              onClick={() =>
                speak({ text: " You will have climbed to the top" })
              }
            >
              You will have climbed to the top
            </span>
            <p>You will have climbed to the top </p>
            <span
              onClick={() =>
                speak({ text: " They will have lived eighty years" })
              }
            >
              They will have lived eighty years
            </span>
            <p> They will have lived eighty years</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>With contraction:</p>
            <span
              onClick={() =>
                speak({ text: " I will have sung this song ten times" })
              }
            >
              I will have sung this song ten times
            </span>
            <p>I will have sung this song ten times </p>
            <span
              onClick={() =>
                speak({ text: " You will have achieved your goal by then" })
              }
            >
              You will have achieved your goal by then
            </span>
            <p>You will have achieved your goal by then </p>
            <span
              onClick={() =>
                speak({
                  text: " He will have seen all the movies in your library by the end of this year",
                })
              }
            >
              He will have seen all the movies in your library by the end of
              this year
            </span>
            <p>
              {" "}
              He will have seen all the movies in your library by the end of
              this year
            </p>
            <span
              onClick={() =>
                speak({
                  text: " She will have kissed him like a hundred times this weekend",
                })
              }
            >
              She will have kissed him like a hundred times this weekend
            </span>
            <p>She will have kissed him like a hundred times this weekend </p>
            <span
              onClick={() =>
                speak({ text: " We will have run a hundred miles" })
              }
            >
              We will have run a hundred miles
            </span>
            <p>We will have run a hundred miles </p>
            <span
              onClick={() =>
                speak({ text: " You will have climbed to the top" })
              }
            >
              You will have climbed to the top
            </span>
            <p>You will have climbed to the top </p>
            <span
              onClick={() =>
                speak({ text: " They will have lived eighty years" })
              }
            >
              They will have lived eighty years
            </span>
            <p> They will have lived eighty years</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
        </div>
        <p>
          As we have seen, some verbs like care do not need suffixes to become
          nouns.
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
          Now we will see how to use the future perfect in its negative form. To
          do this, we simply add not after will , or use its won't contraction .
          Let's look at these examples in negation:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span onClick={() => speak({ text: " Will not:" })}>Will not:</span>
            <span
              onClick={() =>
                speak({ text: " I will not have sung this song ten times" })
              }
            >
              I will not have sung this song ten times
            </span>

            <p>I will not have sung this song ten times </p>
            <span
              onClick={() =>
                speak({ text: " You will not have achieved your goal by then" })
              }
            >
              You will not have achieved your goal by then
            </span>
            <p>You will not have achieved your goal by then </p>
            <span
              onClick={() =>
                speak({
                  text: " He will not have seen all the movies in your library by the end of this year",
                })
              }
            >
              He will not have seen all the movies in your library by the end of
              this year
            </span>
            <p>
              He will not have seen all the movies in your library by the end of
              this year{" "}
            </p>
            <span
              onClick={() =>
                speak({
                  text: "She will not have kissed him like a hundred times by the weekend",
                })
              }
            >
              She will not have kissed him like a hundred times by the weekend
            </span>
            <p>
              She will not have kissed him like a hundred times by the weekend
            </p>
            <span
              onClick={() =>
                speak({ text: " We will not have run a hundred miles" })
              }
            >
              We will not have run a hundred miles
            </span>
            <p>We will not have run a hundred miles </p>
            <span
              onClick={() =>
                speak({ text: " You will not have climbed to the top" })
              }
            >
              You will not have climbed to the top
            </span>
            <p> You will not have climbed to the top</p>
            <span
              onClick={() =>
                speak({ text: "They will not have lived eighty years " })
              }
            >
              They will not have lived eighty years
            </span>
            <p>They will not have lived eighty years </p>

            <span
              onClick={() =>
                speak({
                  text: " The concert will not have finished at 9 o'clock",
                })
              }
            >
              The concert will not have finished at 9 o'clock
            </span>
            <p> The concert won't be over at 9 o'clock</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span onClick={() => speak({ text: "Won't: " })}>Won't:</span>
            <span
              onClick={() =>
                speak({ text: " I won't have sung this song ten times" })
              }
            >
              I won't have sung this song ten times
            </span>
            <p>I will not have sung this song ten times</p>
            <span
              onClick={() =>
                speak({ text: " You won't have achieved your goal by then" })
              }
            >
              You won't have achieved your goal by then
            </span>
            <p> You will not have reached your goal by then</p>
            <span
              onClick={() =>
                speak({
                  text: " He won´t have seen all the movies in your library by the end of this year",
                })
              }
            >
              He won´t have seen all the movies in your library by the end of
              this year
            </span>
            <p>
              {" "}
              He won't have seen all the movies in your library by the end of
              this year.
            </p>
            <span
              onClick={() =>
                speak({
                  text: " She won't have kissed him like a hundred times by the weekend",
                })
              }
            >
              She won't have kissed him like a hundred times by the weekend
            </span>
            <p>
              She won't have kissed him like a hundred times by the weekend{" "}
            </p>
            <span
              onClick={() =>
                speak({ text: "We won't have run a hundred miles " })
              }
            >
              We won't have run a hundred miles
            </span>
            <p> We won't have run a hundred miles</p>
            <span
              onClick={() =>
                speak({ text: "You won't have climbed to the top " })
              }
            >
              You won't have climbed to the top
            </span>
            <p> You won't have climbed to the top</p>
            <span
              onClick={() =>
                speak({ text: "They won´t have lived eighty years " })
              }
            >
              They won´t have lived eighty years
            </span>
            <p>They won´t have lived eighty years </p>
            <span
              onClick={() =>
                speak({ text: "The concert won't have finished at 9 o'clock " })
              }
            >
              The concert won't have finished at 9 o'clock
            </span>
            <p> The concert won't have finished at 9 o'clock</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>2<span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
        </div>
        <p>
          As we have seen, some verbs like care do not need suffixes to become
          nouns.
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
          In order to convert the future perfect to a question, all we have to
          do is put will before the subject. Let’s see some examples with their
          possible answers:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Will I have completed my homework by noon? - No, I won't " })}>Will I have completed my homework by noon? - No, I won't</span>
          <p>Will I have completed my homework by noon? - No, I will not </p>
          <span onClick={() => speak({ text: " Will you have finished your work by 10 pm? -Yes, I will" })}>Will you have finished your work by 10 pm? -Yes, I will</span>
          <p> Will you have finished your work by 10 pm? -Yes, I will</p>
          <span onClick={() => speak({ text: " Will he have earned his bachelor's degree in 4 years? - I think so" })}>Will he have earned his bachelor's degree in 4 years? - I think so</span>
          <p> Will he have earned his bachelor's degree in 4 years? - I think so</p>
          <span onClick={() => speak({ text: "Will she have turned the ticket up? - Probably " })}>Will she have turned the ticket up? - Probably</span>
          <p>Will she have turned the ticket up? - Probably </p>
          <span onClick={() => speak({ text: " Will we have passed the test? - Yeah, we studied very hard" })}>Will we have passed the test? - Yeah, we studied very hard</span>
          <p>Will we have passed the test? - Yeah, we studied very hard </p>
          <span onClick={() => speak({ text: " Will you have put together this puzzle? -Yes, I will" })}>Will you have put together this puzzle? -Yes, I will</span>
          <p>Will you have put together this puzzle? -Yes, I will </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>

        </div>
      </div>
    </div>
  );
};
