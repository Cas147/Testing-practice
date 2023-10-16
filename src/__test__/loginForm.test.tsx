import axios from "axios";

import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LoginForm } from "../pages/Login";

import { loginFormMock, loginFormMockError } from "../__mocks__/LoginForm.mock";

jest.mock('axios');

describe("loginForm", () => {
  afterEach(cleanup);
  afterEach(jest.clearAllMocks);

  beforeEach(() => {
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({ data: { token: '123' } });
    render(<LoginForm />);
  });

  it("should exist two inputs and the submit button at the screen", () => {
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByTestId(/loginButton/i);

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(usernameInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');

    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();
  });

  it("should enable the submit button if the values are valid", async () => {
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByTestId(/loginButton/i);

    await userEvent.type(usernameInput, loginFormMock.username);
    await userEvent.type(passwordInput, loginFormMock.password);

    await waitFor(() => {
        expect(usernameInput).toHaveValue(loginFormMock.username);
        expect(passwordInput).toHaveValue(loginFormMock.password);
        expect(loginButton).toBeEnabled();
    });
  });

  it("should disabled the submit button and shoe the values if the values are invalid", async () => {
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByTestId(/loginButton/i);

    await userEvent.type(usernameInput, loginFormMockError.username);
    await userEvent.type(passwordInput, loginFormMockError.password);

    await waitFor(() => {
        expect(usernameInput).toHaveValue(loginFormMockError.username);
        expect(passwordInput).toHaveValue(loginFormMockError.password);
        expect(loginButton).toBeDisabled();

        expect(screen.getByText('must be less than 12')).toBeInTheDocument()
        expect(screen.getByText
            ('Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character')
            ).toBeInTheDocument()

        expect(screen.getByText(`UserName: ${loginFormMockError.username}`)).toBeInTheDocument()
        expect(screen.getByText(`Password: ${loginFormMockError.password}`)).toBeInTheDocument()
    });
  })

  it("should call the onSubmit fn when the login button is clicked", async () => {
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByTestId(/loginButton/i);

    await userEvent.type(usernameInput, loginFormMock.username);
    await userEvent.type(passwordInput, loginFormMock.password);

    await userEvent.click(loginButton)
    await waitFor(() => {
        expect(axios.post).toHaveBeenCalledTimes(1)
    })
  });
});
