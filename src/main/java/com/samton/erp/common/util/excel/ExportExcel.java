package com.samton.erp.common.util.excel;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.io.ByteOrderMark;
import org.apache.commons.io.input.BOMInputStream;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.samton.platform.framework.util.DateUtil;

public class ExportExcel {
	public static <T> void exportExcel(String title, String[] headers, String[] propertyNames, Collection<T> dataset) throws Exception {
		// 声明一个工作薄
		HSSFWorkbook workbook = new HSSFWorkbook();
		// 生成一个表格
		HSSFSheet sheet = workbook.createSheet(title);
		// 设置表格默认列宽度为15个字节
		sheet.setDefaultColumnWidth(15);
		// 生成一个样式
		HSSFCellStyle style = workbook.createCellStyle();
		// 设置这些样式
		style.setFillForegroundColor(HSSFColor.SKY_BLUE.index);
		style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
		style.setBorderBottom(HSSFCellStyle.BORDER_THIN);
		style.setBorderLeft(HSSFCellStyle.BORDER_THIN);
		style.setBorderRight(HSSFCellStyle.BORDER_THIN);
		style.setBorderTop(HSSFCellStyle.BORDER_THIN);
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		
		// 生成一个字体
		HSSFFont font = workbook.createFont();
		font.setColor(HSSFColor.VIOLET.index);
		font.setFontHeightInPoints((short) 12);
		font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
		// 把字体应用到当前的样式
		style.setFont(font);
		// 生成并设置另一个样式
		HSSFCellStyle style2 = workbook.createCellStyle();
		style2.setFillForegroundColor(HSSFColor.LIGHT_YELLOW.index);
		style2.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
		style2.setBorderBottom(HSSFCellStyle.BORDER_THIN);
		style2.setBorderLeft(HSSFCellStyle.BORDER_THIN);
		style2.setBorderRight(HSSFCellStyle.BORDER_THIN);
		style2.setBorderTop(HSSFCellStyle.BORDER_THIN);
		style2.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		style2.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		// 生成另一个字体
		HSSFFont font2 = workbook.createFont();
		font2.setBoldweight(HSSFFont.BOLDWEIGHT_NORMAL);
		// 把字体应用到当前的样式
		style2.setFont(font2);
		
		//产生表格标题行
		HSSFRow row = sheet.createRow(0);
		for (int i = 0; i < headers.length; i++) {
			HSSFCell cell = row.createCell(i);
			cell.setCellStyle(style);
			HSSFRichTextString text = new HSSFRichTextString(headers[i]);
			cell.setCellValue(text);
		}
		
		//遍历集合数据，产生数据行
		Iterator<T> it = dataset.iterator();
		int index = 0;
		int pLen = propertyNames.length;
		while (it.hasNext()) {
			index++;
			row = sheet.createRow(index);
			T t = (T) it.next();
			for ( int i=0; i<pLen; i++ ) {
				HSSFCell cell = row.createCell(i);
				cell.setCellStyle(style2);
				String p = propertyNames[i];
				Object val = BeanUtils.getProperty(t, p);
				if ( val!=null ) {
					String textVal = val.toString();
					HSSFRichTextString richString = new HSSFRichTextString(textVal);
	                HSSFFont font3 = workbook.createFont();
	                font3.setColor(HSSFColor.BLUE.index);
	                richString.applyFont(font3);
	                cell.setCellValue(richString);
				}
			}
		}
		
		HttpServletResponse response =  ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
		response.reset();
		
		OutputStream out = response.getOutputStream(); 
		String fileName = new String(title.getBytes(), "ISO-8859-1");
        response.setHeader("Content-disposition", "attachment;filename="+ fileName +".xls"); 
        response.setContentType("application/msexcel;charset=UTF-8"); 
        workbook.write(out);
	}

	public static <T> void exportExcel(String title, List<ExcelField> fs, Collection<T> dataset) throws Exception {
		// 声明一个工作薄
		HSSFWorkbook workbook = new HSSFWorkbook();
		// 生成一个表格
		HSSFSheet sheet = workbook.createSheet(title);
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		// 设置表格默认列宽度为15个字节
		sheet.setDefaultColumnWidth(15);
		// 生成一个样式
		HSSFCellStyle style = workbook.createCellStyle();
		// 设置这些样式
//		style.setFillForegroundColor(HSSFColor.SKY_BLUE.index);
//		style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
//		style.setBorderBottom(HSSFCellStyle.BORDER_THIN);
//		style.setBorderLeft(HSSFCellStyle.BORDER_THIN);
//		style.setBorderRight(HSSFCellStyle.BORDER_THIN);
//		style.setBorderTop(HSSFCellStyle.BORDER_THIN);
//		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		
		// 生成一个字体
		HSSFFont font = workbook.createFont();
//		font.setColor(HSSFColor.VIOLET.index);
		font.setFontHeightInPoints((short) 12);
		font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
		// 把字体应用到当前的样式
		style.setFont(font);
		// 生成并设置另一个样式
		HSSFCellStyle style2 = workbook.createCellStyle();
//		style2.setFillForegroundColor(HSSFColor.LIGHT_YELLOW.index);
//		style2.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
//		style2.setBorderBottom(HSSFCellStyle.BORDER_THIN);
//		style2.setBorderLeft(HSSFCellStyle.BORDER_THIN);
//		style2.setBorderRight(HSSFCellStyle.BORDER_THIN);
//		style2.setBorderTop(HSSFCellStyle.BORDER_THIN);
		style2.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		style2.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		// 生成另一个字体
		HSSFFont font2 = workbook.createFont();
		font2.setBoldweight(HSSFFont.BOLDWEIGHT_NORMAL);
		// 把字体应用到当前的样式
		style2.setFont(font2);
		
		//产生表格标题行
		HSSFRow row = sheet.createRow(0);
		int size = fs.size();
		for (int i = 0; i < size; i++) {
			ExcelField field = fs.get(i);
			HSSFCell cell = row.createCell(i);
			cell.setCellType(HSSFCell.CELL_TYPE_STRING);
			cell.setCellStyle(style);
			HSSFRichTextString text = new HSSFRichTextString(field.getHeadName());
			cell.setCellValue(text);
		}
		
		//遍历集合数据，产生数据行
		Iterator<T> it = dataset.iterator();
		int index = 0;
		int pLen = size;
		while (it.hasNext()) {
			index++;
			row = sheet.createRow(index);
			T t = (T) it.next();
			for ( int i=0; i<pLen; i++ ) {
				ExcelField field = fs.get(i);
				HSSFCell cell = row.createCell(i);
				cell.setCellType(HSSFCell.CELL_TYPE_STRING);
				cell.setCellStyle(style2);
				String p = field.getFieldName();
				Object val = PropertyUtils.getProperty(t, p);
				if ( val!=null ) {
					String textVal = val.toString();
					String fmt = field.getFmt();
					Map<String,Object> mapping = field.getMap();
					if (StringUtils.isNotBlank(fmt) ) {
						textVal = DateUtil.formatDatetime((Date)val, fmt);
					} 
					if(val != null && val instanceof Date){
						textVal = sdf.format(val);
					}
					String mVal = (String) mapping.get(val.toString());
					if ( StringUtils.isNotBlank(mVal) ) {
						textVal =mVal;
					}
					HSSFRichTextString richString = new HSSFRichTextString(textVal);
	                HSSFFont font3 = workbook.createFont();
//	                font3.setColor(HSSFColor.BLUE.index);
	                richString.applyFont(font3);
	                cell.setCellValue(richString);
				}
			}
		}
		
		HttpServletResponse response =  ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
		response.reset();
		
		OutputStream out = response.getOutputStream();
		String fileName = new String(title.getBytes(), "ISO-8859-1");
        response.setHeader("Content-disposition", "attachment;filename="+ fileName +".xls"); 
        response.setContentType("application/msexcel;charset=UTF-8"); 
        workbook.write(out);
		
	}
	
	public static <T> void exportCsv(String title, List<ExcelField> fs, Collection<T> dataset) throws Exception {
		StringBuffer sb = new StringBuffer();
		int size = fs.size();
		for ( int i=0; i<size; i++ ) {
			ExcelField field = fs.get(i);
			sb.append(field.getHeadName());
			if ( i!=size-1 ) {
				sb.append(",");
			} else {
				sb.append("\n");
			}
		}
		
		//遍历集合数据，产生数据行
		Iterator<T> it = dataset.iterator();
		int index = 0;
		int pLen = size;
		while (it.hasNext()) {
			index++;
			T t = (T) it.next();
			for ( int i=0; i<pLen; i++ ) {
				ExcelField field = fs.get(i);
				String p = field.getFieldName();
				Object val = null;
				try {
					val = PropertyUtils.getProperty(t, p);
				} catch (Exception e) {
				}
				if ( val!=null ) {
					String textVal = val.toString();
					String fmt = field.getFmt();
					Map<String,Object> mapping = field.getMap();
					if ( StringUtils.isNotBlank(fmt) ) {
						textVal = DateUtil.formatDatetime((Date)val, fmt);
					} 
					String mVal = (String) mapping.get(val.toString());
					if ( StringUtils.isNotBlank(mVal) ) {
						textVal = mVal;
					}
					textVal = "\""+textVal+"\"";
					sb.append(textVal);
				}
				if ( i!=pLen-1 ) {
					sb.append(",");
				} else {
					sb.append("\n");
				}
			}
		}
		
		HttpServletResponse response =  ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
		response.reset();
		
		OutputStream out = response.getOutputStream();
		String fileName = new String(title.getBytes(), "ISO-8859-1");
        response.setHeader("Content-disposition", "attachment;filename="+ fileName +".csv"); 
        response.setContentType("application/csv;charset=gbk"); 
//        byte[] commonCsvHead = { (byte) 0xEF, (byte) 0xBB, (byte) 0xBF };
        byte[] content = sb.toString().getBytes("gbk");
//        byte[] all = ArrayUtils.addAll(commonCsvHead, content);
        //String content = new String(sb.toString().getBytes("GB2312"), "UTF-8");
        out.write(content);
	}
	
	public static <T> void exportCsv(String title, List<List<String>> datas) throws Exception {
		StringBuffer sb = new StringBuffer();
		for ( List<String> r : datas ) {
			for ( String c : r ) {
				sb.append(c).append(",");
			}
			sb.deleteCharAt(sb.length()-1);
			sb.append("\n");
		}
		
		HttpServletResponse response =  ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
		response.reset();
		
		OutputStream out = response.getOutputStream();
		String fileName = new String(title.getBytes(), "ISO-8859-1");
        response.setHeader("Content-disposition", "attachment;filename="+ fileName +".csv"); 
        response.setContentType("application/csv;charset=gbk"); 
//        byte[] commonCsvHead = { (byte) 0xEF, (byte) 0xBB, (byte) 0xBF };
        byte[] content = sb.toString().getBytes("gbk");
//        byte[] all = ArrayUtils.addAll(commonCsvHead, content);
        //String content = new String(sb.toString().getBytes("GB2312"), "UTF-8");
        out.write(content);
	}
	
	public static <T> List<T> readExcel(File csv, List<ExcelField> fs, Class<T> clazz) throws Exception {
		List<T> result = new ArrayList<T>();
		HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(csv));
		int sheetNum = workbook.getNumberOfSheets();
		for ( int i=0; i<sheetNum; i++ ) {
			HSSFSheet sheet = workbook.getSheetAt(i);
			int rNum = sheet.getPhysicalNumberOfRows();
			HSSFRow head = sheet.getRow(0);
			int cNum = head.getPhysicalNumberOfCells();
			String[] heads = new String[cNum];
			ExcelField[] mFields = new ExcelField[cNum];
			for ( int j=0; j<cNum; j++ ) {
				HSSFCell cell = head.getCell(j);
				heads[j] = cell.getStringCellValue();
				for ( ExcelField f : fs ) {
					if ( f.getHeadName().equals(heads[j]) ) {
						mFields[j] = f;
					}
				}
			}
			
			for ( int j=1; j<rNum; j++ ) {
				HSSFRow row = sheet.getRow(j);
				T t = clazz.newInstance();
				for ( int k=0; k<cNum; k++ ) {
					HSSFCell cell = row.getCell(k);
					Object cellVal = null;
					if ( cell!=null ) {
						cellVal = cell.getStringCellValue();
					}
					if ( cellVal!=null && StringUtils.isNotBlank(cellVal.toString()) ) {
						String fmt = mFields[k].getFmt();
						if ( StringUtils.isNotBlank(fmt) ) {
							//DATE类型
							cellVal = DateUtil.parseDate(cellVal.toString(), fmt);
						}
						Map<String,Object> map = mFields[k].getMap();
						for ( String key : map.keySet() ) {
							Object val = map.get(key);
							if ( StringUtils.equals(val.toString(), cellVal.toString()) ) {
								cellVal = key;
							}
						}
						BeanUtils.setProperty(t, mFields[k].getFieldName(), cellVal);
					}
				}
				result.add(t);
			}
		}
		return result;
	}
	
	public static <T> List<T> readCsv(File csv, List<ExcelField> fs, Class<T> clazz) throws Exception {
		List<T> result = new ArrayList<T>();
		List<String[]> datas = new ArrayList<String[]>();
		FileInputStream fis = new FileInputStream(csv);  
		//可检测多种类型，并剔除bom  
		BOMInputStream bomIn = new BOMInputStream(fis, false,ByteOrderMark.UTF_8, ByteOrderMark.UTF_16LE, ByteOrderMark.UTF_16BE);  
		String charset = "GBK";  
		//若检测到bom，则使用bom对应的编码  
		if(bomIn.hasBOM()){
			charset = bomIn.getBOMCharsetName();  
		}  
		BufferedReader br = new BufferedReader(new InputStreamReader(bomIn, charset));
		String line = null;
		while ( (line=br.readLine())!=null ) {
			line = line.trim();
			String[] lds = line.split(",");
			datas.add(lds);
		}
		String[] heads = datas.get(0);
		int rNum = datas.size();
		int cNum = heads.length;
		ExcelField[] mFields = new ExcelField[cNum];
		for ( int j=0; j<cNum; j++ ) {
			for ( ExcelField f : fs ) {
				if ( f.getHeadName().equals(heads[j]) ) {
					mFields[j] = f;
				}
			}
		}
		for ( int j=1; j<rNum; j++ ) {
			T t = clazz.newInstance();
			String[] ld = datas.get(j);
			int colNum = ld.length;
			for ( int k=0; k<colNum; k++ ) {
				Object val = ld[k];
				if ( mFields[k]==null ) {
					continue;
				}
				if ( val!=null && StringUtils.isNotBlank(val.toString()) ) {
					String fmt = mFields[k].getFmt();
					if ( StringUtils.isNotBlank(fmt) ) {
						//DATE类型
						val = DateUtil.parseDate(val.toString(), fmt);
					}
					Map<String,Object> map = mFields[k].getMap();
					if ( !map.isEmpty() ) {
						boolean found = false;
						for ( String key : map.keySet() ) {
							Object value = map.get(key);
							if ( StringUtils.equals(value.toString(), val.toString()) ) {
								found = true;
								val = key;
							}
						}
						if ( found==false ) {
							val = null;
						}
					}
					BeanUtils.setProperty(t, mFields[k].getFieldName(), val);
				}
			}
			result.add(t);
		}
		
		return result;
	}
	
	/**
	 * 读取CSV
	 * @param <T>
	 * @param csv
	 * @param fs
	 * @param clazz
	 * @return
	 * @throws Exception
	 */
	public static List<String[]> readCsv(File csv) throws Exception {
		List<String[]> result = new ArrayList<String[]>();
		FileInputStream fis = new FileInputStream(csv);  
		//可检测多种类型，并剔除bom  
		BOMInputStream bomIn = new BOMInputStream(fis, false,ByteOrderMark.UTF_8, ByteOrderMark.UTF_16LE, ByteOrderMark.UTF_16BE);  
		String charset = "GBK";  
		//若检测到bom，则使用bom对应的编码  
		if(bomIn.hasBOM()){
			charset = bomIn.getBOMCharsetName();  
		}  
		BufferedReader br = new BufferedReader(new InputStreamReader(bomIn, charset));
		String line = null;
		while ( (line=br.readLine())!=null ) {
			line = line.trim();
			String[] lds = line.split(",");
			result.add(lds);
		}
		return result;
	}
	
	/**
	 * 动态创建模板
	 * @param fileName
	 * @param head
	 * @throws Exception
	 */
	public static void buildTemplate(String fileName, String[] head) throws Exception {
		// 声明一个工作薄
		HSSFWorkbook workbook = new HSSFWorkbook();
		// 生成一个表格
		HSSFSheet sheet = workbook.createSheet("薪资数据");
		// 设置表格默认列宽度为15个字节
		sheet.setDefaultColumnWidth(15);
		// 生成一个样式
		HSSFCellStyle style = workbook.createCellStyle();
		// 设置这些样式
		style.setFillForegroundColor(HSSFColor.SKY_BLUE.index);
		style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
		style.setBorderBottom(HSSFCellStyle.BORDER_THIN);
		style.setBorderLeft(HSSFCellStyle.BORDER_THIN);
		style.setBorderRight(HSSFCellStyle.BORDER_THIN);
		style.setBorderTop(HSSFCellStyle.BORDER_THIN);
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		
		// 生成一个字体
		HSSFFont font = workbook.createFont();
		font.setColor(HSSFColor.VIOLET.index);
		font.setFontHeightInPoints((short) 12);
		font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
		// 把字体应用到当前的样式
		style.setFont(font);
		// 生成并设置另一个样式
		HSSFCellStyle style2 = workbook.createCellStyle();
		style2.setFillForegroundColor(HSSFColor.LIGHT_YELLOW.index);
		style2.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
		style2.setBorderBottom(HSSFCellStyle.BORDER_THIN);
		style2.setBorderLeft(HSSFCellStyle.BORDER_THIN);
		style2.setBorderRight(HSSFCellStyle.BORDER_THIN);
		style2.setBorderTop(HSSFCellStyle.BORDER_THIN);
		style2.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		style2.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		// 生成另一个字体
		HSSFFont font2 = workbook.createFont();
		font2.setBoldweight(HSSFFont.BOLDWEIGHT_NORMAL);
		// 把字体应用到当前的样式
		style2.setFont(font2);
		
		//产生表格标题行
		HSSFRow row = sheet.createRow(0);
		int size = head.length;
		for (int i = 0; i < size; i++) {
			HSSFCell cell = row.createCell(i);
			cell.setCellStyle(style);
			cell.setCellType(HSSFCell.CELL_TYPE_STRING);
			HSSFRichTextString text = new HSSFRichTextString(head[i]);
			cell.setCellValue(text);
		}
		
		File f = new File(fileName);
		FileOutputStream fos = new FileOutputStream(f);
		workbook.write(fos);
	}
}
