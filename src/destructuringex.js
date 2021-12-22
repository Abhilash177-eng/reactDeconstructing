import React, { Component } from 'react'
export class destructuringex extends Component {
    arr = [];
    studarr = [];
    constructor(props) {
        super(props);
        const userdetails = {
            username: 'Alpha',
            ip: "2345.3433.534343",
            email: 'aplha@gmail.com',
            event: 'click'
        }
        const marks = [90, 91, 92, 93, 94, 95, 96, 97, 98];
        this.getUserIpDetails(userdetails);
        this.studentMark(marks);
    }
    getUserIpDetails(userdata) {
        const { username = '', ip = '0.0.0.0' } = userdata;
        this.arr.push(username);
        this.arr.push(ip);
        console.log(this.arr)
    }

    studentMark(mark) {
        const [fisrst, second, third] = mark;
        this.studarr.push(fisrst);
        this.studarr.push(second);
        this.studarr.push(third);
    }
    render() {
        return (
            <div>
                <ul>
                    <li>Name:{this.arr[0]}</li>
                    <li>Ip:{this.arr[1]}</li>
                    <li>FirstStudentMark:{this.studarr[0]}</li>
                    <li>SecondStudentMark:{this.studarr[1]}</li>
                    <li>ThirdStudentMark:{this.studarr[2]}</li>
                </ul>
            </div>
        )
    }
}
export default destructuringex