import './App.css';
import Fullname from './profile/profilecomponent/fullname';
import Profession from './profile/profilecomponent/profession';
import Bio from './profile/profilecomponent/bio';
import Image from './images/image';
import pic from "./images/pic.jpg";
function App() {

  const fname = "Bilel Jabrane"
  const bio = "In this checkpoint, we are going to use the props skill that we have learned during this super skill to create a personalized profile page."
  const profession = "Web Developer" 
  return (
    <div className="App">
         <Fullname fname = {fname} />
         <Bio  bio = {bio}/>
         <Profession profession = {profession}/>
        <Image> <img height={300} width={230} src={pic} /> </Image>
    </div>
  );
}

export default App;
