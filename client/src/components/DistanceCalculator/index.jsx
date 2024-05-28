import { useState } from "react";
import axios from "axios";
import {
  Button,
  ButtonBox,
  ButtonClear,
  Container,
  Form,
  HistoryButton,
  Input,
  Message,
  Title,
} from "./styles";

const DistanceCalculator = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/calculate", { source, destination });
      if (response.data.success) {
        setDistance(response.data.distance);
        setError(null);
      } else {
        setError(response.data.message);
        setDistance(null);
      }
      setLoading(false);
    } catch (error) {
      setError("An error occurred while calculating the distance.");
      setDistance(null);
      setLoading(false);
    }
  };

  const clear = () => {
    setDistance(null);
    setSource("");
    setDestination("");
  };

  return (
    <Container>
      <Title>Distance Calculator</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Source Address"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Destination Address"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <ButtonBox>
          <div>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <span className="loader"></span>
              ) : (
                "Calculate Distance"
              )}
            </Button>
            <ButtonClear onClick={clear}>Clear Results</ButtonClear>
          </div>
          <HistoryButton to="/history-data">View History</HistoryButton>
        </ButtonBox>
      </Form>
      {distance !== null && (
        <Message>
          The distance between {source} and {destination} is{" "}
          {distance.toFixed(2)} km.
        </Message>
      )}
      {error && <Message error>{error}</Message>}
    </Container>
  );
};

export default DistanceCalculator;
