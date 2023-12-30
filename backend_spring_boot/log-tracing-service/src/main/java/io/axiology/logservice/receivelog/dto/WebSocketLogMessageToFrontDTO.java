package io.axiology.logservice.receivelog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WebSocketLogMessageToFrontDTO {
	

		private String sender;
		private String logTag;
		private String logMessage;
	

}
