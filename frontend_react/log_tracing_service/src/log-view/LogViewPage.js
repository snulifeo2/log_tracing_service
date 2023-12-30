import React, { useEffect, useState } from 'react'
import { Client } from '@stomp/stompjs'
import { API_WS_URL } from '../Constants';
import { useParams } from 'react-router-dom';
import LogList from './LogList';

const wsClient = new Client({
    brokerURL: `${API_WS_URL}/log-collector/ws`,

});




function LogViewPage() {
    const { pathValue } = useParams();
    const [logList, setLogList] = useState([]);

    useEffect(
        () => {
            wsClient.onConnect = () => {
                console.log("웹소켓 연결 됨")
                wsClient.subscribe(`/sub/${pathValue}`, (msg) => {
                    console.log(msg.body)
                    const newLog = JSON.parse(msg.body);
                    setLogList((prevState) => [...prevState, newLog]);
                    console.log(logList);

                });
            };
            wsClient.activate();
        }, [logList]
    );




    return (
        <div>
            <LogList logList={logList} />
        </div>
    )
}

export default LogViewPage