def main():
	# Initial Config
	from selenium import webdriver
	from selenium.webdriver.common.keys import Keys
	from selenium.webdriver.support.ui import WebDriverWait
	from selenium.webdriver.common.by import By
	from selenium.webdriver.support import expected_conditions as EC
	import time

	driver = webdriver.Firefox()
	driver.implicitly_wait(30)
	driver.maximize_window()
	#driver.minimize_window()
	time.sleep(5)

	# Navigation via GET for websites
	driver.get("https://www.fandom.com/topics/games")

	# Interactions can be done via element selects in 01_ElementSelect.py
	search = driver.find_element(By.XPATH,"/html/body/div[2]/div[1]/nav/a[2]")
	search.click()

	search = driver.find_element(By.XPATH,"/html/body/div[2]/div[3]/div/form[1]/div[2]/label/input")
	search.click()

	# Interaction inputs are done via sending keys and multiline can be manipulated via key types
	search.send_keys("Honkai Impact")
	search.send_keys("3rd", Keys.ARROW_DOWN)
	
	# Clear function to clear the value and submit to engage
	# search.clear()s
	search.submit()

	# The tip for general navigation is that you need to search for the 
	# element and then iterate again and again in the case of multiple options

	# For selecting specified value, use SELECT API
	# element = Select(driver.find_element_by_id('id_of_element'))
	# element.select_by_index(2)
	# OR
	# element.select_by_value('value')
	# OR
	# element.select_by_visible_text('element-text')

	# deselect value is also available, check the SELECT API Docs

if __name__ == "__main__":
  main()