import { render, screen } from "@testing-library/react";
import NavBar, { navItems } from "../NavBar";

describe("NavBar component", () => {
  it("renders the navigation bar correctly", () => {
    render(<NavBar />);
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeInTheDocument();
  });

  it("renders the correct number of navigation items", () => {
    render(<NavBar />);
    const renderedNavItems = screen.getAllByRole("listitem");
    expect(renderedNavItems.length).toBe(navItems.length);
  });
});
