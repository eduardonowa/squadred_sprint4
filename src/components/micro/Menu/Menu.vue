<template>
  <nav class="menu">
    <div class="menu-tab">
        <button class="basic" @click="loadBasicTab" :disabled="!abledTabs.includes('Basic')">Basic</button>
    </div>
    <div class="menu-tab">
        <button class="social" @click="loadSocialTab" :disabled="!abledTabs.includes('Social')">Social</button>
    </div>
    <div class="menu-tab">
        <button class="certificates" @click="loadCertificatesTab" :disabled="!abledTabs.includes('Certificates')">Certificates</button>
    </div>
  </nav>
</template>

<script>
export default {
    name: "MenuComponent",
    props: {
        abledTabs: {
            type: Array,
            default: () => ['Basic']
        }
    },
    methods: {
        loadBasicTab() {
            console.log('Basic');
        },
        loadSocialTab() {
            console.log('Social');
        },
        loadCertificatesTab() {
            console.log('Certificates');
        },
    }
}
</script>

<style lang="scss" scoped>
@import './Menu.scss';
</style>