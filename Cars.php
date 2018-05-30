<?php

class Cars
{

    //--------------------------------------------------------
    // Properties
    //--------------------------------------------------------

    //

    //--------------------------------------------------------
    // Constructor
    //--------------------------------------------------------

    function __construct()
    {
        //
    }

    //--------------------------------------------------------
    // Functions
    //--------------------------------------------------------
    function getone() {
        return "{
            carid: 12 ,
            carmake: 'Volvo',
            carmodel: 'XYZ',
            caryear: 1955
        }";
    }

    function addCar() {
        return $this->getMessage('Add New Car');
    }
    function updateCar() {
        return $this->getMessage('Update Car');
    }
    function deleteCar() {
        return $this->getMessage('Delete Car');
    }

    private function getMessage($action) {
        return "Successful action ($action)";
    }

    function getall() {
        return "[
            {
                carid: 12 ,
                carmake: 'Volvo',
                carmodel: 'XYZ',
                caryear: 1955
           },
            {
                carid: 13 ,
                carmake: 'BMV',
                carmodel: 'Z200',
                caryear: 1980
           },
            {
                carid: 14 ,
                carmake: 'Ford',
                carmodel: 'TickTack',
                caryear: 2003
           }
        ]";
    }
    //

}