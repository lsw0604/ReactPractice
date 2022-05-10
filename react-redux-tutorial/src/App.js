import TodosContainer from "./containers/TodosContainer";
import CounterContainers from "./containers/CounterContainers";

const App = () => {
  return (
    <div>
      <CounterContainers />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;