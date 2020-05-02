import React, { useEffect, useState } from 'react'
import ReactSpeedometer from "react-d3-speedometer"


export const Dashboard = () => {

    const [listening, setListening] = useState(false);
    const [cpuUsage, setcpuUsage] = useState(0);
    const [memoryUsage, setmemoryUsage] = useState(0);

    let eventSource = undefined;


    useEffect(() => {
        if (!listening) {
            eventSource = new EventSource("http://localhost:8080/event/resources/usage");
            eventSource.onmessage = (event) => {
                const usage = JSON.parse(event.data);
                setcpuUsage(usage.cpuUsage)
                setmemoryUsage(usage.memoryUsage)
            }
            eventSource.onerror = (err) => {
                console.error("EventSource failed:", err);
                eventSource.close();
            }
            setListening(true)
        }
        return () => {
                eventSource.close();
                console.log("event closed")
        }

    }, [])

    return (
        <div style={{ "marginTop": "20px", "textAlign": "center" }}>
            <h1>Dashboard</h1>
            <div style={{ "display": "inline-flex" }}>
                <div style={{"margin":"50px"}}>
                    <ReactSpeedometer
                        maxValue={100}
                        value={cpuUsage}
                        valueFormat={"d"}
                        customSegmentStops={[0, 25, 50, 75, 100]}
                        segmentColors={["#a3be8c", "#ebcb8b", "#d08770", "#bf616a"]}
                        currentValueText={"CPU Usage: ${value} %"}
                        textColor={"black"}
                    />
                </div>

                <div style={{"margin":"50px"}}>
                    <ReactSpeedometer
                        maxValue={100}
                        value={memoryUsage}
                        valueFormat={"d"}
                        customSegmentStops={[0, 25, 50, 75, 100]}
                        segmentColors={["#a3be8c", "#ebcb8b", "#d08770", "#bf616a"]}
                        currentValueText={"Memory Usage: ${value} %"}
                        textColor={"black"}
                    />
                </div>
            </div>

        </div>
    )
}
