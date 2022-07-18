import { shallowMount } from "@vue/test-utils";
import Birthday from "@/components/containers/Birthday/Birthday.vue";

describe("Birthday wrapper", () => {
  const wrapper = shallowMount(Birthday);
  test("Have label tag", () => {
    const label = wrapper.find("label");
    expect(label.exists()).toBe(true);
  });

  test("Have span tag", () => {
    const span = wrapper.find("span");
    expect(span.exists()).toBe(true);
  });

  test("Have select tag", () => {
    const select = wrapper.find("select");
    expect(select.exists()).toBe(true);
  });

  test("Have option tag", () => {
    const option = wrapper.find("option");
    expect(option.exists()).toBe(true);
  });

  test("Have input tag", () => {
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
  });
});
