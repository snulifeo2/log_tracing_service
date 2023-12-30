package io.axiology.logservice.receivelog.service;

import io.axiology.logservice.receivelog.dto.WebSocketLogMessageToFrontDTO;

public interface ReceiveLogService {
	
	void sendLogToFront(WebSocketLogMessageToFrontDTO messageToFrontDTO);
	

}
