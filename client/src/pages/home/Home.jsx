import { Header } from "../../components/header/Header";
import { Leftbar } from "../../components/leftbar/Leftbar";
import {Feed} from '../../components/feed/Feed'
import {Rightbar} from '../../components/rightbar/Rightbar'
import './home.css'
export const Home = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
