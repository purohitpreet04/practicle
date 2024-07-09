import axios from 'axios';
import useBase64Decoder from '../Constance/CustomHooks';

const API_URL = 'https://api.spiral.mybiznext.in/HRMS/GetEmployeeWorkingHoursView';

export const fetchApiResponse = async () => {
  const requestBody = {
    "viewMode": "11",
    "companyAddressID": 0,
    "employeeMasterID": 0,
    "yearID": 2024,
    "monthID": 7,
    "teamRoleCode": 0,
    "objCommon": {
      "insertedUserID": "27",
      "insertedIPAddress": "43.254.176.219",
      "dateShort": "dd-MM-yyyy",
      "dateLong": "dd-MM-yyyy HH:mm:ss"
    }
  };

  const headers = {
    'token': '10cf614a0fc7bdd88cf4a42b6897f2e684561f2d75aba3e8151d18becf97859603dcf416695ce06ae81c8d284775b6b5eb8a190b5b7be9c24a261710e',
    'Apiusername': '90017',
    'Companycode': 'SPIRAL',
    'Companyuserid': '27',
    'Userloginid': '90017',
    'Username': '90017',
    'Rightcode':'',
    'Apikey':''
  };

  try {
    const response = await axios.post(API_URL, requestBody, { headers });
    return response.data;
    
  } catch (error) {
    console.error("Error fetching API response", error);
    throw error;
  }
};
