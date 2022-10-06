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

	# Navigation via GET for websites
	driver.get("https://youtube.com")

  # Getting the windows
	window_before = driver.window_handles[0]
	window_before_title = driver.title
	print(window_before_title)

	# Opening new window
	driver.execute_script("window.open('https://www.fandom.com/topics/games','new window')")

	# Getting the new window
	window_after = driver.window_handles[1]

	# Switching on to new child window
	driver.switch_to.window(window_after)
	time.sleep(5)
	window_after_title = driver.title
	print(window_after_title)

	# Comparing and verifying that main window and child window title dont match
	if window_before_title != window_after_title:
		print("Context switched as title doesn't match.")
	else:
		print("Control didn't switch to new window.")

	# Switch back to original window
	driver.switch_to.window(window_before)

	# Verify that the title now match
	if window_before_title == driver.title:
		print('Context returned to parent window. Matching title.')
	
	print(driver.title)


if __name__ == "__main__":
  main()