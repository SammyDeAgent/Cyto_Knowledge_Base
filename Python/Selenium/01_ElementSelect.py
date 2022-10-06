from pydoc import classname
from unicodedata import name
import re

from pyparsing import empty

def main():
	# Initial Config
	from selenium import webdriver
	from selenium.webdriver.common.keys import Keys
	import time

	driver = webdriver.Firefox()
	driver.implicitly_wait(30)
	driver.maximize_window()
	#driver.minimize_window()
	time.sleep(5)

	driver.get("http://www.google.com")

	# Locate via name
	# Finding the element by matching to the name in the HTML attribute
	search = driver.find_element_by_name("q")
	search.send_keys("Genshin Impact Wiki")
	search.submit()
	#time.sleep(5)

  # Locate via ID
  # ID is defined as the id attribute of a html element
	#search = driver.find_elements_by_id("input")
	#search.send_keys("Team Fortress 2")
	#search.submit()
	#time.sleep(20)

	# Locate via link text
	# It search for hyper links for the same name
	hypertext = driver.find_element_by_link_text("Events")
	hypertext.click()
	#time.sleep(5)

	# Locate via partial link
	# Search for hyperlink but partial of its name
	parlink = driver.find_element_by_partial_link_text("Archon")
	parlink.click()
	#time.sleep(5)

	# Locate via Xpath
	# Think of it as directory path but for HTML
	xpathing = driver.find_element_by_xpath('//*[@id="mw-content-text"]/div[1]/blockquote[2]/p')
	print('\n',xpathing.get_attribute('innerHTML'),'\n')

	# Locate via CSS Locator
	# Find any div that is tagged by a css class or smth
	css_finding = driver.find_element_by_css_selector('table.wikitable')

	# Locate via tag name
	# Tag name of the html tags
	names = css_finding.find_elements_by_tag_name('a')

	temp = ''
	list = []
	for name in names:
		str = name.get_attribute('innerHTML')
		re1 = re.findall(r"\"[^\"]+\"", str)
		# Skips empty results
		if(len(re1) == 0):
			continue
		# Avoid Repeating names
		if(temp == re1[0]):
			continue
		temp = re1[0]
		list.append(re1[0])
	print(*list, sep=",")

	# Locate via Classname
	# Class name identifier
	className = driver.find_element_by_class_name("pull-quote__text")
	print(className.get_attribute('innerHTML'))

	# Termination
	driver.close()
	

if __name__ == "__main__":
	main()
