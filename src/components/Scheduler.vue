<template>
  <div>
  <div class="space">
    <button id="previous" v-on:click="previous">Previous</button>
    <button id="next" v-on:click="next">Next</button>
  </div>
  <DayPilotScheduler id="dp" :config="config" ref="scheduler" />
  </div>
</template>

<script>
import {DayPilot, DayPilotScheduler} from 'daypilot-pro-vue'
import Vue from 'vue'

export default {
  name: 'Scheduler',
  data: function() {
    return {
      config: {
        timeHeaders: [{"groupBy":"Month"},{"groupBy":"Day","format":"d"}],
        scale: "Day",
        days: DayPilot.Date.today().daysInMonth(),
        startDate: DayPilot.Date.today().firstDayOfMonth(),
        timeRangeSelectedHandling: "Enabled",
        onTimeRangeSelected: function (args) {
          var dp = this;
          DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
            dp.clearSelection();
            if (!modal.result) { return; }
            dp.events.add(new DayPilot.Event({
              start: args.start,
              end: args.end,
              id: DayPilot.guid(),
              resource: args.resource,
              text: modal.result
            }));
          });
        },
        treeEnabled: true,
      },
    }
  },
  props: {
  },
  components: {
    DayPilotScheduler
  },
  computed: {
    // DayPilot.Scheduler object - https://api.daypilot.org/daypilot-scheduler-class/
    scheduler: function () {
      return this.$refs.scheduler.control;
    }
  },
  methods: {
    previous() {
      this.scheduler.startDate = this.scheduler.startDate.addMonths(-1);
      this.scheduler.days = this.scheduler.startDate.daysInMonth();
      this.scheduler.update();
    },
    next() {
      Vue.set(this.config, "startDate", this.config.startDate.addMonths(1));
      Vue.set(this.config, "days", this.config.startDate.daysInMonth());
    },
    loadEvents() {
      const events = [
        // { id: 1, start: "2018-10-01T00:00:00", end: "2018-10-05T00:00:00", text: "Event 1", resource: "R1" },
        { id: 2, start: DayPilot.Date.today().addDays(2), end: DayPilot.Date.today().addDays(5), text: "Event 1", resource: "R2"}
      ];
      Vue.set(this.config, "events", events);
    },
    loadResources() {
      const resources = [
        {name: "Resource 1", id: "R1"},
        {name: "Resource 2", id: "R2"},
        {name: "Resource 3", id: "R3"},
        {name: "Resource 4", id: "R4"},
        {name: "Resource 5", id: "R5"},
        {name: "Resource 6", id: "R6"},
        {name: "Resource 7", id: "R7"},
        {name: "Resource 8", id: "R8"},
      ];
      Vue.set(this.config, "resources", resources);
    }
  },
  mounted: function() {
    this.loadResources();
    this.loadEvents();

    this.scheduler.message("Welcome!");
  }
}
</script>

<style scoped>
  button {
    display: inline-block;
    text-align: center;
    background-color: #3c78d8;
    border: 1px solid #1155cc;
    color: #fff;
    padding: 6px 20px;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 5px;
    text-decoration: none;
  }
</style>
