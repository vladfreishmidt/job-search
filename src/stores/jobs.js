import { defineStore } from "pinia";
import getJobs from "@/api/getJobs";

export const FETCH_JOBS = "FETCH_JOBS";
export const QUNIQUE_ORGANIZATIONS = "QUNIQUE_ORGANIZATIONS";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs();
      this.jobs = jobs;
    },
  },
  getters: {
    [QUNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganizations = new Set();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations;
    },
  },
});
