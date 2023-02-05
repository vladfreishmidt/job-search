import nextElementInList from "@/utils/nextElementInList.js";

describe("nextElementInList", () => {
  it("locates element in list and return the next element in list", () => {
    const list = ["A", "B", "C", "D"];
    const value = "C";
    const result = nextElementInList(list, value);
    expect(result).toBe("D");
  });

  describe("when element is at the end of the list", () => {
    it("locates next element at start of list", () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";
      const result = nextElementInList(list, value);
      expect(result).toBe("A");
    });
  });
});
