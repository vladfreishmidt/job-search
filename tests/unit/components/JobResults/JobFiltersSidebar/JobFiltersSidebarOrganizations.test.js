import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { createTestingPinia } from "@pinia/testing";

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";
import { useJobsStore } from "@/stores/jobs";

describe("JobFiltersSidebarOrganizations", () => {
  it("renders unique list of organizations from jobs", async () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();
    jobsStore.QUNIQUE_ORGANIZATIONS = new Set(["Google", "Amazon"]);

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          "font-awesome-icon": true,
        },
      },
    });

    const button = screen.getByRole("button", { name: /organizations/i });
    await userEvent.click(button);

    const organizationListItems = screen.getAllByRole("listitem");
    const organizations = organizationListItems.map((node) => node.textContent);

    expect(organizations).toEqual(["Google", "Amazon"]);
  });
});
