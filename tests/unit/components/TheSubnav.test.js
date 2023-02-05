import { render, screen } from "@testing-library/vue";

import TheSubnav from "@/components/TheSubnav.vue";

describe("TheSubnav", () => {
  describe("when user is on jobs page", () => {
    it("displays jobs count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            "font-awesome-icon": true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = screen.getByText("123");

      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("when user is not on jobs page", () => {
    it("does NOT display job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            "font-awesome-icon": true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = screen.queryByText("123");

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
