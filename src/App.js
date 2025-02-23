import './App.css';
import './components/Greeting/Greeting.css';
import './components/Random/Random.css';
import './components/CreditCard/CreditCard.css';
import {v4} from 'uuid'
import { IdCard } from './components/IdCard/IdCard.js';
import { Greeting } from './components/Greeting/Greeting.js';
import { Random } from './components/Random/Random.js';
import { BoxColor } from './components/BoxColor/BoxColor.js';
import { CreditCard } from './components/CreditCard/CreditCard.js';
import { Rating } from './components/Rating/Rating.js';
import { DriverCard } from './components/DriverCard/DriverCard.js';
import { Dice } from './components/Dice/Dice.js';
import { Carousel } from './components/Carousel/Carousel.js';
import { NumbersTable } from './components/NumbersTable/NumbersTable.js';


//ITERATION 1
const userInfo = 
  [{ 
    id: v4(),
    lastName:'Doe',
    firstName:'John',
    gender:'male',
    height:178,
    birth:"1992-07-14",
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: v4(),
    lastName:'Delores',
    firstName:'Obrien',
    gender:'female',
    height:172,
    birth: "1988-05-11",
    picture:"https://randomuser.me/api/portraits/women/44.jpg",
  }]

function App() {
    return (
    <div className="App">

      {/* ITERATION 1 */}
      <h1>ITERATION 1 // ID Cards</h1>
      {userInfo.map((user) => {
        return <IdCard key={user.id} {...user} />
      })}

      {/* ITERATION 2 */}
      <h1>ITERATION 2 // Greetings</h1>
      <div className="greetingsContainer">
        <div className="greetings">
          <Greeting lang="de">Ludwig</Greeting>
          <Greeting lang="fr">François</Greeting>
          <Greeting lang="en">Kate</Greeting>
          <Greeting lang="es">Maria</Greeting>
        </div>
      </div>

      {/* ITERATION 3 */}
      <h1>ITERATION 3 // Random</h1>
      <div className="randomNumberContainer">
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
      </div>

      {/* ITERATION 4 */}
      <h1>ITERATION 4 // BoxColor</h1>
      <div className="boxColorContainer">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      {/* ITERATION 5 */}
      <h1>ITERATION 5 // CreditCard</h1>
      <div className="creditCardContainer">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />

      </div>

      {/* ITERATION 6 */}
      <h1>ITERATION 6 // Rating</h1>
      <div className="ratingsContainer">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      {/* ITERATION 7 */}
      <h1>ITERATION 7 // DriverCard</h1>
      <div className="driverCardContainer">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
      </div>

      <div>
      
      {/* ITERATION 10 */}
      <h1>ITERATION 10 // Dice</h1>
      <Dice />
      
      </div>
      
    <div>
      {/* ITERATION 11 */}
      <h1>ITERATION 11 // Carousel</h1>
      <Carousel images={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]} />
    </div>

    <div>
      {/* ITERATION 12 */}
      <h1>ITERATION 12 // NumbersTable</h1>
      <NumbersTable limit={12} />
    </div>

    
    

    </div>
  );
}

export default App;