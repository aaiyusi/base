package com.samton.web.common.util;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Pattern;

import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

/**
 *
 * @Description:TODO(文件导入导出操作类)
 * @author:     yokoboy
 * @date:       2016年3月21日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class FileReadUtil {
	
	/**
	 * 
	 * @Description: TODO  读取 csv  xls  xlsx  vnd.ms-excel 四种类型的文件  转换成list
	 * @param @param file 
	 * @param @return
	 * @param @throws Exception   
	 * @return List<String[]>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年3月15日
	 */
	public static List<String[]> getData(CommonsMultipartFile file)
			throws Exception {
		 if(file==null) return null;
		 String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")).toLowerCase();
		 if("csv".equals(suffix) ){
			 return getCvsData(file);
		 }else if ("xls".equals(suffix) ||"xlsx".equals(suffix) ||"vnd.ms-excel".equals(suffix)){
			 return getExcelData(file);
		 }
		 return null;
	}

	
	/**
	 * 
	 * @Description: TODO  读取 csv  类型的文件  转换成list
	 * @param @param file
	 * @param @return
	 * @param @throws Exception   
	 * @return List<String[]>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年3月15日
	 */
	private static List<String[]> getCvsData(CommonsMultipartFile file)
			throws Exception {
		BufferedReader input = null;
		try {
			if (!file.isEmpty()) {
				List<String[]> arrayData = new ArrayList<String[]>();
				input = new BufferedReader(new InputStreamReader(
						file.getInputStream(), "GBK"));
				String lineText;
				while ((lineText = input.readLine()) != null) {
					String[] lineArray = lineText.split(",", -1);
					arrayData.add(lineArray);
				}
				return arrayData;
			}
		} catch (Exception e) {
		} finally {
			if (null != input) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}
	
	@SuppressWarnings("unused")
	private static List<String[]> getCvsData(String path)
			throws Exception {
		BufferedReader input = null;
		try {
			if (!path.isEmpty()) {
				List<String[]> arrayData = new ArrayList<String[]>();
				input = new BufferedReader(new FileReader(path));
				String lineText;
				while ((lineText = input.readLine()) != null) {
					String[] lineArray = lineText.split(",", -1);
					arrayData.add(lineArray);
				}
				return arrayData;
			}
		} catch (Exception e) {
		} finally {
			if (null != input) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}

	/**
	 * 
	 * @Description: TODO  读取   xls  xlsx  vnd.ms-excel 四种类型的文件  转换成list
	 * @param @param file
	 * @param @return   
	 * @return List<String[]>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年3月15日
	 */
	private static List<String[]> getExcelData(CommonsMultipartFile file) {
		List<String[]> list = new ArrayList<String[]>();
		boolean isE2007 = false;
		InputStream input = null;
		String fileName = file.getOriginalFilename().substring(
				file.getOriginalFilename().indexOf("."));
		if (fileName.endsWith("xlsx")) {
			isE2007 = true;
		}
		try {
			input = file.getInputStream();
			Workbook wb = null;
			if (isE2007) {
				wb = new XSSFWorkbook(input);
			} else {
				wb = new HSSFWorkbook(input);
			}
			Sheet sheet = wb.getSheetAt(0);
			Iterator<Row> rows = sheet.rowIterator();
			int cellSize = 0;
			while (rows.hasNext()) {
				Row row = rows.next();
				int rowNum = row.getRowNum();
				String str = "";
				String[] _str = null;
				if (rowNum == 0) {
					cellSize = (int) row.getLastCellNum();
				}

				for (int i = 0; i < cellSize; i++) {
					str += " " + ",";
				}
				// str = str.substring(0, str.length() - 1);
				_str = str.split(",");
				// for (int i = 0; i < (int) row.getLastCellNum(); i++) {
				// System.out.println(row.getCell(i).getColumnIndex());
				// str += row.getCell(i).getStringCellValue() + ",";
				// }
				Iterator<Cell> cells = row.cellIterator();
				while (cells.hasNext()) {
					Cell cell = cells.next();
					int n = cell.getColumnIndex();
					switch (cell.getCellType()) {
					case HSSFCell.CELL_TYPE_STRING:
						_str[n] = cell.getStringCellValue();
						break;
					case HSSFCell.CELL_TYPE_NUMERIC:
						if (HSSFDateUtil.isCellDateFormatted(cell)) {
							Date date = cell.getDateCellValue();
							if (date != null) {
								_str[n] = new SimpleDateFormat("yyyy-MM-dd")
										.format(date);
							} else {
								_str[n] = "";
							}
						} else {
							String val = String.valueOf(cell
									.getNumericCellValue());
							int num = val.indexOf(".");
							val = val.substring(num + 1, val.length());
							if (num > 0 && val.length() <= 3
									&& Integer.parseInt(val) > 0) {
								_str[n] = String.valueOf(cell
										.getNumericCellValue());
							} else {
								_str[n] = new DecimalFormat("0").format(cell
										.getNumericCellValue());
							}
						}
						// _str[n] = new
						// DecimalFormat("0").format(cell.getNumericCellValue());
						break;
					default:
						_str[n] = " ";
						break;
					}
				}
				for (int i = 0; i < _str.length; i++) {
					if (StringUtils.isEmpty(_str[i].trim())) {
						_str[i] = "";
					}
				}
				list.add(_str);
			}
		} catch (Exception e) {
			// e.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return list;
	}
	
	
	/**
	 * 
	 * @Description: TODO
	 * @param @param file
	 * @param @param verifications
	 * @param @return   
	 * @return List<ErrorMsg>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年3月15日
	 */
	public static List<ErrorMsg> formatValidation( List<String[]> file,List<Verification> verifications ){
		if(file==null || file.size()<1) return null;
		int column1=file.get(0).length;
		int column2=verifications.size();
		if(column1!=column2) return null;
		List<ErrorMsg> errorMsgs = null;
		Pattern pa ;
		for(int i=0;i<file.size();i++){
			//i行
			for(int j=0;j<file.get(i).length;j++){
				// j列
				Verification verification = verifications.get(j);
				 pa = Pattern.compile( verification.getRegularExpression() ); 
				 String content = file.get(i)[j];
				 if(!pa.matcher(content).matches()){
					 if(errorMsgs==null) errorMsgs = new ArrayList<ErrorMsg>();
					 ErrorMsg errorMsg = new ErrorMsg();
					 errorMsg.setLine(i);//i行
					 errorMsg.setColumn(j);//j列
					 errorMsg.setErrorMsg(verification.getTip());
					 errorMsgs.add(errorMsg);
				 }
			}
			 
		}
		return errorMsgs;
	}
	
	/**
	 * 
	 * @Description: TODO
	 * @param @param file
	 * @param @param verifications
	 * @param @return   
	 * @return List<ErrorMsg>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年3月16日
	 */
	public static List<ErrorMsg> formatValidationList( List<String[]> file,List<List<Verification>> verifications ){
		if(file==null || file.size()<1) return null;
		int column1=file.get(0).length;
		int column2=verifications.size();
		if(column1!=column2) return null;
		List<ErrorMsg> errorMsgs = null;
		Pattern pa ;
		for(int i=0;i<file.size();i++){
			//i行
			for(int j=0;j<file.get(i).length;j++){
				// j列
				 List<Verification> vl = verifications.get(j);
				 for (Verification v:vl ) {
					 pa = Pattern.compile( v.getRegularExpression() ); 
					 if(!pa.matcher(file.get(i)[j]).matches()){
						 if(errorMsgs==null) errorMsgs = new ArrayList<ErrorMsg>();
						 ErrorMsg errorMsg = new ErrorMsg();
						 errorMsg.setLine(i);//i行
						 errorMsg.setColumn(j);//j列
						 errorMsg.setErrorMsg(v.getTip());
						 errorMsgs.add(errorMsg);
						 break;
					 }
				}
				 
			}
			 
		}
		return errorMsgs;
	}
	
	/**
	 * 测试方法
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {
		String path = "E:\\导入客户模板.csv";
		List<Verification> verifications = new ArrayList<Verification>();
		Verification v1 = new Verification(); Verification v2 = new Verification() ;Verification v3 = new Verification() ;
		v1.setRegularExpression("[A-z|.]*");
		v2.setRegularExpression("[A-z|.]*");
		v3.setRegularExpression("[A-z|.]*");
		verifications.add(v1);
		verifications.add(v2);
		verifications.add(v3);
		List<String[]> a = getCvsData(path);
		List<ErrorMsg> b = formatValidation(a, verifications);
		System.out.println();
	}
	

}
