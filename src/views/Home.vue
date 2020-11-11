<template>
<div class="column is-mobile is-centered is-6">
  <!--<div class="buttons level-right"> -->
    <button class="button is-primary is-medium"
                @click="isImageModalActive = true">
                + New
            </button>
            <b-modal 
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal>
            <template #default="props">
                <modal-form v-bind="formProps" @close="props.close"></modal-form>
            </template>
        </b-modal>
      <div class="table">
        <b-table :data="data" :columns="columns"></b-table>
      </div>
      <!-- <nav class="level is-mobile">
        <div class="level-right">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav> -->
</div>
</template>

<script>
    const ModalForm = {
        props: ['moduleName'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Add New</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Module Name">
                            <b-input
                                type="moduleName"
                                :value="moduleName"
                                placeholder="Module Name"
                                required>
                            </b-input>
                        </b-field>

                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$emit('close')">Close</button>
                        <button class="button is-primary">Save</button>
                    </footer>
                </div>
            </form>
        `
    }

    export default {
      name: 'Home',

      components: {
        ModalForm
      },
        data() {
            return {
                data: [
                    { 'name': 'Ballet', 'duration': '30 minutes', 'view': 0, 'booked': 0},
                    { 'name': 'MyDanceComp', 'duration': '30 minutes', 'view': 12, 'booked': 4},
                    { 'name': 'Yoga', 'duration': '30 minutes', 'view': 50, 'booked': 10},
                ],
                columns: [
                    {
                        field: 'name',
                        label: 'Name',
                    },
                    {
                        field: 'duration',
                        label: 'Duration',
                    },
                    {
                        field: 'view',
                        label: 'Views',
                        numeric: true,
                    },
                    {
                        field: 'booked',
                        label: 'Booked',
                        numeric: true,
                    },
                ]
            }
        }
    }
</script>
