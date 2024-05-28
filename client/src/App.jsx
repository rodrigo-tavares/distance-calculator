import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DistanceCalculator from "./components/DistanceCalculator";
import History from "./components/History";
import { Container } from "./styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DistanceCalculator />,
  },
  {
    path: "/history-data",
    element: <History />,
  },
]);

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
