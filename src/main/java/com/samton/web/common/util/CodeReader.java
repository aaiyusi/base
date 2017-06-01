package com.samton.web.common.util;

import java.awt.Frame;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.MediaTracker;
import java.awt.image.BufferedImage;

import com.google.zxing.BinaryBitmap;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.Reader;
import com.google.zxing.ReaderException;
import com.google.zxing.Result;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;

/**
 *
 * @Description:TODO(条形码识别工具)
 * @author:     lt
 * @date:       2016年3月22日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class CodeReader {

	/**
	 * @param args
	 * @throws ReaderException
	 * @throws InterruptedException
	 */
	public static void main(String[] args) {
		try {
			System.out.println(getCodeString("D:/图片识别/getBarcode.png"));
		} catch (ReaderException e) {
			e.printStackTrace();
			System.out.println("条形码认识失败-------------------------------");
		} catch (InterruptedException e) {
			e.printStackTrace();
			System.out.println("条形码认识失败-------------------------------");
		}
	}

	/**
	 * 返回条形码中的字符
	 * @param path
	 * @return
	 * @throws ReaderException
	 * @throws InterruptedException
	 */
	public static String getCodeString(String path) throws ReaderException,
			InterruptedException{
		Reader reader = new MultiFormatReader();
		String imgPath = path;
		Image image = java.awt.Toolkit.getDefaultToolkit().getImage(imgPath);
		BufferedImage myImage = CodeReader.imageToBufImage(image);
		//用#打印图片内容
		System.out.println(new  BufferedImageLuminanceSource(myImage));
		BinaryBitmap source = new BinaryBitmap(new HybridBinarizer(new  BufferedImageLuminanceSource(myImage))); 
		Result result = reader.decode(source);
		if(result != null){
			return result.getText();
		}
		return null; 
	}
	/**
	 * 加载图片
	 * @param image
	 * @return
	 * @throws InterruptedException
	 */
	public static BufferedImage imageToBufImage(Image image)
			throws InterruptedException {
		MediaTracker mt = new MediaTracker(new Frame());
		mt.addImage(image, 0);
		mt.waitForID(0);
		BufferedImage bufImage = new BufferedImage(image.getWidth(null),
				image.getHeight(null), BufferedImage.TYPE_INT_BGR);
		Graphics2D g2d = bufImage.createGraphics();
		g2d.drawImage(image, 0, 0, null);
		return bufImage;
	}

}
