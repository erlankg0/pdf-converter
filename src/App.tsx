import Header from "./components/header/UI/header.tsx";
import Drop from "./components/drop/UI/drop.tsx";
import Container from "./components/container/ui/container.tsx";

const App = () => {

    return (
        <Container>
            <main className={''}>
                <Header/>
                <Drop/>
            </main>
        </Container>


    )
}

export default App
