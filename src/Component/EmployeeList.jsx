import React, { useEffect, useState } from 'react'
import { fetchApiResponse } from '../Services/Api';
import useBase64Decoder from '../Constance/CustomHooks';

const EmployeeList = () => {

    const [apiResponse, setApiResponse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchApiResponse();
                setApiResponse(data.data);
            } catch (error) {
                console.error("Error fetching API response", error);
            }
        };

        fetchData();
    }, []);
    const { decodedData, error } = useBase64Decoder(apiResponse.responseDynamic);


    return (
        <table>
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Department</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                    <th>Mon</th>

                </tr>
            </thead>
            <tbody>
                {decodedData.Employee.length > 0 && decodedData.Employee.map((employee) => (
                    <EmployeeRow key={employee.id} employee={employee} />
                ))}
            </tbody>
        </table>
    )
}

export default EmployeeList

function getAttendanceColor(attendanceHours) {
    if (attendanceHours <= 1) {
        return "#fff"; // White (0-1 hour)
    } else if (attendanceHours <= 8) {
        return "rgb(244, 229, 181)"; // Light Yellow (1-8 hours)
    } else if (attendanceHours <= 9) {
        return "#ffb38a"; // Orange (8-9 hours)
    } else {
        return "rgb(206, 241, 206)"; // Light Green (>9 hours)
    }
}

function EmployeeRow({ employee }) {
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            {employee.attendances.map((attendance, index) => (
                <AttendanceCell key={index} attendance={attendance} />
            ))}
        </tr>
    );
}

function AttendanceCell({ attendance }) {
    const attendanceHours = attendance;
    const attendanceColor = getAttendanceColor(attendanceHours);

    return (
        <td style={{ backgroundColor: attendanceColor }}>{attendance}</td>
    );
}