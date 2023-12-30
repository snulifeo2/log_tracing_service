import React, { useEffect, useRef } from 'react'

function LogList(props) {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [props.logList]);

    return (
        <div ref={scrollRef} style={{ 
            overflowY: 'auto', 
            maxHeight: '80vh', // 높이를 뷰포트의 50%로 설정
            width: '80vw', // 너비를 뷰포트의 80%로 설정
            margin: 'auto' // 중앙 정렬
          }}>
            {props.logList.map((log, index) => (
                <div key={index}>
                    <strong>{log.logTag}</strong> : {log.logMessage}
                </div>
            ))}
        </div>
    )
}

export default LogList