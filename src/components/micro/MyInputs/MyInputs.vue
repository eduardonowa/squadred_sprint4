<template>
  <div class="form">
    <label :class="ClassLabel" >{{ LabelInput }} </label>
    <span :id="idSpan" :class="ClassSpan" > Please enter your{{ InvalidText }}</span>
    <input
      :type="Type"
      :class="ClassInput"
      :placeholder="Placeholder"
      :id="idInputs"
    />
  </div>
</template>

<script>
export default {
    name: "MyInputs",
    props: {
        idSpan:String,  
        ClassSpan:String,
        InvalidText:String,
        ClassLabel:String,
        LabelInput:String,
        Type: String,
        ClassInput: String,
        Placeholder: String,
        idInputs:String
    }

}
</script>

<style>
@import "./MyInputs.scss"
</style>