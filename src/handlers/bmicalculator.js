import AWS from 'aws-sdk';
import {personBMIData} from '../data/person-data';
import {calculatBMIAndCategoryAndHealthRish} from '../services/bmi-calculator-service';

const dynamodb = new AWS.DynamoDB.DocumentClient();
async function bmiCalculator(event, context) {
  const updatedBMIData = await calculatBMIAndCategoryAndHealthRish(personBMIData);
  await dynamodb.batchWrite({
    RequestItems: {
      BMITable: updatedBMIData
    }
  }).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({personBMIData}),
  };
};

export const handler = bmiCalculator;