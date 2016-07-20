
function EmailModel(data) {

    this.emailAddresses = data || [];
}

EmailModel.prototype = {

    add: function(email) {

        this.emailAddresses.unshift(email);

        observer.publish("model.email-address.added", email);
    },

    remove: function(email) {
        var index = 0,
            length = this.emailAddresses.length;
        for (; index < length; index++) {
            if (this.emailAddresses[index] === email) {

                this.emailAddresses.splice(index, 1);

                observer.publish("model.email-address.removed", email);

                break;
            }
        }
    },

    getAll: function() {
        return this.emailAddresses;
    }
};
