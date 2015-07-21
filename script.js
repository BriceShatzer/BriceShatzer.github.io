document.addEventListener("DOMContentLoaded", function() {
    var customersJSON_example = [
        {
            "firstName": "John",
            "lastName": "Smith",
            "age": 25,
            "address": {
                "streetAddress": "21 2nd Street",
                "city": "New York",
                "state": "NY",
                "postalCode": "10021"
            },
            "phoneNumber": [
                {
                  "type": "home",
                  "number": "212 555-1234"
                },
                {
                  "type": "fax",
                  "number": "646 555-4567"
                }
            ]
        },
        {
            "firstName": "Ben",
            "lastName": "Jones",
            "age": 34,
            "address": {
                "streetAddress": "432 Smith Street",
                "city": "Chicago",
                "state": "IL",
                "postalCode": "60606"
            },
            "phoneNumber": [
                {
                  "type": "home",
                  "number": "847 523-1034"
                }
            ]
        }    
    ];

    (function(){
        console.log('script.js has been fired');

        console.log('It contains example JSON containing a list of customers');
        console.log('and can be accessed via'+'%c var customersJSON_example','color:#345391;font-weight:bold;');

    });
}