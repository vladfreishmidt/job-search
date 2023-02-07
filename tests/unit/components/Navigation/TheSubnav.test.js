import { render, screen } from "@testing-library/vue";

import TheSubnav from "@/components/Navigation/TheSubnav.vue";

describe("TheSubnav", () => {
  const renderTheSubnav = (routeName) => {
    render(TheSubnav, {
      global: {
        mocks: {
          $route: {
            name: routeName,
          },
        },
        stubs: {
          "font-awesome-icon": true,
        },
      },
    });
  };

  describe("when user is on jobs page", () => {
    it("displays jobs count", () => {
      const routeName = "JobResults";

      renderTheSubnav(routeName);

      const jobCount = screen.getByText("123");

      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("when user is not on jobs page", () => {
    it("does NOT display job count", () => {
      const routeName = "Home";

      renderTheSubnav(routeName);

      const jobCount = screen.queryByText("123");

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
