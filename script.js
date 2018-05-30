// General script
var buttons = document.getElementById('buttons');
buttons.addEventListener('click', function (e) {
    var action = e.target.id; 
    var validData = Actions.dataIsValid(action)

    if (validData[0] === true) {
        var data = Actions.serializeData(action);
        Actions[action](data);
    } else {
        alert(validData[1].join('\n'));
    }
});


Actions = {};
Actions.serializeData = function (action) {
    var buffer = '';
    var fields = Actions[action].fieldList;

    for (var i =0 ; i < fields.length ; i++ ) {
            buffer += `${fields[i].id}=${fields[i].value}&`;
    }
    // get rid of the last charcter & if needed
    return buffer.slice(0, buffer.length -1);
   // return buffer;
};

Actions.dataIsValid = function (action) {
    var errorFlag = false;
    var errorList = [];
    var checkList = Actions[action].fieldList;

    for (var i =0 ; i < checkList.length ; i++ ) {
        if (checkList[i].value === '') {
            errorList.push(`${checkList[i].id} is empty`);
            errorFlag = true;
        }
    }
    return [!errorFlag, errorList];
}


Actions['getone'] = function (data) {
    doit('POST' , data, 'Cars/getone' , setFields);
}
Actions['getone'].fieldList = [carid];

Actions['getall'] = function (data) {
    doit('GET' , data,'Cars/getall' , createTable);
}
Actions['getall'].fieldList = [];

Actions['addCar'] = function (data) {
    doit('POST' , data , 'Cars/addcar', getMessage);
}
Actions['addCar'].fieldList = [carid, carmodel , carmake , caryear];

Actions['updateCar'] = function (data) {
    doit('POST' , data , 'Cars/updatecar' , getMessage);
}
Actions['updateCar'].fieldList = [carid, carmodel , carmake , caryear];

Actions['deleteCar'] = function (data) {
    doit('POST' , data, 'Cars/deletecar' ,getMessage);
}
Actions['deleteCar'].fieldList = [carid];
// General end