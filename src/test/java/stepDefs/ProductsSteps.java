package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class ProductsSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Given("^User is on the Products Page$")
	public void user_should_be_landed_on_the_home_page() {	
		
		WebElement HomePageItemAfterLogin = driver.findElement(By.xpath("//span[@class='title']"));		////span[contains(text(),'Products')]	
		String actualHeading = HomePageItemAfterLogin.getText();
		String expHeading = "PRODUCTS";
		Assert.assertEquals(expHeading, actualHeading);
	}
	
	@Then("^User click on Add to cart button on any one \"([^\"]*)\"$")
	public void user_clicks_addtoCart(String product) throws InterruptedException {
		
		WebElement Cart1Button = driver.findElement(By.xpath("//*[text()='"+ product +"']//following::button[1]"));
    	Cart1Button.click();
    	
    	Thread.sleep(1000);
	}

	@Then("^User verifies that \"([^\"]*)\" products are added to cart$")
	public void user_verifies_cart(String expectedProductsinCart) {
		WebElement cartNo = driver.findElement(By.xpath("//span[@class=\"shopping_cart_badge\"]"));
		
		String actualProductinCart = cartNo.getText();
		Assert.assertEquals(expectedProductsinCart, actualProductinCart);
		
		System.out.println("No of Products in Cart verified.");
	}

	@And("^User add product to cart on Products page$")
	public void user_add_product(DataTable table) throws InterruptedException {
		
		int totalNumbers = table.height();
		
		for(int i=0;i<totalNumbers;i++) {
			System.out.println(table.cell(i, 0));
	    	WebElement CartButton = driver.findElement(By.xpath("//*[text()='"+ table.cell(i, 0) +"']//following::button[1]"));
	    	CartButton.click();
		}
    	Thread.sleep(1000);
	}
	
}
