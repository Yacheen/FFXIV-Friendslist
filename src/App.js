import "./CSS/App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Footer from './components/Footer';



function App() {
  
  const theme = createTheme({
    
    palette: {
      type: 'dark',
      primary: {
        main: "#ce93d8",
        
  
      },
      secondary: {
        main: "#039ae0",
        
  
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }
  })
  return (
      <div className="app-container">
        <ThemeProvider theme={theme}>
        <NavBar />  
        <Footer />
        </ThemeProvider>
      </div>

  );
}

export default App;
