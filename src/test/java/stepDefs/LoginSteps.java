package stepDefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class LoginSteps{
	
	WebDriver driver = BaseClass.driver;

	@Given("^User has opened the SwagLabs application$")
	public void user_has_opened_the_swaglabs_application() {
		driver.get("https://www.saucedemo.com");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
	}

	@When("^User enters \"([^\"]*)\" & \"([^\"]*)\"$")
	public void user_enters_correct_username_something(String username, String password) throws InterruptedException {
		
		WebElement userName = driver.findElement(By.id("user-name"));
		userName.sendKeys(username);
		
		WebElement pwd = driver.findElement(By.id("password"));
		pwd.sendKeys(password);
		
		Thread.sleep(1000);
	}
	
	@And("^User clicks on Login button$")
	public void user_clicks_on_login_button() throws InterruptedException {	
		WebElement submitForm = driver.findElement(By.id("login-button"));
		submitForm.click();
		Thread.sleep(1000);
	}

	@Then("^User should be landed on the Products Page$")
	public void user_should_be_landed_on_the_home_page() {	
		WebElement HomePageItemAfterLogin = driver.findElement(By.xpath("//span[@class='title']"));		////span[contains(text(),'Products')]	
		String actualHeading = HomePageItemAfterLogin.getText();
		String expHeading = "PRODUCTS";
		Assert.assertEquals(expHeading, actualHeading);
	}

	@And("^User should be able to see error \"([^\"]*)\"$")
	public void user_should_be_able_to_see_the_error_message(String expError) throws InterruptedException {
		WebElement errorElement = driver.findElement(By.xpath("//h3[@data-test='error']"));		////span[contains(text(),'Products')]	
		String actualError = errorElement.getText();
		Assert.assertEquals(expError, actualError);

		System.out.println("Actual Error Message on Screen is:" + actualError);

		if (actualError.equals(expError)) {
			System.out.println("Test case Passed");
		} else {
			System.out.println("Test case Failed");
		}
		Thread.sleep(1000);

	}

}
