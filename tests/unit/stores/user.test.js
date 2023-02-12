import { createPinia, setActivePinia } from "pinia";

import { useUserStore } from "@/stores/user";

describe("store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("keeps track of if user is loggen in", () => {
    const store = useUserStore();

    expect(store.isLoggedIn).toBe(false);
  });
});

describe("actions", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("logs the user in", () => {
    const store = useUserStore();
    store.loginUser();

    expect(store.isLoggedIn).toBe(true);
  });
});
