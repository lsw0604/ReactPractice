import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./context/Color";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

export default App;