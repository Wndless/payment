﻿$(document).ready(function () {
    //IMP.init("imp58472821");

    $('#payment').click(function () {

        PortOne.requestPayment({
            storeId: "store-e4038486-8d83-41a5-acf1-844a009e0d94",
            paymentId: "testlxyh3lxs",
            orderName: "테스트 결제",
            totalAmount: 100,
            currency: "KRW",
            channelKey: "channel-key-01764171-b249-4c16-9d18-e9174fa8e611",
            payMethod: "EASY_PAY",
            easyPay: {
                easyPayProvider: "KAKAOPAY",
            },
        });
    });
});