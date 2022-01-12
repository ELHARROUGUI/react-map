const Message = ({ isReady, isError, errorMessage = "" }) => {
  if (!isReady) {
    return <div data-testid="message">Loading...</div>;
  }
  if (isError) {
    return <div data-testid="message">Error! {errorMessage}</div>;
  }
  return <div data-testid="message">-</div>;
};

export default Message;
