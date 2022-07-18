import MyInputs from "@/components/MyInputs/MyInputs.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Preenchimento do localStorage conforme validação", () => {

    let store;

    beforeEach(() => {
        store = Store;
    });

    it('preencher o localStorage["fullname"] caso preenchido corretamente', () => {
        const wrapper = mount(MyInputs, {
            store,
            localVue,
            propsData: {
                ClassField: "fullname",
                Type: "text",
            }
        });
        const input = wrapper.find('input');
        input.setValue("Pedro Lucas");
        input.trigger('change');
        expect(window.localStorage.getItem('fullname')).toBe('Pedro Lucas');
    });

    it('não preencher/deixar vazio o localStorage["fullname"] caso preenchido incorretamente', () => {
        const wrapper = mount(MyInputs, {
            store,
            localVue,
            propsData: {
                ClassField: "fullname",
                Type: "text",
            }
        });
        const input = wrapper.find('input');
        input.setValue("Pedro Lucas ");
        input.trigger('change');
        expect(window.localStorage.getItem('fullname')).toBe("");
    });
}) 
