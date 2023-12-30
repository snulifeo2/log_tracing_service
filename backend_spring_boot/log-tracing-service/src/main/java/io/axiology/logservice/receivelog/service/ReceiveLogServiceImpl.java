package io.axiology.logservice.receivelog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

import io.axiology.logservice.receivelog.dto.WebSocketLogMessageToFrontDTO;

@Service
public class ReceiveLogServiceImpl implements ReceiveLogService {

	private SimpMessageSendingOperations simpMessageSedingOperations;

	@Autowired
	public ReceiveLogServiceImpl(SimpMessageSendingOperations simpMessageSendingOperations) {
		super();
		this.simpMessageSedingOperations = simpMessageSendingOperations;
	}
	
	@Override
	public void sendLogToFront(WebSocketLogMessageToFrontDTO messageToFrontDTO) {
		
		simpMessageSedingOperations.convertAndSend("/sub/" + messageToFrontDTO.getSender(), messageToFrontDTO);

		
	}
	
	
	
	
	

}
