import { render, screen } from "@testing-library/react";
import NavBarItem from "../NavBarItem";

describe("NavBarItem component", () => {
  const title = "Home";
  const href = "/home";
  const icon = <svg data-testid="icon" />;

  it("renders correctly the icon, title and href", () => {
    render(<NavBarItem title={title} href={href} icon={icon} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", href);
  });

  it("applies active styles when active prop is true", () => {
    render(<NavBarItem title={title} href={href} icon={icon} active={true} />);
    const navBarItem = screen.getByRole("link");
    expect(navBarItem).toHaveClass("bg-zinc-200");
    expect(navBarItem).toHaveClass("text-zinc-950");
    expect(navBarItem).toHaveClass("font-semibold");
  });

  it("does not apply active styles when active prop is false", () => {
    render(<NavBarItem title={title} href={href} icon={icon} active={false} />);
    const navBarItem = screen.getByRole("link");
    expect(navBarItem).not.toHaveClass("bg-zinc-200");
    expect(navBarItem).not.toHaveClass("text-zinc-950");
    expect(navBarItem).not.toHaveClass("font-semibold");
  });
});
