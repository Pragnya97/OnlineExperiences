
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Card from "./components/Card";
import Travel from './components/Travel';
import Data from "./data.js";
import Traveldata from './traveldata.js'
import Travelcard from './components/Travelcard';

console.log(Data)
function App() {

  const travelcards = Traveldata.map(item => {
    return <Travelcard key = {item.id}
    {...item} />
  })
  

  const cards = Data.map(item => {
    return <Card 
    // key={item.id}
    // img = {item.coverImg}
    // rating = {item.stats.rating}
    // reviewcount = {item.stats.reviewCount}
    // location = {item.location}
    // title = {item.title}
    // price = {item.price} 
    // openspots = {item.openSpots}

    key = {item.id}
    // item = {item}
    {...item}

 
 /> })
  return (
    <div className="App">
     {/* <Header /> */}
     <Travel />
     {/* <Main /> */}
     {/* <section className="cards-list"> {cards} </section> */}
    <section className='travelcards'>{travelcards}</section>
    


     
     
   
    </div>
  );
}

export default App;
