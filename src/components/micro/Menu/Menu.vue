<template>
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
    <button @click="next">Next</button>
    <!-- <div class="menu-tab">
        <button class="basic focus" @click="loadBasicTab" :disabled="!abledTabs.includes('Basic')">Basic</button>
    </div>
    <div class="menu-tab">
        <button class="social" @click="loadSocialTab" :disabled="!abledTabs.includes('Social')">Social</button>
    </div>
    <div class="menu-tab">
        <button class="certificates" @click="loadCertificatesTab" :disabled="!abledTabs.includes('Certificates')">Certificates</button>
    </div> -->
  </nav>
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
    // props: {
    //     abledTabs: {
    //         type: Array,
    //         default: () => ['basic']
    //     }
    // },
    mounted() {
        this.loadTab(this.abledTabs[0]);
    },
    methods: {
        ...mapActions(['ableTab']),
        // loadBasicTab() {
        //     console.log('Basic');
        //     this.focused('basic');
        // },
        // loadSocialTab() {
        //     console.log('Social');
        //     this.focused('social');
        // },
        // loadCertificatesTab() {
        //     console.log('Certificates');
        //     this.focused('certificates');
        // },
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
            // console.log(this.$store.state.menuTabs.indexOf(tab));
            // this.ableTab(this.$store.state.menuTabs[this.$store.state.menuTabs.indexOf(tab) + 1]);
            console.log(this.$store.state.abledTabs);
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