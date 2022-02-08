import styles from "./App.module.scss";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import ImageProvider from "./images/ImageProvider";

function App() {
  return (
    <ImageProvider>
      <div className={styles.container}>
        <Header />
        <Gallery />
      </div>
    </ImageProvider>
  );
}

export default App;
