package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ProductsSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Then("^User click on Add to cart button on any one \"([^\"]*)\"$")
	public void user_clicks_addtoCart(String product) throws InterruptedException {
		
		String xpath = "add-to-cart-"+ product.replace(" ", "-").toLowerCase();
    	System.out.println(xpath);
    	
    	WebElement prCartButton = driver.findElement(By.id(xpath));
    	prCartButton.click();
    	
    	Thread.sleep(1000);
	}

	@Then("^User verifies that \"([^\"]*)\" products are added to cart$")
	public void user_verifies_cart(String expectedProductsinCart) {
		WebElement cartNo = driver.findElement(By.xpath("//span[@class=\"shopping_cart_badge\"]"));
		
		String actualProductinCart = cartNo.getText();
		Assert.assertEquals(expectedProductsinCart, actualProductinCart);
		
		System.out.println("No of Products in Cart verified.");
	}
	
	@When("^User enters valid credentials$")
	public void user_enters_creds(DataTable table) throws InterruptedException {
		
		String username = table.cell(1, 1);
    	String password = table.cell(2, 1);
    	
    	WebElement userName = driver.findElement(By.id("user-name"));
		userName.sendKeys(username);
		
		WebElement pwd = driver.findElement(By.id("password"));
		pwd.sendKeys(password);
		
		Thread.sleep(1000);
	}
	
	@And("^User add product to cart on Products page$")
	public void user_add_product(DataTable table) throws InterruptedException {
		String product1 = table.cell(1, 1);
    	String product2 = table.cell(2, 1);
    	
    	String xpath1 = "add-to-cart-"+ product1.replace(" ", "-").toLowerCase();
    	//System.out.println(xpath1);
    	WebElement pr1CartButton = driver.findElement(By.id(xpath1));
    	pr1CartButton.click();
    	Thread.sleep(1000);
    	
    	String xpath2 = "add-to-cart-"+ product2.replace(" ", "-").toLowerCase();
    	//System.out.println(xpath2);
    	WebElement pr2CartButton = driver.findElement(By.id(xpath2));
    	pr2CartButton.click();
    	Thread.sleep(1000);
		
	}
	
}
