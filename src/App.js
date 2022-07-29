import Header from "./header/header";
import Movies from "./movies/movies"

function App() {

    return (
       <div className="container">
            <Header />
            <Movies />
            <Sessions/>
       </div>
        
    )
}
export default App