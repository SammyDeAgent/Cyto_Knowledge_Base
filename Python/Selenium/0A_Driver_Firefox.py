# Importing driver
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Create a new Firefox (or other session)
driver = webdriver.Firefox()
driver.implicitly_wait(30)
driver.maximize_window()
time.sleep(5)

# Navigate to app home page
driver.get("http://www.google.com")

# Get search textbox
search_field = driver.find_element_by_name("q")
search_field.clear()

# Enter search keyword and submit
search_field.send_keys("Huawei")
search_field.submit()
time.sleep(20)

# Get list of elements displayed after search
lists = driver.find_elements_by_xpath("//*[@id='rso']//a")

# Get number of elements found
print(f"Found {str(len(lists))} searches: ")

# Iterate through each elements and print out name of search
i = 0
for item in lists:
    print(f"{item.get_attribute('innerHTML')}")
    i+=1
    if(i>10):
        break

# Close the browser window
driver.implicitly_wait(30)
driver.quit()