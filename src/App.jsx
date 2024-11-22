import './App.css'
import Button from "./components/button/Button.jsx";
import DashboardBlock from "./components/dashboardBlock/DashboardBlock.jsx";
import bagImage1 from './assets/bag_1.png';
import bagImage2 from './assets/bag_2.png';
import bagImage3 from './assets/bag_3.png';
import bagImage4 from './assets/bag_4.png';
import Footer from "./components/footer/Footer.jsx";
import boxImage from './assets/brand.png';
import girlImage from './assets/our_story.png';

function App() {

    /*const printName =(event) =>{
      console.log(event.target.textContent);
    };*/
    /*function printName(event){
      console.log(event.target.textContent)
    }*/

    return (
        <>
            <h1>Handbags & Purses</h1>
          {/* <nav>
          <button className="Collection" type="button" disabled={false} onClick={printName}> button 1</button>
          <button className="Collection2" type="button" disabled={false} onClick={printName}> button 2</button>
          <button className="Collection3" type="button" disabled={true} onClick={printName}> button 3</button>
        </nav>*/}
            <Button
                onDisabled={false}
                text="to the collection"
                onClick={() => console.log("to the collection")}
                type="button"
            />
            <Button
                onDisabled={false}
                text="shop all bags"
                onClick={() => console.log("shop all bags")}
                type="button"
            />
            <Button
                onDisabled={true}
                text="pre-orders"
                onClick={() => console.log("pre-orders")}
                type="button"
            />
            <main>
                <DashboardBlock
                    image={bagImage1}
                    span="Best seller"
                    text="The handy bag"
                    price='€400,-'
                />
                <DashboardBlock
                    image={bagImage2}
                    span="Best seller"
                    text="The stylish bag"
                    price='€250-'
                />
                <DashboardBlock
                    image={bagImage3}
                    span="New collection"
                    text="The simple bag"
                    price='€300,-'
                />
                <DashboardBlock
                    image={bagImage4}
                    span="New collection"
                    text="The trandy bag"
                    price='€150,-'
                />
            </main>
            <footer>
                <Footer
                    image={false}
                    title="OUR STORY"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Footer
                    image={boxImage}
                    title={false}
                    text={false}
                />
                <Footer
                    image={girlImage}
                    title={false}
                    text={false}
                />
                <Footer
                    image={false}
                    title="OUR STORY"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </footer>
            </>
            )
            }

            export default App
