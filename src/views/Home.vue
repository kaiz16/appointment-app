<template>
<div class="column is-mobile is-centered is-6">
  <div class="level-right">
<b-button>+ New</b-button>
  </div>
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
    export default {
      name: 'Home',

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
