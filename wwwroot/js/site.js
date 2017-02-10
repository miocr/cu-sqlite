// Write your Javascript code.

$(document).ready(function () {
    $.validator.methods.date = function(value, element) {
        return this.optional(element) || parseDate(value, "dd.MM.yyyy") !== null;
    };
});