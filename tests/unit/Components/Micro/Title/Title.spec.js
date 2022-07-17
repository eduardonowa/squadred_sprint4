import { shallowMount } from "@vue/test-utils";
import Title from "@/components/micro/Title/Title.vue";

describe("Title wrapper", () => {
  test("Have h1 tag", () => {
    const wrapper = shallowMount(Title);
    const h1 = wrapper.find("h1");
    expect(h1.exists()).toBe(true);
  });
});
