<template>
  <div class="certificate-container">
    <MyInputs 
        LabelInput="Certificates"
        ClassField="certificates"
        Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
    />
    <div class="buttons">
        <Button msg="Certificate" type="3" class="certificateButton"></Button>
        <Button msg="More" type="2" class="moreButton"></Button>
    </div>
    <MyInputs
        LabelInput="TeamName *"
        idSpan="teamSpan"
        ClassField="team-name"
        InvalidText="Please enter your Team Name"
        Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        Type="text"
    />  
    <MyInputs
        LabelInput="Institution *"
        idSpan="institutionSpan"
        ClassField="institution"
        InvalidText="Please enter your Institution"
        Placeholder="Universidade Federal da Paraíba"
        Type="text"
    />
    <MyInputs
        LabelInput="Graduation *"
        idSpan="graduationSpan"
        ClassField="graduation"
        InvalidText="Please enter your Graduation"
        Placeholder="Ciências da Computação"
        Type="text"
    />
  
  </div>
</template>

<script>
import MyInputs from '@/components/micro/MyInputs/MyInputs.vue';
import Button from '@/components/micro/Button/Button.vue';
export default {
    name: "CertificatesTab",
    components: {
    MyInputs,
    Button
}
}
</script>

<style lang="sass" scoped>
@import "./CertificatesTab.scss"
</style>