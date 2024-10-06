sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit: function () {
            // Створюємо модель для зберігання даних користувача
            var oModel = new JSONModel({
                userName: "",
                userEmail: ""
            });
            this.getView().setModel(oModel);
        },

        onPress: function () {
            // Отримуємо значення з полів введення
            var sName = this.getView().byId("inputName").getValue();
            var sEmail = this.getView().byId("inputEmail").getValue();

            // Оновлюємо модель з введеними даними
            var oModel = this.getView().getModel();
            oModel.setProperty("/userName", sName);
            oModel.setProperty("/userEmail", sEmail);
        }
    });
});

