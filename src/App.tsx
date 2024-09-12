import Header from "./components/header/UI/header.tsx";
import Drop from "./components/drop/UI/drop.tsx";
import Container from "./components/container/ui/container.tsx";
import Footer from "./components/footer/UI/footer.tsx";

const App = () => {

  return (
    <div className="app bg-slate-100 ">
      <Container>
        <Header />
      </Container>
      <div className="content">
        <main className="flex h-full">
          <Container>
            <Drop />
          </Container>
        </main>
      </div>
      <Container>
        <Footer />
      </Container>
    </div>
  )
}

export default App
