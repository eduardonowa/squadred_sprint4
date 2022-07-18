import { mount } from "@vue/test-utils";
import Menu from "@/components/Menu/Menu.vue";

describe("Menu wrapper", () => {
  const wrapper = mount(Menu, {
    mocks: {
      $store: {
        state: {
          menuTabs: ["basic", "social", "certificates"],
          abledTabs: ["basic"],
        },
      },
    },
  });
  test("Have quantity of buttons relative for menuTabs", () => {
    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBe(3);
  });
});
