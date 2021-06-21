import AWS from 'aws-sdk';
import {calculatBMIAndCategoryAndHealthRish} from '../services/bmi-calculator-service';

const dynamodb = new AWS.DynamoDB.DocumentClient();
async function insertBMI(event, context) {
  console.log(event);
  const postdata = JSON.parse(event.body);
  console.log('bmiData', postdata.bmidata);
  const updatedBMIData = await calculatBMIAndCategoryAndHealthRish(postdata.bmidata);
  console.log('updatedBMIData', updatedBMIData);
  await dynamodb.batchWrite({
    RequestItems: {
      BMITable: updatedBMIData
    }
  }).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(updatedBMIData)
  };
};

export const handler = insertBMI;