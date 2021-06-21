Navigate the below end points for exploring:
BULK INSERT FROM BACK END TRIGGERED BY GET REQUEST
===================================================
Endpoint:
https://9s55odp8p9.execute-api.us-east-1.amazonaws.com/dev/bmicalculator
HTTP Verb: GET
Query Params: NONE

CALCULATE & INSERT BMI IN DB
==============================
Endpoint:
https://9s55odp8p9.execute-api.us-east-1.amazonaws.com/dev/bmi
HTTP Verb: POST
Body: JSON
{
    "bmidata": 
    [
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 196
        },
        {
            "Gender": "FeMale",
            "HeightCm": 171,
            "WeightKg": 196
        }
    ]
}
