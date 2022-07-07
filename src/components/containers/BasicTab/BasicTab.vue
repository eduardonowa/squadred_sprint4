<template>
    <div class="basic-container">
        <MyInputs
            ClassField="full-name"
            Type="text"
            LabelInput="Fullname *"
            InvalidText="Please enter your name"
            Placeholder="Foo Bar"
        />
        <MyInputs
            ClassField="nickname"
            Type="text"
            LabelInput="Nickname"
            Placeholder="Juanito"
        />
        <MyInputs
            ClassField="email"
            Type="email"
            LabelInput="Email *"
            InvalidText="Please enter your email"
            Placeholder="foo@bar.com"
        />
        <MyInputs
            ClassField="phone"
            LabelInput="Phone"
            Placeholder="(83) 00000-0000"
            Type="tel"
        />
        BIRTHDAY *
        <Checkbox />
    </div>
</template>

<script>
import MyInputs from '@/components/micro/MyInputs/MyInputs.vue';
import Checkbox from '@/components/micro/Checkbox/Checkbox.vue';
export default {
    components: { MyInputs, Checkbox }
}
</script>

<style lang="scss" scoped>
@import './BasicTab.scss';
</style>