<template>
    <ValidationProvider
      v-slot="{ classes, errors }"
      class="w-full"
      :name="veeName"
      :rules="veeRules"
      :vid="veeId"
    >
      <div class="input-wrapper" :class="[classes, {'focus': isFocus}]">
        <input
          v-bind="$attrs"
          class="w-full"
          @keyup="inputData"
          @input="$emit('input', $event.target.value)"
          @focus="isFocus = true"
          @blur="isFocus = false"
        />
      </div>
      <p class="validate-msg" :class="errors.length ? 'visible' : 'invisible'">{{ errors[0]}}&nbsp;</p>
    </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate"
export default {
  components: {
    ValidationProvider
  },
  props: {
    veeName: {
      type: String,
      default: "",
    },
    veeRules: {
      type: [String, Object],
      default: ""
    },
    veeId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isFocus: false,
    }
  },
  methods: {
    inputData() {
      this.$emit('handleInput')
    }
  }
}
</script>
<style lang="scss" scoped>

  .input-wrapper {
    background-color: transparent;
    border-radius: 0.3em;
    border: 1px solid #c0c0c0;
    position: relative;
    img {
      position: absolute;
      width: 1.5em;
      right: 2px;
      top: 13px;
    }
    input {
      background: white;
      padding-right: 1.8em;
      padding-left: 0.5em;
    }
  }
  .focus {
    box-shadow: none;
    outline: 2px solid green;
  }
  .invalid {
    outline: 1px solid red;
  }
  .valid {
    outline: 1px solid green;
  }
  .msg-icon {
    margin-right: 10px;
  }
  [type='email'], [type='text'], [type='password'] {
      background: transparent;
      border-radius: 0.3em;
      padding: 0;
      flex: 0 0 90%;
      height: 3em;
      border: 0;
      &:focus {
        box-shadow: none;
      }
    }
  .validate-msg {
    color: #f56565;
    font-size: 0.75em;
    font-style: italic;
    text-align: left;
    line-height: 1.3em;
    margin: 0.3em;
  }

</style>
