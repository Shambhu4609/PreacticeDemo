package com.utility;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class BaseClass1 {
		public static WebDriver driver;
	public static void chromeBrowserLaunch() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\SHAMBHU\\eclipse-workspace\\CucumberFramework\\CucumberAdactin\\driver\\chromedriver1.exe");
	 driver=new ChromeDriver();
	}
	public static void urlLoad(String url1) {
		driver.get(url1);
		driver.manage().window().maximize();
	}
		public static void txtType(WebElement e,String textBox) {
		e.sendKeys(textBox);
	}
		public static boolean verifyUrl(String url) {
			return driver.getCurrentUrl().contains(url);
		}
		public static void btnClick(WebElement e) {
		e.click();
	}
		public static byte[] takeScreenshot() {
			return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		}
		public static void dropDownBoxIndex(WebElement e,int index) {
			Select s=new Select(e);
			s.selectByIndex(index);
		}
		public static void dropDownBoxValue(WebElement e,String value) {
			Select s=new Select(e);
			s.selectByValue(value);
		}
		public static void dropDownBoxVisibleText(WebElement e,String val) {
			Select s=new Select(e);
			s.selectByVisibleText(val);
		}
		public static void radioBtnClick(WebElement e) {
			e.click();
		}
		public static void getText(WebElement e) {
        System.out.println(e.getText());
		}
		public static void getTextAttribute(WebElement e) {
			String val = e.getAttribute("value");
			System.out.println(val);

		}
		public static void txtClear(WebElement e) {
			e.clear();

		}

	}

	

