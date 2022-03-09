import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideBar from "./Components/NavBar/SideBar";
import Home from "./Components/Home/Home";
import Achieve from "./Components/Home/Achieve";
import PicsContainer from "./Components/Home/PicsContainer";
import Footer from "./Components/Footer/Footer";
import Begin from "./Components/Begin/Begin";
import OurMethod from "./Components/OurMethod/OurMethod";
import Us from "./Components/US/Us";
import Prices from "./Components/Prices/Prices";
import PriceTable from "./Components/Prices/PriceTable";
import Help from "./Components/Help/Help";
import Helpdata from "./Components/Help/Helpdata";
import Signin from "./Components/Regster/Signin";
import ForgetPass from "./Components/Regster/ForgetPass";
import Register from "./Components/Regster/Register";
import Navbar from "./Components/AfterLogin/Navbar";
import Changeform from "./Components/AfterLogin/Changes/Changeform";
import Lessons from "./Components/AfterLogin/Lessons/Lessons";
import {
  beginner,
  preinter,
  inter,
  interadvance,
  business,
} from "./Components/AfterLogin/Lessons/LessonsData";
import AdvancePage from "./Components/AfterLogin/Advance/AdvancePage";
import Quiz1_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz1_3";
import Quiz2_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz2_3";
import Quiz3_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz3_3";
import Quiz4_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz4_3";
import Quiz5_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz5_3";
import Quiz6_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz6_3";
import Quiz7_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz7_3";
import Quiz8_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz8_3";
import Quiz9_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz9_3";
import Quiz10_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz10_3";
import Quiz11_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz11_3";
import Quiz12_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz12_3";
import Quiz13_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz13_3";
import Quiz14_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz14_3";
import Quiz15_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz15_3";
import Quiz16_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz16_3";
import Quiz17_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz17_3";
import Quiz18_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz18_3";
import Quiz19_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz19_3";
import Quiz20_3 from "./Components/AfterLogin/BeginnerLevel/Fluency/Quiz20_3";

import Quiz1_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz1_4";
import Quiz2_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz2_4";
import Quiz3_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz3_4";
import Quiz4_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz4_4";
import Quiz5_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz5_4";
import Quiz6_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz6_4";
import Quiz7_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz7_4";
import Quiz8_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz8_4";
import Quiz9_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz9_4";
import Quiz10_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz10_4";
import Quiz11_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz11_4";
import Quiz12_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz12_4";
import Quiz13_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz13_4";
import Quiz14_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz14_4";
import Quiz15_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz15_4";
import Quiz16_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz16_4";
import Quiz17_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz17_4";
import Quiz18_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz18_4";
import Quiz19_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz19_4";
import Quiz20_4 from "./Components/AfterLogin/BeginnerLevel/Exam/Quiz20_4";

import QuizP1_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP1_3";
import QuizP2_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP2_3";
import QuizP3_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP3_3";
import QuizP4_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP4_3";
import QuizP5_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP5_3";
import QuizP6_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP6_3";
import QuizP7_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP7_3";
import QuizP8_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP8_3";
import QuizP9_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP9_3";
import QuizP10_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP10_3";
import QuizP11_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP11_3";
import QuizP12_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP12_3";
import QuizP13_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP13_3";
import QuizP14_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP14_3";
import QuizP15_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP15_3";
import QuizP16_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP16_3";
import QuizP17_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP17_3";
import QuizP18_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP18_3";
import QuizP19_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP19_3";
import QuizP20_3 from "./Components/AfterLogin/PreinterLevel/Fluency/QuizP20_3";

import QuizP1_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP1_4";
import QuizP2_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP2_4";
import QuizP3_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP3_4";
import QuizP4_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP4_4";
import QuizP5_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP5_4";
import QuizP6_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP6_4";
import QuizP7_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP7_4";
import QuizP8_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP8_4";
import QuizP9_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP9_4";
import QuizP10_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP10_4";
import QuizP11_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP11_4";
import QuizP12_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP12_4";
import QuizP13_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP13_4";
import QuizP14_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP14_4";
import QuizP15_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP15_4";
import QuizP16_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP16_4";
import QuizP17_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP17_4";
import QuizP18_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP18_4";
import QuizP19_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP19_4";
import QuizP20_4 from "./Components/AfterLogin/PreinterLevel/Exam/QuizP20_4";

import Quizi1_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi1_3";
import Quizi2_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi2_3";
import Quizi3_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi3_3";
import Quizi4_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi4_3";
import Quizi5_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi5_3";
import Quizi6_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi6_3";
import Quizi7_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi7_3";
import Quizi8_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi8_3";
import Quizi9_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi9_3";
import Quizi10_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi10_3";
import Quizi11_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi11_3";
import Quizi12_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi12_3";
import Quizi13_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi13_3";
import Quizi14_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi14_3";
import Quizi15_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi15_3";
import Quizi16_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi16_3";
import Quizi17_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi17_3";
import Quizi18_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi18_3";
import Quizi19_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi19_3";
import Quizi20_3 from "./Components/AfterLogin/Interlevel/Fluncy/Quizi20_3";

import Quizi1_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi1_4";
import Quizi2_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi2_4";
import Quizi3_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi3_4";
import Quizi4_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi4_4";
import Quizi5_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi5_4";
import Quizi6_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi6_4";
import Quizi7_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi7_4";
import Quizi8_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi8_4";
import Quizi9_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi9_4";
import Quizi10_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi10_4";
import Quizi11_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi11_4";
import Quizi12_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi12_4";
import Quizi13_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi13_4";
import Quizi14_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi14_4";
import Quizi15_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi15_4";
import Quizi16_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi16_4";
import Quizi17_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi17_4";
import Quizi18_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi18_4";
import Quizi19_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi19_4";
import Quizi20_4 from "./Components/AfterLogin/Interlevel/Exam/Quizi20_4";

import QuizID1_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid1_3";
import QuizID2_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid2_3";
import QuizID3_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid3_3";
import QuizID4_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid4_3";
import QuizID5_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid5_3";
import QuizID6_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid6_3";
import QuizID7_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid7_3";
import QuizID8_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid8_3";
import QuizID9_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid9_3";
import QuizID10_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid10_3";
import QuizID11_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid11_3";
import QuizID12_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid12_3";
import QuizID13_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid13_3";
import QuizID14_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid14_3";
import QuizID15_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid15_3";
import QuizID16_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid16_3";
import QuizID17_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid17_3";
import QuizID18_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid18_3";
import QuizID19_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid19_3";
import QuizID20_3 from "./Components/AfterLogin/InterAdvance/Fluency/Quizid20_3";

import Quizid1_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid1_4";
import Quizid2_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid2_4";
import Quizid3_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid3_4";
import Quizid4_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid4_4";
import Quizid5_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid5_4";
import Quizid6_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid6_4";
import Quizid7_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid7_4";
import Quizid8_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid8_4";
import Quizid9_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid9_4";
import Quizid10_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid10_4";
import Quizid11_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid11_4";
import Quizid12_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid12_4";
import Quizid13_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid13_4";
import Quizid14_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid14_4";
import Quizid15_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid15_4";
import Quizid16_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid16_4";
import Quizid17_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid17_4";
import Quizid18_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid18_4";
import Quizid19_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid19_4";
import Quizid20_4 from "./Components/AfterLogin/InterAdvance/Exam/Quizid20_4";

import QuizA1_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA2_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA3_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA4_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA5_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA6_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA7_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA8_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA9_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA10_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA11_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA12_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA13_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA14_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA15_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA16_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA17_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA18_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA19_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";
import QuizA20_3 from "./Components/AfterLogin/Business/Fluency/QuizA1_3";

import QuizA1_4 from "./Components/AfterLogin/Business/Exam/QuizA1_4";
import QuizA2_4 from "./Components/AfterLogin/Business/Exam/QuizA2_4";
import QuizA3_4 from "./Components/AfterLogin/Business/Exam/QuizA3_4";
import QuizA4_4 from "./Components/AfterLogin/Business/Exam/QuizA4_4";
import QuizA5_4 from "./Components/AfterLogin/Business/Exam/QuizA5_4";
import QuizA6_4 from "./Components/AfterLogin/Business/Exam/QuizA6_4";
import QuizA7_4 from "./Components/AfterLogin/Business/Exam/QuizA7_4";
import QuizA8_4 from "./Components/AfterLogin/Business/Exam/QuizA8_4";
import QuizA9_4 from "./Components/AfterLogin/Business/Exam/QuizA9_4";
import QuizA10_4 from "./Components/AfterLogin/Business/Exam/QuizA10_4";
import QuizA11_4 from "./Components/AfterLogin/Business/Exam/QuizA11_4";
import QuizA12_4 from "./Components/AfterLogin/Business/Exam/QuizA12_4";
import QuizA13_4 from "./Components/AfterLogin/Business/Exam/QuizA13_4";
import QuizA14_4 from "./Components/AfterLogin/Business/Exam/QuizA14_4";
import QuizA15_4 from "./Components/AfterLogin/Business/Exam/QuizA15_4";
import QuizA16_4 from "./Components/AfterLogin/Business/Exam/QuizA16_4";
import QuizA17_4 from "./Components/AfterLogin/Business/Exam/QuizA17_4";
import QuizA18_4 from "./Components/AfterLogin/Business/Exam/QuizA18_4";
import QuizA19_4 from "./Components/AfterLogin/Business/Exam/QuizA19_4";
import QuizA20_4 from "./Components/AfterLogin/Business/Exam/QuizA20_4";

import Beginnerlevel from "./Components/AfterLogin/BeginnerLevel/Beginnerlevel";
import EasyGrammer from "./Components/AfterLogin/BeginnerLevel/EasyGrammer";
import EasyGrammerfor1 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor1";
import EasyGrammerfor2 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor2";
import EasyGrammerfor3 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor3";
import EasyGrammerfor4 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor4";
import EasyGrammerfor5 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor5";
import EasyGrammerfor6 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor6";
import EasyGrammerfor7 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor7";
import EasyGrammerfor8 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor8";
import EasyGrammerfor9 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor9";
import EasyGrammerfor10 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor10";
import EasyGrammerfor11 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor11";
import EasyGrammerfor12 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor12";
import EasyGrammerfor13 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor13";
import EasyGrammerfor14 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor14";
import EasyGrammerfor15 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor15";
import EasyGrammerfor16 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor16";
import EasyGrammerfor17 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor17";
import EasyGrammerfor18 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor18";
import EasyGrammerfor19 from "./Components/AfterLogin/BeginnerLevel/EasyGrammerfor19";

import Preinterlevel from "./Components/AfterLogin/PreinterLevel/Preinterlevel";
import EasyGrammerforpre1 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre1";
import EasyGrammerforpre2 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre2";
import EasyGrammerforpre3 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre3";
import EasyGrammerforpre4 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre4";
import EasyGrammerforpre5 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre5";
import EasyGrammerforpre6 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre6";
import EasyGrammerforpre7 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre7";
import EasyGrammerforpre8 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre8";
import EasyGrammerforpre9 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre9";
import EasyGrammerforpre10 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre10";
import EasyGrammerforpre11 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre11";
import EasyGrammerforpre12 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre12";
import EasyGrammerforpre13 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre13";
import EasyGrammerforpre14 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre14";
import EasyGrammerforpre15 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre15";
import EasyGrammerforpre16 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre16";
import EasyGrammerforpre17 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre17";
import EasyGrammerforpre18 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre18";
import EasyGrammerforpre19 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre19";
import EasyGrammerforpre20 from "./Components/AfterLogin/PreinterLevel/EasyGrammerforpre20";

import EasyGrammerint1 from "./Components/AfterLogin/Interlevel/EasyGrammerint1";
import EasyGrammerint2 from "./Components/AfterLogin/Interlevel/EasyGrammerint2";
import EasyGrammerint3 from "./Components/AfterLogin/Interlevel/EasyGrammerint3";
import EasyGrammerint4 from "./Components/AfterLogin/Interlevel/EasyGrammerint4";
import EasyGrammerint5 from "./Components/AfterLogin/Interlevel/EasyGrammerint5";
import EasyGrammerint6 from "./Components/AfterLogin/Interlevel/EasyGrammerint6";
import EasyGrammerint7 from "./Components/AfterLogin/Interlevel/EasyGrammerint7";
import EasyGrammerint8 from "./Components/AfterLogin/Interlevel/EasyGrammerint8";
import EasyGrammerint9 from "./Components/AfterLogin/Interlevel/EasyGrammerint9";
import EasyGrammerint10 from "./Components/AfterLogin/Interlevel/EasyGrammerint10";
import EasyGrammerint11 from "./Components/AfterLogin/Interlevel/EasyGrammerint11";
import EasyGrammerint12 from "./Components/AfterLogin/Interlevel/EasyGrammerint12";
import EasyGrammerint13 from "./Components/AfterLogin/Interlevel/EasyGrammerint13";
import EasyGrammerint14 from "./Components/AfterLogin/Interlevel/EasyGrammerint14";
import EasyGrammerint15 from "./Components/AfterLogin/Interlevel/EasyGrammerint15";
import EasyGrammerint16 from "./Components/AfterLogin/Interlevel/EasyGrammerint16";
import EasyGrammerint17 from "./Components/AfterLogin/Interlevel/EasyGrammerint17";
import EasyGrammerint18 from "./Components/AfterLogin/Interlevel/EasyGrammerint18";
import EasyGrammerint19 from "./Components/AfterLogin/Interlevel/EasyGrammerint19";
import EasyGrammerint20 from "./Components/AfterLogin/Interlevel/EasyGrammerint20";

import EasyGrammeradvance1 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance1";
import EasyGrammeradvance2 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance2";
import EasyGrammeradvance3 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance3";
import EasyGrammeradvance4 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance4";
import EasyGrammeradvance5 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance5";
import EasyGrammeradvance6 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance6";
import EasyGrammeradvance7 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance7";
import EasyGrammeradvance8 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance8";
import EasyGrammeradvance9 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance9";
import EasyGrammeradvance10 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance10";
import EasyGrammeradvance11 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance11";
import EasyGrammeradvance12 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance12";
import EasyGrammeradvance13 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance13";
import EasyGrammeradvance14 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance14";
import EasyGrammeradvance15 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance15";
import EasyGrammeradvance16 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance16";
import EasyGrammeradvance17 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance17";
import EasyGrammeradvance18 from "./Components/AfterLogin/InterAdvance/EasyGrammeradvance18";

import ContactUs from "./Components/AfterLogin/ContactUs/ContactUs";
import Box5_Modal from "./Components/AfterLogin/Calender/Box5_Modal";

import Interlevel from "./Components/AfterLogin/Interlevel/Interlevel";

import InterAdvance from "./Components/AfterLogin/InterAdvance/InterAdvance";

import Business from "./Components/AfterLogin/Business/Business";

import Navteacher from "./Components/TeacherPanel/Navteacher";

import Teacherpanel from "./Components/TeacherPanel/Teacherpanel";

function App() {
  const [checksidebar, setsidebar] = useState(false);
  const [Beginner, setbegin] = useState({});
  const [index, setindex] = useState();
  const setside = () => {
    setsidebar(!checksidebar);
  };
  const setbeginner = (index, begin) => {
    setbegin(begin);
    setindex(index);
    console.log("Lesson is : ", index);
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar setside={setside} />
            {
              checksidebar && <SideBar check={checksidebar} setside={setside} />
              // Some Component are in PicsContainer file
            }
            <Home />
            <Achieve />
            <PicsContainer />
            <Footer />
          </Route>
          <Route exact path="/begining">
            <NavBar setside={setside} />
            {checksidebar && <SideBar check={checksidebar} setside={setside} />}
            <Begin />
            <Footer />
          </Route>
          <Route exact path="/ourmethod">
            <NavBar setside={setside} />
            {checksidebar && <SideBar check={checksidebar} setside={setside} />}
            <OurMethod />
            <Footer />
          </Route>
          <Route exact path="/us">
            <NavBar setside={setside} />
            {checksidebar && <SideBar check={checksidebar} setside={setside} />}
            <Us />
            <Footer />
          </Route>  
          <Route exact path="/prices">
            <NavBar setside={setside} />
            {checksidebar && <SideBar check={checksidebar} setside={setside} />}
            <Prices />
            <PriceTable />
            <Footer />
          </Route>
          <Route exact path="/help">
            <NavBar setside={setside} />
            {checksidebar && <SideBar check={checksidebar} setside={setside} />}
            <Help />
            <Helpdata />
            <Footer />
          </Route>
          <Route exact path="/signin">
            <NavBar setside={setside} />
            {checksidebar && <SideBar check={checksidebar} setside={setside} />}
            <Signin />
            <Footer />
          </Route>
          <Route exact path="/forgetpass">
            <NavBar setside={setside} />
            {checksidebar && <SideBar check={checksidebar} setside={setside} />}
            <ForgetPass />
            <Footer />
          </Route>
          <Route exact path="/signup">
            <NavBar setside={setside} />
            {checksidebar && <SideBar check={checksidebar} setside={setside} />}
            <Register />
            <Footer />
          </Route>
          <Route exact path="/afterlogin">
            <Navbar />
            <Changeform />
            <Footer />
          </Route>
          <Route exact path="/lessons">
            <Navbar />
            <Lessons setbeginner={setbeginner} />
            <Footer />
          </Route>
          <Route exact path="/advance">
            <Navbar />
            <AdvancePage />
            <Footer />
          </Route>
          <Route exact path="/beginnerlevel">
            <Navbar />
            <Beginnerlevel Beginner={Beginner} index={index} />
            <Footer />
          </Route>
          <Route exact path="/calender">
            <Navbar />
            <Box5_Modal />
            <Footer />
          </Route>
          <Route exact path={beginner[0].LinkFluency}>
            <Navbar />
            <Quiz1_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[1].LinkFluency}>
            <Navbar />
            <Quiz2_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[2].LinkFluency}>
            <Navbar />
            <Quiz3_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[3].LinkFluency}>
            <Navbar />
            <Quiz4_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[4].LinkFluency}>
            <Navbar />
            <Quiz5_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[5].LinkFluency}>
            <Navbar />
            <Quiz6_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[6].LinkFluency}>
            <Navbar />
            <Quiz7_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[7].LinkFluency}>
            <Navbar />
            <Quiz8_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[8].LinkFluency}>
            <Navbar />
            <Quiz9_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[9].LinkFluency}>
            <Navbar />
            <Quiz10_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[10].LinkFluency}>
            <Navbar />
            <Quiz11_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[11].LinkFluency}>
            <Navbar />
            <Quiz12_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[12].LinkFluency}>
            <Navbar />
            <Quiz13_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[13].LinkFluency}>
            <Navbar />
            <Quiz14_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[14].LinkFluency}>
            <Navbar />
            <Quiz15_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[15].LinkFluency}>
            <Navbar />
            <Quiz16_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[16].LinkFluency}>
            <Navbar />
            <Quiz17_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[17].LinkFluency}>
            <Navbar />
            <Quiz18_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[18].LinkFluency}>
            <Navbar />
            <Quiz19_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[19].LinkFluency}>
            <Navbar />
            <Quiz20_3 />
            <Footer />
          </Route>
          <Route exact path={beginner[0].LinkExam}>
            <Navbar />
            <Quiz1_4 />
            <Footer />
          </Route>
          <Route exact path={beginner[1].LinkExam}>
            <Navbar />
            <Quiz2_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[2].LinkExam}>
            <Navbar />
            <Quiz3_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[3].LinkExam}>
            <Navbar />
            <Quiz4_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[4].LinkExam}>
            <Navbar />
            <Quiz5_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[5].LinkExam}>
            <Navbar />
            <Quiz6_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[6].LinkExam}>
            <Navbar />
            <Quiz7_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[7].LinkExam}>
            <Navbar />
            <Quiz8_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[8].LinkExam}>
            <Navbar />
            <Quiz9_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[9].LinkExam}>
            <Navbar />
            <Quiz10_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[10].LinkExam}>
            <Navbar />
            <Quiz11_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[11].LinkExam}>
            <Navbar />
            <Quiz12_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[12].LinkExam}>
            <Navbar />
            <Quiz13_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[13].LinkExam}>
            <Navbar />
            <Quiz14_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[14].LinkExam}>
            <Navbar />
            <Quiz15_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[15].LinkExam}>
            <Navbar />
            <Quiz16_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={beginner[16].LinkExam}>
            <Navbar />
            <Quiz17_4 />
            <Footer />
          </Route>
          <Route exact path={beginner[17].LinkExam}>
            <Navbar />
            <Quiz18_4 />
            <Footer />
          </Route>
          <Route exact path={beginner[18].LinkExam}>
            <Navbar />
            <Quiz19_4 />
            <Footer />
          </Route>
          <Route exact path={beginner[19].LinkExam}>
            <Navbar />
            <Quiz20_4 />
            <Footer />
          </Route>
          <Route exact path={beginner[0].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammer pages={4} />
            <Footer />
          </Route>
          <Route exact path={beginner[1].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor1 pages={10} />
            <Footer />
          </Route>
          <Route exact path={beginner[2].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor2 pages={8} />
            <Footer />
          </Route>
          <Route exact path={beginner[3].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor3 pages={5} />
            <Footer />
          </Route>
          <Route exact path={beginner[4].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor4 pages={7} />
            <Footer />
          </Route>
          <Route exact path={beginner[5].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor5 pages={6} />
            <Footer />
          </Route>
          <Route exact path={beginner[6].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor6 pages={7} />
            <Footer />
          </Route>
          <Route exact path={beginner[7].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor7 pages={7} />
            <Footer />
          </Route>
          <Route exact path={beginner[8].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor8 pages={8} />
            <Footer />
          </Route>
          <Route exact path={beginner[9].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor9 pages={6} />
            <Footer />
          </Route>
          <Route exact path={beginner[10].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor10 pages={5} />
            <Footer />
          </Route>
          <Route exact path={beginner[11].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor11 pages={9} />
            <Footer />
          </Route>
          <Route exact path={beginner[12].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor12 pages={5} />
            <Footer />
          </Route>
          <Route exact path={beginner[13].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor13 pages={3} />
            <Footer />
          </Route>
          <Route exact path={beginner[14].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor14 pages={10} />
            <Footer />
          </Route>
          <Route exact path={beginner[15].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor15 pages={10} />
            <Footer />
          </Route>
          <Route exact path={beginner[16].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor16 pages={3} />
            <Footer />
          </Route>
          <Route exact path={beginner[17].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor17 pages={7} />
            <Footer />
          </Route>
          <Route exact path={beginner[18].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor18 pages={6} />
            <Footer />
          </Route>
          <Route exact path={beginner[19].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor19 pages={6} />
            <Footer />
          </Route>
          <Route exact path="/preinterlevel">
            <Navbar />
            <Preinterlevel Beginner={Beginner} index={index} />
            <Footer />
          </Route>
          <Route exact path={preinter[0].LinkFluency}>
            <Navbar />
            <QuizP1_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[1].LinkFluency}>
            <Navbar />
            <QuizP2_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[2].LinkFluency}>
            <Navbar />
            <QuizP3_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[3].LinkFluency}>
            <Navbar />
            <QuizP4_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[4].LinkFluency}>
            <Navbar />
            <QuizP5_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[5].LinkFluency}>
            <Navbar />
            <QuizP6_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[6].LinkFluency}>
            <Navbar />
            <QuizP7_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[7].LinkFluency}>
            <Navbar />
            <QuizP8_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[8].LinkFluency}>
            <Navbar />
            <QuizP9_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[9].LinkFluency}>
            <Navbar />
            <QuizP10_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[10].LinkFluency}>
            <Navbar />
            <QuizP11_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[11].LinkFluency}>
            <Navbar />
            <QuizP12_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[12].LinkFluency}>
            <Navbar />
            <QuizP13_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[13].LinkFluency}>
            <Navbar />
            <QuizP14_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[14].LinkFluency}>
            <Navbar />
            <QuizP15_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[15].LinkFluency}>
            <Navbar />
            <QuizP16_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[16].LinkFluency}>
            <Navbar />
            <QuizP17_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[17].LinkFluency}>
            <Navbar />
            <QuizP18_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[18].LinkFluency}>
            <Navbar />
            <QuizP19_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[19].LinkFluency}>
            <Navbar />
            <QuizP20_3 />
            <Footer />
          </Route>
          <Route exact path={preinter[0].LinkExam}>
            <Navbar />
            <QuizP1_4 />
            <Footer />
          </Route>
          <Route exact path={preinter[1].LinkExam}>
            <Navbar />
            <QuizP2_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[2].LinkExam}>
            <Navbar />
            <QuizP3_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[3].LinkExam}>
            <Navbar />
            <QuizP4_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[4].LinkExam}>
            <Navbar />
            <QuizP5_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[5].LinkExam}>
            <Navbar />
            <QuizP6_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[6].LinkExam}>
            <Navbar />
            <QuizP7_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[7].LinkExam}>
            <Navbar />
            <QuizP8_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[8].LinkExam}>
            <Navbar />
            <QuizP9_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[9].LinkExam}>
            <Navbar />
            <QuizP10_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[10].LinkExam}>
            <Navbar />
            <QuizP11_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[11].LinkExam}>
            <Navbar />
            <QuizP12_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[12].LinkExam}>
            <Navbar />
            <QuizP13_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[13].LinkExam}>
            <Navbar />
            <QuizP14_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[14].LinkExam}>
            <Navbar />
            <QuizP15_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[15].LinkExam}>
            <Navbar />
            <QuizP16_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={preinter[16].LinkExam}>
            <Navbar />
            <QuizP17_4 />
            <Footer />
          </Route>
          <Route exact path={preinter[17].LinkExam}>
            <Navbar />
            <QuizP18_4 />
            <Footer />
          </Route>
          <Route exact path={preinter[18].LinkExam}>
            <Navbar />
            <QuizP19_4 />
            <Footer />
          </Route>
          <Route exact path={preinter[19].LinkExam}>
            <Navbar />
            <QuizP20_4 />
            <Footer />
          </Route>
          <Route exact path="/contactus">
            <Navbar />
            <ContactUs />
            <Footer />
          </Route>
          <Route exact path="/interlevel">
            <Navbar />
            <Interlevel Beginner={Beginner} index={index} />
            <Footer />
          </Route>
          <Route exact path={inter[0].LinkFluency}>
            <Navbar />
            <Quizi1_3 />
            <Footer />
          </Route>
          <Route exact path={inter[1].LinkFluency}>
            <Navbar />
            <Quizi2_3 />
            <Footer />
          </Route>
          <Route exact path={inter[2].LinkFluency}>
            <Navbar />
            <Quizi3_3 />
            <Footer />
          </Route>
          <Route exact path={inter[3].LinkFluency}>
            <Navbar />
            <Quizi4_3 />
            <Footer />
          </Route>
          <Route exact path={inter[4].LinkFluency}>
            <Navbar />
            <Quizi5_3 />
            <Footer />
          </Route>
          <Route exact path={inter[5].LinkFluency}>
            <Navbar />
            <Quizi6_3 />
            <Footer />
          </Route>
          <Route exact path={inter[6].LinkFluency}>
            <Navbar />
            <Quizi7_3 />
            <Footer />
          </Route>
          <Route exact path={inter[7].LinkFluency}>
            <Navbar />
            <Quizi8_3 />
            <Footer />
          </Route>
          <Route exact path={inter[8].LinkFluency}>
            <Navbar />
            <Quizi9_3 />
            <Footer />
          </Route>
          <Route exact path={inter[9].LinkFluency}>
            <Navbar />
            <Quizi10_3 />
            <Footer />
          </Route>
          <Route exact path={inter[10].LinkFluency}>
            <Navbar />
            <Quizi11_3 />
            <Footer />
          </Route>
          <Route exact path={inter[11].LinkFluency}>
            <Navbar />
            <Quizi12_3 />
            <Footer />
          </Route>
          <Route exact path={inter[12].LinkFluency}>
            <Navbar />
            <Quizi13_3 />
            <Footer />
          </Route>
          <Route exact path={inter[13].LinkFluency}>
            <Navbar />
            <Quizi14_3 />
            <Footer />
          </Route>
          <Route exact path={inter[14].LinkFluency}>
            <Navbar />
            <Quizi15_3 />
            <Footer />
          </Route>
          <Route exact path={inter[15].LinkFluency}>
            <Navbar />
            <Quizi16_3 />
            <Footer />
          </Route>
          <Route exact path={inter[16].LinkFluency}>
            <Navbar />
            <Quizi17_3 />
            <Footer />
          </Route>
          <Route exact path={inter[17].LinkFluency}>
            <Navbar />
            <Quizi18_3 />
            <Footer />
          </Route>
          <Route exact path={inter[18].LinkFluency}>
            <Navbar />
            <Quizi19_3 />
            <Footer />
          </Route>
          <Route exact path={inter[19].LinkFluency}>
            <Navbar />
            <Quizi20_3 />
            <Footer />
          </Route>
          <Route exact path={inter[0].LinkExam}>
            <Navbar />
            <Quizi1_4 />
            <Footer />
          </Route>
          <Route exact path={inter[1].LinkExam}>
            <Navbar />
            <Quizi2_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[2].LinkExam}>
            <Navbar />
            <Quizi3_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[3].LinkExam}>
            <Navbar />
            <Quizi4_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[4].LinkExam}>
            <Navbar />
            <Quizi5_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[5].LinkExam}>
            <Navbar />
            <Quizi6_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[6].LinkExam}>
            <Navbar />
            <Quizi7_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[7].LinkExam}>
            <Navbar />
            <Quizi8_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[8].LinkExam}>
            <Navbar />
            <Quizi9_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[9].LinkExam}>
            <Navbar />
            <Quizi10_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[10].LinkExam}>
            <Navbar />
            <Quizi11_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[11].LinkExam}>
            <Navbar />
            <Quizi12_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[12].LinkExam}>
            <Navbar />
            <Quizi13_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[13].LinkExam}>
            <Navbar />
            <Quizi14_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[14].LinkExam}>
            <Navbar />
            <Quizi15_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[15].LinkExam}>
            <Navbar />
            <Quizi16_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={inter[16].LinkExam}>
            <Navbar />
            <Quizi17_4 />
            <Footer />
          </Route>
          <Route exact path={inter[17].LinkExam}>
            <Navbar />
            <Quizi18_4 />
            <Footer />
          </Route>
          <Route exact path={inter[18].LinkExam}>
            <Navbar />
            <Quizi19_4 />
            <Footer />
          </Route>
          <Route exact path={inter[19].LinkExam}>
            <Navbar />
            <Quizi20_4 />
            <Footer />
          </Route>
          <Route exact path="/interadvance">
            <Navbar />
            <InterAdvance Beginner={Beginner} index={index} />
            <Footer />
          </Route>
          <Route exact path={interadvance[0].LinkFluency}>
            <Navbar />
            <QuizID1_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[1].LinkFluency}>
            <Navbar />
            <QuizID2_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[2].LinkFluency}>
            <Navbar />
            <QuizID3_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[3].LinkFluency}>
            <Navbar />
            <QuizID4_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[4].LinkFluency}>
            <Navbar />
            <QuizID5_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[5].LinkFluency}>
            <Navbar />
            <QuizID6_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[6].LinkFluency}>
            <Navbar />
            <QuizID7_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[7].LinkFluency}>
            <Navbar />
            <QuizID8_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[8].LinkFluency}>
            <Navbar />
            <QuizID9_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[9].LinkFluency}>
            <Navbar />
            <QuizID10_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[10].LinkFluency}>
            <Navbar />
            <QuizID11_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[11].LinkFluency}>
            <Navbar />
            <QuizID12_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[12].LinkFluency}>
            <Navbar />
            <QuizID13_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[13].LinkFluency}>
            <Navbar />
            <QuizID14_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[14].LinkFluency}>
            <Navbar />
            <QuizID15_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[15].LinkFluency}>
            <Navbar />
            <QuizID16_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[16].LinkFluency}>
            <Navbar />
            <QuizID17_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[17].LinkFluency}>
            <Navbar />
            <QuizID18_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[18].LinkFluency}>
            <Navbar />
            <QuizID19_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[19].LinkFluency}>
            <Navbar />
            <QuizID20_3 />
            <Footer />
          </Route>
          <Route exact path={interadvance[0].LinkExam}>
            <Navbar />
            <Quizid1_4 />
            <Footer />
          </Route>
          <Route exact path={interadvance[1].LinkExam}>
            <Navbar />
            <Quizid2_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[2].LinkExam}>
            <Navbar />
            <Quizid3_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[3].LinkExam}>
            <Navbar />
            <Quizid4_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[4].LinkExam}>
            <Navbar />
            <Quizid5_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[5].LinkExam}>
            <Navbar />
            <Quizid6_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[6].LinkExam}>
            <Navbar />
            <Quizid7_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[7].LinkExam}>
            <Navbar />
            <Quizid8_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[8].LinkExam}>
            <Navbar />
            <Quizid9_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[9].LinkExam}>
            <Navbar />
            <Quizid10_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[10].LinkExam}>
            <Navbar />
            <Quizid11_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[11].LinkExam}>
            <Navbar />
            <Quizid12_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[12].LinkExam}>
            <Navbar />
            <Quizid13_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[13].LinkExam}>
            <Navbar />
            <Quizid14_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[14].LinkExam}>
            <Navbar />
            <Quizid15_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[15].LinkExam}>
            <Navbar />
            <Quizid16_4 />
            <Footer />
          </Route>{" "}
          <Route exact path={interadvance[16].LinkExam}>
            <Navbar />
            <Quizid17_4 />
            <Footer />
          </Route>
          <Route exact path={interadvance[17].LinkExam}>
            <Navbar />
            <Quizid18_4 />
            <Footer />
          </Route>
          <Route exact path={interadvance[18].LinkExam}>
            <Navbar />
            <Quizid19_4 />
            <Footer />
          </Route>
          <Route exact path={interadvance[19].LinkExam}>
            <Navbar />
            <Quizid20_4 />
            <Footer />
          </Route>
          <Route exact path="/businesslevel">
            <Navbar />
            <Business Beginner={Beginner} index={index} />
            <Footer />
          </Route>
          <Route exact path={business[0].LinkFluency}>
            <Navbar />
            <QuizA1_3 />
            <Footer />
          </Route>
          <Route exact path={business[1].LinkFluency}>
            <Navbar />
            <QuizA2_3 />
            <Footer />
          </Route>
          <Route exact path={business[2].LinkFluency}>
            <Navbar />
            <QuizA3_3 />
            <Footer />
          </Route>
          <Route exact path={business[3].LinkFluency}>
            <Navbar />
            <QuizA4_3 />
            <Footer />
          </Route>
          <Route exact path={business[4].LinkFluency}>
            <Navbar />
            <QuizA5_3 />
            <Footer />
          </Route>
          <Route exact path={business[5].LinkFluency}>
            <Navbar />
            <QuizA6_3 />
            <Footer />
          </Route>
          <Route exact path={business[6].LinkFluency}>
            <Navbar />
            <QuizA7_3 />
            <Footer />
          </Route>
          <Route exact path={business[7].LinkFluency}>
            <Navbar />
            <QuizA8_3 />
            <Footer />
          </Route>
          <Route exact path={business[8].LinkFluency}>
            <Navbar />
            <QuizA9_3 />
            <Footer />
          </Route>
          <Route exact path={business[9].LinkFluency}>
            <Navbar />
            <QuizA10_3 />
            <Footer />
          </Route>
          <Route exact path={business[10].LinkFluency}>
            <Navbar />
            <QuizA11_3 />
            <Footer />
          </Route>
          <Route exact path={business[11].LinkFluency}>
            <Navbar />
            <QuizA12_3 />
            <Footer />
          </Route>
          <Route exact path={business[12].LinkFluency}>
            <Navbar />
            <QuizA13_3 />
            <Footer />
          </Route>
          <Route exact path={business[13].LinkFluency}>
            <Navbar />
            <QuizA14_3 />
            <Footer />
          </Route>
          <Route exact path={business[14].LinkFluency}>
            <Navbar />
            <QuizA15_3 />
            <Footer />
          </Route>
          <Route exact path={business[15].LinkFluency}>
            <Navbar />
            <QuizA16_3 />
            <Footer />
          </Route>
          <Route exact path={business[16].LinkFluency}>
            <Navbar />
            <QuizA17_3 />
            <Footer />
          </Route>
          <Route exact path={business[17].LinkFluency}>
            <Navbar />
            <QuizA18_3 />
            <Footer />
          </Route>
          <Route exact path={business[18].LinkFluency}>
            <Navbar />
            <QuizA19_3 />
            <Footer />
          </Route>
          <Route exact path={business[19].LinkFluency}>
            <Navbar />
            <QuizA20_3 />
            <Footer />
          </Route>
          <Route exact path={business[0].LinkExam}>
            <Navbar />
            <QuizA1_4 />
            <Footer />
          </Route>
          <Route exact path={business[1].LinkExam}>
            <Navbar />
            <QuizA2_4 />
            <Footer />
          </Route>
          <Route exact path={business[2].LinkExam}>
            <Navbar />
            <QuizA3_4 />
            <Footer />
          </Route>
          <Route exact path={business[3].LinkExam}>
            <Navbar />
            <QuizA4_4 />
            <Footer />
          </Route>
          <Route exact path={business[4].LinkExam}>
            <Navbar />
            <QuizA5_4 />
            <Footer />
          </Route>
          <Route exact path={business[5].LinkExam}>
            <Navbar />
            <QuizA6_4 />
            <Footer />
          </Route>
          <Route exact path={business[6].LinkExam}>
            <Navbar />
            <QuizA7_4 />
            <Footer />
          </Route>
          <Route exact path={business[7].LinkExam}>
            <Navbar />
            <QuizA8_4 />
            <Footer />
          </Route>
          <Route exact path={business[8].LinkExam}>
            <Navbar />
            <QuizA9_4 />
            <Footer />
          </Route>
          <Route exact path={business[9].LinkExam}>
            <Navbar />
            <QuizA10_4 />
            <Footer />
          </Route>
          <Route exact path={business[10].LinkExam}>
            <Navbar />
            <QuizA11_4 />
            <Footer />
          </Route>
          <Route exact path={business[11].LinkExam}>
            <Navbar />
            <QuizA12_4 />
            <Footer />
          </Route>
          <Route exact path={business[12].LinkExam}>
            <Navbar />
            <QuizA13_4 />
            <Footer />
          </Route>
          <Route exact path={business[13].LinkExam}>
            <Navbar />
            <QuizA14_4 />
            <Footer />
          </Route>
          <Route exact path={business[14].LinkExam}>
            <Navbar />
            <QuizA15_4 />
            <Footer />
          </Route>
          <Route exact path={business[15].LinkExam}>
            <Navbar />
            <QuizA16_4 />
            <Footer />
          </Route>
          <Route exact path={business[16].LinkExam}>
            <Navbar />
            <QuizA17_4 />
            <Footer />
          </Route>
          <Route exact path={business[17].LinkExam}>
            <Navbar />
            <QuizA18_4 />
            <Footer />
          </Route>
          <Route exact path={business[18].LinkExam}>
            <Navbar />
            <QuizA19_4 />
            <Footer />
          </Route>
          <Route exact path={business[19].LinkExam}>
            <Navbar />
            <QuizA20_4 />
            <Footer />
          </Route>
          <Route exact path={preinter[0].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre1 pages={9} />
            <Footer />
          </Route>
          <Route exact path={preinter[1].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre2 pages={9} />
            <Footer />
          </Route>
          <Route exact path={preinter[2].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre3 pages={10} />
            <Footer />
          </Route>
          <Route exact path={preinter[3].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre4 pages={6} />
            <Footer />
          </Route>
          <Route exact path={preinter[4].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre5 pages={6} />
            <Footer />
          </Route>
          <Route exact path={preinter[5].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre6 pages={8} />
            <Footer />
          </Route>
          <Route exact path={preinter[6].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre7 pages={5} />
            <Footer />
          </Route>
          <Route exact path={preinter[7].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre8 pages={7} />
            <Footer />
          </Route>
          <Route exact path={preinter[8].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre9 pages={4} />
            <Footer />
          </Route>
          <Route exact path={preinter[9].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre10 pages={3} />
            <Footer />
          </Route>
          <Route exact path={preinter[10].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre11 pages={6} />
            <Footer />
          </Route>
          <Route exact path={preinter[11].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre12 pages={4} />
            <Footer />
          </Route>
          <Route exact path={preinter[12].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre13 pages={6} />
            <Footer />
          </Route>
          <Route exact path={preinter[13].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre14 pages={7} />
            <Footer />
          </Route>
          <Route exact path={preinter[14].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre15 pages={3} />
            <Footer />
          </Route>
          <Route exact path={preinter[15].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre16 pages={7} />
            <Footer />
          </Route>
          <Route exact path={preinter[16].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre17 pages={7} />
            <Footer />
          </Route>
          <Route exact path={preinter[17].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre18 pages={5} />
            <Footer />
          </Route>
          <Route exact path={preinter[18].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre19 pages={10} />
            <Footer />
          </Route>
          <Route exact path={preinter[19].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre20 pages={10} />
            <Footer />
          </Route>
          <Route exact path={inter[0].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint1 pages={4} />
            <Footer />
          </Route>
          <Route exact path={inter[1].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint2 pages={8} />
            <Footer />
          </Route>
          <Route exact path={inter[2].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint3 pages={3} />
            <Footer />
          </Route>
          <Route exact path={inter[3].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint4 pages={5} />
            <Footer />
          </Route>
          <Route exact path={inter[4].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint5 pages={5} />
            <Footer />
          </Route>
          <Route exact path={inter[5].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint6 pages={5} />
            <Footer />
          </Route>
          <Route exact path={inter[6].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint7 pages={3} />
            <Footer />
          </Route>
          <Route exact path={inter[7].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint8 pages={6} />
            <Footer />
          </Route>
          <Route exact path={inter[8].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint9 pages={3} />
            <Footer />
          </Route>
          <Route exact path={inter[9].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint10 pages={9} />
            <Footer />
          </Route>
          <Route exact path={inter[10].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint11 pages={3} />
            <Footer />
          </Route>
          <Route exact path={inter[11].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint12 pages={8} />
            <Footer />
          </Route>
          <Route exact path={inter[12].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint13 pages={7} />
            <Footer />
          </Route>
          <Route exact path={inter[13].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint14 pages={6} />
            <Footer />
          </Route>
          <Route exact path={inter[14].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint15 pages={2} />
            <Footer />
          </Route>
          <Route exact path={inter[15].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint16 pages={6} />
            <Footer />
          </Route>
          <Route exact path={inter[16].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint17 pages={5} />
            <Footer />
          </Route>
          <Route exact path={inter[17].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint18 pages={4} />
            <Footer />
          </Route>
          <Route exact path={inter[18].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint19 pages={3} />
            <Footer />
          </Route>
          <Route exact path={inter[19].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint20 pages={5} />
            <Footer />
          </Route>
          <Route exact path={interadvance[0].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance1 pages={3} />
            <Footer />
          </Route>
          <Route exact path={interadvance[1].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance2 pages={3} />
            <Footer />
          </Route>
          <Route exact path={interadvance[2].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance3 pages={3} />
            <Footer />
          </Route>
          <Route exact path={interadvance[3].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance4 pages={3} />
            <Footer />
          </Route>
          <Route exact path={interadvance[4].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance5 pages={2} />
            <Footer />
          </Route>
          <Route exact path={interadvance[5].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance6 pages={5} />
            <Footer />
          </Route>
          <Route exact path={interadvance[6].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance7 pages={3} />
            <Footer />
          </Route>
          <Route exact path={interadvance[7].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance8 pages={3} />
            <Footer />
          </Route>
          <Route exact path={interadvance[8].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance9 pages={7} />
            <Footer />
          </Route>
          <Route exact path={interadvance[9].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance10 pages={5} />
            <Footer />
          </Route>
          <Route exact path={interadvance[10].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance11 pages={4} />
            <Footer />
          </Route>
          <Route exact path={interadvance[11].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance12 pages={7} />
            <Footer />
          </Route>
          <Route exact path={interadvance[12].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance13 pages={7} />
            <Footer />
          </Route>
          <Route exact path={interadvance[13].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance14 pages={3} />
            <Footer />
          </Route>
          <Route exact path={interadvance[14].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance15 pages={11} />
            <Footer />
          </Route>
          <Route exact path={interadvance[15].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance16 pages={5} />
            <Footer />
          </Route>
          <Route exact path={interadvance[17].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance18 pages={4} />
            <Footer />
          </Route>
          <Route exact path={interadvance[18].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint13 pages={7} />
            <Footer />
          </Route>
          <Route exact path={interadvance[19].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint20 pages={5} />
            <Footer />
          </Route>
          <Route exact path={business[0].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor5 pages={6} />
            <Footer />
          </Route>
          <Route exact path={business[1].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint5 pages={5} />
            <Footer />
          </Route>
          <Route exact path={business[2].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint12 pages={8} />

            <Footer />
          </Route>
          <Route exact path={business[3].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint1 pages={4} />
            <Footer />
          </Route>
          <Route exact path={business[4].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerforpre3 pages={10} />
            <Footer />
          </Route>
          <Route exact path={business[5].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance7 pages={3} />
            <Footer />
          </Route>
          <Route exact path={business[6].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammeradvance4 pages={3} />
            <Footer />
          </Route>
          <Route exact path={business[7].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint2 pages={8} />
            <Footer />
          </Route>
          <Route exact path={business[8].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor14 pages={10} />
            <Footer />
          </Route>
          <Route exact path={business[9].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor16 pages={3} />
            <Footer />
          </Route>
          <Route exact path={business[10].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerfor6 pages={7} />
            <Footer />
          </Route>
          <Route exact path={business[11].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint1 pages={4} />
            <Footer />
          </Route>
          <Route exact path={business[12].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint5 pages={5} />

            <Footer />
          </Route>
          <Route exact path={business[13].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint6 pages={5} />

            <Footer />
          </Route>
          <Route exact path={business[14].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint9 pages={3} />
            <Footer />
          </Route>
          <Route exact path={business[15].linkOfEasyGrammer}>
            <Navbar />
            <EasyGrammerint16 pages={6} />
            <Footer />
          </Route>
          <Route exact path={business[16].linkOfEasyGrammer}>
          <Navbar />
          <EasyGrammeradvance12 pages={7} />
          <Footer />
        </Route>
        <Route exact path={business[17].linkOfEasyGrammer}>
          <Navbar />
          <EasyGrammeradvance8 pages={3} />
          <Footer />
        </Route>
        <Route exact path={business[18].linkOfEasyGrammer}>
          <Navbar />
          <EasyGrammerint15 pages={2} />
          <Footer />
        </Route>
        <Route exact path={business[19].linkOfEasyGrammer}>
          <Navbar />
          <EasyGrammeradvance15 pages={11} />
          <Footer />
        </Route>
        <Route exact path="/teacherpanel">
            <Navteacher/>
              <Teacherpanel/>
            <Footer/>
        </Route>
          {
            // start from here
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
