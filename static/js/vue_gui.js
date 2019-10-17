Vue.component('datepicker', {
    'data': function() {
        return {'date': ''}
    },
    'template': '\
    <div class="form-group" style="margin-bottom:0">\
    <div class="input-group date datepicker" id="datetimepicker">\
    <input id="calendar" type="text" class="form-control" style="height: 36px;" :value="date" v-on:focus="datepick_dialog_open" v-on:blur="select_by_lose_focus">\
    <span class="input-group-addon">\
    <span class="fa fa-calendar"></span>\
    </span>\
    </div>\
    </div>',
    'mounted': function() {
        console.log('dasda')
        today = new Date();
        today = moment(today).format('YYYY-MM-DD');
        $(this.$el.firstChild).datetimepicker({
          'format': 'YYYY-MM-DD',
          'defaultDate': today
      });
        this.select_by_lose_focus();
    },
    'methods': {
        'datepick_dialog_open': function() {
            this.$el.firstChild.children[1].click();
        },
        'select_by_lose_focus': function() {
            today = new Date();
            today = moment(today).format('YYYY-MM-DD');
            this.date = this.$el.firstChild.firstChild.value;
        }
    }
});


var app = new Vue({
    'el': '#app',
    'data': {
        'asd': 1,
        'date': '',
    },
    'computed': {},
    'created': function () {},
    'watch': {},
    'methods': {}
})
