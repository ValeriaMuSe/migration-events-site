import { createRoot } from "react-dom/client";
import  { Header } from './components/react/Header';
import { MainContent } from "./components/react/MainContent";
import '../styles/css/styles.css'

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);