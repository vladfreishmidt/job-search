<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in QUNIQUE_ORGANIZATIONS"
            :key="organization"
            class="h-8 w-1/2"
          >
            <input :id="organization" type="checkbox" class="mr-3" />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState } from "pinia";
import { useJobsStore, QUNIQUE_ORGANIZATIONS } from "@/stores/jobs";
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    CollapsibleAccordion,
  },
  computed: {
    ...mapState(useJobsStore, [QUNIQUE_ORGANIZATIONS]),
  },
};
</script>
