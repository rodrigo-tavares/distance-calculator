import { useEffect, useState } from "react";

import axios from "axios";
import {
  BackButton,
  Container,
  EmptyHistoryMessage,
  ErrorMessage,
  List,
  ListItem,
  ListItemText,
  Title,
} from "./styles";

const History = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get("/history");
        if (response.data.success) {
          setHistory(response.data.queries);
          setError(null);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError("An error occurred while fetching the history.");
      }
    };
    fetchHistory();
  }, []);

  return (
    <Container>
      <Title>Query History</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <List>
        {history.length > 0 ? (
          history.map((item, index) => (
            <ListItem key={index}>
              <ListItemText>
                Source: {item.source_address}, Destination:{" "}
                {item.destination_address}
              </ListItemText>
              <ListItemText secondary="true">
                Distance: {item.distance.toFixed(2)} km
              </ListItemText>
            </ListItem>
          ))
        ) : (
          <EmptyHistoryMessage>No history available</EmptyHistoryMessage>
        )}
      </List>
      <BackButton to="/">Back to Calculator</BackButton>
    </Container>
  );
};

export default History;
