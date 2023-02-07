<template>
  <main>
    <section class="flex h-screen flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div
          class="group relative col-span-5 col-start-7 h-32 w-80 cursor-pointer self-center justify-self-center"
        >
          <div
            class="absolute -bottom-32 -right-10 z-10 h-40 w-40 rounded-full border-[6px] border-blue-400 transition-all group-hover:z-50 group-hover:h-20 group-hover:w-20"
          ></div>

          <div
            class="absolute left-0 top-0 z-10 w-80 transition-all group-hover:z-40 group-hover:w-[330px]"
          >
            <img
              class="rounded-full transition-all group-hover:rounded-xl"
              src="https://images.techopedia.com/images/uploads/web-developer.jpg"
            />
          </div>

          <div
            class="absolute -top-10 -left-10 z-30 h-40 w-40 rounded-full border-[3px] border-orange-400 transition-all group-hover:h-20 group-hover:w-20"
          ></div>
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/JobSearch/TheHeadline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm,
  },
  data() {
    return {
      craft: "design",
      options: ["design", "build", "make"],
    };
  },
  created() {
    // setInterval(this.changeCraft, 3000);
  },

  methods: {
    changeCraft() {
      this.craft = this.options[1];
      console.log("changed");
    },
  },
};
</script>
