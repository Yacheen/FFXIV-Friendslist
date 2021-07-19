import "./CSS/App.css";
import NavBar from "./components/NavBar";
import SideBar from './components/SideBar';
import { ThemeProvider, createTheme } from "@material-ui/core";



function App() {
  
  const theme = createTheme({
    
    palette: {
      type: 'dark',
      primary: {
        main: "#ce93d8",
        
  
      },
      secondary: {
        main: "#29b6f6",
        
  
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <SideBar />
    </ThemeProvider>
      
  );
}

export default App;
