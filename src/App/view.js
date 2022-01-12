import "./style.css";
import Map from "../components/Map";
import Message from "../components/Message";
import Form from "../components/Form";

const View = ({
  isReady,
  isError,
  errorMessage,
  handleSubmit,
  payload,
  zoomLevel,
}) => (
  <div className="App">
    <h2>Search App</h2>
    <Form isReady={isReady} onSubmit={handleSubmit} />
    <Message isReady={isReady} isError={isError} errorMessage={errorMessage} />
    {isReady && <Map payload={payload} zoomLevel={zoomLevel} />}
  </div>
);

export default View;
