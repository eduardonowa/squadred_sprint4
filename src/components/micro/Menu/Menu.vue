<template>
<div>
    <nav class="menu">
      <div 
        class="menu-tab" 
        v-for="(tab, i) in $store.state.menuTabs"
        :key="i"
        >
          <button 
            v-if="i === 0" 
            :class="tab + ' focus'" 
            @click="loadTab(tab)" 
            :disabled="!abledTabs.includes(tab)"
            >
              {{ capitalize(tab) }}
            </button>
          <button 
            v-else 
            :class="tab" 
            @click="loadTab(tab)" 
            :disabled="!abledTabs.includes(tab)"
            >
              {{ capitalize(tab) }}
          </button>
      </div>
    </nav>

    <template v-if="actualTab === 'basic'">
        <p>BASIC</p>
    </template>

    <template v-else-if="actualTab === 'social'">
        <p>SOCIAL</p>
    </template>
    <template v-else-if="actualTab === 'certificates'">
        <p>CERTIFICATES</p>
    </template>
    <button @click="next">Next</button>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "MenuComponent",
    data() {
        return {
            abledTabs: this.$store.state.abledTabs,
            actualTab: null
        }
    },
    mounted() {
        this.loadTab(this.abledTabs[0]);
        console.log(this.actualTab);
    },
    methods: {
        ...mapActions(['ableTab']),
        focused(className) {
            this.abledTabs.forEach((tab) => {
                const el = document.querySelector(`.${tab.toLowerCase()}`);
                el.classList.remove('focus');
            });
            const el = document.querySelector(`.${className}`);
            el.classList.add('focus');
        },
        loadTab(tab) {
            console.log(tab);
            this.focused(tab);
            this.actualTab = tab;
            this.abledTabs = this.$store.state.abledTabs;
        },
        capitalize(word) {
            let letters = word.split('');
            let first = letters.shift();
            letters.unshift(first.toUpperCase());
            return letters.join('');
        },
        next() {
            if (!(this.$store.state.menuTabs.indexOf(this.actualTab) + 1 === this.$store.state.menuTabs.length)) {
                this.ableTab(this.$store.state.menuTabs[this.$store.state.menuTabs.indexOf(this.actualTab) + 1])
                this.loadTab(this.$store.state.abledTabs[this.$store.state.abledTabs.length-1]);
            } else {
                console.log('última');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './Menu.scss';
</style>