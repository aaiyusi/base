package com.samton.web.common.util;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import java.awt.image.BufferedImage;
import java.io.FileOutputStream;

import org.jbarcode.JBarcode;
import org.jbarcode.encode.InvalidAtributeException;
import org.jbarcode.paint.BaseLineTextPainter;
import org.jbarcode.paint.EAN13TextPainter;
import org.jbarcode.paint.WidthCodedPainter;
import org.jbarcode.util.ImageUtil;

/**
 * @Description:TODO(条形码生成工具类)
 * @author: lt
 * @date: 2016年3月22日 Copyright (c) 2015, Samton. All rights reserved
 */
public class OneBarcodeUtil {

	public static void main(String[] paramArrayOfString) {
//		try {
//			JBarcode localJBarcode = new JBarcode(org.jbarcode.encode.Code128Encoder.getInstance(),
//					WidthCodedPainter.getInstance(),
//					EAN13TextPainter.getInstance());
//			// 生成. 欧洲商品条码(=European Article Number)
//			// 这里我们用作图书条码
//			String str = "20872-SP05-01";
//			BufferedImage localBufferedImage = localJBarcode.createBarcode(str); 
////			localJBarcode.setShowText(false);
//			saveToJPEG(localBufferedImage, "Code128.jpeg");
////			saveToPNG(localBufferedImage, "Code128.png");
//		} catch (Exception localException) {
//			localException.printStackTrace();
//		}
		saveToJPEG(getBarcode("20872-SP05-01", false), "Code128.jpeg");
	}

	/**
	 * 生成jpg格式条形码
	 * @param paramBufferedImage
	 * @param paramString
	 */
	static void saveToJPEG(BufferedImage paramBufferedImage, String paramString) {
		saveToFile(paramBufferedImage, paramString, "jpeg");
	}

	/**
	 * 生成png格式条形码
	 * @param paramBufferedImage
	 * @param paramString
	 */
	static void saveToPNG(BufferedImage paramBufferedImage, String paramString) {
		saveToFile(paramBufferedImage, paramString, "png");
	}

	static void saveToGIF(BufferedImage paramBufferedImage, String paramString) {
		saveToFile(paramBufferedImage, paramString, "gif");
	}

	/**
	 * 返回文件流
	 * @param code	条形码
	 * @param showText 是否显示文本
	 */
	public static BufferedImage getBarcode(String code,boolean showText) {
		JBarcode localJBarcode = new JBarcode(org.jbarcode.encode.Code128Encoder.getInstance(),
				WidthCodedPainter.getInstance(),
				EAN13TextPainter.getInstance());
		try {
			localJBarcode.setBarHeight(14);
//			localJBarcode.setWideRatio(200);
			localJBarcode.setXDimension(0.9);
			//是否显示文本
			localJBarcode.setShowText(showText);
//			localJBarcode.setPainter(WideRatioCodedPainter.getInstance());  
			//设置文本显示位置
		    localJBarcode.setTextPainter(BaseLineTextPainter.getInstance());  
//		    localJBarcode.setShowCheckDigit(true);  
			BufferedImage localBufferedImage = localJBarcode.createBarcode(code);
			return localBufferedImage;
		} catch (InvalidAtributeException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 保存文件到指定目录
	 * @param paramBufferedImage
	 * @param paramString1
	 * @param paramString2
	 */
	static void saveToFile(BufferedImage paramBufferedImage,
			String paramString1, String paramString2) {
		try {
			FileOutputStream localFileOutputStream = new FileOutputStream(
					"d:/" + paramString1);
			ImageUtil.encodeAndWrite(paramBufferedImage, paramString2,
					localFileOutputStream, 96, 96);
			localFileOutputStream.close();
		} catch (Exception localException) {
			localException.printStackTrace();
		}
	}

}
