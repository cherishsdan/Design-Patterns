function EmailFormView() {

    this.form = document.createElement("form");
    this.input = document.createElement("input");
    this.button = document.createElement("button");

    this.input.setAttribute("type", "text");
    this.input.setAttribute("placeholder", "New email address");

    this.button.setAttribute("type", "submit");
    this.button.innerHTML = "Add";
}

EmailFormView.prototype = {

    render: function() {

        this.form.appendChild(this.input);
        this.form.appendChild(this.button);

        document.body.appendChild(this.form);

        this.bindEvents();
    },

    bindEvents: function() {
        var that = this;
        this.form.addEventListener("submit", function(evt) {

            evt.preventDefault();

            observer.publish("view.email-view.add", that.input.value);
        }, false);

        observer.subscribe("model.email-address.added", function() {
            that.clearInputField();
        });
    },

    clearInputField: function() {
        this.input.value = "";
    }
};


function EmailListView() {

    this.list = document.createElement("ul");
    this.listItem = document.createElement("li");
    this.listItemText = document.createElement("span");
    this.listItemRemoveButton = document.createElement("button");

    this.listItemRemoveButton.innerHTML = "Remove";
}

EmailListView.prototype = {

    render: function(modelData) {
        var index = 0,
            length = modelData.length,
            email;
        for (; index < length; index++) {
            email = modelData[index];

            this.list.appendChild(this.createListItem(email));
        }

        document.body.appendChild(this.list);
        this.bindEvents();
    },


    createListItem: function(email) {

        var listItem = this.listItem.cloneNode(false),
            listItemText = this.listItemText.cloneNode(false),
            listItemRemoveButton = this.listItemRemoveButton.cloneNode(true);

        listItem.setAttribute("data-email", email);
        listItemRemoveButton.setAttribute("data-email", email);

        listItemText.innerHTML = email;
        listItem.appendChild(listItemText).appendChild(listItemRemoveButton);
        return listItem;
    },

    bindEvents: function() {
        var that = this;
        this.list.addEventListener("click", function(evt) {
            if (evt.target && evt.target.tagName === "BUTTON") {
                observer.publish("view.email-view.remove", evt.target.getAttribute("data-email"));
            }
        }, false);

        observer.subscribe("model.email-address.added", function(email) {
            that.addEmail(email);
        });

        observer.subscribe("model.email-address.removed", function(email) {
            that.removeEmail(email);
        });
    },

    addEmail: function(email) {
        this.list.insertBefore(this.createListItem(email), this.list.firstChild);
    },

    removeEmail: function(email) {
        var listItems = this.list.getElementsByTagName("li"),
            index = 0,
            length = listItems.length;

        for (; index < length; index++) {
            if (listItems[index].getAttribute("data-email") === email) {
                this.list.removeChild(listItems[index]);

                break;
            }
        }
    }
};

function EmailView(views) {
    this.views = views || [];
}

EmailView.prototype = {

    render: function(modelData) {
        var index = 0,
            length = this.views.length;
        for (; index < length; index++) {
            this.views[index].render(modelData);
        }
    }
};