def main():
	# Initial Config
	from selenium import webdriver
	from selenium.webdriver.common.keys import Keys
	from selenium.webdriver.support.ui import WebDriverWait
	from selenium.webdriver.common.by import By
	from selenium.webdriver.support import expected_conditions as EC
	import time

  # Because some element requires time to load or process
  # Wait is crucial for automations

  # Implicit Waiting
  # IW wait directs the driver to poll the DOM for a amount of time
	driver = webdriver.Firefox()

	# This waits for 100 seconds before timing out
	driver.implicitly_wait(100)

	driver.get("http://google.com")
	driver.maximize_window()

	print('Implicit Waiting...')
	input = driver.find_element(By.NAME, 'q')
	input.send_keys("Zoneless Zen Zero")
	input.submit()
	time.sleep(5)

	# Explicit Waiting
	# EW can be used to define condition and then tell the driver to proceed with execution when condition is fulfilled
	page = "D:\Work File\Off shore Projects\Python\Selenium\materials\waitAlert.html"
	driver.get(page)

	# Button Press
	button = driver.find_element(By.NAME, "alert").click()

	from selenium.webdriver.support import expected_conditions as cond
	from selenium.common.exceptions import NoAlertPresentException
	from selenium.common.exceptions import TimeoutException

	try:
		# Wait as long as required, or max of 10sec for alert to appear
		WebDriverWait(driver, 10).until(cond.alert_is_present())

		# Change control
		panel = driver.switch_to.alert

		# Retrieve message
		msg = panel.text
		print(f"Alert message: {msg}")
		panel.accept()
	
	except (NoAlertPresentException, TimeoutException) as py_ex:
		print("Alert not Present")
		print(py_ex)
		print(py_ex.args)

	finally:
		driver.quit()

	# Other conditions may include:
	# https://www.techbeamers.com/selenium-webdriver-waits-python/


if __name__ == "__main__":
  main()