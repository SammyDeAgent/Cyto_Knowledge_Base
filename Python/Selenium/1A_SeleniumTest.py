from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Firefox()
driver.implicitly_wait(100)
driver.get("http://genshin.gg")
driver.maximize_window()

lists = driver.find_elements(By.CLASS_NAME, "character-portrait")
print(f"Found {len(lists)} results")

for i in lists:
  name = i.find_element(By.CLASS_NAME, "character-name").get_attribute("innerHTML")
  print(name)
  
driver.quit()