import React from 'react';
const StudentInfo = (Student) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Roll No.</td>
                        <td>{StudentInfo.RollNo}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{StudentInfo.Name}</td>
                    </tr>
                    <tr>
                        <td>Mobile Number: </td>
                        <td>{StudentInfo.MobileNo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default StudentInfo;