import React, { useEffect, useRef } from 'react';

function LogList(props) {
    const scrollRef = useRef(null);
    const tagColors = {}; // 태그별 색상을 저장할 객체
    const availableColors = [
        'red', 'green', 'blue', 'yellow', 'purple', 'cyan', 'orange', 'pink',
        'lime', 'magenta', 'maroon', 'olive', 'navy', 'teal', 'gray', 'silver'
    ]; // 확장된 색상 목록

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [props.logList]);

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };


    // 예외 메시지 스타일
    const exceptionStyle = {
        color: 'white', // 빨간색 글자
        /* fontWeight: 'bold', // 굵은 글씨 */
        backgroundColor: 'gray', // 노란색 배경
    };

    const asciiArt = `

                                                             iiii       lllllll
                                                            i::::i      l:::::l
                                                             iiii       l:::::l
                                                                        l:::::l
   ooooooooooo      mmmmmmm    mmmmmmm   nnnn  nnnnnnnn    iiiiiii       l::::l    ooooooooooo      ggggggggg   ggggg
 oo:::::::::::oo  mm:::::::m  m:::::::mm n:::nn::::::::nn  i:::::i       l::::l  oo:::::::::::oo   g:::::::::ggg::::g
o:::::::::::::::om::::::::::mm::::::::::mn::::::::::::::nn  i::::i       l::::l o:::::::::::::::o g:::::::::::::::::g
o:::::ooooo:::::om::::::::::::::::::::::mnn:::::::::::::::n i::::i       l::::l o:::::ooooo:::::og::::::ggggg::::::gg
o::::o     o::::om:::::mmm::::::mmm:::::m  n:::::nnnn:::::n i::::i       l::::l o::::o     o::::og:::::g     g:::::g
o::::o     o::::om::::m   m::::m   m::::m  n::::n    n::::n i::::i       l::::l o::::o     o::::og:::::g     g:::::g
o::::o     o::::om::::m   m::::m   m::::m  n::::n    n::::n i::::i       l::::l o::::o     o::::og:::::g     g:::::g
o::::o     o::::om::::m   m::::m   m::::m  n::::n    n::::n i::::i       l::::l o::::o     o::::og::::::g    g:::::g
o:::::ooooo:::::om::::m   m::::m   m::::m  n::::n    n::::ni::::::i     l::::::lo:::::ooooo:::::og:::::::ggggg:::::g
o:::::::::::::::om::::m   m::::m   m::::m  n::::n    n::::ni::::::i     l::::::lo:::::::::::::::o g::::::::::::::::g
 oo:::::::::::oo m::::m   m::::m   m::::m  n::::n    n::::ni::::::i     l::::::l oo:::::::::::oo   gg::::::::::::::g
   ooooooooooo   mmmmmm   mmmmmm   mmmmmm  nnnnnn    nnnnnniiiiiiii     llllllll   ooooooooooo       gggggggg::::::g
                                                                                                             g:::::g
                                                                                                 gggggg      g:::::g
                                                                                                 g:::::gg   gg:::::g
                                                                                                  g::::::ggg:::::::g
                                                                                                   gg:::::::::::::g
                                                                                                     ggg::::::ggg
                                                                                                        gggggg
    `;






    return (
        <div
            ref={scrollRef}
            style={{
                overflowY: 'auto',
                maxHeight: '80vh',
                width: '80vw',
                margin: 'auto',
                backgroundColor: 'black', // 검은색 배경
                color: 'white', // 흰색 글자
                fontFamily: 'monospace', // 고정폭 글꼴
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '80vh',
            }}
        >
            <pre style={{ color: 'limegreen' }}>{asciiArt}</pre>

            {props.logList.map((log, index) => {
                if (!tagColors[log.logTag]) {
                    tagColors[log.logTag] = availableColors[Object.keys(tagColors).length % availableColors.length];
                }

                const isException = log.logMessage.toLowerCase().includes('exception');
                const currentTime = formatTime(new Date(log.timestamp)); // 로그 객체에 저장된 시간을 사용

                return (
                    <div key={index} style={isException ? exceptionStyle : {}}>
                        <span>[{currentTime}] </span>
                        <strong style={{ color: tagColors[log.logTag] }}>{log.logTag}</strong> : {log.logMessage}
                    </div>
                );
            })}


        </div>
    );
}

export default LogList;
