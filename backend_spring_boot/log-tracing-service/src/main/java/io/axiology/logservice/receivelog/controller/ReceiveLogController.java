package io.axiology.logservice.receivelog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.axiology.logservice.receivelog.dto.RequestSendLogDTO;
import io.axiology.logservice.receivelog.dto.WebSocketLogMessageToFrontDTO;
import io.axiology.logservice.receivelog.service.ReceiveLogService;

@RestController
@RequestMapping("/log-collector")
public class ReceiveLogController {
	
	private ReceiveLogService receiveLogService;
	
	
	@Autowired
	public ReceiveLogController(ReceiveLogService receiveLogService) {
		super();
		this.receiveLogService = receiveLogService;
	}
	
	@PostMapping("/sendlog")
	public void collectLogAndSendLog(@RequestBody RequestSendLogDTO requestSendLogDTO){
		
		WebSocketLogMessageToFrontDTO messageToFrontDTO = WebSocketLogMessageToFrontDTO.builder()
				.sender(requestSendLogDTO.getSender())
				.logTag(requestSendLogDTO.getLogTag())
				.logMessage(requestSendLogDTO.getLogMessage())
				.build();
		receiveLogService.sendLogToFront(messageToFrontDTO);
		
	}
	

}
