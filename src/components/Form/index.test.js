import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form";

describe("<Form />", () => {
  test("Submitting a search request", async () => {
    const handleSubmit = jest.fn().mockName("handleSubmit");

    render(<Form isReady={true} onSubmit={handleSubmit} />);

    await userEvent.type(screen.getByTestId("searchInput"), "Casablanca");
    await userEvent.click(screen.getByTestId("submitButton"));

    expect(screen.getByTestId("searchInput").value).toEqual("");
    expect(handleSubmit).toHaveBeenCalledWith("Casablanca");
  });
});
