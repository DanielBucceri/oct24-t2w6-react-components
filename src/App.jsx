import './App.css'

import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {PageContent} from "./components/PageContent";
import {PageLayout} from "./components/PageLayout";

function App() {

  return (
    <>

    {/* <Header /> */}
    <PageLayout>

      <PageContent targetContent="home" theme="dark" />

    </PageLayout>

    {/* <Footer /> */}

      {/* <header>

      </header>

      <main>

      </main>

      <footer>

      </footer> */}
    </>
  )
}

export default App
