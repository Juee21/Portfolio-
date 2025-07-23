import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import ContactForm from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
function App(){
    return(
        <div classNeame="App">
     
    <Navbar/>
    <Intro/>
    <Skills/>
    <ContactForm/>
    
    <Footer/>
        </div>
    );
}
export default App;