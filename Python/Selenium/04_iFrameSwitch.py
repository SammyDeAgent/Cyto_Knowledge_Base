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

  # Directory location
	page = "D:\Work File\Off shore Projects\Python\Selenium\materials\iFrame.html"
	driver.get(page)

	# Get list of iframe present via tag
	seq = driver.find_elements(By.TAG_NAME, "iframe")
	print(f"Number of frames present: {len(seq)}")

	# Switching between iframes
	for i in range(len(seq)):
		driver.switch_to.default_content()
		iframe = driver.find_elements(By.TAG_NAME, "iframe")[i]
		driver.switch_to.frame(iframe)
		driver.implicitly_wait(30)

		# Highlight content of selected iframe
		driver.find_element(By.TAG_NAME, 'a').send_keys(Keys.CONTROL, 'a')

		# Undo selection
		driver.find_element(By.TAG_NAME, 'p').click()
		driver.implicitly_wait(30)
	driver.switch_to.default_content()

	# Switching via ID
	iframe = driver.find_element(By.ID, 'FR1')
	driver.switch_to.frame(iframe)
	time.sleep(2)

	driver.find_element(By.ID, 'searchInput').send_keys("Selected")
	driver.switch_to.default_content()

	# Switching via Name
	iframe = driver.find_element(By.NAME, 'frame2')
	driver.switch_to.frame(iframe)
	time.sleep(2)

	driver.find_element(By.CLASS_NAME, 'navbar-toggler-icon').click()
	driver.implicitly_wait(30)
	s = driver.find_element(By.XPATH, '/html/body/header/nav/div/div/div/button')
	time.sleep(2)
	s.send_keys("Automation")

if __name__ == "__main__":
  main()