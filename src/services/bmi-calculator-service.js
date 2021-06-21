import {bmiCatetory} from "./../data/bmi-category";
import {v4 as uuid} from 'uuid';

export const calculatBMIAndCategoryAndHealthRish = async function calculatBMIAndCategoryAndHealthRish(personBMIData) {
    const PutRequests = [];
    personBMIData.map((data) => {
        console.log("data", data);
        data.BMI = findBMI(data);
        let categoryBucket = findBMICategoryBucket(data.BMI);
        data.id = uuid();
        data.BMICategory = bmiCatetory[categoryBucket].name;
        data.HealthRisk = bmiCatetory[categoryBucket].healthRisk;
        let Item = {Item: {...data}};
        let PutRequest = {PutRequest: {...Item}};
        PutRequests.push(PutRequest);
    });
    console.log("records", PutRequests);
    return PutRequests;
};

function findBMI(data) {
    return Math.round(data.WeightKg / Math.pow(data.HeightCm / 100, 2));
}

function findBMICategoryBucket(bmi) {
    let count = 0;
    let bucket = -1;
    while (count < bmiCatetory.length-1) {
        if (bmi <= bmiCatetory[count].bmiValue) {
            bucket = count;
            break;
        } else
        count++;
    }
    bucket === -1? bucket = count: bucket = bucket;
    return bucket;
}
