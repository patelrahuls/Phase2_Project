package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class BaseClass {
	
	public static WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "chromedriver");
		driver = new ChromeDriver();	
	}
	
	@After("@MultipleProductAdd, @SingleProductAdd, @PositiveLogin")
	public void logout() throws InterruptedException {
		WebElement hamburgerMenu = driver.findElement(By.id("react-burger-menu-btn"));
		hamburgerMenu.click();
		Thread.sleep(1000);
		
		WebElement logoutLink = driver.findElement(By.xpath("//a[text()='Logout']"));
		logoutLink.click();
		Thread.sleep(1000);
	}
	
	@After
	public void tearDown() {	
		driver.quit();
	}

}
