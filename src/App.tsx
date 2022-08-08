import Home from './Home'
import { CounterContextProvider } from './contexts/CounterContext'

function App() {
  return (
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  );
}

export default App;
