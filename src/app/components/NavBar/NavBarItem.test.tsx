import { render, screen } from "@testing-library/react";
import NavBarItem from "./NavBarItem";

describe("NavBarItem", () => {
  const title = "Home";
  const href = "/home";
  const icon = <svg data-testid="icon" />;
  const active = true;

  it("renders the title and icon", () => {
    render(
      <NavBarItem title={title} href={href} icon={icon} active={active} />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies active styles when active prop is true", () => {
    render(
      <NavBarItem title={title} href={href} icon={icon} active={active} />
    );
    const navBarItem = screen.getByRole("link");
    expect(navBarItem).toHaveClass("bg-zinc-200");
    expect(navBarItem).toHaveClass("text-zinc-950");
    expect(navBarItem).toHaveClass("font-semibold");
  });

  it("applies default styles when active prop is false", () => {
    render(<NavBarItem title={title} href={href} icon={icon} active={false} />);
    const navBarItem = screen.getByRole("link");
    expect(navBarItem).toHaveClass("hover:bg-zinc-300");
    expect(navBarItem).toHaveClass("text-zinc-500");
    expect(navBarItem).toHaveClass("font-medium");
  });
});
