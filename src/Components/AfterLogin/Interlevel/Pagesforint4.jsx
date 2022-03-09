import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          Let us remember that the pronoun{" "}
          <span onClick={() => speak({ text: "it" })}>it</span> (that / it) is
          used to refer to things, places, events, animals, etc.
        </p>
        <p>
          Usually, we don't translate{" "}
          <span onClick={() => speak({ text: "it" })}>it</span> into Spanish
          when we use it in sentences. Let's look at some examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span onClick={() => speak({ text: "It is my dog " })}>
              It is my dog
            </span>
            <p>
              It's my dog ​​(usually, we don't say “it/it's my dog”, we just say
              “it's my dog){" "}
            </p>
            <span
              onClick={() =>
                speak({ text: "Is it your cat? - Yes, it's my cat " })
              }
            >
              Is it your cat? - Yes, it's my cat
            </span>
            <p> It's your cat? - Yes, it's my cat</p>
            <span
              onClick={() =>
                speak({ text: " I'm looking for my notebook, where is it ?" })
              }
            >
              I'm looking for my notebook, where is it ?
            </span>
            <p>I'm looking for my notebook, where is it ? </p>
            <span
              onClick={() =>
                speak({
                  text: " I know where your wallet is. It 's on the table",
                })
              }
            >
              I know where your wallet is. It 's on the table
            </span>
            <p> I know where your wallet is. It 's on the table</p>
            <span onClick={() => speak({ text: "It 's my house " })}>
              It 's my house
            </span>
            <p>It 's my house </p>
            <span
              onClick={() =>
                speak({
                  text: " I wasn't expecting you. It was a complete surprise",
                })
              }
            >
              I wasn't expecting you. It was a complete surprise
            </span>
            <p>I wasn't expecting you. It was a complete surprise </p>
            <span onClick={() => speak({ text: " It's a pity you can't eat" })}>
              It's a pity you can't eat
            </span>
            <p> It's a pity you can't eat</p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span onClick={() => speak({ text: "It 's Monday today " })}>
              It 's Monday today
            </span>
            <p>It 's Monday today </p>
            <span onClick={() => speak({ text: "I think it 's Thursday " })}>
              I think it 's Thursday
            </span>
            <p> I think it 's Thursday</p>
            <span onClick={() => speak({ text: "Yesterday it was Saturday " })}>
              Yesterday it was Saturday
            </span>
            <p> Yesterday it was Saturday</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p> <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
        </div>
        <p>
          We can use <span onClick={() => speak({ text: "it" })}>it</span> to
          talk about distances, weather, days, dates, periods of time and times
          of day, since they are "things and ideas". Let's see examples of how
          to use it when we talk about days, dates and time periods:
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
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span onClick={() => speak({ text: "It's our anniversary " })}>
              It's our anniversary
            </span>
            <p> It's our Birthday</p>
            <span
              onClick={() =>
                speak({ text: "What day is it ? -  It 's Sunday" })
              }
            >
              What day is it ? - It 's Sunday
            </span>
            <p> What day is it ? - It 's Sunday</p>
            <span
              onClick={() =>
                speak({ text: "What month is it ? -  It 's January " })
              }
            >
              What month is it ? - It 's January
            </span>
            <p> What month is it ? - It 's January</p>
            <span
              onClick={() =>
                speak({ text: "What year is it ? -  It 's 1995 " })
              }
            >
              What year is it ? - It 's 1995
            </span>
            <p> What year is it ? - It 's 1995</p>
            <span
              onClick={() =>
                speak({ text: "Is it morning yet? - Yes, it 's morning " })
              }
            >
              Is it morning yet? - Yes, it 's morning
            </span>
            <p> Is it morning? - Yes, it's morning</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span
              onClick={() =>
                speak({ text: " What time is it ? -  It 's 10:30" })
              }
            >
              What time is it ? - It 's 10:30
            </span>
            <p> What time is it ? - It 's 10:30</p>
            <span
              onClick={() =>
                speak({ text: " It 's 3 am and our daughter hasn't come home" })
              }
            >
              It 's 3 am and our daughter hasn't come home
            </span>
            <p> It 's 3 am and our daughter hasn't come home</p>
            <span
              onClick={() =>
                speak({
                  text: " It 's really cold today, isn't it? - Yes, it is",
                })
              }
            >
              It 's really cold today, isn't it? - Yes, it is
            </span>
            <p>It 's really cold today, isn't it? - Yes, it is </p>
            <span
              onClick={() =>
                speak({
                  text: " It was hot yesterday, wasn't it? - Yes, it was",
                })
              }
            >
              It was hot yesterday, wasn't it? - Yes, it was
            </span>
            <p> It was hot yesterday, wasn't it? - Yes, it was</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
        </div>
        <p>
          We can use <span onClick={() => speak({ text: "it" })}>it</span> to
          talk about distances, weather, days, dates, periods of time and times
          of day, since they are "things and ideas". Let's see examples of how
          to use it when we talk about days, dates and time periods:
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
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: "It's clear - Yesterday it was cloudy, but today it's clear ",
              })
            }
          >
            It's clear - Yesterday it was cloudy, but today it's clear
          </span>
          <p>It's clear - Yesterday it was cloudy, but today it's clear </p>
          <span
            onClick={() => speak({ text: "It's hot  - It's really hot here " })}
          >
            It's hot - It's really hot here
          </span>
          <p> It's hot - It's really hot here</p>
          <span
            onClick={() =>
              speak({
                text: " It's cold  - My hands are numbed cause it's really cold",
              })
            }
          >
            It's cold - My hands are numbed cause it's really cold
          </span>
          <p>It's cold - My hands are numbed cause it's really cold </p>
          <span
            onClick={() =>
              speak({
                text: " It's snowing  - We can't see anything because it's snowing",
              })
            }
          >
            It's snowing - We can't see anything because it's snowing
          </span>
          <p> It's snowing - We can't see anything because it's snowing</p>
          <span
            onClick={() =>
              speak({
                text: "It's freezing  - Don't go outside, it's freezing ",
              })
            }
          >
            It's freezing - Don't go outside, it's freezing
          </span>
          <p> It's freezing - Don't go outside, it's freezing</p>
          <span
            onClick={() =>
              speak({
                text: "It's raining – I don't like to go out when it's raining ",
              })
            }
          >
            It's raining – I don't like to go out when it's raining
          </span>
          <p> It's raining – I don't like to go out when it's raining</p>
          <span onClick={() => speak({ text: "It's windy " })}>It's windy</span>
          <p> It's windy</p>
          <span onClick={() => speak({ text: " It's snowy" })}>It's snowy</span>
          <p> It's snowy</p>
          <span onClick={() => speak({ text: "It's rainy " })}>It's rainy</span>
          <p> It's rainy</p>
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
        <p>As a bonus, we will learn some weather-related nouns:</p>
        <div className=" greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " Rain",
              })
            }
          >
            Rain
          </span>
          <p> Rain</p>
          <span
            onClick={() =>
              speak({
                text: "Snow ",
              })
            }
          >
            Snow
          </span>
          <p>Snow </p>
          <span
            onClick={() =>
              speak({
                text: " Wind",
              })
            }
          >
            Wind
          </span>
          <p>Wind </p>
          <span
            onClick={() =>
              speak({
                text: "Cloud ",
              })
            }
          >
            Cloud
          </span>
          <p> Cloud</p>
          <span
            onClick={() =>
              speak({
                text: " Sun",
              })
            }
          >
            Sun
          </span>
          <p> Sun</p>
        </div>
        <p>
          <span onClick={() => speak({ text: "Rain" })}>Rain</span> and{" "}
          <span onClick={() => speak({ text: "Snow" })}>Snow</span> can also be
          verbs (“llover” and “nevar”, respectively).
        </p>
        <p>
          Now, let's see how to use it to talk about distances. First, let's
          look at this little dialog:
        </p>
        <div className=" greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "   Let's go to Mark's house." })}>
            <b>Ben:</b> Let's go to Mark's house.
          </span>
          <p> Let's go to Mark's house.</p>
          <span onClick={() => speak({ text: "  How far is it ?" })}>
            <b>Jim:</b> How far is it ?
          </span>
          <p> How far is it ?</p>
          <span
            onClick={() =>
              speak({ text: "It won't take us long to get there  " })
            }
          >
            <b>Ben:</b>It won't take us long to get there{" "}
          </span>
          <p>It won't take us long to get there </p>
          <span
            onClick={() =>
              speak({ text: "  But how far is it from here to Joe's house?" })
            }
          >
            <b>Jim:</b> But how far is it from here to Joe's house?
          </span>
          <p> But how far is it from here to Joe's house?</p>
          <span
            onClick={() =>
              speak({ text: " It's a short trip that only lasts 10 minutes!" })
            }
          >
            <b>Ben:</b>It's a short trip that only lasts 10 minutes!
          </span>
          <p> It is a short trip that lasts only 10 minutes!</p>
          
        </div>
        <p>
          In the previous conversation, we used it to talk about distances from
          one place to another and the time it takes us to do something.
        </p>
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
          Also, as we could see, we use the verb to take to express how long
          something “takes” / how long it “takes” to do something”; we use the
          verb to last to say how long something “lasts”. Let's see more
          examples:
        </p>
        <div className=" greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "It takes two hours to bake a cake " })
            }
          >
            {" "}
            It takes two hours to bake a cake
          </span>
          <p> It takes two hours to bake a cake</p>
          <span
            onClick={() =>
              speak({ text: " This movie is long ; it lasts about five hours" })
            }
          >
            {" "}
            This movie is long ; it lasts about five hours
          </span>
          <p>This movie is long ; it lasts about five hours </p>
          <span
            onClick={() =>
              speak({
                text: " I think it will take us a week to arrive to Liverpool by ship",
              })
            }
          >
            {" "}
            I think it will take us a week to arrive to Liverpool by ship
          </span>
          <p>I think it will take us a week to get to Liverpool by ship </p>
          <span
            onClick={() =>
              speak({
                text: " I don't think the TV show will last more than thirty minutes",
              })
            }
          >
            {" "}
            I don't think the TV show will last more than thirty minutes
          </span>
          <p> I don't think the TV show will last more than thirty minutes.</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
        <p>
          We can use it + is + adjective + verb in the infinitive . Let's look
          at the following examples:
        </p>
        <div className=" greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "It's amazing to be here " })}> It's amazing to be here</span>
          <p> It's amazing to be here</p>
          <span onClick={() => speak({ text: "It's horrible to wait in the dark " })}> It's horrible to wait in the dark</span>
          <p> It's horrible to wait in the dark</p>
          <span onClick={() => speak({ text: " It's great to be alive" })}>It's great to be alive </span>
          <p> It's great to be alive</p>
          <span onClick={() => speak({ text: "It's good to be free " })}> It's good to be free</span>
          <p>It's good to be free </p>
        </div>
      </div>
    </div>
  );
};
