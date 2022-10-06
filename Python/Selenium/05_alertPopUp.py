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

	page = "D:\Work File\Off shore Projects\Python\Selenium\materials\\alert.html"
	driver.get(page)

	# Clicking on alert
	button = driver.find_element(By.NAME, 'alert')
	button.click()

	# Switching to alert panel / window
	panel = driver.switch_to.alert
	
	# Retrieve message
	msg = panel.text
	print(f"Alert message: {msg}")
	time.sleep(2)

	# Accepting the alert
	panel.accept()
	print('Closed the alert panel')
	time.sleep(2)

	# Confirmation Type alert / pop-up
	page = "D:\Work File\Off shore Projects\Python\Selenium\materials\confirm.html"
	driver.get(page)
	button = driver.find_element(By.NAME, 'alert').click()
	panel = driver.switch_to.alert

	msg = panel.text
	print(f"Alert message: {msg}")
	time.sleep(2)

	# Confirmation Accept
	panel.accept()
	text = driver.find_element(By.ID, 'msg')
	print(text.text)
	time.sleep(2)

	# Reset the page
	driver.refresh()
	button = driver.find_element(By.NAME, 'alert').click()
	panel = driver.switch_to.alert

	# Confirmation Dismiss
	panel.dismiss()
	text = driver.find_element(By.ID, 'msg')
	print(text.text)
	time.sleep(2)

	# Prompt Type alert / pop-up
	page = "D:\Work File\Off shore Projects\Python\Selenium\materials\prompt.html"
	driver.get(page)
	button = driver.find_element(By.NAME, "employeeLogin").click()
	panel = driver.switch_to.alert
	time.sleep(2)

	# Entering input
	panel.send_keys('Mikhael Kalashnikov')
	time.sleep(2)
	
	panel.accept()
	msg = panel.text
	print(f"Alert message: {msg}")
	time.sleep(2)
	
	panel.accept()

	# Get text when OK is clicked
	txt = driver.find_element(By.ID, "msg")
	print(txt.text)

	driver.close()


if __name__ == "__main__":
  main()