<template>
  <section>
    <div class="buttons">
      <b-button tag="router-link" to="/newbooking" type="is-link" @click="showModal = true">
        Create New Event
      </b-button>
      <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
      </transition>
    </div>
    
    <modal modalContent="" :closeBtn="true" closeBtnContent="<span>X</span>"/>

    <div class="columns">
      <div class="column is-half">

    <b-field grouped group-multiline>ddfj
      <b-field label="Locale">
        <b-select v-model="locale">
          <option :value="undefined"></option>
          <option value="de-DE">de-DE</option>
          <option value="en-CA">en-CA</option>
          <option value="en-GB">en-GB</option>
          <option value="en-US">en-US</option>
          <option value="es-ES">es-ES</option>
          <option value="es-MX">es-MX</option>
          <option value="fr-CA">fr-CA</option>
          <option value="fr-FR">fr-FR</option>
          <option value="it-IT">it-IT</option>
          <option value="ja-JP">ja-JP</option>
          <option value="pt-BR">pt-BR</option>
          <option value="ru-RU">ru-RU</option>
          <option value="zn-CN">zn-CN</option>
        </b-select>
      </b-field>
    </b-field>
    Current locale format: {{ sampleFormat }}
      <b-field label="Select datetime">
        <b-datetimepicker
          placeholder="Type or select a date..."
          icon="calendar-today"
          :locale="locale"
          editable>
        </b-datetimepicker>
      </b-field>
    </div>
    </div>
   
  </section>
</template>

<script>
export default {
    data() {
        return {
            locale: undefined // Browser locale
        }
    },
    computed: {
        sampleFormat() {
            const dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: this.enableSeconds ? 'numeric' : undefined,
                timezone: 'UTC'
            })
            return dtf.format(new Date(2020, 11, 11, 13, 14, 15))
        }
    }
}
</script>

<style>
.button {
  margin-top: 10px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

.button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>