package com.samton.web.common.util;

public class ErrorMsg {
	
	/*
	 * 行
	 */
	private int line;
	
	/*
	 * 列
	 */
	private int column;
	
	/*
	 * 错误提示
	 */
	private String errorMsg;

	public int getLine() {
		return line;
	}

	public void setLine(int line) {
		this.line = line;
	}

	public int getColumn() {
		return column;
	}

	public void setColumn(int column) {
		this.column = column;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	
	

}
