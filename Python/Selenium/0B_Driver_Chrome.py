# Get the correct version

# Importing Driver
import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Get Chrome path
# dir = os.path.dirname(__file__)
ie_driver_path = "C:\Windows\chromedriver.exe"

# Create a new Chrome session
driver = webdriver.Chrome(ie_driver_path)
driver.implicitly_wait(30)
driver.maximize_window()
time.sleep(5)

# Navigate to home page
driver.get("http://www.google.com")

# Get the search box
search_field = driver.find_element_by_name("q")

# Keyword
search_field.send_keys("Selenium WebDriver")
search_field.submit()

# Get list
lists = driver.find_element_by_class_name("r")

# Get number of elements
print(f"Found {str(len(lists))} searches: ")

# Iterate through each element
i = 0
for item in lists:
    print(item.get_attribute("innerHTML"))
    i+=1
    if(i > 10):
        break
driver.quit()