package com.stepDefinition;

import java.util.List;
import java.io.File;
import java.util.ArrayList;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	public static void generateJVMReport(String jsonLoc) {
		Configuration con=new Configuration(new File(System.getProperty("user.dir")+"\\HooksClass\\target"), "Dillards Project");
		con.addClassifications("Browser", "Chrome");
		con.addClassifications("Browser version", "V49.09");
		con.addClassifications("OS", "Windows10");
		con.addClassifications("Sprint", "8");
		List<String> firstJsonFile=new ArrayList<String>();
		firstJsonFile.add(jsonLoc);
		ReportBuilder builder=new ReportBuilder(firstJsonFile, con);
		builder.generateReports();

	}

}
