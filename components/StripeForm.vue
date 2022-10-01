<template>
  <div class="stripe-form w-full text-[#ffffff99]">
    <div class="w-full flex flex-col gap-2 mt-3 card-hoder-name">
      <label class="text-sm">Name (as appears on your card)</label>
      <ValidationObserver ref="cardName" class="w-full">
        <Input
          type="text"
          vee-id="cardHolderName"
          vee-name="cardHolderName"
          vee-rules="required"
          msg-class="bg-red-700 text-white z-10 rounded-sm px-2"
        />
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver
  },
}
</script>

<style lang="postcss">
.validation-error-msg {
  @apply text-red-400 pt-2 mt-2 text-sm;
}

.payment-error-msg {
  @apply bg-[#f8d7da] text-[#721c24] border-[#f5c6cb] p-2 rounded mt-2 text-sm;
}
</style>

<style lang="scss" scoped>
/* purgecss start ignore */
::v-deep .card-hoder-name {
  /* purgecss ignore current */
  .input-wrapper {
    /* purgecss ignore current */
    border: 1px solid #6d64a4;
    position: relative;
    background: #494184;

    input {
      /* purgecss ignore current */
      background-color: #352a7a00 !important;
      color: #ffffff !important;
    }
  }

  .focus {
    outline: none;
    box-shadow: 0 0 0 0.2em #007bff40;
  }

  .valid {
    outline: none;
  }
}
/* purgecss end ignore */
select:focus {
  outline: none;
  border-color: #6d64a4;
  box-shadow: 0 0 0 0.2em #007bff40;
}

.submit-button {
  button {
    font-size: 16px;
  }
}
</style>
